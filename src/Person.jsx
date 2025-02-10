import { useState } from 'react'

function CustomInput({ onChangeText }) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
        onChangeText(event.target.value);
    };
    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}

        />
    );
}
function Person() {
    const [person, setPerson] = useState({ name: "John", age: 100 });

    const handleIncreaseAge = () => {
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    };

    const handleChange = (value) => {
        setPerson((prevPerson) => ({ ...prevPerson, name: value }));
    };
    return (
        <>
            <CustomInput onChangeText={handleChange} />
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase age</button>
        </>
    );
}

export default Person;