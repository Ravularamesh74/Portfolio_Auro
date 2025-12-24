const canvas = document.getElementById("space-bg");

if (canvas) {
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const stars = [];
  const STAR_COUNT = 220;

  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.7 + 0.2
    });
  }

  function animate() {
    ctx.fillStyle = "#02010a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(s => {
      ctx.fillStyle = "white";
      ctx.globalAlpha = Math.random() * 0.8 + 0.2;
      ctx.fillRect(s.x, s.y, s.size, s.size);
      s.y += s.speed;
      if (s.y > canvas.height) {
        s.y = 0;
        s.x = Math.random() * canvas.width;
      }
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  animate();
}