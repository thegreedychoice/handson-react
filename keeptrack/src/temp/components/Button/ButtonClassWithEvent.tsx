import React from 'react';

class Button extends React.Component {
  // 1st way to bind: bind in constructor
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click Class Constructor Bind!</button>
    );
  }
}

export default Button;

// 2nd way to bind - assign to class field
// arrow function: assigned to class field
// logs instance of the component
export class ExplainBindingsClassComponentArrow extends React.Component {
  handleClick = () => {
    console.log(this);
  };

  render() {
    return (
      <button onClick={this.handleClick} type="button">
        Click Class Arrow Bind!
      </button>
    );
  }
}

/*
It is mandatory to call super(props); in the constructor. It sets this.props in your constructor in case you want to access them there. 
They would be undefined when accessing this.props in your constructor otherwise.

Bind?

The event handler is a function that needs to get bound to the class instance if you are using class components 
instead of function components.

Binding is necessary in JavaScript because the value of the function context this inside a method 
depends on how the method is invoked.
https://handsonreact.com/docs/events

Binding only happens once when the component is instantiated

Binding to `this` is really about being able to access a member variable (loading, message, projects) 
or function (handleClick, loadProjects, setState
*/
