import { rand } from "../utils/rand";
import { AParticule } from "./AParticle";
import { Vector } from "./Vector";

export class FadeParticule extends AParticule
{
  private readonly range = { x: rand(5, 100), y: rand(5, 100) };
  private readonly epicenter: Vector;
  private positionAngle = rand(-10, 0);

  constructor()
  {
    const epicenter = { x: rand(0, window.innerWidth), y: rand(0, window.innerHeight) };
    super({...epicenter}, rand(5, 25));

    this.epicenter = epicenter;
    this.alpha = 0;
  }
  public update(delta: number) {
    this.positionAngle += delta * 0.1;
    this.alpha = Math.sin(this.positionAngle) * 0.75;
    this.position.x = this.epicenter.x + Math.sin(this.positionAngle) * this.range.x;
    this.position.y = this.epicenter.y + Math.sin(this.positionAngle) * this.range.y;
  }
  public draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
  }
}