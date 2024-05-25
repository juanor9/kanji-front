import React from 'react';
import './KanjiSimpleCard.scss';
import setOkurigana from '@/app/transformations/okurigana';

const KanjiSimpleCard = ({ literal, readings, meanings }) => {
  let meaningsEs = [];
  if (meanings && Array.isArray(meanings)) {
    meaningsEs = meanings.filter(meaning => meaning.language === "es");
  }

  const onyomi = readings?.onyomi || [];
  const kunyomi = readings?.kunyomi || [];

  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <article className="simple-card" role="region" aria-labelledby="kanji-title">
      <div className='simple-card__container'>
      <div>
        <p id="kanji-title" className="simple-card__literal">{literal}</p>
      </div>
      <section className="simple-card__section" aria-labelledby="lecturas-title">
        <h2 id="lecturas-title" className="simple-card__h2">Lecturas</h2>
        {kunyomi.length > 0 && (
          <div>
            <h3 className="simple-card__h3">Kunyomi</h3>
            <ul className="simple-card__list">
              {kunyomi.map((reading, index) => (
                <li key={index} lang="jp" dangerouslySetInnerHTML={createMarkup(setOkurigana(reading))}></li>
              ))}
            </ul>
          </div>
        )}
        {onyomi.length > 0 && (
          <div>
            <h3 className="simple-card__h3">Onyomi</h3>
            <ul className="simple-card__list">
              {onyomi.map((reading, index) => (
                <li key={index} lang="jp">{reading}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
      {meaningsEs.length > 0 && (
        <section className="simple-card__section" aria-labelledby="significados-title">
          <h2 id="significados-title" className="simple-card__h2">Significados</h2>
          <dl>
            {meaningsEs.map((meaning, index) => (
              <div key={index}>
                <dt lang="es">Significado {index + 1}</dt>
                <dd lang="es">{meaning.meaning}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
      </div>
    </article>
  );
};

export default KanjiSimpleCard;
