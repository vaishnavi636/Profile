// import { ref, getBlob } from "firebase/storage";
// import { storage } from "../configs/firebase";

// export async function openFirebaseAsset(asset) {
//   if (!asset?.storagePath) {
//     throw new Error("Missing storagePath");
//   }

//   const popup = window.open("", "_blank", "noopener,noreferrer");

//   if (!popup) {
//     throw new Error("Popup blocked");
//   }

//   try {
//     popup.document.write(
//       "<p style='font-family: Arial, sans-serif; padding: 20px;'>Loading file...</p>"
//     );

//     const fileRef = ref(storage, asset.storagePath);
//     const blob = await getBlob(fileRef);
//     const objectUrl = URL.createObjectURL(blob);

//     popup.location.href = objectUrl;

//     setTimeout(() => {
//       URL.revokeObjectURL(objectUrl);
//     }, 60000);
//   } catch (error) {
//     popup.close();
//     throw error;
//   }
// }

import { ref, getBlob, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

// For image preview inside the page
export async function getFirebaseAssetUrl(asset) {
  if (!asset?.storagePath) {
    throw new Error("Missing storagePath");
  }

  const fileRef = ref(storage, asset.storagePath);

  // Best for <img src="...">
  return await getDownloadURL(fileRef);
}

// For opening file in new tab
export async function openFirebaseAsset(asset) {
  if (!asset?.storagePath) {
    throw new Error("Missing storagePath");
  }

  const popup = window.open("", "_blank", "noopener,noreferrer");

  if (!popup) {
    throw new Error("Popup blocked");
  }

  try {
    popup.document.write(
      "<p style='font-family: Arial, sans-serif; padding: 20px;'>Loading file...</p>"
    );

    const fileRef = ref(storage, asset.storagePath);
    const blob = await getBlob(fileRef);
    const objectUrl = URL.createObjectURL(blob);

    popup.location.href = objectUrl;

    setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
    }, 60000);
  } catch (error) {
    popup.close();
    throw error;
  }
}