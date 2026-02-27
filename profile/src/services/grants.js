// services/grants.js
import { db } from "../firebase";
import { doc, getDoc, setDoc, runTransaction } from "firebase/firestore";

/** Read grant doc (or null) */
export async function getGrant(uid) {
  const ref = doc(db, "accessGrants", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

/**
 * Admin: hard reset views to EXACTLY `views`
 * IMPORTANT: write ONLY allowed fields (to satisfy your hasOnly rule).
 */
export async function grantViews(uid, views) {
  const ref = doc(db, "accessGrants", uid);

  await setDoc(
    ref,
    {
      remainingViews: Number(views),
      totalViewsConsumed: 0,
      lastViewedAt: 0,
    },
    { merge: true }
  );
}

/**
 * User: consume exactly 1 view when entering /profile
 * IMPORTANT: transaction updates ONLY allowed fields.
 */
export async function consumeOneView(uid) {
  const ref = doc(db, "accessGrants", uid);

  await runTransaction(db, async (tx) => {
    const snap = await tx.get(ref);

    if (!snap.exists()) {
      throw new Error("No grant doc");
    }

    const data = snap.data();
    const remaining = Number(data.remainingViews ?? 0);
    const total = Number(data.totalViewsConsumed ?? 0);

    if (remaining <= 0) {
      throw new Error("No views left");
    }

    tx.update(ref, {
      remainingViews: remaining - 1,
      totalViewsConsumed: total + 1,
      lastViewedAt: Date.now(),
    });
  });
}