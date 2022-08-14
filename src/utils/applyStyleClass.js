
export const applyStyleClass = (classSetter, ...args) => {
    classSetter(args.join(' '));
}