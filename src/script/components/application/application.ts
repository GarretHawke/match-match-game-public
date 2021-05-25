import { ImageCategoryModel } from '@/models/image-category-model';
import { Game } from '../game/game';
import '../cards-field/cards-field.scss';

export class Application {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    //this.game.classList.add('game');
    //this.game.element.style.height = '100%';
    this.rootElement.append(this.game.getGame());
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.initGame(images);
  }
}
