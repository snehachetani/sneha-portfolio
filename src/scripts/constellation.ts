type Point = {
    baseX: number;
    baseY: number;
    x: number;
    y: number;
    offset: number;
};

function initConstellation() {
    const canvasElement = document.getElementById(
        "constellation-canvas"
    ) as HTMLCanvasElement | null;

    const context = canvasElement?.getContext("2d");

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!canvasElement || !context || !hasFinePointer || prefersReducedMotion) {
        return;
    }

    // These are now safely non-null inside nested functions.
    const canvas = canvasElement;
    const ctx = context;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    const mouse = {
        x: width / 2,
        y: height / 2,
    };

    const points: Point[] = [];

    function createPoints() {
        points.length = 0;

        const spacing = 90;

        for (let x = 40; x < width; x += spacing) {
            for (let y = 40; y < height; y += spacing) {
                points.push({
                    baseX: x,
                    baseY: y,
                    x,
                    y,
                    offset: Math.random() * Math.PI * 2,
                });
            }
        }
    }

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        createPoints();
    }

    window.addEventListener("mousemove", (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    window.addEventListener("resize", resizeCanvas);

    function draw() {
        ctx.clearRect(0, 0, width, height);

        const time = Date.now() * 0.001;

        for (const point of points) {
            const distanceX = mouse.x - point.baseX;
            const distanceY = mouse.y - point.baseY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            const influence = Math.max(0, 1 - distance / 240);

            point.x =
                point.baseX -
                distanceX * influence * 0.035 +
                Math.sin(time + point.offset) * 0.8;

            point.y =
                point.baseY -
                distanceY * influence * 0.035 +
                Math.cos(time + point.offset) * 0.8;

            const pointOpacity = 0.08 + influence * 0.2;

            ctx.beginPath();
            ctx.arc(point.x, point.y, 1.1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(148, 163, 184, ${pointOpacity})`;
            ctx.fill();
        }

        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const a = points[i];
                const b = points[j];

                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 115) {
                    const midX = (a.x + b.x) / 2;
                    const midY = (a.y + b.y) / 2;

                    const mouseDistanceX = mouse.x - midX;
                    const mouseDistanceY = mouse.y - midY;
                    const mouseDistance = Math.sqrt(
                        mouseDistanceX * mouseDistanceX + mouseDistanceY * mouseDistanceY
                    );

                    const influence = Math.max(0, 1 - mouseDistance / 260);

                    if (influence > 0.08) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(110, 231, 183, ${influence * 0.16})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
        }

        requestAnimationFrame(draw);
    }

    resizeCanvas();
    draw();
}

initConstellation();