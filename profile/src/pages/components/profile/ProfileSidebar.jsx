export default function ProfileSidebar({
  language,
  selectedYear,
  setSelectedYear,
  profilePhoto,
  onOpenImage,
  sections,
}) {
  return (
    <aside className="profileSidebar">
      <div className="profileSidebarBrand">
        <button className="profileImageButton" onClick={onOpenImage}>
          <img
            src={profilePhoto.src}
            alt={profilePhoto.alt[language]}
            className="profileSidebarImage"
          />
        </button>

        <div className="profileSidebarIdentity">
          <div className="profileSidebarName">
            {language === "en" ? "Vaishnavi Sharma" : "ヴァイシュナヴィ・シャルマ"}
          </div>
          <div className="profileSidebarRole">
            {language === "en" ? "Software Developer" : "ソフトウェア開発者"}
          </div>
        </div>
      </div>

      <nav className="profileYearNav">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setSelectedYear(section.id)}
            className={`profileYearItem ${selectedYear === section.id ? "active" : ""}`}
          >
            <span className="profileYearBullet" />
            <span>{section.year}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}