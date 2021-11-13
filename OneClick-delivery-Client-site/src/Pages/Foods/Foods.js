import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Foods.css'
import FoodsShow from './FoodsShow';

const Foods = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://oneclick-delivery.herokuapp.com/foods')
            .then(res => res.json())
        .then(data=>setFoods(data));
        
        
    }, [])
    
    return (
        <div>
           
            <div className="top-banner-foods">
                 <h1 className="big-txt-foods">Foods</h1>
                 <p className="text-white">Home / foods</p>
            </div>
            <Container>
            <h1 className="text-danger pt-5">Find out your Delicious Meal</h1>
                <p>Stay healthy , stay fit</p>
                <Row xs={1} md={3} className="g-5 my-5">
                    {
                        foods.map(food => <FoodsShow
                            food={food}
                        key={food.id}
                        ></FoodsShow>)
                    }
                </Row>

            </Container>

            
        </div>
    );
};


export default Foods;