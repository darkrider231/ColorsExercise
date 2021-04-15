// PROPS
// React Props are like arguments in JavaScript. Props are arguments passed into React components. This done simliar to how  attributes are add to HTML elements.

const Props = (props) => {
    return(
        <div>
            {/* The value/argument passed into the NAME prop comes from the compnent (App)this component (Props) is passed into */}
            <h2>Hello, I'm {props.name} and this is the Props Component</h2>
            <h2>Go {props.name} Go!</h2>
            <h2>This is a number: {2 * props.num}</h2>
        </div>
    );
}

export default Props;