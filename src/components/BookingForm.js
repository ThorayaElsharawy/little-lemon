import { useState } from "react"

const todayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, '0');
    const todayDate = `${yyyy}-${mm}-${dd}`;

    return todayDate
}

export default function BookingForm({ onSubmit, availableTimes }) {
    

    const [form, setForm] = useState({
        date: '',
        time: '17:00',
        guests: '',
        occasion: 'Birthday'
    })

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
        onSubmit(form)
        console.log(form)
    }

    return (
        <section className="reserve">
         <h1>Reserve a table</h1>
            <form onSubmit={handleSubmit}>
                <div className="fieldset">
                    <label htmlFor="date">Choose date</label>
                    <input type="date" id="date" name="date" value={form.date} onChange={handleChange} min={todayDate()} />
                </div>
                <div className="fieldset">
                    <label htmlFor="time">Choose time</label>
                    <select id="time" name="time" value={form.time} onChange={handleChange}>
                        {/* {availableTimes.map(time => (<option>{time}</option>))} */}
                        <option>00:00</option>
                    </select>
                </div>
                <div className="fieldset">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={form.guests} onChange={handleChange}/>
                </div>
                <div className="fieldset">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={form.occasion} name="occasion" onChange={handleChange}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}