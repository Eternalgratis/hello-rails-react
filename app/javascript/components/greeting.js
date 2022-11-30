import React from "react";
import { useSelector } from "react-redux";
const Greetings = () => {
    const greeting = useSelector((state) => state.greetingReducer.greeting);
    console.log(greeting);
    
  return (
    <div>{greeting.text}</div>
  );
};
export default Greetings
