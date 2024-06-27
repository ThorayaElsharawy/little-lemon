export default function BookingForm() {
    return (
        <section className="reserve">
         <h1>Reserve a table</h1>
            <form>
               
                <div className="fieldset">
                    <label htmlFor="date">Choose date</label>
                    <input type="date" id="date" />
                </div>
                <div className="fieldset">
                    <label htmlFor="time">Choose time</label>
                    <select id="time ">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </div>
                <div className="fieldset">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" />
                </div>
                <div className="fieldset">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}