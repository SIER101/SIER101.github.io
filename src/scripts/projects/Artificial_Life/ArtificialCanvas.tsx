import { useRef, useEffect } from "react";

function ArtificialCanvas() {
  const artificialCanvas = useRef<HTMLCanvasElement>(null);

  let cw = 500;
  let bw = 10;

  useEffect(() => {
    const canva = artificialCanvas.current?.getContext("2d")!;

    function draw(x: number, y: number, c: string, s: number) {
      canva.fillStyle = c;
      canva.fillRect(x, y, s, s);
    }

    class particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.color = color;
      }
    }

    let particles: particle[] = [];

    function random() {
      return Math.random() * 400 + 50;
    }

    function create(number: number, color: string) {
      let group = [];
      for (let i = 0; i < number; i++) {
        let _particle = new particle(random(), random(), color);
        group.push(_particle);
        particles.push(_particle);
      }
      return group;
    }

    function rule(par1: particle[], par2: particle[], g: number) {
      for (let i = 0; i < par1.length; i++) {
        let fx = 0;
        let fy = 0;
        let a = par1[i];
        for (let j = 0; j < par2.length; j++) {
          let b = par2[j];
          let dx = a.x - b.x;
          let dy = a.y - b.y;
          let d = Math.sqrt(dx * dx + dy * dy);
          if (d > 0 && d < 80) {
            let F = g * (1 / d);
            fx += F * dx;
            fy += F * dy;
          }
        }
        a.vx = (a.vx + fx) * 0.5;
        a.vy = (a.vy + fy) * 0.5;
        a.x += a.vx;
        a.y += a.vy;
        if (a.x <= bw) {
          a.x = bw;
          a.vx *= -1;
        } else if (a.x >= cw - bw) {
          a.x = cw - bw;
          a.vx *= -1;
        }
        if (a.y <= bw) {
          a.y = bw;
          a.vy *= -1;
        } else if (a.y >= cw - bw) {
          a.y = cw - bw;
          a.vy *= -1;
        }
      }
    }

    let yellow = create(200, "yellow");
    let red = create(200, "red");
    let green = create(200, "green");

    let fps = 6;
    let tick = fps - 1;

    function update() {
      if (tick == fps - 1) {
        rule(green, green, -0.32);
        rule(green, red, -0.17);
        rule(green, yellow, 0.34);
        rule(red, red, -0.1);
        rule(red, green, -0.34);
        rule(yellow, yellow, 0.15);
        rule(yellow, green, -0.2);
        canva.clearRect(0, 0, cw, cw);
        draw(0, 0, "black", cw);
        for (let i = 0; i < particles.length; i++) {
          draw(particles[i].x, particles[i].y, particles[i].color, 5);
        }
        tick = 0;
      } else tick++;
      requestAnimationFrame(update);
    }
    update();
  });

  return (
    <div style={{ display: "flex" }}>
      <canvas
        id="artificialCanvas"
        ref={artificialCanvas}
        width={cw}
        height={cw}
      ></canvas>
      <div id="interactivePanel" style={{ marginLeft: "1rem" }}>
        <p>Presets</p>
        <select name="cars" id="cars">
          <option value="volvo">Random</option>
          <option value="saab">Trailmaker</option>
        </select>
      </div>
    </div>
  );
}

export default ArtificialCanvas;
