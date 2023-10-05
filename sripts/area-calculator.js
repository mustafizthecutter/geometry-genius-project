function getTriangleValueById() {
    const baseValue = document.getElementById('triangle-base');
    const baseValueString = baseValue.value;
    const base = parseFloat(baseValueString);

    const heightValue = document.getElementById('triangle-height');
    const heightValueString = heightValue.value;
    const height = parseFloat(heightValueString);
    const area = 0.5 * base * height;

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}

function getRectangleValueById() {
    const widthValue = document.getElementById('rectangle-width');
    const widthValueString = widthValue.value;
    const width = parseFloat(widthValueString);

    const lengthValue = document.getElementById('rectangle-length');
    const lengthValueString = lengthValue.value;
    const length = parseFloat(lengthValueString);
    const area = width * length;

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}