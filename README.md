#### Basics of

# React

<!-- 

|- JSX
|- components
|- props
|- state
|- lifecycle
|- conditionalRendering
|- listAndKeys
|- useState()
|- useEffect()

-->

This repository contains starter projects using React, all projects are primarily focused on understanding how React works and getting familier with the basic functionalities.

<!-- ------------------------------------------------------ -->
* Project Structure
```
-| project directory | 
    -| node_modules |
    -| public |
    -| src |
        -| index.js |
        -| App.js |
        -| Components |
            -| Header.js |
            -| Footer.js |
    -| package-lock.json |
    -| package.json |
```
<!-- ------------------------------------------------------ -->

# Render

* To render this, simply use `ReactDOM.render()`:

```js

ReactDOM.render(
    <Welcome name={ 'John Doe' }/>,
    document.getElementById( 'root' )
);

```

# Components

* What are components?
- Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. <!-- improve -->

* Two types of Components
- `Function`
- `Class`

We'll focus on function components ( we don't use class components much anymore, we use `hooks` instead ). We'll take a quick look at class components and move forward.

* `Class Component`

```js

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

```

* Here's an example of `Function Component`:

```js

function Welcome( props ) {
    return <h1>Hello, { props.name }</h1>;
}

```

# Props

* What are props?
<!-- - add later -->

```js

/* pass props like this */
const element = <Welcome name="John" />;

/* and access like this */
function Welcome( props ) {
    return <h1>Hello, { props.name }</h1>;
}

```

# State

* What is state?
- Conceptually, states are like javascript objects that holds    
