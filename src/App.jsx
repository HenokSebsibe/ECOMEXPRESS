import './App.css'
const specialty = 'React';
function Greeting(props) {
  return <h1>My specialty is {props.name}.</h1>;

}
function App() {
  const showGreeting = true;
  function toggleGreeting() {
    if (showGreeting) {
      showGreeting = false;
    } else {
      showGreeting = true;
    }
  }
  return( 
    
    <div> 
       <button onClick={toggleGreeting}>click me</button>
    {showGreeting && <Greeting name={"python"} />}
  
  </div>


  )
    
  
}


export default App
