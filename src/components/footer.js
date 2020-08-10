import React, { Component } from "react";

class FooterNavi extends Component {
  render() {
    return (
      <footer className="bg-warning" style={{ height: "150px", width: "100%" }}>
        <p className="text-white text-center">
          This is the footer of Software Prediction
        </p>
        <p className="text-white text-center">
          {" "}
          All right reserverd to &copy;{" "}
          <a href="https://github.com/sachinthakur9614">Sachin Thakur</a>
        </p>
      </footer>
    );
  }
}
export default FooterNavi;
