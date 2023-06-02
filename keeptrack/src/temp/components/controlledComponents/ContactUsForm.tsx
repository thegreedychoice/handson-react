/* /*
In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input.
For example, if you type in a text input the value property of the element holds what you typed (controls it).
In React, mutable state is typically kept in the state property of components, and only updated with setState().

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a controlled component.

more info here: https://handsonreact.com/docs/forms

library for form validation: https://react-hook-form.com/


import React from 'react';

function ContactUsForm() {
  const [department, setDepartment] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [agreedToTerms, setAgreedToTerms] = React.useState(false);

  function handleSubmit(event: any) {
    event.preventDefault();

    console.log('submitting', stateToString());
  }

  function stateToString() {
    return JSON.stringify(
      {
        department,
        message,
        agreedToTerms,
      },
      null,
      ' '
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Select...</option>
        <option value="hr">Human Resources</option>
        <option value="pr">Public Relations</option>
        <option value="support">Support</option>
      </select>
      <br />
      <br />
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <input
        type="checkbox"
        name="agreedToTerms"
        checked={agreedToTerms}
        onChange={(e) => setAgreedToTerms(e.target.checked)}
      />
      I agree to the terms and conditions.
      <br />
      <button>Send</button>
    </form>
  );
}

export default ContactUsForm;
 */

export {};
