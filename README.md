#### Basics of

# React

This repository contains starter projects using React, all projects are primarily focused on understanding how React works and getting familier with the basic functionalities.

<!-- ------------------------------------------------------ -->
* Project Structure

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

<!-- ------------------------------------------------------ -->

# Components

* what are components?
- Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. <!-- improve -->

* Two types of Components
- Function
- Class

we'll focus on function components ( we don't use class components much anymore ).

* Here's an example of Function Component:

```js

function Welcome( props ) {
    return <h1>Hello, { props.name }</h1>;
}

```
# Render

* To render this, simply use `ReactDOM.render()`:

```js

ReactDOM.render(
    <Welcome name={ 'John Doe' }/>,
    document.getElementById( 'root' )
);

```


