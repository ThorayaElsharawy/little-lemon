import HomePage from "../pages/Homepage"
import BookingPage from "../pages/BookingPage"

import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route
} from "react-router-dom"
import { useReducer } from "react"

const updateTimes = (state, { type, payload }) => {
    return { availableTimes: fetchAPI(new Date()) }
}

const generateRondomTimes = (date) => {
    let times = new Set()
    for (let i = 0; i < 5; i++) {
        const hours = Math.floor(Math.random() * 24);
        const formattedHours = String(hours).padStart(2, '0');
        if (formattedHours !== '00') {
            times.add(`${formattedHours}:00`)
        }
    }

    return times
}

const fetchAPI = (date) => {
    let result = generateRondomTimes(date)
    console.log([...result])

    return [...result].sort()
}

export default function Main() {
    const initializeTimes = {
        availableTimes: fetchAPI(new Date())
    }

    const [state, dispatch] = useReducer(updateTimes, initializeTimes)

    const onSubmit = (formData) => {
        console.log(formData)
    }

    const router = createBrowserRouter(
        createRoutesFromElements([
            <>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage
                    dispatch={dispatch}
                    availableTimes={state.availableTimes}
                    submitForm={onSubmit} />} />
            </>

        ])
    )
    return (
        <RouterProvider router={router} />
    )
}