export default function ProfileHeader({ title, subtitle, yearLabel, language }) {
  return (
    <section className="profileHeaderCard">
      <div className="profileHeaderMeta">
        <span className="profileYearBadge">{yearLabel}</span>
        <span className="profileThemeBadge">
          {language === "en" ? "Life Timeline" : "ライフタイムライン"}
        </span>
      </div>

      <h1 className="profileMainTitle">{title}</h1>
      <p className="profileMainSubtitle">{subtitle}</p>
    </section>
  );
}