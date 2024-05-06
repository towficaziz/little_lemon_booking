import React from "react";
import { useState } from "react";

const BookingForm =()=>{
    return (
        <header>
          <section>
            <form >
              <fieldset>
                <div>
                  <label htmlFor="book-date">Choose Date</label>
                  <input id="book-date" type="date" required/>
                </div>
                <div>
                  <label htmlFor="book-time">Choose Time</label>
                  <select id="book-time" required>
                    <option value="">Select a Time</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="book-guests">Number of Guests</label>
                  <input id="book-guests" min="1" placeholder={0} max={10} required></input>
                </div>
                <div>
                  <label htmlFor="book-occasion">Occasion</label>
                  <select id="book-occasion" required>
                    <option value="">Select an Option</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                  </select>
                </div>
                <div>
                  <input aria-label="On Click" ></input>
                </div>
              </fieldset>
            </form>
          </section>
        </header>
      );
    };

    export default BookingForm;