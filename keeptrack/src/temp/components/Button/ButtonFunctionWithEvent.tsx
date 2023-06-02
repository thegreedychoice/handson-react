export default function Button() {
  function handleClick() {
    console.log('clicked');
  }

  return <button onClick={handleClick}>Click Me!</button>;
}

export function ExplainBindingFunctionComponentDefault() {
  const memberValue = 'functionComponentDefaultBind';

  function handleClick() {
    console.log(memberValue);
  }

  return (
    <button onClick={handleClick} type="button">
      Click Function Default Bind
    </button>
  );
}

export function ExplainBindingFunctionComponentArrow() {
  const memberValue = 'functionComponentArrowBind';

  const handleClick = () => {
    console.log(memberValue);
  };

  return (
    <button onClick={handleClick} type="button">
      Click Function Arrow Bind
    </button>
  );
}

/*
Functions passed to event handlers must be passed
In both cases, what you want to pass is a function: This doesn't fire the function immediately, only when event - click happens

<button onClick={handleClick}> passes the handleClick function.
<button onClick={() => alert('...')}> passes the () => alert('...') function.


The following is incorrect, as it will immediately be called upon rendering :

<button onClick={handleClick()}>
<button onClick={alert('...')}>
*/
