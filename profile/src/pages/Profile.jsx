import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Profile() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Vaishnavi’s Life Profile (Private)</h1>
      <p>This is the private area. Only approved users can see this.</p>

      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}