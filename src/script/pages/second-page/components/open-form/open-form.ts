export const revealForm = (element: HTMLElement): void  => {
  element.classList.remove(`${/(hidden)-[a-zA-Z0-9_]+/g}`);
  console.log('form');
}
