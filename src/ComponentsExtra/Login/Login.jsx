import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/admin", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username, password }).toString(),
        credentials: "include", // Viktig for session-cookie
      });

      if (res.redirected) {
        onLogin?.(); // si til parent at vi er innlogget
        window.location.href = res.url; // gå til admin-siden
      } else {
        const text = await res.text();
        setError(text);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Kunne ikke logge inn");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Brukernavn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Passord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Logg inn</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default Login;
