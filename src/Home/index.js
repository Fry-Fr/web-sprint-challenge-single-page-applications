import React from "react";
import picture from '../Assets/Pizza.jpg'

const Home = ({ order }) => {

    return (
        <div id="picture">
            <img src={picture} alt="pizza"/>
            {order.map( order => {
                return(
                    <div id="order-card">
                    <div>Name: {order.name}</div>
                    <div>Size: {order.size}</div>
                    <div>Toppings: {order.pepps ? 'pepps': undefined}, {order.jpepps ? "jpepps": undefined}, 
                    {order.gpepps ? "gpepps": undefined}, {order.bpepps ? "bpepps": undefined}</div>
                    <div>specialInstructions: {order.specialInstructions}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default Home;