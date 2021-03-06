import MovableObject from '../common/MovableObject';

export class ClientCamera extends MovableObject {
  constructor(config) {
    super(config);

    Object.assign(
      this,
      {
        config,
        width: config.canvas.width,
        height: config.canvas.height,
      },
      config,
    );
  }

  focusAtGameObject(obj) {
    const pos = obj.worldPosition(50, 50);
    this.moveTo(pos.x - this.width / 2, pos.y - this.height / 2, false);
  }
}
