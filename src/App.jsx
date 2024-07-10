import './App.css'
import About from './components/About'
import Form from './components/Form'
import Navbar from './components/Navbar'

function App() {

  return (
   <div>
   <Navbar  title="TextUtils"   home="Home" AboutTextutils="About us"/>
    <div className="container" >
   <Form heading='Enter the text below' />
   </div>
   <div>
   <About heading='About us'/>
   </div>
   </div>
  )
}

export default App
