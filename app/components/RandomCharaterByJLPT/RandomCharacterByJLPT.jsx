import RandomCharacter from "../RandomCharacter/RandomCharacter";
import './RamdomCharacterByJLPT.scss';

const RandomKanjiByJLPT = () => {
  return(
    <div className="random-jlpt">
    <RandomCharacter
    jlpt={1}
    card='simplierCard'
    />
    <RandomCharacter
    jlpt={2}
    card='simplierCard'
    />
    <RandomCharacter
    jlpt={3}
    card='simplierCard'
    />
    <RandomCharacter
    jlpt={4}
    card='simplierCard'
    />
    <RandomCharacter
    jlpt={5}
    card='simplierCard'
    />
  </div>
  )
}
export default RandomKanjiByJLPT;
