import './App.css'
import Navbar from './components/shared/Navbar'

const appRouter = createBrowserRouter([

  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/login',
    element:<login/>
  },
  {
    path:'/signup',
    element:<signup/>
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
