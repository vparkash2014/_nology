// import logo from './logo.svg';
import './App.css';
import { firestore } from './firebase.js';
import { useEffect, useState } from 'react';

const fetchColleagues = async (setter) => {
  const colleagues = await firestore.collection('collegues').get();

  const cleaned = colleagues.docs.map(doc => { 
    return {
      id: doc.id, 
      ...doc.data()
    };
  });

  setter(cleaned);

}

const saveColleagues = async (colleague) => {
  return await firestore.collection('collegues').add(colleague);
  // const docref = await firestore.collection('collegues').add(colleague);
  // return findCollague(docref.id)
};

const deleteColleagues = async (id) => {
  await firestore.collection('collegues').doc('id').delete();
  // .collection -> CollectionReference
  // .doc -> documentReference
  // .delete -> promise with no return value

  // to update the dom 
  // setColleagues(colleagues.filter(colleague => colleague.id !== id))
}

const updateColleague = async (id, updateObject) => {
  return await firestore.collection('collegues').doc('id').update(updateObject);
}

const findCollague = async (id) => {
  const colleague = await firestore.collection('colleagues').doc(id).get();
  return {id: colleague.id, ...colleague.data() };
}

const rewriteColleague = async (id, newData) => {
  await firestore.collection('colleagues').doc(id).set(newData);
}

const deleteManyCollegues = async (ids) => {
  await Promise.all(ids.map(id => deleteColleagues(id)))
}

const App = () => {
  const [colleagues, setColleagues] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    fetchColleagues(setColleagues);
  }, []);

  const handleSave = async (event) => {
    const colleague = { firstName, lastName, age} ;
    await saveColleagues(colleague);
    
    fetchColleagues(setColleagues);
  }

  const handleDelete = async (id) => {
    await deleteColleagues(id);

    fetchColleagues(setColleagues);

    console.log('deleting');
  }

  const handleUpdate = async (id, age) => {
    const updateObject = { age: age + 1 };
    await updateColleague(id, updateObject);
    fetchColleagues(setColleagues);
  }

  return (
    <>
      {colleagues.map( (colleague, index) => {
        return ( 
          <div key={index}> 
            <p key={colleague.id}>{colleague.firstName}  {colleague.lastName} <button onClick={() => handleDelete(colleague.id)}>X</button> 
            <button onClick={() => handleUpdate(colleague.id, colleague.age)}> Increment Age </button>
            </p>
          </div>
        );
      })}

      <input types="text" onChange={(event) => setFirstName(event.target.value)} />
      <input types="text" onChange={(event) => setLastName(event.target.value)} />
      <input types="text" onChange={(event) => setAge(event.target.value)} />

      <button onClick={handleSave}>Save</button>
    </>
    
  );
}

export default App;
