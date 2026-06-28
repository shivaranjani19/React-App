import coding from "./assets/coding.png";
const course1 = "HTML";


function Course(props){


    return(
        <div className="card">
            <img src={props.image} alt=""/>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    );
}

/* function Course({image = coding,name,price}){
    return(
        <div className="card">
            <img src={image} alt=""/>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
} */

export default Course;