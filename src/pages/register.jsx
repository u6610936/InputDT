import { useState } from "react";
import "./register.css";

const GENDERS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const HOBBIES = [
  { label: "Music", value: "music" },
  { label: "Movies", value: "movies" },
  { label: "Plastic Model", value: "plastic model" },
];

const ROLES = [
  { label: "General Staff", value: "general staff" },
  { label: "Developer", value: "developer" },
  { label: "System Analyst", value: "system analyst" },
];

export default function Register() {
  // form state
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("male");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("general staff");


  const [submitted, setSubmitted] = useState(false);

  function onHobbiesToggle(e) {
    const v = e.target.value;
    const checked = e.target.checked;

    if (!checked) setHobbies((prev) => prev.filter((x) => x !== v));
    else setHobbies((prev) => [...prev, v]);
  }

  function onSubmit(e) {
    e.preventDefault();    
    setSubmitted(true);     
  }

  function onBack() {
    setSubmitted(false);     
  }

  return (
    <div className="page">
      <div className="card">
        {submitted ? (
          <>
            <h2 className="title">Submit Data</h2>

            <div className="result">
              <div>
                Username: <span className="value">{username}</span>
              </div>
              <div>
                Firstname: <span className="value">{firstname}</span>
              </div>
              <div>
                Lastname: <span className="value">{lastname}</span>
              </div>
              <div>
                Gender: <span className="value">{gender}</span>
              </div>
              <div>
                Hobbies: <span className="value">{hobbies.join(", ")}</span>
              </div>
              <div>
                Role: <span className="value">{role}</span>
              </div>
            </div>

            <button className="btn" type="button" onClick={onBack}>
              Back to form
            </button>
          </>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="label">Username</label>
              <input
                className="input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="label">Firstname</label>
              <input
                className="input"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="label">Lastname</label>
              <input
                className="input"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <div className="section">
              <div className="section-title">Gender</div>
              {GENDERS.map((g) => (
                <label key={g.value} className="row">
                  <input
                    type="radio"
                    name="gender"
                    value={g.value}
                    checked={gender === g.value}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>{g.label}</span>
                </label>
              ))}
            </div>

            <div className="section">
              <div className="section-title">Hobbies</div>
              {HOBBIES.map((h) => (
                <label key={h.value} className="row">
                  <input
                    type="checkbox"
                    value={h.value}
                    checked={hobbies.includes(h.value)}
                    onChange={onHobbiesToggle}
                  />
                  <span>{h.label}</span>
                </label>
              ))}
            </div>

            <div className="form-group">
              <label className="label">Role</label>
              <select
                className="select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                {ROLES.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
