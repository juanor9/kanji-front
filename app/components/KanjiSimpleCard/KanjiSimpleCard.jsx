import React from "react";
import Link from "next/link";
import "./KanjiSimpleCard.scss";
import setOkurigana from "@/app/transformations/okurigana";

const KanjiSimpleCard = ({ literal, readings, meanings, jlpt }) => {
  let meaningsEs = [];
  if (meanings && Array.isArray(meanings)) {
    meaningsEs = meanings.filter((meaning) => meaning.language === "es");
  }

  if (jlpt === undefined) {
    jlpt = "";
  }

  const onyomi = readings?.onyomi || [];
  const kunyomi = readings?.kunyomi || [];

  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  const kanjiurl = `/kanji/${literal}`;
  return (
    <article
      className={`simple-card simple-card--${jlpt}`}
      role="region"
      aria-labelledby="kanji-title"
    >
      <div className={`simple-card__container simple-card__container--${jlpt}`}>
        <div>
          <p
            id="kanji-title"
            className={`simple-card__literal simple-card__literal--${jlpt}`}
            lang="ja"
          >
            {literal}
          </p>

          <Link
            className={`simple-card__link simple-card__link--${jlpt}`}
            href={kanjiurl}
          >
            Ir al kanji
          </Link>
        </div>
        {kunyomi.length > 0 || onyomi.length > 0 ? (
          <section
            className="simple-card__section"
            aria-labelledby="lecturas-title"
          >
            <h2
              id="lecturas-title"
              className={`simple-card__h2 simple-card__h2--${jlpt}`}
            >
              Lecturas
            </h2>
            {kunyomi.length > 0 && (
              <div>
                <h3 className={`simple-card__h3 simple-card__h3--${jlpt}`}>
                  Kunyomi
                </h3>
                <ul className="simple-card__list">
                  {kunyomi.map((reading, index) => (
                    <li
                      key={index}
                      lang="ja"
                      dangerouslySetInnerHTML={createMarkup(
                        setOkurigana(reading)
                      )}
                    ></li>
                  ))}
                </ul>
              </div>
            )}
            {onyomi.length > 0 && (
              <div>
                <h3 className={`simple-card__h3 simple-card__h3--${jlpt}`}>
                  Onyomi
                </h3>
                <ul className="simple-card__list">
                  {onyomi.map((reading, index) => (
                    <li key={index} lang="ja">
                      {reading}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ) : null}

        {meaningsEs.length > 0 && (
          <section
            className="simple-card__section"
            aria-labelledby="significados-title"
          >
            <h2
              id="significados-title"
              className={`simple-card__h2 simple-card__h2--${jlpt}`}
            >
              Significados
            </h2>
            <dl className="simple-card__list">
              {meaningsEs.map((meaning, index) => (
                <dd lang="es" key={index}>
                  {meaning.meaning}
                </dd>
              ))}
            </dl>
          </section>
        )}
      </div>
    </article>
  );
};

export default KanjiSimpleCard;
