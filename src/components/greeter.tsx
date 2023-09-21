import React from "react";

interface GreeterProps {
  person: string;
}

function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>Hello, {person}!</h1>;
}

// function Greeter(props: GreeterProps): JSX.Element {
//   return <h1>Hello, {props.person}!</h1>;
// }

// FC = FunctionalComponent
// const Greeter: React.FC = () => {
//   return <h1>Hello!!!</h1>;
// };

export default Greeter;
