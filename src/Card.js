import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
     <div className="date">
          {props.expiry}
        </div>
      <div className="contentName">
          {props.contentName}
      </div>
        <div>
        <div className="card-number">
          {props.cardNumber}
        </div>
        <div className="cardholder-name">
          {props.name}
        </div>
      </div>
    </div>
  )
}

export default Card;