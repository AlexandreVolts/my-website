import { Vector } from "./Vector";

export abstract class AParticule
{
  protected alpha = 1;

  constructor(protected readonly position: Vector, protected radius: number) { }

  public abstract update(delta: number): void;
  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}