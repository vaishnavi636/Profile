// import { openFirebaseAsset } from "../../services/firebaseAssetOpener";

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
//       console.error("Failed to open asset:", error);
//       alert(
//         language === "en"
//           ? "Unable to open this file."
//           : "このファイルを開けませんでした。"
//       );
//     }
//   };

//   return (
//     <section className="profileAssetsSection">
//       <h3 className="profileSectionTitle">{title}</h3>

//       <div className="profileAssetsGrid premiumAssetGrid">
//         {assets.map((asset, idx) => {
//           const isOpenable = Boolean(asset.url || asset.storagePath);

//           return (
//             <article key={idx} className="assetCard premiumAssetCard">
//               <div className="assetPreviewWrap">
//                 {asset.type === "image" && asset.url ? (
//                   <img
//                     src={asset.url}
//                     alt={asset.title?.[language] || "Asset"}
//                     className="assetPreviewImage"
//                   />
//                 ) : asset.type === "pdf" ? (
//                   <div className="assetPdfBox">
//                     <div className="assetPdfIcon">PDF</div>
//                     <div className="assetPdfText">
//                       {language === "en" ? "Protected File" : "保護されたファイル"}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="schoolPlaceholderBox">
//                     <span>
//                       {asset.protected
//                         ? language === "en"
//                           ? "Protected File"
//                           : "保護されたファイル"
//                         : asset.placeholderLabel?.[language] || "Coming Soon"}
//                     </span>
//                   </div>
//                 )}
//               </div>

//               <div className="assetCardBody">
//                 <div className="assetCardTitle">{asset.title?.[language]}</div>

//                 {asset.description?.[language] ? (
//                   <div className="assetCardDesc">{asset.description[language]}</div>
//                 ) : null}

//                 {isOpenable ? (
//                   <button
//                     type="button"
//                     className="assetLink"
//                     onClick={() => handleOpen(asset)}
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
import { getFirebaseAssetUrl, openFirebaseAsset } from "../../services/firebaseAssetOpener";

function AssetPreview({ asset, language }) {
  const [resolvedUrl, setResolvedUrl] = useState(asset.url || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (asset.url) {
        setResolvedUrl(asset.url);
        return;
      }

      if (asset.protected && asset.storagePath) {
        try {
          setLoading(true);
          const url = await getFirebaseAssetUrl(asset);
          if (!cancelled) {
            setResolvedUrl(url);
          }
        } catch (error) {
          console.error("Failed to resolve asset preview:", error);
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

    load();

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

  if (asset.type === "pdf" && (resolvedUrl || asset.protected || asset.url)) {
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
      if (asset.protected && asset.storagePath) {
        await openFirebaseAsset(asset);
        return;
      }

      if (asset.url) {
        window.open(asset.url, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.error("Failed to open asset:", error);
      alert(language === "en" ? "Failed to open file." : "ファイルを開けませんでした。");
    }
  };

  return (
    <section className="profileAssetsSection">
      <h3 className="profileSectionTitle">{title}</h3>

      <div className="profileAssetsGrid premiumAssetGrid">
        {assets.map((asset, idx) => {
          const canOpen = !!asset.url || (asset.protected && asset.storagePath);

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
                    className="assetLink"
                    onClick={() => handleOpen(asset)}
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