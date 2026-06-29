import coding from "./assets/coding.png";
import Course from "./Course";

function CourseList(){
    const courses = [
        {
            name:"html for beginners",
            price:199,
            image:coding,
            rating:5,
            id:1,
        },
        {
            name:"css for beginners",
            price:199,
            image:coding,
            rating:5,
            id:2,
        },
        {
            name:"js for beginners",
            price:499,
            image:coding,
            rating:4,
            id:3,
        },
        {
            name:"react for beginners",
            price:999,
            image:coding,
            rating:5,
            id:4,
        }        
    ]

    //const vfmCourses = courses.filter((course) => course.price <200);

    //courses.sort((x,y) => y.price - x.price);


   const coursesList = courses.map(
    (course,index) => 
    <Course key={index} name={course.name}
    image={course.image} 
    price={course.price} rating={course.rating} />);
    return (
        <>
            {coursesList}
        </>
    );  
}
export default CourseList;