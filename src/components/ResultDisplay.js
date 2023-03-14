import React from "react";
import "./ResultDisplay.css";

const ResultDisplay = ({ ipAddress, location, timeZone, isp }) => {
  return (
    <section className="display-container">
      <article>
        <h2>IP ADDRESS</h2>
        <p>{ipAddress}</p>
      </article>
      <article>
        <h2>LOCATION</h2>
        <p>{location}</p>
      </article>
      <article>
        <h2>TIMEZONE</h2>
        <p>{timeZone}</p>
      </article>
      <article>
        <h2>ISP</h2>
        <p>{isp}</p>
      </article>
    </section>
  );
};

export default ResultDisplay;
