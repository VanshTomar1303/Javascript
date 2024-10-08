import PropTypes from 'prop-types'
function Students(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudents?"YES":"NO"}</p>
        </div>
    );
}
Students.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudents:PropTypes.bool,
}
Students.defaultProps={
    name:"GUEST",
    age:0,
    isStudents:false,
}
export default Students