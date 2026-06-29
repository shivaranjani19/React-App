import PropTypes from "prop-types";
function Course(props){

    let purchased = false;

    function BuyCourse(discount,e){

        //let purchased = false;
        console.log(props.name , " purchased with",discount,"% discount");
        console.log(e);
    }

    return(
    props.name && <div className="card">
        <img src={props.image} alt=""/>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <button onClick={(event)=> {BuyCourse(20)}}>buy now</button>
        <p>{purchased ? "Already purchased" : "Get it now"}</p>
    </div>
);
    }

    Course.propTypes = {
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        show: PropTypes.bool.isRequired
    }

export default Course;