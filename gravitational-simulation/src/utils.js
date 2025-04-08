function calculateGravitationalForce(m1, m2, distance) {
    const G = 6.67430e-11; // gravitational constant
    return (G * m1 * m2) / (distance * distance);
}

function randomPosition(canvasWidth, canvasHeight) {
    const x = Math.random() * canvasWidth;
    const y = Math.random() * canvasHeight;
    return { x, y };
}

export { calculateGravitationalForce, randomPosition };