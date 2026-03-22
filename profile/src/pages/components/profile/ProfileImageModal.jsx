// export default function ProfileImageModal({ open, onClose, imageSrc, altText }) {
//   if (!open) return null;

//   return (
//     <div className="profileImageModalOverlay" onClick={onClose}>
//       <div className="profileImageModalContent" onClick={(e) => e.stopPropagation()}>
//         <button className="profileImageModalClose" onClick={onClose}>
//           ✕
//         </button>

//         <img src={imageSrc} alt={altText} className="profileImageModalImage" />
//       </div>
//     </div>
//   );
// }

export default function ProfileImageModal({
  open,
  onClose,
  fileSrc,
  altText,
  fileType = "image",
}) {
  if (!open) return null;

  return (
    <div className="profileImageModalOverlay" onClick={onClose}>
      <div
        className="profileImageModalContent"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="profileImageModalClose" onClick={onClose}>
          ✕
        </button>

        {fileType === "pdf" ? (
          <iframe
            src={fileSrc}
            title={altText}
            className="profileImageModalIframe"
          />
        ) : (
          <img
            src={fileSrc}
            alt={altText}
            className="profileImageModalImage"
          />
        )}
      </div>
    </div>
  );
}