import { useState } from "react"

const todayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, '0');
    const todayDate = `${yyyy}-${mm}-${dd}`;

    return todayDate
}

export default function BookingForm({ submitForm, availableTimes, dispatch }) {
    const [date, setDate] = useState('')
    const [form, setForm] = useState({
        time: '',
        guests: '',
        occasion: 'Birthday'
    })

    const handleChangeDate = (e) => {
        setDate(e.target.value);
        dispatch(e.target.value)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submitForm({
            ...form,
            date
        })
    }

    return (
        <section className="reserve">
            <h1>Reserve a table</h1>
            <form onSubmit={handleSubmit}>
                <div className="fieldset">
                    <label htmlFor="date">Choose date</label>
                    <input type="date" id="date" name="date" value={date} onChange={handleChangeDate} min={todayDate()} required/>
                </div>
                <div className="fieldset">
                    <label htmlFor="time">Choose time</label>
                    <select id="time" name="time" onChange={handleChange} value={form.time}>
                        {availableTimes.map((time, index) => (<option key={index}>{time}</option>))}
                    </select>
                </div>
                <div className="fieldset">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={form.guests} onChange={handleChange} />
                </div>
                <div className="fieldset">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={form.occasion} name="occasion" onChange={handleChange}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>

                <button aria-label="On Click" type="submit">Book Now</button>
            </form>
        </section>
    )
}