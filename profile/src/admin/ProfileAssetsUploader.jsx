import React, { useMemo, useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase.js";
import { protectedAssets } from "../pages/data/protectedAssets";

export default function ProfileAssetsUploader() {
  const [selectedFiles, setSelectedFiles] = useState({});
  const [logs, setLogs] = useState([]);
  const [busy, setBusy] = useState(false);

  const assetEntries = useMemo(() => Object.entries(protectedAssets), []);

  const handleFileChange = (assetKey, file) => {
    setSelectedFiles((prev) => ({
      ...prev,
      [assetKey]: file || null,
    }));
  };

  const uploadOne = async (assetKey, assetMeta) => {
    const file = selectedFiles[assetKey];

    if (!file) {
      setLogs((prev) => [...prev, `Skipped ${assetKey}: no file selected`]);
      return;
    }

    const storageRef = ref(storage, assetMeta.storagePath);

    await uploadBytes(storageRef, file, {
      contentType: file.type || undefined,
    });

    setLogs((prev) => [
      ...prev,
      `Uploaded ${assetKey} -> ${assetMeta.storagePath}`,
    ]);
  };

  const uploadAll = async () => {
    setBusy(true);
    setLogs([]);

    try {
      for (const [assetKey, assetMeta] of assetEntries) {
        await uploadOne(assetKey, assetMeta);
      }

      setLogs((prev) => [...prev, "All uploads completed."]);
    } catch (error) {
      setLogs((prev) => [...prev, `Upload failed: ${error.message}`]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2>Profile Assets Uploader</h2>
      <p>Select the correct file for each asset key, then upload.</p>

      <div style={{ display: "grid", gap: "14px" }}>
        {assetEntries.map(([assetKey, assetMeta]) => (
          <div
            key={assetKey}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            <div><b>{assetKey}</b></div>
            <div style={{ fontSize: "13px", opacity: 0.8 }}>
              {assetMeta.storagePath}
            </div>
            <div style={{ marginTop: "8px" }}>
              <input
                type="file"
                accept={assetMeta.type === "pdf" ? ".pdf" : "image/*"}
                onChange={(e) =>
                  handleFileChange(assetKey, e.target.files?.[0] || null)
                }
              />
            </div>
            <div style={{ marginTop: "6px", fontSize: "13px" }}>
              Selected: {selectedFiles[assetKey]?.name || "No file selected"}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button type="button" onClick={uploadAll} disabled={busy}>
          Upload All Selected Files
        </button>
      </div>

      <div style={{ marginTop: "24px" }}>
        <h3>Logs</h3>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {logs.length ? logs.join("\n") : "No upload activity yet."}
        </pre>
      </div>
    </div>
  );
}