export const toggleStyleClass = (classSetter, styleClass, toggleClass) => {
    if (styleClass.includes(toggleClass)) {
        classSetter(styleClass.replace(toggleClass, ''))
    } else {
        classSetter(styleClass + ' ' + toggleClass)
    }
}