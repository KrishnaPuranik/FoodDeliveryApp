import React from "react";
import ReactDOM from "react-dom/client";
// const reactHeading = React.createElement('h1', {id:"Heading"}, "Hello World from React!");
// 'parent' is not HTML element, its react object. DOM will create html tag.
const parent = React.createElement(
    'div', 
    {id: 'parent'}, 
    React.createElement(
        'div', 
        {id: 'child'}, 
        [React.createElement('h1', {}, "I'm an h1 tag"), React.createElement('h2', {}, "I'm an h2 tag")]
    )
);
console.log(parent);
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(parent);