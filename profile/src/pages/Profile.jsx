import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui", maxWidth: 980 }}>
      <h1>Vaishnavi’s Life Profile (Private)</h1>
      <p style={{ color: "#555" }}>
        This content is protected. Viewing is controlled by owner approval.
      </p>

      <div style={{ marginTop: 14 }}>
        <Link to="/home">← Back to Home</Link>
      </div>

      <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
        <Section title="🏆 Achievements">
          Football certificates, awards, DesignOps recognition, etc.
        </Section>

        <Section title="🎓 Education">
          10th, 12th, BSc, MSc
        </Section>

        <Section title="💼 Experience">
          Capgemini, TCS, key projects
        </Section>

        <Section title="🧩 Projects">
          External projects, hackathons, tools
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ padding: 12, borderRadius: 12, border: "1px solid #eee", background: "#fff" }}>
      <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>
      <div style={{ color: "#333" }}>{children}</div>
    </div>
  );
}