import HomePage from "../pages/Homepage"
import BookingPage from "../pages/BookingPage"

import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route
} from "react-router-dom"

export default function Main() {

    const router = createBrowserRouter(
        createRoutesFromElements([
            <>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
            </>

        ])
    )
    return (
        <RouterProvider router={router} />
    )
}