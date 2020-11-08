import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../App.css';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';




function Students(props) {

    const [students, setStudents] = useState([]);
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastNAme] = useState("");
    const [status, setStatus] = useState("");
    const [addActive, setAddActive] = useState(false);
    const [editActive, setEditActive] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/students')
            .then(res => {
                setStudents(res.data);
                console.log("fetch")
            })
            .catch(err => {
                console.log(err);
            })
    }, [])  
    // Pass empty array above to call function only once at page laod

    const getStudents = () => {
        axios.get('http://localhost:8080/students')
            .then(res => {
                setStudents(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const createStudent = () => {
        const newStudent = {
            firstName: firstName,
            lastName: lastName,
            status: status
        }
        console.log(newStudent);
        addStudent(newStudent);
        changeAddVis();
        setFirstName('');
        setLastNAme('');
        setStatus('');
        
    }

    const addStudent = (student) => {
        axios.post('http://localhost:8080/students', student)
            .then(res => {
                getStudents();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const updateStudent = (student) => {
        axios.put('http://localhost:8080/students/' + student.id, student)
            .then(res => {
                getStudents();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const removeStudent = (id) => {
        axios.delete('http://localhost:8080/students/' + id)
            .then(res => {
                getStudents();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const edit = (student) => {
        changeEditVis();
        setId(student.id);
        setFirstName(student.firstName);
        setLastNAme(student.lastName);
        setStatus(student.status);
    }

    const cancelAdd = () => {
        changeAddVis();
        setFirstName('');
        setLastNAme('');
        setStatus('');
    }

    const save = () => {
       const updatedStudent = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        status: status
       }

       updateStudent(updatedStudent);

       changeEditVis();
       setId('');
       setFirstName('');
       setLastNAme('');
       setStatus('');
    }

    const cancelEdit = () => {
        changeEditVis();
        setFirstName('');
        setLastNAme('');
        setStatus('');
    }
    // Toggle visibility of create student-div
    const changeAddVis = () => {
        setAddActive(!addActive);
    }

    const changeEditVis = () => {
        setEditActive(!editActive);
    }

    const center = {
        textAlign: "center"
    }

    
    return (
        <div className="students-page">
            <table className="table table-striped" id="reqProcessed-table">
                <thead className="thead-dark ">
                    <tr id="header-row2">
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Status</th>
                        <th style={center}>Action</th>
                    </tr>
                </thead>
                {students.map(student => (
                    <tbody key={student.id}>
                        <tr >
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.status}</td>
                            <td style={center} >
                                {!editActive && <AiOutlineEdit style={{marginRight:"0.5in"}} onClick={() => edit(student)} /> }
                                <BsTrash onClick={() => removeStudent(student.id)} />
                            </td>
                        </tr>
                    </tbody>
                ))}

            </table>
            {/* like ngIf- render element if true */}
            {!addActive && <button onClick={changeAddVis}>Add a new Student</button> }
            {addActive && <div style={{ textAlign: "center" }} >
                <label>First Name</label> <br></br>
                <input value={firstName} onChange={event => setFirstName(event.target.value)} /> <br></br>
                <label>Last Name</label> <br></br>
                <input value={lastName} onChange={event => setLastNAme(event.target.value)} /> <br></br>
                <label>Status</label> <br></br>
                <input value={status} onChange={event => setStatus(event.target.value)} /><br></br>
                <br></br>
                <div className="create-buttons">
                    <button className="cancel" onClick={cancelAdd}>Cancel</button>
                    <button className="add" onClick={createStudent}>Add</button>
                </div>
                </div> }
            {editActive &&<div style={{ textAlign: "center" }} >
                <label>First Name</label> <br></br>
                <input value={firstName} onChange={event => setFirstName(event.target.value)} /> <br></br>
                <label>Last Name</label> <br></br>
                <input value={lastName} onChange={event => setLastNAme(event.target.value)} /> <br></br>
                <label>Status</label> <br></br>
                <input value={status} onChange={event => setStatus(event.target.value)} /><br></br>
                <br></br>
                <div className="create-buttons">
                    <button className="cancel" onClick={cancelEdit}>Cancel</button>
                    <button className="save" onClick={save}>Save</button>
                </div>
                </div> }
        </div>
    )
}

export default Students