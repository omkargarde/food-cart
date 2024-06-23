import { useState } from "react";
import "./User.css";
export const User = (props: any) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Belgaum</h3>
      <h4>Email: example@gamil.com</h4>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        add
      </button>
    </div>
  );
};
