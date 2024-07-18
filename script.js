function calculateCircleArea() {
    const radius = document.getElementById("radius").value;
    const area = Math.PI * radius * radius;
    document.getElementById("circleArea").innerText = "Area: " + area.toFixed(2);
}

function calculateSquareArea() {
    const side = document.getElementById("side").value;
    const area = side * side;
    document.getElementById("squareArea").innerText = "Area: " + area.toFixed(2);
}

function calculateRectangleArea() {
    const length = document.getElementById("length").value;
    const width = document.getElementById("width").value;
    const area = length * width;
    document.getElementById("rectangleArea").innerText = "Area: " + area.toFixed(2);
}

function calculateSphereVolume() {
    const radius = document.getElementById("radiusSphere").value;
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("sphereVolume").innerText = "Volume: " + volume.toFixed(2);
}

function calculateCylinderVolume() {
    const radius = document.getElementById("radiusCylinder").value;
    const height = document.getElementById("height").value;
    const volume = Math.PI * Math.pow(radius, 2) * height;
    document.getElementById("cylinderVolume").innerText = "Volume: " + volume.toFixed(2);
}

function calculateConeVolume() {
    const radius = document.getElementById("radiusCone").value;
    const height = document.getElementById("heightCone").value;
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    document.getElementById("coneVolume").innerText = "Volume: " + volume.toFixed(2);
}