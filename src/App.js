import logo from './logo.svg';
import './App.css';

function App() {
  const Randomcolour=(e)=>{
    let body=document.querySelector("body")
    body.style.background = getrandomcolour();
  };
   function getrandomcolour(){
    let letters = '123456789ABCDEF'
    let color ='#'
    for(let i=0;i<6;i++){
      color+=letters[Math.floor(Math.random()*16)]
    }
    return color;
  }
  return (
    <>
    <diV className="container">
      <h1>
        Random Colour Genratour
      </h1>
      <button  className='btn' onClick={Randomcolour}>Click Me</button>
    </diV>
      
    </>
  );
}

export default App;
