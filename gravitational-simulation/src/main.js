function initSimulation() {
    const canvas = document.getElementById('simulationCanvas');
    const ctx = canvas.getContext('2d');
    const bodies = createCelestialBodies(5); // Create 5 celestial bodies

    function createCelestialBodies(num) {
        const bodies = [];
        for (let i = 0; i < num; i++) {
            bodies.push({
                x: randomPosition(canvas.width),
                y: randomPosition(canvas.height),
                mass: Math.random() * 10 + 1, // Random mass between 1 and 11
                vx: Math.random() * 2 - 1, // Random velocity
                vy: Math.random() * 2 - 1,
                radius: 5 // Fixed radius for simplicity
            });
        }
        return bodies;
    }

    function updatePositions() {
        for (let i = 0; i < bodies.length; i++) {
            for (let j = 0; j < bodies.length; j++) {
                if (i !== j) {
                    const force = calculateGravitationalForce(bodies[i], bodies[j]);
                    bodies[i].vx += force.x / bodies[i].mass;
                    bodies[i].vy += force.y / bodies[i].mass;
                }
            }
            bodies[i].x += bodies[i].vx;
            bodies[i].y += bodies[i].vy;

            // Bounce off walls
            if (bodies[i].x < 0 || bodies[i].x > canvas.width) bodies[i].vx *= -1;
            if (bodies[i].y < 0 || bodies[i].y > canvas.height) bodies[i].vy *= -1;
        }
    }

    function drawBodies() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const body of bodies) {
            ctx.beginPath();
            ctx.arc(body.x, body.y, body.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.closePath();
        }
    }

    function animate() {
        updatePositions();
        drawBodies();
        requestAnimationFrame(animate);
    }

    animate();
}

window.onload = initSimulation;