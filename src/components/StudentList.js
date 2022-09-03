import Student from './Student'

function StudentList(props) {

    return (
        <div>
            <ul>
                { props.students.map((student, index) => (
                    <Student setStudentId={ props.setStudentId }
                             setName={ props.setName }
                             setAge={ props.setAge }
                             setEmail={ props.setEmail }
                             student={ student } key={ index }
                             getAllStudents={ props.getAllStudents }/>
                )) }
            </ul>
        </div>
    )
}

export default StudentList
