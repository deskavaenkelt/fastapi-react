import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import StudentList from './components/StudentList'

function App() {
    const [studentList, setStudentList] = useState([{}])
    const [studentId, setStudentId] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        getAllStudents()
    }, [])

    const getAllStudents = () => {
        axios.get('http://localhost:8000/students')
            .then((response) => {
                console.log(response.data)
                setStudentList(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const addNewStudent = (payload) => {
        axios.post('http://localhost:8000/students', payload)
            .then((response) => {
                console.log(response.data)
                getAllStudents()
                alert('Student added successfully')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const updateStudent = (payload) => {
        axios.put(`http://localhost:8000/students/${studentId}`, payload)
            .then((response) => {
                console.log(response.data)
                getAllStudents()
                alert('Student updated successfully')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const addOrUpdateStudent = () => {
        const payload = {
            name: name,
            age: age,
            email: email
        }

        if (studentId === '') {
            addNewStudent(payload)
        } else {
            updateStudent(payload)
        }
    }

    return (
        <div className='container'>
            <div
                className='text-center mt-3 list-group-item justify-content-center align-items-center mx-auto'
                style={ { 'width': '80vw', 'backgroundColor': '#ffffff' } }>
                <h2 className='card text-white bg-primary mb-1 pb-2'>School Management System</h2>
                <h6 className='card text-white bg-primary mb-1 p-1'>Manage students</h6>
                <div className='card-body'>
                    <h5 className='card text-white bg-dark pb-1'>Add Student</h5>
                    <span className='card-text'>
                        <input className='mb-2 form-control stud-name' placeholder='Enter name:' type='text'
                               value={ name } onChange={ (e) => setName(e.target.value) }/>

                        <input className='mb-2 form-control stud-age' placeholder='Enter age:' type='number'
                               value={ age } onChange={ (e) => setAge(e.target.value) }/>

                        <input className='mb-2 form-control stud-email' placeholder='Enter email:' type='text'
                               value={ email } onChange={ (e) => setEmail(e.target.value) }/>

                        <button className='btn btn-outline-primary mb-4'
                                style={ { 'fontWeight': 'bold' } }
                                onClick={ addOrUpdateStudent }>
                            { !studentId ? "Add Student" : "Update Student" }
                        </button>
                    </span>
                    <h5 className='card text-white bg-dark pb-1'>Students</h5>
                    <div className=''>
                        <StudentList setStudentId={ setStudentId }
                                     setName={ setName }
                                     setAge={ setAge }
                                     setEmail={ setEmail }
                                     students={ studentList }
                                     getAllStudents={ getAllStudents }/>
                    </div>
                </div>
                <h6 className='card text-dark bg-warning py-1'>All rights reserved &copy; 2022</h6>
            </div>
        </div>
    )
}

export default App
