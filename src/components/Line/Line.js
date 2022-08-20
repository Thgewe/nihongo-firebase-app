import React, {memo, useEffect, useRef, useState} from 'react';
import cl from './line.module.scss';
import {useSelector} from "react-redux";
import Furigana from "../UI/Furigana/Furigana";
import Hiragana from "../UI/Hiragana/Hiragana";
import {convertLine} from "../../utils/formatLine";
import {onKeyDown} from "../../utils/onKeyDown";
import RomanLine from "../UI/RomanLine/RomanLine";
import id from 'uniqid';
import {applyStyleClass} from "../../utils/applyStyleClass";

const Line = memo(({
      value = '',
      isKanji = true,
      number = '',
      changeLine,
}) => {

    const mode = useSelector(state => state.nihongoMode)

    const [text, setText] = useState(value);
    const [line, setLine] = useState([]);
    const [textClass, setTextClass] = useState(cl.text)
    const [inputClass, setInputClass] = useState(cl.input + ' ' + cl.hidden)
    const showNumber = useSelector(state => state.showNumber)
    const input = useRef();
    useEffect(() => {
        setProperLine()
    }, [])

    // sets the line and converts it if it is japanese
    const setProperLine = () => {
        if (!isKanji) {
            setLine(text)
            return
        }
        setLine(convertLine(text))
    }

    const onBlur = () => {
        applyStyleClass(setTextClass, cl.text)
        applyStyleClass(setInputClass, cl.input, cl.hidden)
        setProperLine()
        changeLine(text, number, isKanji)
    }

    const showInput = () => {
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
                return <Hiragana hiragana={e} key={id()}/>
            }
            return <Furigana
                kanji={e.kanji}
                furigana={e.furigana}
                showKanji={mode.kanji}
                showFurigana={mode.furigana}
                key={id()}
            />
        })
    }

    return (
        <div className={cl.line}>
            <div className={showNumber ? cl.number : cl.number + ' ' + cl.numberHide}>
                {number ? number + '.' : number}
            </div>
            <div className={cl.container} onClick={showInput}>
                <div
                    className={textClass}
                >
                    {setLineJSX()}
                </div>
            </div>
            <input
                className={inputClass}
                ref={input}
                onInput={(e) => setText(e.target.value)}
                value={text}
                onBlur={onBlur}
                onKeyDown={e => onKeyDown(e, 13/*Enter*/, onBlur)}
            />
        </div>
    );
});

export default Line;