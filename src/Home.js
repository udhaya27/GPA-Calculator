import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./usercontext";

const Home = () => {
    const [subjects, setSubjects] = useState([{ id: 1 }]);
    const [gpa, setGpa] = useState(null);  // State to store the calculated GPA
    const { user } = useContext(UserContext);

    const addSubject = () => {
        setSubjects([...subjects, { id: subjects.length + 1 }]);
    };

    const calculateGpa = () => {
        const subjectData = subjects.map(subject => ({
            credit: document.getElementById(`credits${subject.id}`).value,
            grade: document.getElementById(`grade${subject.id}`).value
        }));

        axios.post('http://localhost:8080/calculateGpa', subjectData)
            .then(response => {
                setGpa(response.data);  // Update the GPA state with the response
            })
            .catch(error => {
                console.error("Error calculating GPA:", error);
            });
    };

    return (
        <div className="home">
            <h1>Hello {user.name}</h1>
            {subjects.map(subject => (
                <div key={subject.id}>
                    <label className="subjects" htmlFor={`subject${subject.id}`}>Subject {subject.id}</label>
                    <select name={`credit${subject.id}`} id={`credits${subject.id}`}>
                        <option value="credit">Credit</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <select name={`grade${subject.id}`} id={`grade${subject.id}`}>
                        <option value="grade">Grade</option>
                        <option value="O">O</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="U">U</option>
                    </select>
                    <button className="deletebutton" name="delete">Delete</button><br />
                </div>
            ))}

            <button className="subbutton" type="submit" onClick={addSubject}>Add subject</button>
            <button className="gpabutton" onClick={calculateGpa}>Calculate GPA</button>

            {gpa !== null && (
                <div className="gpa-result">
                    <h2>Your GPA: {gpa}</h2>
                </div>
            )}
        </div>
    );
};

export default Home;

