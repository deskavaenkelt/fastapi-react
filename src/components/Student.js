import axios from 'axios'

function Student(props) {
    const deleteStudent = (studentId) => {
        axios.delete(`http://localhost:8000/students/${ studentId }`)
            .then((response) => {
                console.log(response.data)
                alert('Student deleted successfully')
                props.getAllStudents()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const updateStudent = (student) => {
        props.setStudentId(student.id)
        props.setName(student.name)
        props.setAge(student.age)
        props.setEmail(student.email)
    }

    return (
        <div key={props.student.id}>
            <p>
                <span className='fw-bold mx-2'>
                    { props.student.name } : { props.student.age } : { props.student.email }
                </span>
                <button onClick={() => updateStudent(props.student)} className='btn btn-warning mx-2'>Edit</button>
                <button onClick={() => deleteStudent(props.student.id)} className='btn btn-danger'>Delete</button>
            </p>
        </div>
    )
}

export default Student
