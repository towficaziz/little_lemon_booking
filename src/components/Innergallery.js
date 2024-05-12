import React from "react";
import show4 from "../images/pasta.png";
import show5 from "../images/table.png";
import show6 from "../images/fishbbq.png";
import { useState, useEffect } from "react";
import "./css/style.css";

const Innergallery = () => {
  // props is not required here
  return (
    <div>
      <main className="showmain">
        <section className="showcase showcaseupdate">
          {/* <h3 className="fonts">This weeks specials!</h3> */}
          <div>
            <img src={show4} alt="Pasta" />
            {/* <h4>Greek Salad</h4>
            <p>
              A healthy and refreshing mix of fresh vegetables, olives, and feta
              cheese, tossed in olive oil and herbs.
            </p> */}
          </div>
          <div>
            <img src={show5} alt="Inside of Restaurent" />
            {/* <h4>Lemon Dessert</h4>
            <p>
              A delightful lemon-flavored dessert with a tangy twist, perfect
              for satisfying your sweet cravings.
            </p> */}
          </div>
          <div>
            <img src={show6} alt="Fish BBQ" />
            {/* <h4>Greek Salad</h4>
            <p>
              Another view of our delicious Greek Salad, a customer favorite!
            </p> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Innergallery;
