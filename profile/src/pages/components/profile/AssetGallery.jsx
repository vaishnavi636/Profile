// // export default function AssetGallery({ title, assets = [], language }) {
// //   if (!assets.length) return null;

// //   return (
// //     <section className="profileAssetsSection">
// //       <h3 className="profileSectionTitle">{title}</h3>

// //       <div className="profileAssetsGrid">
// //         {assets.map((asset, idx) => (
// //           <div key={idx} className="assetCard">
// //             {asset.type === "image" ? (
// //               <img
// //                 src={asset.url}
// //                 alt={asset.title[language]}
// //                 className="assetPreviewImage"
// //               />
// //             ) : (
// //               <div className="assetPdfBox">PDF</div>
// //             )}

// //             <div className="assetCardBody">
// //               <div className="assetCardTitle">{asset.title[language]}</div>

// //               {asset.description?.[language] ? (
// //                 <div className="assetCardDesc">{asset.description[language]}</div>
// //               ) : null}

// //               <a
// //                 href={asset.url}
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 className="assetLink"
// //               >
// //                 {asset.type === "pdf"
// //                   ? language === "en"
// //                     ? "Open PDF"
// //                     : "PDFを開く"
// //                   : language === "en"
// //                   ? "Open Image"
// //                   : "画像を開く"}
// //               </a>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }


// export default function AssetGallery({ title, assets = [], language }) {
//   if (!assets.length) {
//     return (
//       <section className="profileAssetsSection">
//         <h3 className="profileSectionTitle">{title}</h3>
//         <div className="schoolEmptyState">
//           {language === "en"
//             ? "No certificate files added yet."
//             : "まだ証明書ファイルが追加されていません。"}
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="profileAssetsSection">
//       <h3 className="profileSectionTitle">{title}</h3>

//       <div className="profileAssetsGrid schoolAssetGrid">
//         {assets.map((asset, idx) => (
//           <div key={idx} className="assetCard schoolAssetCard">
//             {asset.url ? (
//               asset.type === "image" ? (
//                 <img
//                   src={asset.url}
//                   alt={asset.title[language]}
//                   className="assetPreviewImage"
//                 />
//               ) : (
//                 <div className="assetPdfBox">PDF</div>
//               )
//             ) : (
//               <div className="schoolPlaceholderBox">
//                 <span>{asset.placeholderLabel?.[language] || "Coming Soon"}</span>
//               </div>
//             )}

//             <div className="assetCardBody">
//               <div className="assetCardTitle">{asset.title[language]}</div>

//               {asset.description?.[language] ? (
//                 <div className="assetCardDesc">{asset.description[language]}</div>
//               ) : null}

//               {asset.url ? (
//                 <a
//                   href={asset.url}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="assetLink"
//                 >
//                   {asset.type === "pdf"
//                     ? language === "en"
//                       ? "Open Document"
//                       : "資料を開く"
//                     : language === "en"
//                     ? "Open Certificate"
//                     : "証明書を開く"}
//                 </a>
//               ) : (
//                 <div className="assetLinkDisabled">
//                   {language === "en" ? "Add file later" : "あとでファイル追加"}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useEffect, useState } from "react";
// import {
//   getFirebaseAssetUrl,
//   openFirebaseAsset,
// } from "../../../services/firebaseAssetOpener";

// function AssetPreview({ asset, language }) {
//   const [resolvedUrl, setResolvedUrl] = useState(asset.url || "");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     let cancelled = false;

//     async function loadPreview() {
//       if (asset.url) {
//         setResolvedUrl(asset.url);
//         return;
//       }

//       if (asset.protected && asset.storagePath && asset.type === "image") {
//         try {
//           setLoading(true);
//           const url = await getFirebaseAssetUrl(asset);
//           if (!cancelled) {
//             setResolvedUrl(url);
//           }
//         } catch (error) {
//           console.error("Failed to load asset preview:", error);
//           if (!cancelled) {
//             setResolvedUrl("");
//           }
//         } finally {
//           if (!cancelled) {
//             setLoading(false);
//           }
//         }
//       }
//     }

//     loadPreview();

//     return () => {
//       cancelled = true;
//     };
//   }, [asset]);

//   if (asset.type === "image" && resolvedUrl) {
//     return (
//       <img
//         src={resolvedUrl}
//         alt={asset.title?.[language] || "Asset"}
//         className="assetPreviewImage"
//       />
//     );
//   }

//   if (asset.type === "pdf" && (asset.url || asset.storagePath)) {
//     return (
//       <div className="assetPdfBox">
//         <div className="assetPdfIcon">PDF</div>
//         <div className="assetPdfText">
//           {language === "en" ? "Document Preview" : "資料プレビュー"}
//         </div>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="schoolPlaceholderBox">
//         <span>{language === "en" ? "Loading..." : "読み込み中..."}</span>
//       </div>
//     );
//   }

//   return (
//     <div className="schoolPlaceholderBox">
//       <span>{asset.placeholderLabel?.[language] || "Coming Soon"}</span>
//     </div>
//   );
// }

// export default function AssetGallery({ title, assets = [], language }) {
//   if (!assets.length) {
//     return (
//       <section className="profileAssetsSection">
//         <h3 className="profileSectionTitle">{title}</h3>
//         <div className="schoolEmptyState">
//           {language === "en"
//             ? "No files added yet."
//             : "まだファイルが追加されていません。"}
//         </div>
//       </section>
//     );
//   }

//   const handleOpen = async (asset) => {
//     try {
//       if (asset.protected && asset.storagePath) {
//         await openFirebaseAsset(asset);
//         return;
//       }

//       if (asset.url) {
//         window.open(asset.url, "_blank", "noopener,noreferrer");
//       }
//     } catch (error) {
//       console.error("Failed to open file:", error);
//       alert(language === "en" ? "Failed to open file." : "ファイルを開けませんでした。");
//     }
//   };

//   return (
//     <section className="profileAssetsSection">
//       <h3 className="profileSectionTitle">{title}</h3>

//       <div className="profileAssetsGrid premiumAssetGrid">
//         {assets.map((asset, idx) => {
//           const canOpen = !!asset.url || (asset.protected && asset.storagePath);

//           return (
//             <article key={idx} className="assetCard premiumAssetCard">
//               <div className="assetPreviewWrap">
//                 <AssetPreview asset={asset} language={language} />
//               </div>

//               <div className="assetCardBody">
//                 <div className="assetCardTitle">{asset.title?.[language]}</div>

//                 {asset.description?.[language] ? (
//                   <div className="assetCardDesc">{asset.description[language]}</div>
//                 ) : null}

//                 {canOpen ? (
//                   <button
//                     type="button"
//                     onClick={() => handleOpen(asset)}
//                     className="assetLink"
//                   >
//                     {language === "en" ? "Open File" : "ファイルを開く"}
//                   </button>
//                 ) : (
//                   <div className="assetLinkDisabled">
//                     {language === "en" ? "Add file later" : "あとで追加"}
//                   </div>
//                 )}
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import {
  getFirebaseAssetUrl,
  openFirebaseAsset,
} from "../../../services/firebaseAssetOpener";

function isDirectHttpUrl(value) {
  return typeof value === "string" && /^https?:\/\//i.test(value);
}

function isStoragePath(value) {
  return typeof value === "string" && value.startsWith("protected/");
}

function AssetPreview({ asset, language }) {
  const initialUrl = isDirectHttpUrl(asset.url) ? asset.url : "";
  const [resolvedUrl, setResolvedUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadPreview() {
      // public URL case
      if (isDirectHttpUrl(asset.url)) {
        setResolvedUrl(asset.url);
        return;
      }

      // Firebase protected file case
      const storagePath =
        asset.storagePath ||
        (isStoragePath(asset.url) ? asset.url : "");

      if (asset.type === "image" && storagePath) {
        try {
          setLoading(true);
          const url = await getFirebaseAssetUrl({ storagePath });
          if (!cancelled) {
            setResolvedUrl(url);
          }
        } catch (error) {
          console.error("Failed to load asset preview:", error);
          if (!cancelled) {
            setResolvedUrl("");
          }
        } finally {
          if (!cancelled) {
            setLoading(false);
          }
        }
      }
    }

    loadPreview();

    return () => {
      cancelled = true;
    };
  }, [asset]);

  if (asset.type === "image" && resolvedUrl) {
    return (
      <img
        src={resolvedUrl}
        alt={asset.title?.[language] || "Asset"}
        className="assetPreviewImage"
      />
    );
  }

  const hasPdf =
    asset.type === "pdf" &&
    (isDirectHttpUrl(asset.url) || asset.storagePath || isStoragePath(asset.url));

  if (hasPdf) {
    return (
      <div className="assetPdfBox">
        <div className="assetPdfIcon">PDF</div>
        <div className="assetPdfText">
          {language === "en" ? "Document Preview" : "資料プレビュー"}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="schoolPlaceholderBox">
        <span>{language === "en" ? "Loading..." : "読み込み中..."}</span>
      </div>
    );
  }

  return (
    <div className="schoolPlaceholderBox">
      <span>{asset.placeholderLabel?.[language] || "Coming Soon"}</span>
    </div>
  );
}

export default function AssetGallery({ title, assets = [], language }) {
  if (!assets.length) {
    return (
      <section className="profileAssetsSection">
        <h3 className="profileSectionTitle">{title}</h3>
        <div className="schoolEmptyState">
          {language === "en"
            ? "No files added yet."
            : "まだファイルが追加されていません。"}
        </div>
      </section>
    );
  }

  const handleOpen = async (asset) => {
    try {
      const storagePath =
        asset.storagePath ||
        (isStoragePath(asset.url) ? asset.url : "");

      if (storagePath) {
        await openFirebaseAsset({ storagePath });
        return;
      }

      if (isDirectHttpUrl(asset.url)) {
        window.open(asset.url, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.error("Failed to open file:", error);
      alert(
        language === "en"
          ? "Failed to open file."
          : "ファイルを開けませんでした。"
      );
    }
  };

  return (
    <section className="profileAssetsSection">
      <h3 className="profileSectionTitle">{title}</h3>

      <div className="profileAssetsGrid premiumAssetGrid">
        {assets.map((asset, idx) => {
          const canOpen =
            isDirectHttpUrl(asset.url) ||
            !!asset.storagePath ||
            isStoragePath(asset.url);

          return (
            <article key={idx} className="assetCard premiumAssetCard">
              <div className="assetPreviewWrap">
                <AssetPreview asset={asset} language={language} />
              </div>

              <div className="assetCardBody">
                <div className="assetCardTitle">{asset.title?.[language]}</div>

                {asset.description?.[language] ? (
                  <div className="assetCardDesc">{asset.description[language]}</div>
                ) : null}

                {canOpen ? (
                  <button
                    type="button"
                    onClick={() => handleOpen(asset)}
                    className="assetLink"
                  >
                    {language === "en" ? "Open File" : "ファイルを開く"}
                  </button>
                ) : (
                  <div className="assetLinkDisabled">
                    {language === "en" ? "Add file later" : "あとで追加"}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}