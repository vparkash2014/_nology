// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import { getCatFacts, cleanCatFacts } from './services/apiCall.js';
import { useState, useEffect } from 'react';

function App() {
 const [catFacts, setCatFacts] = useState([]);

  const catFactPrint = async () => {
    const listOfFacts = await getCatFacts();
    const facts = cleanCatFacts(listOfFacts);
    console.log('the facts are');
    console.log(facts)
    setCatFacts(facts);
  };

  useEffect(() => {
    catFactPrint();
  }, []);


  return (
    <>
      {catFacts}
    </>
  );
}

export default App;
