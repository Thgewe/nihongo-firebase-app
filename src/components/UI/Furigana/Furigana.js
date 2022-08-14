import React from 'react';
import cl from './furigana.module.scss';
const Furigana = ({
      kanji,
      furigana,
      size = 0.6,
      showKanji = true,
      showFurigana = true
}) => {

    const getFuriganaClass = () => {
        if (showKanji && showFurigana) {
            return cl.furigana
        } else if (showKanji) {
            return cl.hide
        } else {
            return cl.furiganaNormal
        }
    }
    const getKanjiClass = () => {
        if (showKanji) return cl.kanji
        return cl.hide
    }

    return (
        <div className={cl.word}>
            <div
                className={getFuriganaClass()}
                style={{fontSize: showFurigana && !showKanji ? "1em" : size + 'em'}}
            >
                {furigana}
            </div>
            <div
                className={getKanjiClass()}
            >{kanji}</div>
        </div>
    );
};

export default Furigana;