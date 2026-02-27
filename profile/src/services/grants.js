import { db } from "../firebase";
import { doc, getDoc, runTransaction, setDoc } from "firebase/firestore";

export async function getGrant(uid) {
  const ref = doc(db, "accessGrants", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

/**
 * Admin grants EXACTLY "views" remaining (hard reset),
 * not an increment.
 */
export async function grantViews(uid, views, grantedBy) {
  const ref = doc(db, "accessGrants", uid);
  await setDoc(
    ref,
    {
      remainingViews: views, // ✅ hard reset
      grantedAt: Date.now(),
      grantedBy,
      // keep history (do not reset)
    },
    { merge: true }
  );
}

/**
 * Atomically consumes 1 view for the user.
 * Throws:
 *  - NO_GRANT
 *  - NO_VIEWS_LEFT
 */
export async function consumeOneView(uid) {
  const ref = doc(db, "accessGrants", uid);

  return runTransaction(db, async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists()) throw new Error("NO_GRANT");

    const data = snap.data();
    const remaining = Number(data.remainingViews ?? 0);
    if (remaining <= 0) throw new Error("NO_VIEWS_LEFT");

    const total = Number(data.totalViewsConsumed ?? 0);

    tx.set(
      ref,
      {
        remainingViews: remaining - 1,
        totalViewsConsumed: total + 1,
        lastViewedAt: Date.now(),
      },
      { merge: true }
    );

    return { remainingViews: remaining - 1, totalViewsConsumed: total + 1 };
  });
}