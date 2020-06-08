import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jinhyuk",
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getShapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  render() {
    console.log("LifecycleB render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
