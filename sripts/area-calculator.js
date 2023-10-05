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

function getParallelogramValueById() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setTextElement('parallelogram-area', area)
}
function getEllipseValueById() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = Math.PI * majorRadius * minorRadius;
    const areaTwoDecimals = area.toFixed(2);
    setTextElement('ellipse-area', areaTwoDecimals);
}
function getInputValue(fieldId) {
    const fieldIdValue = document.getElementById(fieldId);
    const fieldIdValueString = fieldIdValue.value;
    const field = parseFloat(fieldIdValueString);
    return field;
}
function setTextElement(elementId, area) {
    const setText = document.getElementById(elementId);
    setText.innerText = area;
}