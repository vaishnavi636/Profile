import { db } from "../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { grantViews } from "./grants";
import { ADMIN_UID } from "../config/admin";

// ----- approvedUsers -----
export async function getApprovalDoc(uid) {
  const ref = doc(db, "approvedUsers", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

// ----- accessRequests -----
export async function getMyRequest(uid) {
  const ref = doc(db, "accessRequests", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

/**
 * Initial request (after signup + verify)
 */
export async function createOrUpdateInitialRequest(uid, email) {
  const ref = doc(db, "accessRequests", uid);
  await setDoc(
    ref,
    {
      uid,
      email,
      status: "PENDING",
      reason: "INITIAL",
      message: "",
      requestedAt: Date.now(),
      updatedAt: Date.now(),
    },
    { merge: true }
  );
}

/**
 * Renew request after views are exhausted
 */
export async function requestRenewAccess(uid, email, message) {
  const ref = doc(db, "accessRequests", uid);
  await setDoc(
    ref,
    {
      uid,
      email,
      status: "PENDING",
      reason: "RENEW",
      message: message || "",
      requestedAt: Date.now(),
      updatedAt: Date.now(),
    },
    { merge: true }
  );
}

/**
 * Admin: list pending requests
 */
export async function listPendingRequests() {
  const q = query(
    collection(db, "accessRequests"),
    where("status", "==", "PENDING"),
    orderBy("requestedAt", "desc")
  );

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/**
 * Admin: approve request
 * - marks request APPROVED
 * - ensures approvedUsers doc exists
 * - hard resets remainingViews = 2
 */
export async function approveUser(uid, email) {
  await updateDoc(doc(db, "accessRequests", uid), {
    status: "APPROVED",
    updatedAt: Date.now(),
  });

  await setDoc(
    doc(db, "approvedUsers", uid),
    {
      uid,
      email,
      approvedAt: Date.now(),
      approvedBy: ADMIN_UID,
    },
    { merge: true }
  );

  // ✅ resets to EXACTLY 2, not +2
  await grantViews(uid, 2);
}

/**
 * Admin: reject request
 */
export async function rejectUser(uid) {
  await updateDoc(doc(db, "accessRequests", uid), {
    status: "REJECTED",
    updatedAt: Date.now(),
  });
}