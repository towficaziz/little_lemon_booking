import React from "react";

import { useState, useEffect } from "react";
import "./css/style.css";

const Specials = (props) => {
  // props is not required
  return (
    <div>
      <main>
        <section>
          <h3 className="fonts">This weeks specials!</h3>
          <div>
            <button>Online Menu</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Specials;
