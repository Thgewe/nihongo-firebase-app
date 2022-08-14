import React, {useEffect, useRef, useState} from 'react';
import cl from './line.module.scss';
import {useSelector} from "react-redux";
import Furigana from "../UI/Furigana/Furigana";
import Hiragana from "../UI/Hiragana/Hiragana";
import {convertLine} from "../../utils/formatLine";
import {applyStyleClass} from "../../utils/applyStyleClass";
import {onKeyDown} from "../../utils/onKeyDown";
import RomanLine from "../UI/RomanLine/RomanLine";

const Line = ({value = '', isKanji = true}) => {

    const mode = useSelector(state => state.nihongoMode)

    const [text, setText] = useState(value);
    const [line, setLine] = useState([]);
    const [textClass, setTextClass] = useState(cl.text)
    const [inputClass, setInputClass] = useState(cl.input + ' ' + cl.hidden)
    const input = useRef();

    useEffect(() => {
        setProperLine()
    }, [])

    const setProperLine = () => {
        if (!isKanji) {
            setLine(text)
            return
        }
        setLine(convertLine(text))
    }
    const onBlur = (e) => {
        applyStyleClass(setTextClass, cl.text)
        applyStyleClass(setInputClass, cl.input, cl.hidden)
        setProperLine()
    }
    //'ぎの 街[をぎ]の 声[ぎ]をぎ, ゅっと 光[ひかり]が 包込[をぎり]む.'
    const showInput = (e) => {
        applyStyleClass(setTextClass, cl.text, cl.covered)
        applyStyleClass(setInputClass, cl.input)
        setTimeout(() => {
            input.current.focus()
        }, 0)
    }

    const setLineJSX = () => {
        if (!isKanji) {
            return <RomanLine>{line}</RomanLine>
        }
        return line.map((e) => {
            if (typeof e === "string") {
                return <Hiragana hiragana={e}/>
            }
            return <Furigana
                kanji={e.kanji}
                furigana={e.furigana}
                showKanji={mode.kanji}
                showFurigana={mode.furigana}
            />
        })
    }

    return (
        <div className={cl.line}>
            <div
                className={textClass}
                onClick={showInput}
            >
                {setLineJSX()}
            </div>
            <input
                className={inputClass}
                ref={input}
                onInput={(e) => setText(e.target.value)}
                value={text}
                onBlur={onBlur}
                onKeyDown={e => onKeyDown(e, 13, onBlur)}
            />
        </div>
    );
};

export default Line;