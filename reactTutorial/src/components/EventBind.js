import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // three : binding in the constructor; binds only once
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // 1 ~ 3
  //   clickHandler() {
  //     this.setState({
  //       message: "GoodBye",
  //     });
  //     console.log(this);
  //   }

  // 4
  //   clickHandler = () => {
  //     this.setState({
  //       message: "Goodbye!",
  //     });
  //   };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
