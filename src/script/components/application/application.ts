import { ImageCategoryModel } from '@/models/image-category-model';
import { Game } from '../game/game';
import '../cards-field/cards-field.scss';
import { SettingsField } from '@/pages/settings/components/settings-field';

export class Application {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.append(this.game.getGame());
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();

    //const cat = categories[this.setCardCategory.bind(this)];
    //console.log(this.setCardCategory());

    const cat = categories[2];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.initGame(images);
  }

  setCardCategory(): number {
    const numberOfCategory = new SettingsField().getCardCategory();
    return numberOfCategory;
  }
}
