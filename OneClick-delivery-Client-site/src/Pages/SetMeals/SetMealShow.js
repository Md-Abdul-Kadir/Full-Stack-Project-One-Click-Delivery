import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SetMealShow.css'

const SetMealShow = (props) => {
    const {title,id,picture,seller,description,_id } = props.meal;
    return (
        <div>
            
             <Card className="h-100 shadow-lg border-0">
               <CardImg
                className="imgHeight w-100" height="400px" src={picture} />
                <Card.Body>
                    <h4 className="text-danger">{title}</h4>
                    <p> <small>{description}</small></p>
                <Card.Text>

                        
                </Card.Text>
                </Card.Body>
                    <Card.Footer>
                    <h6 className="text-secondary" >Prepared by <span className="text-dark fw-bold">{seller}</span> </h6>
                    <Link to={`/orders/${_id}`}>
                        <button className="btn btn-danger py-2 my-2 w-100">Place Order</button>
                    </Link>
                </Card.Footer>
            </Card>
    
 
  
        </div>
    );
};


export default SetMealShow;

