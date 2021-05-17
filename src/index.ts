import './style/index.scss';
import App from '@/routing';

const app = new App();
window.onload = () => {
  app.routing();
};

window.onpopstate = () => {
  app.routing();
};
