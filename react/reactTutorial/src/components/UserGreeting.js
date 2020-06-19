import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // 444444444
    return this.state.isLoggedIn && <div>Welcome Jinhyuk</div>;

    // 333333333
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Jinhyuk</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // 22222222
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Jinhyuk</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // return <div>{message}</div>;

    // 11111111
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Jinhyuk</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Jinhyuk</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
