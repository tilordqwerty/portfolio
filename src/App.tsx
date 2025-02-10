import './App.css';
import './index.css';
import './fonts/Lora/Lora-Bold.ttf';  

function App() {

  return (
    <>
      <h1 className='justify-center container mx-auto text-4xl text-center font-lora'>
        Hi, I am Gabriel Cisneros 👋
      </h1>
      <h2 className='headerComponent justify-center container mx-auto text-3xl text-center font-lora'>
        Software Developer
      </h2>
      <button className='box-border w-24 h-12 m-4 p-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-700'>
        Click me
      </button>
    </>
  )
}

export default App
