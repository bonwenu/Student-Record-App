import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetching(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/students')
        .then(res => {
            console.log(res.data);
            setStudents(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    })

    return (
        <div>
            <ul>
                {students.map(student => (
                    <li>{student.id} {student.firstName}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetching
