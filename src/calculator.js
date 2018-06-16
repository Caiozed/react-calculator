import React, { Component } from "react";

class Calculator extends Component {
  buttons = ["CE", "C", "<=", 7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, ","];
  state = { result: [] };

  calculate = data => {
    let exp = this.state.result;
    exp[0] === 0 ? (exp = []) : "";

    switch (data) {
      case "C":
        this.setState({ result: [] });
        break;

      case "CE":
      case "<=":
        exp.pop();
        this.setState({ result: exp });
        break;

      default:
        isNaN(data) && isNaN(exp[exp.length - 1])
          ? (exp[exp.length - 1] = data)
          : exp.push(data);
        this.setState({ result: exp });
        break;
    }
  };

  finishCalc = () => {
    let { result } = this.state;
    if (isNaN(result[result.length - 1])) {
      result.pop();
    }
    result = [eval(result.join(""))];
    this.setState({ result: eval(result) });
  };

  render() {
    const { result } = this.state;
    return (
      <div className="row">
        <h1 className="white-text card-panel blue darken-1">
          {result.length > 0 ? result : 0}
        </h1>
        <div className="col s9 m9">
          {this.buttons.map((x, i) => {
            return (
              <div key={i} className="col s4 m4">
                <button
                  onClick={() => {
                    this.calculate(x);
                  }}
                  style={{ width: "100%" }}
                  className="btn waves-effect waves-light btn-large"
                >
                  {x}
                </button>
              </div>
            );
          })}
        </div>
        <div className="col s3 m3">
          <button
            onClick={() => {
              this.calculate("/");
            }}
            style={{ width: "100%" }}
            className="btn waves-effect waves-light btn-large"
          >
            /
          </button>
          <button
            onClick={() => {
              this.calculate("*");
            }}
            style={{ width: "100%" }}
            className="btn waves-effect waves-light btn-large"
          >
            *
          </button>
          <button
            onClick={() => {
              this.calculate("-");
            }}
            style={{ width: "100%" }}
            className="btn waves-effect waves-light btn-large"
          >
            -
          </button>
          <button
            onClick={() => {
              this.calculate("+");
            }}
            style={{ width: "100%" }}
            className="btn waves-effect waves-light btn-large"
          >
            +
          </button>
          <button
            onClick={this.finishCalc}
            style={{ width: "100%" }}
            className="btn waves-effect waves-light btn-large"
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
