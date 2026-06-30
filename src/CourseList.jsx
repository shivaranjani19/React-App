import coding from "../data/assets/coding.png";
import Course from "./Course";
import useFetch from "./useFetch";


function CourseList(){

    const {courses,dummy,error} = useFetch('http://localhost:3000/courses');

    


    //const vfmCourses = courses.filter((course) => course.price <200);

    //courses.sort((x,y) => y.price - x.price);


    function handleDelete(id){
        console.log(id);
        const newCourse = courses.filter((course)=> course.id != id)
        setCourses(newCourse);
    }
    
    if(!courses){
        return (
        <>
        {!error && <p>loading...</p>}
        {error && <p>{error}</p>}
        </>
    )
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