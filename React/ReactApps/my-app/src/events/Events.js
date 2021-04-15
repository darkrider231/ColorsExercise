// EVENTS

const Events = () => {
  
    const dClick = () => alert('You Double Clicked');
    
    return (
      <div>
        <h1>This is the Events Component</h1>
        {/* The function that is set as the value for the event listener (The "onClick" in this case) run the when event occurs (NOTE: In this case it runs when the "CLICK HERE" button is clicked) */}
        <button onClick={() => alert('YOU CLICKED THE BUTTON. YAY!')}>CLICK HERE</button>
        {/* In this case the dClick pre-created function is used */}
        <button onDoubleClick={dClick}>DOUBLE CLICK</button>
      </div>
    );
  }
  
  export default Events;