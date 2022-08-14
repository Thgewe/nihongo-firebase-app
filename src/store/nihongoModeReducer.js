const defaultState = {
    kanji: true,
    furigana: true,
}

const SHOW_KANJI_ONLY = 'SHOW_KANJI_ONLY'
const SHOW_KANJI_AND_FURIGANA = 'SHOW_KANJI_AND_FURIGANA';
const SHOW_HIRAGANA = 'SHOW_HIRAGANA';

export const nihongoModeReducer = (state = defaultState, action) => {
    switch (action.type) {

        case SHOW_KANJI_ONLY:
            return {
                kanji: true,
                furigana: false,
            }
        case SHOW_KANJI_AND_FURIGANA:
            return {
                kanji: true,
                furigana: true,
            }
        case SHOW_HIRAGANA:
            return {
                kanji: false,
                furigana: true,
            }

        default:
            return state
    }
}

export const showKanjiOnly = () => ({type: SHOW_KANJI_ONLY})
export const showHiragana = () => ({type: SHOW_HIRAGANA})
export const showFurigana = () => ({type: SHOW_KANJI_AND_FURIGANA})