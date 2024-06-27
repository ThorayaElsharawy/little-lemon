
import HomePage from "./pages/Homepage"
import BookingPage from "./pages/BookingPage"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements([
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
    </>

  ])
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
