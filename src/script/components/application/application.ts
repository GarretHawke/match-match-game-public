import { ImageCategoryModel } from '@/models/image-category-model';
import { Game } from '../game/game';

export class Application {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.append(this.game.getGame());
  }

  async start() {
    const sizeOfField = localStorage.getItem('game-difficulty');
    let res = await fetch('/images-small-field.json');
    switch(sizeOfField) {
      case '0':
        res = await fetch('/images-small-field.json');
        break;
      case '1':
        res = await fetch('/images-middle-field.json');
        break;
      default: {
        res = await fetch('/images-small-field.json');
      }
    }
    const categories: ImageCategoryModel[] = await res.json();
    const cardCategory = Number(localStorage.getItem('card-category'));
    const cat = categories[cardCategory];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.initGame(images);
  }
}
