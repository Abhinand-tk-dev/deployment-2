import { Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/sign" element={<Signup/>} /> */}
      </Routes>
    </>
  )
}

export default App
