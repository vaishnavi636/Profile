export default function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="languageToggle">
      <button
        className={`languageBtn ${language === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
      >
        English
      </button>

      <button
        className={`languageBtn ${language === "ja" ? "active" : ""}`}
        onClick={() => setLanguage("ja")}
      >
        日本語
      </button>
    </div>
  );
}