import React from "react";
import "./companies.css";

import client1 from "./images/clients/adbl.png";
import client2 from "./images/clients/court.png";
import client3 from "./images/clients/buddha.png";
import client4 from "./images/clients/mbbl.png";
import client5 from "./images/clients/daraz.png";
import client6 from "./images/clients/socialdev.png";
import client7 from "./images/clients/swiss.png";

const clients = [client1, client2, client3, client4, client5, client6, client7];

const Companies = () => {
  return (
    <div className="companies-section">
      <h2>Our Clients</h2>
      <div className="companies-slider">
        <div className="companies-track">
          {clients.concat(clients).map((client, index) => (
            <div className="companies-item" key={index}>
              <img src={client} height={120} width={300} alt="Client Logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
