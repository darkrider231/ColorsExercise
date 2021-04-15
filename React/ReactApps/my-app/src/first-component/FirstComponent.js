// CREATING A NEW COMPONENT IN A REACT APP

// This import startement must be used when creating a Class Component
// import React from 'react'

// Example of a Class Component
/*
class FirstComponent extends React.Component{
    render(){
        return <h1>Hello from the FirstComponent Component</h1>
    }
}
*/
const FirstComponent = () => {
    return  <h1>Hello from the FirstComponent Component</h1>
}

// Allows for this component to be included/accessed in other files/components
export default FirstComponent;