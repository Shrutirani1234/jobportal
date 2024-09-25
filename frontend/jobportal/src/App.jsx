import { LogIn } from 'lucide-react'
import './App.css'
import Navbar from './components/shared/Navbar'

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
