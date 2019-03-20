import React, { Component } from "react";

class Initialization extends Component {
  constructor(props) {
    //Memanggil constructor dari class React.component
    super(props);
    //Proses initialization (inialisasi)
    this.state = {
      count: 0,
      isChange: false
    };
  }

  render() {
    const { count, isChange } = this.state;
    return (
      <div>
        <p>{count}</p>
      </div>
    );
  }
}

export default Initialization;
