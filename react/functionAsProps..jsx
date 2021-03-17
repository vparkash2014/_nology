import { useEffect, useState, useRef} from 'react';

const names = [
    "Calum",
    "ethan",
    "madd",
    "Vaishali",
    "remi"
];

const Search = ({ setSearch }) => {
    const [searchString, setSearchString] = useState('');

    const reset = () => {
        setSearch('');
        setSearchString('');
    }

    return (
        <> 
            <input type="text" onChange={(event) => setSearchString(event.target.value)}/>
            <button onClick={() => setSearch(searchString)}>Search</button>
            <button onClick={reset}>Clear</button>
        </>
    )
}

const List = ({ list }) => {
    return (
        <> {list.map(item => <p key={item}>{item}</p>)} </>
    )
}

const App = () => {
    const [students, setStudents] = useState(names);
    const [displayedStudents, setDisplayStudents] = useState(students); // list of students that passed in the List Component and it filtered out by the search that has been passed it
    const [studentSearch, setStudentSearch] = useState(''); // the search

    useEffect(() => {
        setDisplayStudents(student.filter(student => student.includes(studentSearch)));
    }, [studentSearch])

    return (
        <>
            <Search setSearch={setStudentSearch}/> 
            <List list={displayedStudents} />
        </>
    )
}

export default App;
// What is this code doing:
// 1. When inital rendered, List will display all the students in the class
// 2. when the user inputs text in the search Bar- the search bar is takes the input state function 

// Why do you want to pass a function down to a child component?
// allows use to break the code into different components so it re-usable 

// why do we wants to pass set states into components?
//by lending access to state to child components, no that child component can self-contained