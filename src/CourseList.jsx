import coding from "../data/assets/coding.png";
import Course from "./Course";
import { useState, useEffect } from "react";
function CourseList(){
    const [courses,setCourses] = useState(null);
    const [dummy,setDummy] = useState(true);
    const[error,setError] = useState(null);
    useEffect(()=>{        
        fetch('http://localhost:3000/courses')
        .then(response => {
            console.log(response);
            return response.json()
        }).then(data => setCourses(data))
        .catch((error) => {
            console.log(error.message);
    })
    },[]);
    //const vfmCourses = courses.filter((course) => course.price <200);
    //courses.sort((x,y) => y.price - x.price);
    function handleDelete(id){
        console.log(id);
        const newCourse = courses.filter((course)=> course.id != id)
        setCourses(newCourse);
    }
    if(!courses){
        return <></>
    }
   const coursesList = courses.map(
    (course) => 
    <Course key={course.id} name={course.name}
    image={course.image} 
    price={course.price} rating={course.rating} delete={handleDelete} id={course.id}/>);
    return (
        <>
            {coursesList}
            <button onClick={()=>{setDummy(false)}}>dummy button</button>
        </>
    );  
}
export default CourseList;