import App from '@/routing';
import './style/index.scss';

const app = new App();
window.onload = () => {
  app.routing();
};

window.onpopstate = () => {
  app.routing();
};
