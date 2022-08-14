export const convertLine = (rawLine) => {

    // const newObj = {
    //     raw: rawLine, // initial line
    //     furigana: '', // array of furigana
    //     kanji: '', // array of kanji
    //     // hiragana: '',
    //     kanjiLine: '', // line with kanji
    //     hiraganaLine: '', // line with kanji replaced with furigana
    // }
    // newObj.furigana = newObj.raw.match(/(?<=\[).*?(?=])/g);
    // newObj.kanji = newObj.raw.match(/(?<=(?<![,.])\s).*?(?=\[)/g);
    // // newObj.hiragana = [...newObj.raw.match(/(?<=^).*?(?=\s)/g),
    // //     ...newObj.raw.match(/(?<=]).*?(?=\s)/g)];
    // newObj.kanjiLine = formatLine(newObj.raw, /\[(?<=\[).*?(?=])]/)
    // newObj.kanjiLine = formatSigns(formatLine(newObj.kanjiLine, /\s/))
    // newObj.hiraganaLine = formatSigns(formatLine(
    //     newObj.raw,
    //     /[,.\u3000-\u303f\u3040-\u309f\u30a0-\u30ff]/g,
    //     false
    // ))

    const splitLine = rawLine.split(' ');

    return splitLine.map((elem, i) => {
        if (elem.includes('[')) {
            return {
                furigana: elem.match(/(?<=\[).*(?=])/g).join(''),
                kanji: elem.match(/.*(?=\[)/g).join('')
            }
        } else {
            return formatSigns(elem)
        }
    })
}

// returns line without regex if replace = true
// else returns line only with regex
export const formatLine = (line, regex, replace = true) => {
    if (line.match(regex) && replace)
        return formatLine(line.replace(regex, ''), regex)
    if (line.match(regex) && !replace)
        return line.match(regex).join('')
    return line;
}

//replaces common grammatical signs with japanese
const formatSigns = (line) => {
    return line.replace(/,/g, '、 ').replace(/\./g, '。').replace(/。(?!$)/, '。 ')
}