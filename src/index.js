import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./style.css";
import { userInfo1 } from "./userInfo";
import { userInfo2 } from "./userInfo";
import { userInfo3 } from "./userInfo";
import { userInfo4 } from "./userInfo";
import { userInfo5 } from "./userInfo";
import { userInfo6 } from "./userInfo";
import { userInfo7 } from "./userInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Card
          name={userInfo1.name}
          expiry={userInfo1.expiryDate}
          cardNumber={userInfo1.cardNumber}
          contentName={userInfo1.contentName}
        />
        <Card
          name={userInfo2.name}
          expiry={userInfo2.expiryDate}
          cardNumber={userInfo2.cardNumber}
          contentName={userInfo2.contentName}
        />
        <Card
          name={userInfo3.name}
          expiry={userInfo3.expiryDate}
          cardNumber={userInfo3.cardNumber}
          contentName={userInfo3.contentName}
        />
        <Card
          name={userInfo4.name}
          expiry={userInfo4.expiryDate}
          cardNumber={userInfo4.cardNumber}
          contentName={userInfo4.contentName}
        />
        <Card
          name={userInfo5.name}
          expiry={userInfo5.expiryDate}
          cardNumber={userInfo5.cardNumber}
          contentName={userInfo5.contentName}
        />
        <Card
          name={userInfo6.name}
          expiry={userInfo6.expiryDate}
          cardNumber={userInfo6.cardNumber}
          contentName={userInfo6.contentName}
        />
        <Card
          name={userInfo7.name}
          expiry={userInfo7.expiryDate}
          cardNumber={userInfo7.cardNumber}
          contentName={userInfo7.contentName}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
