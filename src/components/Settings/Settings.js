import React, {useState} from 'react';
import cl from './settings.module.scss';
import CustomRadioButton from "../UI/CustomRadioButton/CustomRadioButton";
import svg from '../../images/svg/settings.svg';
import {useDispatch, useSelector} from "react-redux";
import {showFurigana, showHiragana, showKanjiOnly} from "../../store/nihongoModeReducer";
import {applyStyleClass} from "../../utils/applyStyleClass";
import CustomCheckbox from "../UI/CustomCheckbox/CustomCheckbox";
import {hideNumber, showNumber} from "../../store/showNumberReducer";

const Settings = () => {

    const [panelClass, setPanelClass] = useState(cl.panel + ' ' + cl.hide);
    const [gearClass, setGearClass] = useState(cl.gearImg);
    const mode = useSelector(state => state.nihongoMode)
    const dispatch = useDispatch();
    const checked = useSelector(state => state.showNumber)

    const hidePanel = () => {
        applyStyleClass(setPanelClass, cl.panel, cl.hide)
        applyStyleClass(setGearClass, cl.gearImg)
    }
    const toggleClass = () => {
        if (panelClass === cl.panel) {
            hidePanel()
        } else {
            applyStyleClass(setGearClass, cl.gearImg, cl.rotate)
            applyStyleClass(setPanelClass, cl.panel)
        }
    }
    const onMouseLeave = (e) => {
        if (e.target !== e.currentTarget) return
        hidePanel()
    }
    const changeNumbering = (e) => {
        e.target.checked
            ? dispatch(showNumber())
            : dispatch(hideNumber())
    }
    return (
        <div className={cl.settings} >
            <div className={cl.gearBtn} onClick={toggleClass} >
                <img src={svg} className={gearClass} alt={''}/>
            </div>
            <div className={panelClass} onMouseLeave={onMouseLeave}>
                <div className={cl.title}>What to show</div>
                <CustomRadioButton
                    group={'text'}
                    id={'text1'}
                    label={'kanji'}
                    checked={mode.kanji && !mode.furigana}
                    func={() => dispatch(showKanjiOnly())}
                />
                <CustomRadioButton
                    group={'text'}
                    id={'text2'}
                    label={'furigana'}
                    checked={mode.kanji && mode.furigana}
                    func={() => dispatch(showFurigana())}
                />
                <CustomRadioButton
                    group={'text'}
                    id={'text3'}
                    label={'hiragana'}
                    checked={mode.furigana && !mode.kanji}
                    func={() => dispatch(showHiragana())}
                />
                <div className={cl.title}>Numbering</div>
                <CustomCheckbox
                    id={'numbering'}
                    onChange={changeNumbering}
                    checked={checked}
                />
            </div>
        </div>
    );
};

export default Settings;