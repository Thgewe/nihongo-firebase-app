// converts the string to the proper array
export const convertLine = (rawLine) => {

    const splitLine = rawLine.split(' ');

    return splitLine.map((elem) => {
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