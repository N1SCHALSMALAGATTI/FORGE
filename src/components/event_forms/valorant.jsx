import { useState } from "react";
import Axios from "axios";
import "./form.css";

function Valorant() {
  const [TeamName, setTeamName] = useState("");
  const [CaptainPhone, setCaptainPhone] = useState("");
  const [IgName, setIgName] = useState("");
  const [DiscordId, setDiscordId] = useState("");
  const [TxId, setTxId] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    try {
      await Axios.post(
        "https://forge-backend-service.onrender.com/valo",
        {
          TeamName: TeamName,
          CaptainPhone: CaptainPhone,
          CaptainIgName: IgName,
          CaptainDiscordId: DiscordId,
          TxId: TxId,
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
      <h1>Valorant Registration</h1>
      <form method="POST" onSubmit={registerUser}>
        <input
          value={TeamName}
          type="text"
          placeholder="Team Name"
          onChange={(e) => setTeamName(e.target.value)}
          required
        />
        <br />
        <input
          value={CaptainPhone}
          type="tel"
          placeholder="Phone Number"
          onChange={(e) => setCaptainPhone(e.target.value)}
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          required
        />
        <br />
        <input
          value={IgName}
          type="text"
          placeholder="Captain InGame Name and Tagline"
          onChange={(e) => setIgName(e.target.value)}
          required
        />
        <br />
        <input
          value={DiscordId}
          type="text"
          placeholder="Discord Id"
          onChange={(e) => setDiscordId(e.target.value)}
          required
        />
        <br />
        <input
          value={TxId}
          type="text"
          placeholder="Transaction Id/UPI Reference"
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

export default Valorant;
