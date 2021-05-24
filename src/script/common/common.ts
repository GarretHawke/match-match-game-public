export const createDomNode = (node: HTMLElement, element: string, ...classes: string[]): HTMLElement => {
  let nodeElement = node;
  nodeElement = document.createElement(element);
  nodeElement.classList.add(...classes);
  return nodeElement;
};

export const changeUrl = (pathName: string): void => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
};

export const addStyles = (node: HTMLElement, ...classes: string[]): HTMLElement => {
  let nodeElement = node;
  nodeElement.classList.add(...classes);
  return nodeElement;
};

export const removeStyles = (node: HTMLElement, ...classes: string[]): HTMLElement => {
  let nodeElement = node;
  nodeElement.classList.remove(...classes);
  return nodeElement;
}
