function getTriangleValueById() {
    const baseValue = document.getElementById('triangle-base');
    const baseValueString = baseValue.value;
    const base = parseFloat(baseValueString);

    const heightValue = document.getElementById('triangle-height');
    const heightValueString = heightValue.value;
    const height = parseFloat(heightValueString);
    console.log(height);
}