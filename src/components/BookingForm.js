import React from "react";
import { useState, useEffect } from "react";
import "./css/style.css";



const BookingForm = (props) => {

   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("");
   const [isFutureDateTime, setIsFutureDateTime] = useState(false);

   useEffect(() => {
     const selectedDateTime = new Date(date + "T" + times);
     const currentDate = new Date();
     setIsFutureDateTime(selectedDateTime > currentDate);
   }, [date, times]);


   const handleSumbit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <>
    
    <header  className="bg">
      <h2>Please Reserve Your Table Here:</h2>
    </header>
    <main>
        <div>
        <section>
        <form onSubmit={handleSumbit}>
          <fieldset>
          <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Office Party</option>
                <option>Graduation Party</option>
                <option>Bachelor Party</option>
                <option>Others</option>

              </select>
            </div>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
            </div>
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={20} required></input>
            </div>
            
            <div>
              <button className="button-container" style={{ cursor: 'pointer' }} aria-label="On Click"
                type={"submit"}
                value={"Book Now"}
                disabled={!isFutureDateTime || props.availableTimes.availableTimes.length === 0}>Confirm Reservation</button>
            </div>
          </fieldset>
        </form>
      </section>
      </div>
    </main>
    </>
  );
};

export default BookingForm;
