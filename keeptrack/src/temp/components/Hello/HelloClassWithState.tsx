import React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
  state = { currentEnthusiasm: this.props.enthusiasmLevel || 1 };

  onIncrement = () => {
    this.updateEnthusiasm(1);
  };

  onDecrement = () => {
    this.updateEnthusiasm(-1);
  };

  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }

  updateEnthusiasm(change: number) {
    this.setState((currentState) => {
      return { currentEnthusiasm: currentState.currentEnthusiasm + change };
    });
  }
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

/*

state is the second type parameter being passed when the class is constructed.
You can leave state off if the component doesn't have local state.

class Hello extends React.Component<Props>
class Hello extends React.Component<Props, State>
If you have state but no props use one of the following syntaxes.

class Hello extends React.Component<object, State>
class Hello extends React.Component<any, State>
class Hello extends React.Component<{}, State>

*/
