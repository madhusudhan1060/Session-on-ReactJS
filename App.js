import React from 'react';
import ReactDOM from 'react-dom';

// const heading = React.createElement("h1", {className: "heading"}, "Hello World! using React");

// Functional component 
const  App = () => {
    return (     
        <>
            <div>from Jsx</div>
            <div>second line</div>
        </>
    )
}

const HeadingComponent = () => {
    return <h1>Function component</h1>;
}

const HeadingComponent1 = () => (
    <h1>Function component1</h1>
)





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);