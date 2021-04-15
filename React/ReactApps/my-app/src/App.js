// Allows for the FirstComponent component to be used in this file/component (NOTE: File path must start with ./ and the .js file extension is not included in the file name)
import FirstComponent from './first-component/FirstComponent'
import Props from './props/Props'
import PropsDestruct from './props-destruct/PropsDestruct'
import Events from './events/Events'
import State from './state/State'

function App() {
  return (
    <div>
      <h1>Chicken says Hello from the App Component</h1>
      <FirstComponent />
      {/* The value of 'Chicken' is being passed as an argument for the name prop in the Props component. To set a non-string value for a prop you must use curly brackets {}. */}
      <Props name='Chicken' num={5} />
      <Props name='Nuggets' num={2} />
      {/* This PropsDestruct component uses the preset default values for the props since no values are passed in here */}
      <PropsDestruct />
      {/* This PropsDestruct component uses the values that are passed in here which override the default values */}
      <PropsDestruct greet='Hey' farewell='Later Dude' />
      <Events />
      <State />
    </div>
  );
}

export default App;