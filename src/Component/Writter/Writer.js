import './Writer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'




const Writers = (props) => {

    /* ------------------------------------
        Distructuring Props Elements
    ---------------------------------------*/
    const {name, age, proffession, cost, country, image} = props.writers;
    
    /* ------------------------------
    Font Awesome Icons
    ------------------------------- */
    const cart_icon = <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
    
    return (
        <>
           {/*----------------------- 
                single writter
           --------------------------*/}
            <div className="writer-container">
                <div className="writers d-flex justify-content-evenly flex-wrap">
                    
                    <div className="card text-center p-3">
                        <img src={image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> {name}</h5>
                            <p>Age: {age}</p>
                            <p>Country: {country}</p>
                            <p>Proffession: {proffession}</p>
                            <p>Cost: {cost}</p>
                            <button onClick={() => props.handleAddToCart(props.writers)} className="btn btn-primary">{cart_icon} Add To Cart</button>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    );
};


export default Writers;