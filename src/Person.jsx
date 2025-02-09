import { useState } from 'react'

function Person()
{
    const [person, setPerson] = useState({ name: "John", age: 100 });

    const handleIncreaseAge = () => {
        console.log("in handleIncreaseAge (before setPerson call): ", person);
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1}));
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1}));
        // we've called setPerson, surely person has updated?
        console.log("in handleIncreaseAge (after setPerson call): ", person);
      };

    return (
        <>
          <h1>{person.name}</h1>
          <h2>{person.age}</h2>
          <button onClick={handleIncreaseAge}>Increase age</button>
        </>
    );
}

export default Person;