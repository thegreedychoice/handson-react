# `React Concepts`

All important Concepts and Notes

## `Hooks`

**Function components with hooks are now considered a best practice** in the React community.

| Class Components                   | Function Components          |
| ---------------------------------- | ---------------------------- |
| this.setState                      | useState                     |
| Lifecycle Methods                  | useEffect                    |
| createRef, ref                     | useRef, ref                  |
| Context.Provider, Context.Consumer | Context.Provider, useContext |

### `Rules of Hooks`

1. Only call hooks at the top level (of your function component)
   - don't call them inside loops (for), conditions (if), or nested functions (only inside your main function component body)
2. Only call hooks from React Functions
   - call hooks from React function components
   - call hooks from other custom hooks

### `Custom Hooks`

- Custom Hooks allow you to easily reuse stateful logic between components.

## `State`

- A component needs state when some data associated with it changes over time.
- The _most important difference between state and props_ is that props are passed from a parent component, but state is managed by the component itself.
- A component cannot change its props, but it can change its state.
- For each particular piece of changing data, there should be just one component that “owns” it in its state.
  - Don’t try to synchronize states of two different components. Instead, lift it up to their closest shared ancestor, and pass it down as props to both of them.
  - Just an object that lives inside a component and stores all of the data that that component and maybe some of its children need.
- State is local to the component (encapsulated) and should not be accessed outside the component.
- Remember not to set state directly, use the setter function returned by the hook.
- The React team _recommends to split state into multiple state variables based on which values tend to change together_.
- Setting state based on prior state

  - So if the new state is computed using the previous state...pass a function to your updater function (setX function). The function will receive the previous value, and return an updated value.

  ```
  function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes \* 60000);
  }

  function Clock() {
  const [time, setTime] = React.useState(new Date());

  const handleClick = () => {
    setTime(addMinutes(time, 10));
  };

  ```

### `How to be sure a setState call has completed?`

Use a **useEffect** hook with a dependency on the the state variable that is changing.

### `Using State in Class Components`

In React, you don’t manipulate the DOM directly, instead you simply update data (state) and let React react by updating the UI in all the needed places.

```
class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  handleClick = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
  };

  render() {
    return (
      <div>
        <p>{this.state.time}</p>
        <button onClick={handleClick}>Refresh</button>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Clock />);
```

### `Using State Correctly`

1. Do Not Modify State Directly
2. State Updates :
   - In class components, setState keeps previous state you do not change
   - In function components, the useState updater function set... does not keep previous state. It is overwritten.
3. State Updates May Be Asynchronous
   - React may batch multiple set...() calls into a single update for performance.
   - Because state may be updated asynchronously (after an http request or a user action like clicking a button ), you should not rely on current state values for calculating the next state.
4. Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.
   - This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
   - A component may choose to pass its state down as props to its child components.
   - This is commonly called a "top-down" or "unidirectional" data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components "below" them in the tree.
5. **_If you imagine a component tree as a waterfall of props, each component's state is like an additional water source that joins it at an arbitrary point but also flows down._**

## `Side Effects and Lifecycle - Function Components`

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

### `What are Lifecycle Methods?`

Lifecycle methods are custom functionality that gets executed during the different phases of a component. There are methods available when the component gets created and inserted into the DOM (mounting), when the component updates, and when the component gets unmounted or removed from the DOM.

- The main job of React is to figure out how to modify the DOM to match what the components want to be rendered on the screen.
- React does so by "mounting" (adding nodes to the DOM), "unmounting" (removing them from the DOM), and "updating" (making changes to nodes already in the DOM).
- This process of creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.

[React Lifecycle Methods](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
[Side-Effects Lifecycle](https://handsonreact.com/docs/side-effects-lifecyle)

### `useEffect`

- This Hook should be used for any side-effects you’re executing in your render cycle.
- By using this Hook, _you tell React that your component needs to do something after render_.
  - React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
- useEffect() takes a function as an input and returns nothing.
- The function it takes will be executed for you:
  - after the render cycle
  - after every render cycle

In React, the useEffect hook is called after the component has rendered and the DOM has been updated. It allows you to perform side effects such as fetching data, subscribing to events, or manually manipulating the DOM.

The useEffect hook is called during the "commit" phase of the React component lifecycle. It runs both after the initial render and after every update to the component's state or props. However, there are some specific scenarios when useEffect is called:

1. Initial Render: The useEffect hook is called after the component has been mounted and rendered for the first time.

2. Subsequent Updates: If the component's state or props change, causing a re-render, the useEffect hook is called again after the re-render.

3. Dependencies Change: If you provide a dependency array as the second argument to useEffect, the hook will only be called when any of the dependencies in the array change. This helps optimize performance by avoiding unnecessary re-execution of the effect when irrelevant dependencies haven't changed.

4. Component Unmount: If the component is about to be unmounted from the DOM, the useEffect hook's cleanup function (if provided) is called before the component is removed. This is useful for cleaning up any resources (e.g., event listeners, timers) created by the effect.

_It's important to note that the useEffect hook can have multiple use cases and can be used for different purposes based on the provided dependencies or lack thereof. Understanding when useEffect is called allows you to control the timing of side effects in your React components._

| Lifecycle Methods     | Hook                                                                     | Renders                                                                      |
| --------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| componentDidMount     | useEffect(() => { ... }, [])                                             | after first render only                                                      |
| componentDidUpdate    | useEffect(() => {... }, [dependency1, dependency2])                      | after first render AND subsequent renders caused by a change in a dependency |
| componentWillUnmount  | useEffect(() => { ... return () => {...cleanup}})                        |                                                                              |
| shouldComponentUpdate | no comparable hook, instead, wrap function component in React.memo(List) | renders only if a prop changes                                               |
| componentWillMount    | deprecated so no comparable hook                                         |                                                                              |
| componentWillUpdate   | deprecated so no comparable hook                                         |                                                                              |

## `Conditional Rendering`

You can't use an if in a return statement in JavaScript. Element variables allow you to capture and store an element(s) in a variable to later be rendered.
Here is an example of how to add or remove a part of a component (element) using an element variable.

### `Function Component Example (using hooks)`

```
function DropdownMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  let menu;
  if (isOpen) {
    menu = (
      <ul>
        <li>Edit</li>
        <li>Remove</li>
        <li>Archive</li>
      </ul>
    );
  }
  return (
    <div>
      <button onClick={handleClick}>Actions</button>
      {menu}
    </div>
  );


  // or using conditional operator

  return (
    <div>
      <button onClick={handleClick}>Actions</button>
      {isOpen ? (
        <ul>
          <li>Edit</li>
          <li>Remove</li>
          <li>Archive</li>
        </ul>
      ) : null}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DropdownMenu />);
```

[More on Conditional Rendering](https://handsonreact.com/docs/conditional-rendering)

## `Component Architecture`

You can split a component into multiple smaller components to have a more readable and maintanable design and/or to achieve reuse.

After you create more components, more questions arise such as:

- How should components interact? (Component Communication)
- Are there any design patterns I should follow when creating components? (Lifting State Up, Composition vs Inheritance)
- What types of components are there? (Container vs. Presentation)
- How do I make my components reusable?

### Component Communication Patters

Components commonly communicate in these ways:

- Parent to Child
- Child to Parent

#### `Parent to Child`

Parent to Child communication is passing a data property into a component. More specifically, passing some data (could be a string (primitive), object, array) into a child component.

```
function App() {
  return <Parent />;
}

function Parent() {
  const [words, setWords] = React.useState('');

  const handleClick = () => {
    setWords('Did you do your homework?');
  };

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={handleClick}>Ask</button>
      <Child hears={words} />
    </div>
  );
}

function Child(props) {
  return (
    <div>
      <h2>Child</h2>
      <p>{props.hears}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

#### `Child to Parent`

Child to Parent communication is passing a function as a property into a component. The function is later invoked in the child but executed in the context of the parent.

```
function App() {
  return <Parent />;
}

function Parent() {
  const handleRequest = (request) => {
    if (request.includes('car')) {
      alert('No');
    }
  };

  return (
    <div>
      <h1>Parent</h1>
      <Child onRequest={handleRequest} />
    </div>
  );
}
function Child(props) {
  const handleClick = () => {
    props.onRequest('Can I have the car?');
  };

  return (
    <div>
      <h2>Child</h2>
      <button onClick={handleClick}>Ask for the car</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

### `Additional Communication Patterns`

Now that you understand how this communication works in practice then we can explore these additional communication patterns which are essentially variations on "Parent to Child" and "Child to Parent"

- Child to Child (siblings)
- Grandparent to Grandchild
- Grandchild to Parent

Essentially, communication doesn't skip generations so if it is going to happen you need to manually communicate up or down between each generation.

Component communication does not work like JavaScript events...there is no event bubbling.

### `Design Pattern - Lifting State Up`

Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

**The React documentation summarizes it best:**

- There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.

- Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.

- If something can be derived from either props or state, it probably shouldn’t be in the state.

#### `Function Component Example`

```
function Button({ onClickFunction }) {
  return <button onClick={onClickFunction}>+1</button>;
}

const Result = ({ value }) => {
  return <div>Result: {value}</div>;
};

function App() {
  const [counter, setCounter] = React.useState(0);

  const incrementCounter = () => {
    setCounter((previousCounter) => previousCounter + 1);
  };

  return (
    <div>
      <Button onClickFunction={incrementCounter} />
      <Result value={counter} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

### `Types of Components`

#### `Container (Smart) Components`

- Are concerned with how things work
- Provide the data and behavior to presentational or other container components
- Loads and modifies data via calls to an API
- May contain both presentational and container components\*\* inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles
- Also know as container components or controller components

#### `Presentation Components`

- Are concerned with how things look
- Receive data and callbacks exclusively via props
- Don’t specify how the data is loaded or changed
- Also know as pure components or dumb components

[More on Component Types](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

#### `Controlled Components`

In HTML, form elements such as &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; typically maintain their own state and update it based on user input.
For example, if you type in a text input the value property of the element holds what you typed (controls it).

In React, mutable state is typically kept in the state property of components, and only updated with setState().

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a controlled component.

```
function SigninForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SigninForm />);
```

### `UnControlled Components`

In most cases, React recommends using controlled components to implement forms.In a controlled component, form data is handled by a React component.

The alternative is uncontrolled components, where form data is handled by the DOM itself.

#### `Refs`

When writing an uncontrolled component you use a ref to get form values from the DOM directly instead of writing an event handler for every state update.

```
const { useRef } = React;

function FileInput() {
  const fileInput = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(fileInput.current);
    if (!fileInput) return;
    alert(`Selected file - ${fileInput.current.files[0].name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FileInput />);
```

### Composition vs Inheritance

- React recommends using composition instead of inheritance to reuse code between components.

- In general, components can be nested inside other components or live next to other components just like in HTML where a <div> can have a <p> inside of it and the <p> can have an &lt;a&gt; and an &lt;img&gt;. HTML works on composition so React components work on composition as they are essentially HTML tags you invented.

- _We use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies. - Facebook_

### `Thinking in React`

Here are some steps you might find useful as you learn to Think in React

1. Break the UI Into a Component Hierarchy

2. Build a Static Version in React

   - No State or Props

3. Identify The Minimal (but complete) Representation Of UI State

4. Identify Where Your State Should Live

   - For each piece of state in your application:
     - Identify every component that renders something based on that state.
     - Find a common owner component (a single component above all the components that need the state in the hierarchy).
     - Either the common owner or another component higher up in the hierarchy should own the state.
     - If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

5. Add Inverse Data Flow
   - Rendering the screen initially involves props and state flowing down the hierarchy
   - Inverse data flow refers to components deep in the hierarchy responding to user actions (clicking a button, hovering, typing) and then updating the state in the higher container component(s)

See the section [Thinking in React](https://react.dev/learn/thinking-in-react) in the documentation for more information.

### `Loading REST API data in React`

#### `When to load data?`

-In a function component, you should make your AJAX calls in a useEffect hook. When the data or the error returns you can use your set state updater function returned from useState to update the state.

- In a class component, you should make your AJAX calls in the componentDidMount lifecycle method. This is so you can use setState to update your component when the data is retrieved.

#### `Loading`

Since AJAX calls don't always return immediately (they are asynchronous) it is common practice to show a loading indicator when the HTTP request is in flight.

#### `Error Handling`

If an error occurs while making the request or when it returns we need to either display that error or translate it to a more user friendly message and then display the error.

Initially, we'll just display the error from the server and then later we will see how to translate that error to something more user friendly.

#### `Lists`

If the data is returned successfully, we can use what we learned in the list section to display the data.

! Remember we need to set a key on the list items.

#### `Function Component Example`

```
const okUrl = 'http://localhost:3000/photos?_page=1&_limit=100';
const notFoundErrorUrl = 'https://httpstat.us/404';
const forbiddenErrorUrl = 'https://httpstat.us/403';
const serverErrorUrl = 'https://httpstat.us/500';

function PhotoList() {
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);
  const [error, setError] = React.useState(null);

  function toUserError(error) {
    console.log('Call API to log the raw error. ', error);
    return 'There was an error loading the photos.';
  }

  React.useEffect(() => {
    setLoading(true);

    fetch(okUrl)
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        setError(null);
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        const userError = toUserError(error);
        setError(userError);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {photos.map((photo) => {
          return (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <h3>{photo.title}</h3>
            </li>
          );
        })}
      </ul>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<PhotoList />);
```

## `Routing`

- Similar in function to a server-side router in an MVC framework

  - Associates a route (url) with a particular controller action

- React Router switches between (page/container) components when a route changes
- Back button is broken by default when page/container components change

  - the browser's history is not updated with a new url when page/container components change
    - React Router programmatically adds entries to the browser's history
    - enables the back button to work in React applications
    - uses the HTML5 [pushState history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries) under the hood

- There are two versions:

  - BrowserRouter (react-router-dom) for web applications.
  - NativeRouter (react-router-native) for use with React Native.

- Install it like this

```
npm install react-router-dom@6.3
```

[More on Routing](https://handsonreact.com/docs/routing)

[More on Caching Best Practices](https://jakearchibald.com/2016/caching-best-practices/)

## `Custom Hooks`

- Custom Hooks allow you to **easily reuse stateful logic between components.**

- Image being able to write a function with just your component logic code but without the UI (JSX) and then reuse that in several components...that is what a custom hook enables.

- Traditionally in React, we’ve had two popular ways to share stateful logic between components: render props and higher-order components. Hooks solve many of the same problems without forcing you to add more components to the tree.

- **Hooks allow you to reuse stateful logic without changing your component hierarchy**

- _Prefer creating a hook for reuseable logic over the render props pattern or high-order components where possible._

### `Rules of Hooks`

- Only call Hooks at the top level (of your function component)

  - _Don't call them inside loops (for), conditions (if), or nested functions (only inside your main function component body)_

- Only call hooks from React functions
  - call hooks from React function components
  - call hooks from other custom hooks

[useReducer Example Application](https://handsonreact.com/docs/other-hooks)
[ More on Custom Hooks Documentation](https://react.dev/learn/reusing-logic-with-custom-hooks)
[Custom Hook Examples/Recipes](https://usehooks.com/)

### `Context`

Context is designed to share data that can be considered “global” for a tree of React components, such as **the current authenticated user, theme, or preferred language.**

#### `When to Use Context?`

When props need to be shared with most of a tree of components.

[Example](https://handsonreact.com/docs/context)

## `Why use Redux? - State Management`

- The primary reason you need Redux is to help share data and functions between components in your application which are in different parts of the component tree and not immediate relatives

- The sharing between components is achieved by pulling data and functions out of the components and into a shared object (Store) that is not a component

- The shared object (Store) is made available to parts of the application by wrapping it in custom element or tag (React Component) called a provider (because it provides the data and functions).

- **You can recreate the functionality of Redux using React Context**

- React Context is designed for low frequency updates (Authenticated User, Theme, Locale (language))

- React Context is not designed for high frequency updates (keyboard input)

- React Context by default causes a rerender of all components on the page which use a given context

- React Context has an easier to understand API than Redux

[More on State Management](https://handsonreact.com/docs/state-management)

### `Examples (React Context vs Redux)`

- Good use cases for React Context include:

  - Signed In User and their permissions
  - (Color) Theme of the application
  - Language (locale) used in the application

- Good use cases for Redux include:

  - A count of something that displays in a header or sidebar (likes, upvotes, active projects, items in shopping cart, unread messages)
    - Again, this often can be done by having a common parent component (in many cases the App component) but sometimes it might be too far removed from where you are updating this information
  - Collaborative software where multiple users can work on the same document at the same time (Google Docs, Google Sheets etc...)

### `Deciding on how to handle State`

1. Does it belong in the Url? ( current page, current record, sorting, scroll location...)

   - Keep URL-related state in the URL.

2. Want to persist data across sessions or make data available offline?

   - Consider web storage (localstorage, IndexedDB, etc)

3. Is it server data?

   - Try react-query or swr. Using GraphQL? Then also consider Relay, Apollo.

4. is it a DOM element reference, state that doesn't change or not rendered at all?

   - Use a ref

5. Can it be derived from existing props, state, URL, etc?

   - Derive it "on-the-fly" as part of each render (memoize if expensive).

6. Does only one component use the data?

   - Use local state.

7. Do a few related components use it?

   - Store state in a common parent.

8. Is it a global state? Consider, in order:
   - Store in App's root component, context, or separate library like Redux.

## `React Query`

[More on React Query](https://handsonreact.com/docs/react-query)
[TanStack](https://tanstack.com/query/v3/)

## `Testing`

- Jest is a JavaScript testing framework
- Features:

  - task runner
  - assertion library
  - mocking support
  - snapshots
  - isolated, paraellelized tests to maximize performance

- React Testing Library is a library for testing React Components

  - Resembles the way the components are used by end users

- Its primary guiding principle is:

  - The more your tests resemble the way your software is used, the more confidence they can give you.

- I recommend React Testing Library because of it's focus on not testing code implementation details

- Features:
  - Work with actual DOM nodes.
  - The utilities this library provides facilitate querying the DOM in the same way the user would.
  - Finding form elements by their label text (just like a user would)
  - Finding links and buttons from their text (like a user would).
  - Encourages your applications to be more accessible

[More on Testing](https://handsonreact.com/docs/testing)

## `Render Props`

- The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.

- A component with a render prop **takes a function that returns a React element and calls it instead of implementing its own render logic.**

### `Example`

```
function Box(props) {
  return (
    <div style={{ width: 100, height: 100, border: "1px solid black" }}>
      {props.render && props.render()}
    </div>
  );
}

function App() {
+ return <Box render={() => <h3>Jack</h3>} />;
}


// use children instead of render
function Box(props) {
  return (
    <div style={{ width: 100, height: 100, border: '1px solid black' }}>
-     {props.render && props.render()}
+     {props.children}
    </div>
  );
}

// function App() {
//   return <Box render={() => <h3>Jack</h3>} />;
// }

function App() {
  return (
    <Box>
      <h3>Jack</h3>
    </Box>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

### `Use Cases`

- Cross-Cutting Concerns

  - When you have the need to share the state or behavior that one component encapsulates to other components that need that same state

- You can often get the same reuse out of your code using any of the following techniques
  - Higher-Order Components
  - Render Props
  - Custom Hooks

[More on Render Props](https://handsonreact.com/docs/render-props)

## `Higher-Order Component`

A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs **are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.**

### `Definition`

- Higher Order Component (HOC): an abstraction over a component.

  - When given a component (and perhaps some other parameters), they return a new component.

- From the perspective of the JavaScript language:
  - a higher-order component is a function that takes a component and returns a new component.

```
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

### `Example`

```
function Greet(props) {
return <span>Hi</span>;
}

function withName(Greet, name) {
function Wrapper(props) {
return (

<div>
<Greet {...props} /> <em>{name}</em>
</div>
);
}
return Wrapper;
}

const GreetWithName = withName(Greet, "Riya");

function App() {
return <GreetWithName />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

[More on HOC](https://handsonreact.com/docs/higher-order-components)

## `Security`

### `Encoding`

- React by default encodes almost all data values when creating DOM elements.

- To provide users with an escape hatch to insert HTML content into the DOM, React is equipped with the eloquently-named function dangerouslySetInnerHTML(), clearly conveying the dangers of using it.
  - DON'T: Use the method dangerouslySetInnerHTML()

### `Handled by Users`

Contexts that are _unattended by the React security model_ and are **handled by the users** include creating:

- HTML anchor (link) elements with user- provided input as the source for the href attribute value.

  - This mostly applies to versions prior to the recently released React v16.9 which mitigates javascript:-based URLs in href attribute values and other contexts such as form actions, iFrame sources, and others.
    ```
    data:text/html,
    <a href="javascript: alert('hello from javascript!')">click me</a>
    ```

- React components from user-provided input

- React’s server-side rendering could potentially introduce XSS vulnerabilities if malicious user input is injected as-is to a JavaScript context without being properly encoded or sanitized.

```
let data = {
username: "pwned",
bio: "</script><script>alert('XSS Vulnerability!')</script>"
}

<script>window.__STATE__ = ${JSON.stringify({ data })}</script>
```

### `What to look for in a Code Review?`

1. Look for dangerouslySetInnerHTML being called.

2. Can users add links that other users may click on? If so, try adding a ‘link’ like this:

   ```
   javascript: alert('You are vulnerable to XSS!');
   ```

   If the alert pops up on the page, you have an XSS vulnerability. Try everywhere these custom links are loaded. Most likely, not every instance will be vulnerable.

3. Look for JSON.stringify() being called with a variable that may have un-trusted data inside a script tag.

[More on Security](https://handsonreact.com/docs/security)

## `Performance`

### `Premature Optimization`

- Premature optimization is the root of all evil -- DonaldKnuth

- Premature Optimization is optimizing before we know that we need to do it.

- **Recommendation:** Get your application working and then near the end of a development cycle take the time to optimize for performance.

[More on Performance](https://handsonreact.com/docs/performance)

## `Styling`

[More on Styling](https://handsonreact.com/docs/styles)

## `References`

[Redux](https://handsonreact.com/docs/redux)
[React Redux](https://handsonreact.com/docs/react-redux)
[Redux Thunk](https://handsonreact.com/docs/redux-thunk)
[React Redux Thunk](https://handsonreact.com/docs/react-redux-thunk)
[Redux & Typescript](https://handsonreact.com/docs/redux-typescript)
[Modern Javascript](https://handsonreact.com/docs/modern-javascript)
[Typescript](https://handsonreact.com/docs/typescript)
[Promises & Async Await](https://handsonreact.com/docs/promises-async-await)
[Essential Javascript for React](https://handsonreact.com/docs/essential-javascript-react)
[CSS Grid](https://handsonreact.com/docs/F01-CSSGrid)
[Flexbox](https://handsonreact.com/docs/F02-FlexBox)
[UI Components](https://handsonreact.com/docs/ui-compoonents)
