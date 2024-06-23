import React from "react";
import "./User.css";
export class UserClass extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      // count2: 1,
    };
  }
  render(): React.ReactNode {
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Name: {this.props?.name}</h2>
        <h3>Location: Belgaum</h3>
        <h4>Email: example@gamil.com</h4>
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Add
        </button>
        {/* <h1>{count2}</h1> */}
      </div>
    );
  }
}
