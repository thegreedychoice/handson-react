import React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class Hello extends React.Component<Props> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello from Class: {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
