import logo from './logo.svg';
import './App.css';

function App() {

  // object in react
  const myintro={
  name:"Aniruddha Adak",
  address:"Tamluk",
   roll:30,
   passion:"Learning"
 
  }

  // return in function component 
  return (

    // it is called fragment
    <>
    <div className="App">
      <h1>Hello react...</h1>
      <h2>My Introduction:</h2>
      <p>My name is :{myintro.name}.</p>
      <p>I lived in :{myintro.address}.</p>
      <p>My roll no is :{myintro.roll}.</p>
      <p>My passion is :{myintro.passion}.</p>
      


    </div>
    
    </>  //end of fragment 
  );
}

export default App;
