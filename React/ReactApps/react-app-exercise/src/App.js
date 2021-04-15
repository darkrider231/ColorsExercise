// ReactApp Exericse
// 2b
import Bonus from './bonus/Bonus'
import Exercise from './exercise/Exercise'


function App() {
  return (
    <div>
      {/* 2c */}
      <Exercise />
      {/* 3a */}
      <Exercise good='Awesome' bad='Terrible' />
    {/* 6g */}
    <Bonus />
    </div>
  );
}

export default App;
