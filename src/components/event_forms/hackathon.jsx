import { useState } from "react";
import Axios from "axios";
import "./form.css";

function Hackathon() {
  const [captainName, setCaptainName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [regNo, setRegNo] = useState("");
  const [teamCount, setTeamCount] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    try {
      await Axios.post(
        "https://forge-backend-service.onrender.com/hackathon",
        {
          captainName: captainName,
          phoneNumber: phoneNumber,
          regNo: regNo,
          teamCount: teamCount,
        },
        {
          header: {
            "content-type": "application/json",
          },
        }
      ).then(() => (window.location.href = "/succuss"));
    } catch (err) {
      window.alert(
        "Failed to submit. Please check the values you typed. Try typing unique vales"
      );
    }
  }

  return (
    <div className="form">
      <h1>Hackathon Registration</h1>
      <form method="POST" onSubmit={registerUser}>
        <input
          value={captainName}
          type="text"
          placeholder="Captain Name"
          onChange={(e) => setCaptainName(e.target.value)}
          required
        />
        <br />
        <input
          value={phoneNumber}
          type="tel"
          placeholder="1234567890"
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          required
        />
        <br />
        <input
          value={regNo}
          type="text"
          placeholder="Team Captain Registration number"
          onChange={(e) => setRegNo(e.target.value)}
          required
        />
        <br />
        <input
          value={teamCount}
          type="text"
          placeholder="Number of members in team (Max 4)"
          onChange={(e) => setTeamCount(e.target.value)}
          required
        />
        <br />
        <button type="submit" className="valorant-btn">
          <span class="underlay">
            <span class="label">Submit</span>
          </span>
        </button>
      </form>
    </div>
  );
}

export default Hackathon;
