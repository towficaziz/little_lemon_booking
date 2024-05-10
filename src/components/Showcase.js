import React from "react";
import show1 from "../images/greek-salad1.jpg";
import show2 from "../images/lemon-dessert1.jpg";
import show3 from "../images/two.png";
import { useState, useEffect } from "react";
import "./css/style.css";

const Showcase = () => {
  // props is not required here
  return (
    <div>
      <main className="showmain">
        <section className="showcase">
          {/* <h3 className="fonts">This weeks specials!</h3> */}
          <div>
            <img src={show1} alt="Greek Salad" />
            <h4>Greek Salad</h4>
            <p>
              A healthy and refreshing mix of fresh vegetables, olives, and feta
              cheese, tossed in olive oil and herbs.
            </p>
          </div>
          <div>
            <img src={show2} alt="Lemon Dessert" />
            <h4>Lemon Dessert</h4>
            <p>
              A delightful lemon-flavored dessert with a tangy twist, perfect
              for satisfying your sweet cravings.
            </p>
          </div>
          <div>
            <img src={show1} alt="Greek Salad" />
            <h4>Greek Salad</h4>
            <p>
              Another view of our delicious Greek Salad, a customer favorite!
            </p>
          </div>
        </section>
      </main>
    </div>

    // <div>
    //   <main className="showmain">
    //     <section className="showcase">
    //       <div>
    //       <img src={show1} alt="Greek Salat" />
    //       </div>
    //       <div>
    //       <img src={show2} alt="Lemon Dessert" />
    //       </div>
    //       <div>
    //       <img src={show1} alt="Greek Salat" />
    //       </div>
    //     </section>
    //   </main>
    // </div>
  );
};

export default Showcase;
