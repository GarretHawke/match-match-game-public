import styles from '@/components/button/button.scss';

const customButton = (name: string, handlerClick: () => void): HTMLElement => {
  const button = document.createElement('button');
  button.classList.add(styles['button']);
  button.innerHTML = name;
  button.onclick = () => handlerClick();

  return button;
};

export default customButton;
