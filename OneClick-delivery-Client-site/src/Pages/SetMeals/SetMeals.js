import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './SetMeals.css'
import SetMealShow from './SetMealShow';

const SetMeals = () => {
    const [smeal, setSmeal] = useState([]);

    useEffect(() => {
        fetch('https://oneclick-delivery.herokuapp.com/setmenu')
            .then(res => res.json())
            .then(data => setSmeal(data));
            
    },[])
    return (
        <div>
           
            <div className="top-banner-setmeals">
                 <h1 className="big-txt-setmeals">Set Menu</h1>
                 <p className="text-white">Home / set menu</p>
            </div>
            
            <Container className="my-5">
                <h1 className="text-danger mt-5">Find out your delicious Foods</h1>
                <p>Stay healthy , stay fit</p>
               <Row xs={1} md={3} className="g-5 my-3">
                    {
                       
                    smeal.map(meal => <SetMealShow
                        meal={meal}
                        key={meal.id}
                    ></SetMealShow>) 

               }
               </Row>
            </Container>
  
            
        </div>
    );
};
export default SetMeals;


/*












*/