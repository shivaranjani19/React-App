import PropTypes from "prop-types";
import { useState , useEffect } from "react";
function Course(props){
    //let purchased = false;
    const [purchased, setPurchased] = useState('false');
    //const [discount, setDiscount] = useState(props.price);
    function BuyCourse(amt){
        //let purchased = false;
        console.log(props.name , " purchased with",discount,"% discount");
        setPurchased('true');
        //setDiscount(discount - amt);
        //console.log(purchased);
    }
    /* useEffect(()=>{
        console.log('inside use effect');
        console.log(purchased);
    }); */
    return(
    props.name && <div className="card">
        <img src={props.image} alt=""/>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <button onClick={()=> {BuyCourse(20)}}>buy now</button>
        <button onClick={()=> {props.delete(props.id)}}>Delete</button>
        <p>{purchased}</p>
    </div>
);
    }
    Course.propTypes = {
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        show: PropTypes.bool.isRequired
    }

export default Course;