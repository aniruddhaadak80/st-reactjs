 
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
    <center>
    <div className="div1">
      <h1 id='h11'>Hello react...</h1>
      <h2 id='h21'>I am learning React js from studytonioght ...</h2>
      <h2 id='h22'>My Introduction:</h2>
      <p>My name is : <b>{myintro.name}</b> .</p>
      <p>I lived in : <b>{myintro.address}</b>.</p>
      <p>My roll no is : <b>{myintro.roll}</b> .</p>
      <p>My passion is : <b>{myintro.passion}</b>.</p>
      


    </div>
    </center>
    
    </>  //end of fragment 
  );
}

export default App;
