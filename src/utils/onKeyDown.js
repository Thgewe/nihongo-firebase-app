export const onKeyDown = (event, keyCode, callback) => {
    if (event.keyCode === keyCode) callback(event);
}