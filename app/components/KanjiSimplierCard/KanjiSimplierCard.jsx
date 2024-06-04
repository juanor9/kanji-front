import React from 'react';
import Link from "next/link";
import './KanjiSimplierCard.scss';
import setOkurigana from '@/app/transformations/okurigana';

const KanjiSimplierCard = ({ literal, readings, meanings, jlpt }) => {
  let meaningsEs = [];
  if (meanings && Array.isArray(meanings)) {
    meaningsEs = meanings.filter(meaning => meaning.language === "es");
  }

  if (jlpt === undefined){
    jlpt='';
  }

  const kanjiurl = `/kanji/${literal}`;

  return (
    <article
    className={`simplier-card simplier-card--${jlpt}`}
    role="region"
    aria-labelledby="kanji-title">
      <div className={`simplier-card__container simplier-card__container--${jlpt}`}>
      <div>
        <p
        id="kanji-title"
        className={`simplier-card__literal simplier-card__literal--${jlpt}`}
        lang='ja'
        >{literal}</p>
        <Link
            className={`simple-card__link simple-card__link--${jlpt}`}
            href={kanjiurl}
          >
            Ir al kanji
          </Link>
      </div>
      {meaningsEs.length > 0 && (
        <section className="simplier-card__section" aria-labelledby="significados-title">
          <dl className="simplier-card__list">
            {meaningsEs.map((meaning, index) => (
                <dd lang="es" key={index}>{meaning.meaning}</dd>
            ))}
          </dl>
        </section>
      )}
      </div>
    </article>
  );
};

export default KanjiSimplierCard;
