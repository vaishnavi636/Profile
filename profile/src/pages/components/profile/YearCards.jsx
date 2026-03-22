export default function YearCards({ cards }) {
  const visibleCards = cards.filter((card) => card.items && card.items.length > 0);

  return (
    <section className="yearCardsBand">
      {visibleCards.map((card) => (
        <div key={card.key} className="yearBandCard">
          <div className="yearBandTitle">{card.label}</div>

          <ul className="yearBandList">
            {card.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}