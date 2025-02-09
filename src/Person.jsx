import { useState } from 'react'

function CustomInput(){
    const [value, setValue] = useState("");

    return(
        <input 
        type = "text"
        value = {value}
        onChange={(event) => setValue(event.target.value)}
        />
    );
}
function Person()
{
    const [person, setPerson] = useState({ name: "John", age: 100 });

    const handleIncreaseAge = () => {
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1}));
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1}));
      };

    return (
        <>
          <CustomInput/>
          <h1>{person.name}</h1>
          <h2>{person.age}</h2>
          <button onClick={handleIncreaseAge}>Increase age</button>
        </>
    );
}

export default Person;