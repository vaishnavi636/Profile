// // import { useEffect, useMemo, useState } from "react";
// // import { Link } from "react-router-dom";
// // import ProfileSidebar from "./components/profile/ProfileSidebar";
// // import ProfileHeader from "./components/profile/ProfileHeader";
// // import LanguageToggle from "./components/profile/LanguageToggle";
// // import ProfileImageModal from "./components/profile/ProfileImageModal";
// // import YearTabs from "./components/profile/YearTabs";
// // import YearTabContent from "./components/profile/YearTabContent";
// // import { profilePhoto, profileTimeline } from "./data/profileTimeline";
// // import "../styles/profile.css";

// // export default function Profile() {
// //   const [language, setLanguage] = useState("en");
// //   const [selectedYear, setSelectedYear] = useState("2026");
// //   const [imageOpen, setImageOpen] = useState(false);
// //   const [activeTab, setActiveTab] = useState("");

// //   const activeSection = useMemo(() => {
// //     return profileTimeline.find((item) => item.id === selectedYear) || profileTimeline[0];
// //   }, [selectedYear]);

// //   const currentContent = activeSection.content[language];
// //   const tabs = currentContent.tabs || {};

// //   const visibleTabs = Object.entries(tabs).filter(([, value]) => {
// //     if (value?.type === "assets") {
// //       return Array.isArray(value.items) && value.items.length > 0;
// //     }
// //     return Array.isArray(value?.items) && value.items.length > 0;
// //   });

// //   useEffect(() => {
// //     if (visibleTabs.length > 0) {
// //       setActiveTab(visibleTabs[0][0]);
// //     } else {
// //       setActiveTab("");
// //     }
// //   }, [selectedYear, language]);

// //   const activeTabData = activeTab ? tabs[activeTab] : null;

// //   return (
// //     <div className="profilePageShell">
// //       <div className="profileTopBar">
// //         <Link to="/home" className="profileBackLink">
// //           ← Back to Home
// //         </Link>

// //         <LanguageToggle language={language} setLanguage={setLanguage} />
// //       </div>

// //       <div className="profileLayout">
// //         <ProfileSidebar
// //           language={language}
// //           selectedYear={selectedYear}
// //           setSelectedYear={setSelectedYear}
// //           profilePhoto={profilePhoto}
// //           onOpenImage={() => setImageOpen(true)}
// //           sections={profileTimeline}
// //         />

// //         <main className="profileContentPanel">
// //           <ProfileHeader
// //             title={currentContent.title}
// //             subtitle={currentContent.subtitle}
// //             yearLabel={activeSection.year}
// //             language={language}
// //           />

// //           <YearTabs
// //             tabs={tabs}
// //             activeTab={activeTab}
// //             setActiveTab={setActiveTab}
// //           />

// //           <YearTabContent
// //             tabKey={activeTab}
// //             tabData={activeTabData}
// //             language={language}
// //           />
// //         </main>
// //       </div>

// //       <ProfileImageModal
// //         open={imageOpen}
// //         onClose={() => setImageOpen(false)}
// //         fileSrc={profilePhoto.src}
// //         altText={profilePhoto.alt[language]}
// //         fileType="image"
// //        />
// //     </div>
// //   );
// // }



// import { useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import ProfileSidebar from "./components/profile/ProfileSidebar";
// import ProfileHeader from "./components/profile/ProfileHeader";
// import LanguageToggle from "./components/profile/LanguageToggle";
// import ProfileImageModal from "./components/profile/ProfileImageModal";
// import YearTabs from "./components/profile/YearTabs";
// import YearTabContent from "./components/profile/YearTabContent";
// import { getProfileSections } from "../services/profileSections";
// import { protectedAssets } from "./data/protectedAssets";
// import "../styles/profile.css";

// const profilePhoto = {
//   src: null,
//   alt: {
//     en: "Vaishnavi Sharma profile photo",
//     ja: "ヴァイシュナヴィ・シャルマのプロフィール写真",
//   },
// };

// export default function Profile() {
//   const [language, setLanguage] = useState("en");
//   const [sections, setSections] = useState([]);
//   const [selectedYear, setSelectedYear] = useState("");
//   const [imageOpen, setImageOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadData() {
//       try {
//         const data = await getProfileSections();
//         setSections(data);

//         if (data.length > 0) {
//           setSelectedYear(data[0].id);
//         }
//       } catch (error) {
//         console.error("Failed to load profile sections:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadData();
//   }, []);

//   const activeSection = useMemo(() => {
//     return sections.find((item) => item.id === selectedYear) || sections[0];
//   }, [sections, selectedYear]);

//   const currentContent = activeSection?.content?.[language] || {};
//   const tabs = currentContent.tabs || {};

//  const TAB_ORDER = [
//   "education",
//   "projects",
//   "certifications",
//   "achievements",
//   "assets",
//   "experience",
//   "internships",
//   "iit",
//   "y2022",
//   "y2023",
//   "y2024",
//   "y2025",
//   "y2026",
// ];

// const visibleTabs = Object.entries(tabs)
//   .filter(([, value]) => {
//     if (value?.type === "assets" || value?.type === "certificateGallery") {
//       return Array.isArray(value.items) && value.items.length > 0;
//     }
//     return Array.isArray(value?.items) && value.items.length > 0;
//   })
//   .sort(([a], [b]) => {
//     const aIndex = TAB_ORDER.indexOf(a);
//     const bIndex = TAB_ORDER.indexOf(b);

//     if (aIndex === -1 && bIndex === -1) return 0;
//     if (aIndex === -1) return 1;
//     if (bIndex === -1) return -1;

//     return aIndex - bIndex;
//   });

//   useEffect(() => {
//     if (visibleTabs.length > 0) {
//       setActiveTab(visibleTabs[0][0]);
//     } else {
//       setActiveTab("");
//     }
//   }, [selectedYear, language, sections]);

//   const activeTabData = activeTab ? tabs[activeTab] : null;

//   if (loading) {
//     return <div className="profilePageShell">Loading profile...</div>;
//   }

//   if (!activeSection) {
//     return <div className="profilePageShell">No profile data found.</div>;
//   }

//   return (
//     <div className="profilePageShell">
//       <div className="profileTopBar">
//         <Link to="/home" className="profileBackLink">
//           ← Back to Home
//         </Link>

//         <LanguageToggle language={language} setLanguage={setLanguage} />
//       </div>

//       <div className="profileLayout">
//         <ProfileSidebar
//           language={language}
//           selectedYear={selectedYear}
//           setSelectedYear={setSelectedYear}
//           profilePhoto={profilePhoto}
//           onOpenImage={() => setImageOpen(true)}
//           sections={sections}
//         />

//         <main className="profileContentPanel">
//           <ProfileHeader
//             title={currentContent.title}
//             subtitle={currentContent.subtitle}
//             yearLabel={activeSection.year}
//             language={language}
//           />

//           <YearTabs
//            visibleTabs={visibleTabs}
//            activeTab={activeTab}
//            setActiveTab={setActiveTab}
//            />

//           <YearTabContent
//             tabKey={activeTab}
//             tabData={activeTabData}
//             language={language}
//           />
//         </main>
//       </div>

//       <ProfileImageModal
//         open={imageOpen}
//         onClose={() => setImageOpen(false)}
//         fileSrc={profilePhoto.src}
//         altText={profilePhoto.alt[language]}
//         fileType="image"
//       />
//     </div>
//   );
// }


import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProfileSidebar from "./components/profile/ProfileSidebar";
import ProfileHeader from "./components/profile/ProfileHeader";
import LanguageToggle from "./components/profile/LanguageToggle";
import ProfileImageModal from "./components/profile/ProfileImageModal";
import YearTabs from "./components/profile/YearTabs";
import YearTabContent from "./components/profile/YearTabContent";
import { getProfileSections } from "../services/profileSections";
import { getFirebaseAssetUrl } from "../services/firebaseAssetOpener";
import { protectedAssets } from "./data/protectedAssets";
import "../styles/profile.css";

const TAB_ORDER = [
  "education",
  "projects",
  "certifications",
  "achievements",
  "assets",
  "experience",
  "internships",
  "iit",
  "y2022",
  "y2023",
  "y2024",
  "y2025",
  "y2026",
];

export default function Profile() {
  const [language, setLanguage] = useState("en");
  const [sections, setSections] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [imageOpen, setImageOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);
  const [profilePhotoSrc, setProfilePhotoSrc] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const [data, photoUrl] = await Promise.all([
          getProfileSections(),
          getFirebaseAssetUrl(protectedAssets.profilePhotoFile),
        ]);

        setSections(data);
        setProfilePhotoSrc(photoUrl);

        if (data.length > 0) {
          setSelectedYear(data[0].id);
        }
      } catch (error) {
        console.error("Failed to load profile data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const profilePhoto = {
    src: profilePhotoSrc,
    alt: {
      en: "Vaishnavi Sharma profile photo",
      ja: "ヴァイシュナヴィ・シャルマのプロフィール写真",
    },
  };

  const activeSection = useMemo(() => {
    return sections.find((item) => item.id === selectedYear) || sections[0];
  }, [sections, selectedYear]);

  const currentContent = activeSection?.content?.[language] || {};
  const tabs = currentContent.tabs || {};

  const visibleTabs = Object.entries(tabs)
    .filter(([, value]) => {
      if (value?.type === "assets" || value?.type === "certificateGallery") {
        return Array.isArray(value.items) && value.items.length > 0;
      }
      return Array.isArray(value?.items) && value.items.length > 0;
    })
    .sort(([a], [b]) => {
      const aIndex = TAB_ORDER.indexOf(a);
      const bIndex = TAB_ORDER.indexOf(b);

      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;

      return aIndex - bIndex;
    });

  useEffect(() => {
    if (visibleTabs.length > 0) {
      setActiveTab(visibleTabs[0][0]);
    } else {
      setActiveTab("");
    }
  }, [selectedYear, language, sections]);

  const activeTabData = activeTab ? tabs[activeTab] : null;

  if (loading) {
    return <div className="profilePageShell">Loading profile...</div>;
  }

  if (!activeSection) {
    return <div className="profilePageShell">No profile data found.</div>;
  }

  return (
    <div className="profilePageShell">
      <div className="profileTopBar">
        <Link to="/home" className="profileBackLink">
          ← Back to Home
        </Link>

        <LanguageToggle language={language} setLanguage={setLanguage} />
      </div>

      <div className="profileLayout">
        <ProfileSidebar
          language={language}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          profilePhoto={profilePhoto}
          onOpenImage={() => setImageOpen(true)}
          sections={sections}
        />

        <main className="profileContentPanel">
          <ProfileHeader
            title={currentContent.title}
            subtitle={currentContent.subtitle}
            yearLabel={activeSection.year}
            language={language}
          />

          <YearTabs
            visibleTabs={visibleTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <YearTabContent
            tabKey={activeTab}
            tabData={activeTabData}
            language={language}
          />
        </main>
      </div>

      <ProfileImageModal
        open={imageOpen}
        onClose={() => setImageOpen(false)}
        fileSrc={profilePhoto.src}
        altText={profilePhoto.alt[language]}
        fileType="image"
      />
    </div>
  );
}