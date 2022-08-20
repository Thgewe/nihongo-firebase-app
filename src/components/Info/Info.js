import React from 'react';
import cl from './info.module.scss';
import infoSVG from "../../images/svg/info.svg";
import {useState} from "react";
import {applyStyleClass} from "../../utils/applyStyleClass";

const Info = () => {
    const [panelClass, setPanelClass] = useState(cl.panel + ' ' + cl.hide);

    const hidePanel = () => {
        applyStyleClass(setPanelClass, cl.panel, cl.hide)
    }
    const togglePanelClass = () => {
        if (panelClass === cl.panel) {
            hidePanel()
        } else {
            applyStyleClass(setPanelClass, cl.panel)
        }
    }
    const onMouseLeave = (e) => {
        if (e.target !== e.currentTarget) return
        hidePanel()
    }

    return (
        <div className={cl.info} >
            <div className={cl.btn} onClick={togglePanelClass} >
                <img src={infoSVG} className={cl.image} alt={''}/>
            </div>
            <div className={panelClass} onMouseLeave={onMouseLeave}>
                <h3 className={cl.title}>How to add reading(furigana) to kanji</h3>
                <p className={cl.text}>
                    Put a space before the kanji.<br/>
                    After kanji open square brackets [].<br/>
                    Inside these brackets write furigana.<br/>
                    Put a space after the brackets.<br/><br/>
                    Ready. Furigana added.<br />
                    It will also be used for the hiragana only display mode.
                </p>
            </div>
        </div>
    );
};

export default Info;