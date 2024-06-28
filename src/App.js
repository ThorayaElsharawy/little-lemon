
import HomePage from "./pages/Homepage"
import BookingPage from "./pages/BookingPage"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import { useReducer } from "react"

const initializeTimes = ['11:00', '12:00', '13:00', '14:00']

const updateTimes = () => {}

function App() {
  const [state, dispatch] = useReducer(initializeTimes, updateTimes)

  const submitForm = () => {}

  const router = createBrowserRouter(
    createRoutesFromElements([
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage availableTimes={state} dispatch={dispatch} onSubmit={submitForm}  />} />
      </>
  
    ])
  )


  return (
    <RouterProvider router={router} />
  )
}

export default App;
