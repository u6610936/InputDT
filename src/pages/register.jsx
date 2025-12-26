import { useState } from "react";
import "./Register.css";

const GENDERS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const HOBBIES = [
  { label: "Music", value: "music" },
  { label: "Movies", value: "movies" },
  { label: "Sports", value: "sports" },
];

const ROLES = [
  { label: "General Staff", value: "general staff" },
  { label: "Developer", value: "developer" },
  { label: "Manager", value: "manager" },
];

export default function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [gender, setGender] = useState("other");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("general staff");

  function onHobbiesToggle(event) {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      setHobbies((prev) => prev.filter((item) => item !== targetValue));
    } else {
      setHobbies((prev) => [...prev, targetValue]);
    }
  }

  return (
    <div className="page">
      <div className="card">
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

        <hr className="divider" />

        {/* reflect value */}
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
      </div>
    </div>
  );
}
