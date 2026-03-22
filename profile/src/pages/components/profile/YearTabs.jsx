// export default function YearTabs({ tabs, activeTab, setActiveTab }) {
//   const visibleTabs = Object.entries(tabs).filter(([, value]) => {
//     if (value?.type === "assets") {
//       return Array.isArray(value.items) && value.items.length > 0;
//     }
//     return Array.isArray(value?.items) && value.items.length > 0;
//   });

//   return (
//     <section className="yearTabsRow">
//       {visibleTabs.map(([key, tab]) => (
//         <button
//           key={key}
//           className={`yearTabButton ${activeTab === key ? "active" : ""}`}
//           onClick={() => setActiveTab(key)}
//         >
//           {tab.label}
//         </button>
//       ))}
//     </section>
//   );
// }

export default function YearTabs({
  visibleTabs = [],
  activeTab,
  setActiveTab,
}) {
  return (
    <section className="yearTabsRow">
      {visibleTabs.map(([key, tab]) => (
        <button
          key={key}
          className={`yearTabButton ${activeTab === key ? "active" : ""}`}
          onClick={() => setActiveTab(key)}
        >
          {tab.label}
        </button>
      ))}
    </section>
  );
}