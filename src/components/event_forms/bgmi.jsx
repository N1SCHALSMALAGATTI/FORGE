import { useState } from "react";
import Axios from "axios";
import "./form.css";

function Bgmi() {
  const [teamName, setTeamName] = useState("");
  const [teamCaptain, setTeamCaptain] = useState("");
  const [regNo1, setRegNo1] = useState("");
  const [teamMate2, setTeamMate2] = useState("");
  const [regNo2, setRegNo2] = useState("");
  const [teamMate3, setTeamMate3] = useState("");
  const [regNo3, setRegNo3] = useState("");
  const [teamMate4, setTeamMate4] = useState("");
  const [regNo4, setRegNo4] = useState("");
  const [sub, setSub] = useState("");
  const [regNo5, setRegNo5] = useState("");
  const [captainIgName, setCaptainIgName] = useState("");
  const [TxId, setTxId] = useState("");

  async function registerBgmiUser(event) {
    event.preventDefault();
    try {
      await Axios.post(
        "https://forge-backend-service.onrender.com/bgmi",
        {
          teamName: teamName,
          teamCaptain: teamCaptain,
          regNo1: regNo1,
          teamMate2: teamMate2,
          regNo2: regNo2,
          teamMate3: teamMate3,
          regNo3: regNo3,
          teamMate4: teamMate4,
          regNo4: regNo4,
          sub: sub,
          regNo5: regNo5,
          captainIgName: captainIgName,
          TxId: TxId,
        },
        {
          header: {
            "content-type": "application/json",
          },
        }
      ).then(() => (window.location.href = "/succuss"));
    } catch (error) {
      window.alert(
        "Failed to submit. Please check the values you typed. Try typing unique values."
      );
    }
    
  }

  return (
    <div className="form">
      <h1>BGMI Registration</h1>
      <form method="POST" onSubmit={registerBgmiUser}>
        <input
          value={teamName}
          type="text"
          placeholder="Team Name"
          onChange={(e) => setTeamName(e.target.value)}
          required
        />
        <br />
        <input
          value={teamCaptain}
          type="text"
          placeholder="Captain Name"
          onChange={(e) => setTeamCaptain(e.target.value)}
          required
        />
        <br />
        <input
          value={regNo1}
          type="text"
          placeholder="Captain Registration Number"
          onChange={(e) => setRegNo1(e.target.value)}
          required
        />
        <br />
        <input
          value={teamMate2}
          type="text"
          placeholder="TeamMate-2 Name"
          onChange={(e) => setTeamMate2(e.target.value)}
          required
        />
        <br />
        <input
          value={regNo2}
          type="text"
          placeholder="TeamMate-2 Registration Number"
          onChange={(e) => setRegNo2(e.target.value)}
          required
        />
        <br />
        <input
          value={teamMate3}
          type="text"
          placeholder="TeamMate-3 Name"
          onChange={(e) => setTeamMate3(e.target.value)}
          required
        />
        <br />
        <input
          value={regNo3}
          type="text"
          placeholder="TeamMate-3 Registration Number"
          onChange={(e) => setRegNo3(e.target.value)}
          required
        />
        <br />
        <input
          value={teamMate4}
          type="text"
          placeholder="TeamMate-4 Name"
          onChange={(e) => setTeamMate4(e.target.value)}
          required
        />
        <br />
        <input
          value={regNo4}
          type="text"
          placeholder="TeamMate-4 Registration Number"
          onChange={(e) => setRegNo4(e.target.value)}
          required
        />
        <br />
        <input
          value={sub}
          type="text"
          placeholder="Substitution Name (optional)"
          onChange={(e) => setSub(e.target.value)}
        />
        <br />
        <input
          value={regNo5}
          type="text"
          placeholder="Substitution Registration (optional)"
          onChange={(e) => setRegNo5(e.target.value)}
        />
        <br />
        <input
          value={captainIgName}
          type="text"
          placeholder="Captain In-game Name"
          onChange={(e) => setCaptainIgName(e.target.value)}
          required
        />
        <br />
        <input
          value={TxId}
          type="text"
          placeholder="Transaction Id"
          onChange={(e) => setTxId(e.target.value)}
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

export default Bgmi;
