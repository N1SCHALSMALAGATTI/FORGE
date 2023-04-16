import { useState } from "react";
import Axios from "axios";
import "./form.css";


function Fifa() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gamerTag, setGamerTag] = useState("");
  const [regNo, setRegNo] = useState("");
  const [cuspRank, setCuspRank] = useState("");

  async function registerFifaUser(event) {
    event.preventDefault();
    try {
      await Axios.post(
        "https://forge-backend-service.onrender.com/fifa",
        {
          name: name,
          email: email,
          gamerTag: gamerTag,
          regNo: regNo,
          cuspRank: cuspRank,
        },
        {
          header: {
            "content-type": "application/json",
          },
        }
      ).then(()=>window.location.href = "/succuss")
    } catch (err) {
      window.alert(
        "Failed to submit. Please check the values you typed. Try typing unique values."
      );
    }
    
  }

  return (
    <div className="form">
      <h1>Fifa Registration</h1>
      <form method="POST" onSubmit={registerFifaUser}>
        <input
          value={name}
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          value={gamerTag}
          type="text"
          placeholder="Gamer Tag"
          onChange={(e) => setGamerTag(e.target.value)}
          required
        />
        <br />
        <input
          value={regNo}
          type="text"
          placeholder="Registration Number ( ID No.)"
          onChange={(e) => setRegNo(e.target.value)}
          required
        />
        <br />
        <input
          value={cuspRank}
          type="text"
          placeholder="Cusp Rank"
          onChange={(e) => setCuspRank(e.target.value)}
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

export default Fifa;
