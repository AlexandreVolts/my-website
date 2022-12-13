import { AParticule } from "./AParticle";

export class App
{
  private readonly ctx: CanvasRenderingContext2D;
  private readonly particles: AParticule[] = [];
  private lastDeltaTime = 0;
  private process = 0;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    P: new () => AParticule,
    quantity: number,
  ) {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
    this.ctx = this.canvas.getContext("2d")!;
    for (let i = 0; i < quantity; i++) {
      this.particles.push(new P());
    }
  }

  protected update(delta: number) {
    this.particles.forEach((p) => p.update(delta));
  }
  protected draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((p) => p.draw(ctx));
  }
  public readonly stop = () => {
    window.cancelAnimationFrame(this.process);
  }
  public readonly render: FrameRequestCallback = (delta: number) => {
    this.update((delta - this.lastDeltaTime) / 1000);
    this.draw(this.ctx);
    this.lastDeltaTime = delta;
    this.process = window.requestAnimationFrame(this.render);
  }
}