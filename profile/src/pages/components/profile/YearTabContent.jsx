// import AssetGallery from "./AssetGallery";

// function BulletList({ title, items = [] }) {
//   if (!items?.length) return null;

//   return (
//     <div className="eduBulletBlock">
//       <div className="eduBulletTitle">{title}</div>
//       <ul className="eduBulletList">
//         {items.map((item, idx) => (
//           <li key={idx} className="eduBulletItem">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function SchoolEducationCard({ item, language }) {
//   return (
//     <article className="eduShowcaseCard">
//       <div className="eduShowcaseHeader">
//         <div className="eduShowcaseHeading">
//           <h4 className="eduShowcaseLevel">{item.level?.[language]}</h4>
//           <div className="eduShowcaseInstitution">{item.institution?.[language]}</div>

//           {item.degreeLabel?.[language] ? (
//             <div className="eduShowcaseDegree">{item.degreeLabel[language]}</div>
//           ) : null}
//         </div>

//         <div className="eduShowcaseSide">
//           <div className="eduYearPill">{item.year}</div>

//           {item.scoreBadge?.[language] ? (
//             <div className="eduScoreHero">{item.scoreBadge[language]}</div>
//           ) : null}
//         </div>
//       </div>

//       <div className="eduMetaRow">
//         {item.board?.[language] ? (
//           <div className="eduMetaChip">
//             <span className="eduMetaLabel">
//               {language === "en" ? "Board / University" : "大学・教育機関"}
//             </span>
//             <span className="eduMetaValue">{item.board[language]}</span>
//           </div>
//         ) : null}

//         {item.stream?.[language] ? (
//           <div className="eduMetaChip">
//             <span className="eduMetaLabel">
//               {language === "en" ? "Stream" : "専攻"}
//             </span>
//             <span className="eduMetaValue">{item.stream[language]}</span>
//           </div>
//         ) : null}

//         {item.result?.[language] ? (
//           <div className="eduMetaChip">
//             <span className="eduMetaLabel">
//               {language === "en" ? "Result" : "結果"}
//             </span>
//             <span className="eduMetaValue">{item.result[language]}</span>
//           </div>
//         ) : null}

//         {item.score?.[language] ? (
//           <div className="eduMetaChip">
//             <span className="eduMetaLabel">
//               {language === "en" ? "Marks / Grade" : "得点・評価"}
//             </span>
//             <span className="eduMetaValue">{item.score[language]}</span>
//           </div>
//         ) : null}
//       </div>

//       {item.summary?.[language] ? (
//         <p className="eduSummaryText">{item.summary[language]}</p>
//       ) : null}

//       <div className="eduLowerGrid">
//         <BulletList
//           title={language === "en" ? "Academic Highlights" : "学業ハイライト"}
//           items={item.academicHighlights?.[language] || []}
//         />

//         <BulletList
//           title={
//             language === "en"
//               ? "Project Highlights During This Phase"
//               : "この時期のプロジェクト実績"
//           }
//           items={item.projectHighlights?.[language] || []}
//         />
//       </div>

//       {item.documents?.length ? (
//         <div className="eduDocRow">
//           {item.documents.map((doc, idx) => (
//             <a
//               key={idx}
//               href={doc.url}
//               target="_blank"
//               rel="noreferrer"
//               className="eduDocBtn"
//             >
//               {doc.title?.[language]}
//             </a>
//           ))}
//         </div>
//       ) : null}
//     </article>
//   );
// }

// function AchievementHighlights({ tabData, language }) {
//   return (
//     <section className="yearTabPanel premiumTabPanel">
//       <h3 className="yearTabPanelTitle">{tabData.label}</h3>

//       {tabData.highlights?.length ? (
//         <div className="schoolStatsGrid">
//           {tabData.highlights.map((item, idx) => (
//             <div key={idx} className="schoolStatCard">
//               <div className="schoolStatValue">{item.value}</div>
//               <div className="schoolStatLabel">{item.label?.[language]}</div>
//             </div>
//           ))}
//         </div>
//       ) : null}

//       <div className="schoolAchievementList">
//         {tabData.items?.map((item, idx) => (
//           <div key={idx} className="schoolAchievementCard">
//             <div className="schoolAchievementDot" />
//             <div>
//               <div className="schoolAchievementTitle">{item.title?.[language]}</div>
//               <div className="schoolAchievementDesc">
//                 {item.description?.[language]}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function ProjectCards({ tabData, language }) {
//   return (
//     <section className="yearTabPanel premiumTabPanel">
//       <h3 className="yearTabPanelTitle">{tabData.label}</h3>

//       <div className="projectShowcaseGrid">
//         {tabData.items.map((item, idx) => (
//           <article key={idx} className="projectShowcaseCard">
//             <div className="projectShowcaseTop">
//               <div>
//                 <h4 className="projectShowcaseTitle">{item.title?.[language]}</h4>

//                 {item.role?.[language] ? (
//                   <div className="projectRoleBadge">{item.role[language]}</div>
//                 ) : null}
//               </div>

//               {item.date?.[language] ? (
//                 <div className="projectDateBadge">{item.date[language]}</div>
//               ) : null}
//             </div>

//             {item.stack?.[language] ? (
//               <div className="projectStackLine">
//                 <span className="projectStackLabel">
//                   {language === "en" ? "Tech Stack" : "技術スタック"}
//                 </span>
//                 <span className="projectStackValue">{item.stack[language]}</span>
//               </div>
//             ) : null}

//             {item.description?.[language] ? (
//               <p className="projectMainDesc">{item.description[language]}</p>
//             ) : null}

//             <div className="projectInfoGrid">
//               {item.contribution?.[language]?.length ? (
//                 <div className="projectInfoBlock">
//                   <div className="projectInfoTitle">
//                     {language === "en" ? "What I Built" : "担当内容"}
//                   </div>
//                   <ul className="projectInfoList">
//                     {item.contribution[language].map((point, i) => (
//                       <li key={i}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : null}

//               {item.impact?.[language]?.length ? (
//                 <div className="projectInfoBlock">
//                   <div className="projectInfoTitle">
//                     {language === "en" ? "Why It Matters" : "この経験の価値"}
//                   </div>
//                   <ul className="projectInfoList">
//                     {item.impact[language].map((point, i) => (
//                       <li key={i}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : null}
//             </div>

//             {item.proofNote?.[language] ? (
//               <div className="projectProofBox">{item.proofNote[language]}</div>
//             ) : null}
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default function YearTabContent({ tabKey, tabData, language }) {
//   if (!tabKey || !tabData) {
//     return (
//       <div className="yearTabPanel">
//         <p>{language === "en" ? "No content available." : "表示できる内容がありません。"}</p>
//       </div>
//     );
//   }

//   if (tabData.type === "schoolEducation") {
//     return (
//       <section className="yearTabPanel premiumTabPanel">
//         <h3 className="yearTabPanelTitle">{tabData.label}</h3>
//         <div className="eduShowcaseGrid">
//           {tabData.items.map((item, idx) => (
//             <SchoolEducationCard key={idx} item={item} language={language} />
//           ))}
//         </div>
//       </section>
//     );
//   }

//   if (tabData.type === "achievementHighlights") {
//     return <AchievementHighlights tabData={tabData} language={language} />;
//   }

//   if (tabData.type === "projectCards") {
//     return <ProjectCards tabData={tabData} language={language} />;
//   }

//   if (tabData.type === "certificateGallery" || tabData.type === "assets") {
//     return (
//       <div className="yearTabPanel premiumTabPanel">
//         <AssetGallery
//           title={tabData.label}
//           assets={tabData.items}
//           language={language}
//         />
//       </div>
//     );
//   }

//   return (
//     <section className="yearTabPanel premiumTabPanel">
//       <h3 className="yearTabPanelTitle">{tabData.label}</h3>
//       <div className="yearTabPanelBody">
//         <ul className="yearTabList">
//           {tabData.items.map((item, idx) => (
//             <li key={idx}>{typeof item === "string" ? item : JSON.stringify(item)}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }


import AssetGallery from "./AssetGallery";
import { openFirebaseAsset } from "../../../services/firebaseAssetOpener";

function BulletList({ title, items = [] }) {
  if (!items?.length) return null;

  return (
    <div className="eduBulletBlock">
      <div className="eduBulletTitle">{title}</div>
      <ul className="eduBulletList">
        {items.map((item, idx) => (
          <li key={idx} className="eduBulletItem">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SchoolEducationCard({ item, language }) {
  const handleDocOpen = async (doc) => {
    try {
      if (doc.protected && doc.storagePath) {
        await openFirebaseAsset(doc);
        return;
      }

      if (doc.url) {
        window.open(doc.url, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.error("Failed to open document:", error);
      alert(language === "en" ? "Failed to open document." : "資料を開けませんでした。");
    }
  };

  return (
    <article className="eduShowcaseCard">
      <div className="eduShowcaseHeader">
        <div className="eduShowcaseHeading">
          <h4 className="eduShowcaseLevel">{item.level?.[language]}</h4>
          <div className="eduShowcaseInstitution">{item.institution?.[language]}</div>

          {item.degreeLabel?.[language] ? (
            <div className="eduShowcaseDegree">{item.degreeLabel[language]}</div>
          ) : null}
        </div>

        <div className="eduShowcaseSide">
          <div className="eduYearPill">{item.year}</div>

          {item.scoreBadge?.[language] ? (
            <div className="eduScoreHero">{item.scoreBadge[language]}</div>
          ) : null}
        </div>
      </div>

      <div className="eduMetaRow">
        {item.board?.[language] ? (
          <div className="eduMetaChip">
            <span className="eduMetaLabel">
              {language === "en" ? "Board / University" : "大学・教育機関"}
            </span>
            <span className="eduMetaValue">{item.board[language]}</span>
          </div>
        ) : null}

        {item.stream?.[language] ? (
          <div className="eduMetaChip">
            <span className="eduMetaLabel">
              {language === "en" ? "Stream" : "専攻"}
            </span>
            <span className="eduMetaValue">{item.stream[language]}</span>
          </div>
        ) : null}

        {item.result?.[language] ? (
          <div className="eduMetaChip">
            <span className="eduMetaLabel">
              {language === "en" ? "Result" : "結果"}
            </span>
            <span className="eduMetaValue">{item.result[language]}</span>
          </div>
        ) : null}

        {item.score?.[language] ? (
          <div className="eduMetaChip">
            <span className="eduMetaLabel">
              {language === "en" ? "Marks / Grade" : "得点・評価"}
            </span>
            <span className="eduMetaValue">{item.score[language]}</span>
          </div>
        ) : null}
      </div>

      {item.summary?.[language] ? (
        <p className="eduSummaryText">{item.summary[language]}</p>
      ) : null}

      <div className="eduLowerGrid">
        <BulletList
          title={language === "en" ? "Academic Highlights" : "学業ハイライト"}
          items={item.academicHighlights?.[language] || []}
        />

        <BulletList
          title={
            language === "en"
              ? "Project Highlights During This Phase"
              : "この時期のプロジェクト実績"
          }
          items={item.projectHighlights?.[language] || []}
        />
      </div>

      {item.documents?.length ? (
        <div className="eduDocRow">
          {item.documents.map((doc, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleDocOpen(doc)}
              className="eduDocBtn"
            >
              {doc.title?.[language]}
            </button>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function AchievementHighlights({ tabData, language }) {
  return (
    <section className="yearTabPanel premiumTabPanel">
      <h3 className="yearTabPanelTitle">{tabData.label}</h3>

      {tabData.highlights?.length ? (
        <div className="schoolStatsGrid">
          {tabData.highlights.map((item, idx) => (
            <div key={idx} className="schoolStatCard">
              <div className="schoolStatValue">{item.value}</div>
              <div className="schoolStatLabel">{item.label?.[language]}</div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="schoolAchievementList">
        {tabData.items?.map((item, idx) => (
          <div key={idx} className="schoolAchievementCard">
            <div className="schoolAchievementDot" />
            <div>
              <div className="schoolAchievementTitle">{item.title?.[language]}</div>
              <div className="schoolAchievementDesc">
                {item.description?.[language]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCards({ tabData, language }) {
  return (
    <section className="yearTabPanel premiumTabPanel">
      <h3 className="yearTabPanelTitle">{tabData.label}</h3>

      <div className="projectShowcaseGrid">
        {tabData.items.map((item, idx) => (
          <article key={idx} className="projectShowcaseCard">
            <div className="projectShowcaseTop">
              <div>
                <h4 className="projectShowcaseTitle">{item.title?.[language]}</h4>

                {item.role?.[language] ? (
                  <div className="projectRoleBadge">{item.role[language]}</div>
                ) : null}
              </div>

              {item.date?.[language] ? (
                <div className="projectDateBadge">{item.date[language]}</div>
              ) : null}
            </div>

            {item.stack?.[language] ? (
              <div className="projectStackLine">
                <span className="projectStackLabel">
                  {language === "en" ? "Tech Stack" : "技術スタック"}
                </span>
                <span className="projectStackValue">{item.stack[language]}</span>
              </div>
            ) : null}

            {item.description?.[language] ? (
              <p className="projectMainDesc">{item.description[language]}</p>
            ) : null}

            <div className="projectInfoGrid">
              {item.contribution?.[language]?.length ? (
                <div className="projectInfoBlock">
                  <div className="projectInfoTitle">
                    {language === "en" ? "What I Built" : "担当内容"}
                  </div>
                  <ul className="projectInfoList">
                    {item.contribution[language].map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {item.impact?.[language]?.length ? (
                <div className="projectInfoBlock">
                  <div className="projectInfoTitle">
                    {language === "en" ? "Why It Matters" : "この経験の価値"}
                  </div>
                  <ul className="projectInfoList">
                    {item.impact[language].map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {item.proofNote?.[language] ? (
              <div className="projectProofBox">{item.proofNote[language]}</div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function YearTabContent({ tabKey, tabData, language }) {
  if (!tabKey || !tabData) {
    return (
      <div className="yearTabPanel">
        <p>{language === "en" ? "No content available." : "表示できる内容がありません。"}</p>
      </div>
    );
  }

  if (tabData.type === "schoolEducation") {
    return (
      <section className="yearTabPanel premiumTabPanel">
        <h3 className="yearTabPanelTitle">{tabData.label}</h3>
        <div className="eduShowcaseGrid">
          {tabData.items.map((item, idx) => (
            <SchoolEducationCard key={idx} item={item} language={language} />
          ))}
        </div>
      </section>
    );
  }

  if (tabData.type === "achievementHighlights") {
    return <AchievementHighlights tabData={tabData} language={language} />;
  }

  if (tabData.type === "projectCards") {
    return <ProjectCards tabData={tabData} language={language} />;
  }

  if (tabData.type === "certificateGallery" || tabData.type === "assets") {
    return (
      <div className="yearTabPanel premiumTabPanel">
        <AssetGallery
          title={tabData.label}
          assets={tabData.items}
          language={language}
        />
      </div>
    );
  }

  return (
    <section className="yearTabPanel premiumTabPanel">
      <h3 className="yearTabPanelTitle">{tabData.label}</h3>
      <div className="yearTabPanelBody">
        <ul className="yearTabList">
          {tabData.items.map((item, idx) => (
            <li key={idx}>{typeof item === "string" ? item : JSON.stringify(item)}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}