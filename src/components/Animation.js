exports.moveHovering = function moveHovering(coords) {
    const hovering = document.getElementById('hovering');
    const content = document.querySelector('.content');
    const {bottom, height, left, right, top, width} = coords;
    if (top + 5 >= content.offsetHeight) {
        return;
    }
    hovering.style.bottom = `${bottom}px`;
    hovering.style.height = `5px`;
    hovering.style.left = `${left}px`;
    hovering.style.right = `${right}px`;
    hovering.style.top = `${top + height - 5}px`;
    hovering.style.width = `${width}px`;
}