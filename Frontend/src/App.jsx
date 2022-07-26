
// import logo from './logo.svg'
// import './App.css'
import {SignUp} from './components/signup';
import {Login} from "./components/login"
// import { Sidebar } from './components/Sidebar/Sidebar';
import {RouterComponent} from "./components/Router/Router"
import {Routes,Route} from "react-router-dom"
import {AuthContext} from "./components/PrivateRoute/AuthContext"
import { useContext } from 'react';
import { useEffect } from 'react';
function App() {
const {handleAuth,checkAuth}=useContext(AuthContext)

useEffect(()=>{
handleAuth()
checkAuth()
},[])

  return (
    <div className="App">
      
      {/* <Sidebar/> */}
{/* <Login/>
     <SignUp/> */}
<Routes>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/' element={<SignUp/>}></Route>
  <Route path='*' element={<RouterComponent/>}></Route>

</Routes>

    </div>
  )
}

export default App
