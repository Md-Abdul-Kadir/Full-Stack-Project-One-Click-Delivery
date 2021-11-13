import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Drinks.css'
import DrinksShow from './DrinksShow';

const Drinks = () => {
    const [drinks, setDrinks] = useState([]);
    
    useEffect(() => {
        fetch('https://oneclick-delivery.herokuapp.com/drinks')
            .then(res => res.json())
            .then(data => setDrinks(data));
    },[])
    return (
        <div>
           
            <div className="top-banner-drinks">
                 <h1 className="big-txt-drinks">Drinks</h1>
                 <p className="text-white">Home / drinks</p>
            </div>
            <Container>

            <h1 className="text-danger pt-5">Find out your Delicious Drinks</h1>
                <p>Stay healthy , stay fit</p>

                <Row xs={1} md={3} className="g-5 my-5">
                    {
                         drinks.map(drink => <DrinksShow
                    
                            drink={drink}
                            key={drink.id}
                        >  
                    </DrinksShow>)
                    }
                </Row>
            </Container>

            
        </div>
    );
};

export default Drinks;