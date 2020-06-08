import React, { PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jinhyuk",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Jinhyuk",
      });
    }, 2000);
  }

  render() {
    console.log("parent component render");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp;
