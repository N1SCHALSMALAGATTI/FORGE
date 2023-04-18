import React from "react";
import "./style.css";

function EventPage(props) {
  return (
    <div className="event-main">
      <div className="event1">
        <section class="event-page1">
          <div className="content1">
            <h1
              style={{ color: "#FF4654", fontFamily: "Play", fontSize: "4em" }}
            >
              {props.eventName}
            </h1>
            <p
              style={{
                color: "#efefef",
                fontFamily: "Rubik",
                textAlign: "left",
              }}
            >
              {props.eventDescription}
            </p>
            <span
              style={{
                color: "#f25e5e",
                fontFamily: "Rubik",
                textAlign: "left",
              }}
            >
              Event Venue:
            </span>
            <span
              style={{
                color: "#efefef",
                fontFamily: "Rubik",
                textAlign: "left",
              }}
            >
              {" "}
              {props.eventVenue}
            </span>
            <br />
            <span
              style={{
                color: "#f25e5e",
                fontFamily: "Rubik",
                textAlign: "left",
              }}
            >
              Entry Fee:
            </span>
            <span
              style={{
                color: "#efefef",
                fontFamily: "Rubik",
                textAlign: "left",
              }}
            >
              {props.entryFee}
            </span>
            <br />
            <span
              style={{
                color: "#f25e5e",
                fontFamily: "Rubik",
                textAlign: "left",
              }}
            >
              Prize Pool:
            </span>
            <span
              style={{
                color: "#efefef",
                fontFamily: "Rubik",
                textAlign: "left",
              }}
            >
              {props.prizePool}
            </span>
            <br />
            <span
              style={{
                color: "#f25e5e",
                fontFamily: "Rubik",
                textAlign: "left",
              }}
            >
              Date:
            </span>
            <span
              style={{
                color: "#efefef",
                fontFamily: "Rubik",
                textAlign: "left",
              }}
            >
              {props.eventDate}
            </span>
            <br />
            <span
              style={{
                color: "#f25e5e",
                fontFamily: "Rubik",
                textAlign: "left",
              }}
            >
              For enquiry:{" "}
            </span>
            <li>+91 73490 00173 - Rupak</li>
            <li>+91 79968 81962 - Vaishakh</li>
            <li>+91 6383 240 522 - Nikita</li>
            <button
              class="valorant-btn"
              onClick={() => (window.location.href = `${props.reference}`)}
            >
              <span class="underlay">
                <span class="label">Register</span>
              </span>
            </button>
          </div>
        </section>
        <div>
          <img src={props.imgLink}></img>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
