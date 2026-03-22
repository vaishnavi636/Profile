import React, { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import { profileTimeline } from "../pages/data/profileTimeline.js";

function normalizeNode(node) {
  if (Array.isArray(node)) {
    return node.map(normalizeNode);
  }

  if (node && typeof node === "object") {
    const out = {};

    for (const [key, value] of Object.entries(node)) {
      out[key] = normalizeNode(value);
    }

    // if url is already a protected storage path string, keep it ready for Storage usage
    if (typeof out.url === "string" && out.url.startsWith("protected/")) {
      out.storagePath = out.url;
      out.protected = true;
    }

    return out;
  }

  return node;
}

export default function ProfileDataSeeder() {
  const [logs, setLogs] = useState([]);
  const [busy, setBusy] = useState(false);

  const seedProfileSections = async () => {
    setBusy(true);
    setLogs([]);

    try {
      for (const section of profileTimeline) {
        if (!section?.id) continue;

        const payload = {
          year: section.year,
          content: normalizeNode(section.content),
          updatedAt: serverTimestamp(),
        };

        await setDoc(doc(db, "profileSections", section.id), payload, {
          merge: true,
        });

        setLogs((prev) => [...prev, `Seeded: profileSections/${section.id}`]);
      }

      setLogs((prev) => [...prev, "Done seeding profileTimeline to Firestore."]);
    } catch (error) {
      console.error(error);
      setLogs((prev) => [...prev, `Seed failed: ${error.message}`]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2>Profile Data Seeder</h2>
      <p>Click once to upload your local profileTimeline data into Firestore.</p>

      <button type="button" onClick={seedProfileSections} disabled={busy}>
        {busy ? "Seeding..." : "Seed profileTimeline to Firestore"}
      </button>

      <div style={{ marginTop: "24px" }}>
        <h3>Logs</h3>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {logs.length ? logs.join("\n") : "No activity yet."}
        </pre>
      </div>
    </div>
  );
}