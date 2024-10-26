import { Home, LogIn } from 'lucide-react'
import './App.css'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'

const appRouter = createBrowserRouter([

  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/login',
    element:<LogIn/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/browse',
    element:<Browse/>
  }
])

function App() {

  return (
    <>
      <RouterProvider router = {appRouter}/>
    
    </>
  )
}

export default App
