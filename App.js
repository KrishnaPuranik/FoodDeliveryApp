import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTMLElement(render)

const heading = React.createElement("h1", {id: "heading"}, "Food Delivery App");
console.log(heading);
// JSX heading
const jsxHeading = <div>
    <h1 id='heading'>Food Delivery App using jsx</h1>
    <h2 id='heading'>Food Delivery App using jsx</h2>
</div>;
console.log(jsxHeading);


const HeadingComponent = () => {
    return <h1 className='heading'>Krishna</h1>
}

// Shorter format of above
const HeadingComponent2 = () => <h1 className='heading'>Moorthi</h1>;

// One more format
// React Functional Component
const HeadingComponent3 = () => {
    return (
    <>
        {HeadingComponent2()}
        { <HeadingComponent2 /> }
        <h1 className='heading'>Moorthi</h1>
    </>
    );
}

// React Element
const heading1 = (
    <h1 id='heading'>Food Delivery App using jsx</h1>
)

// React component composition - Its component inside a component
const HeadingComponent4 = () => {
    return (
    <div id=''>
        { <HeadingComponent /> }
        { <HeadingComponent2 /> }
        { <HeadingComponent3 /> }
        <h1 id='heading'>Food Delivery App using jsx</h1>
    </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering React element
// root.render(heading1);

// Rendering React Component
root.render(<HeadingComponent4 />);
