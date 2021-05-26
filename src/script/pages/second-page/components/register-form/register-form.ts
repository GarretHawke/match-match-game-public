import { Input } from 'postcss';
import { runInThisContext } from 'vm';
import { createDomNode, addStyles } from '../../../../common';
import styles from './register-form.scss';

export default class RegisterForm {
  registerFormContainer: HTMLElement;
  registerForm: HTMLElement;
  registerFormWrapper: HTMLElement;
  formHeader: HTMLElement;
  formFields: HTMLElement;
  avatarField: HTMLElement | any;
  buttonField: HTMLElement;
  formItemName: HTMLElement;
  formItemSurname: HTMLElement;
  formItemEmail: HTMLElement;
  labelName: HTMLElement;
  labelSurname: HTMLElement;
  labelEmail: HTMLElement;
  inputName: HTMLElement;
  inputSurname: HTMLElement;
  inputEmail: HTMLElement;
  avatar: HTMLElement;
  buttonAdd: HTMLElement;
  buttonCancel: HTMLElement;
  cover: HTMLElement;

  constructor() {
    this.registerFormContainer = createDomNode(this.registerFormContainer, 'div', styles['register-form-container']);
    // addStyles(this.registerFormContainer, styles['hidden']);
    this.registerForm = createDomNode(this.registerForm, 'div', styles['register-form']);

    this.registerFormWrapper = createDomNode(this.registerFormWrapper, 'form', styles['form']);
    this.formHeader = createDomNode(this.formHeader, 'h3', styles['form-header']);
    this.formHeader.innerText = 'Register new Player';

    this.formFields = createDomNode(this.formFields, 'div', styles['form-fields']);
    this.avatarField = createDomNode(this.avatarField, 'div', styles['avatar-field']);

    this.formItemName = createDomNode(this.formItemName, 'div', styles['form-item']);
    addStyles(this.formItemName, styles['name']);
    this.labelName = createDomNode(this.labelName, 'label', styles['label']);
    this.labelName.setAttribute('for', 'name-field');
    this.labelName.innerText = 'First Name';
    this.inputName = createDomNode(this.inputName, 'input', styles['input']);
    this.inputName.setAttribute('type', 'text');
    this.inputName.id = 'name-field';
    this.inputName.setAttribute('placeholder', 'John');
    this.inputName.setAttribute('required', '');
    this.formItemName.append(this.labelName, this.inputName);

    this.formItemSurname = createDomNode(this.formItemSurname, 'div', styles['form-item']);
    addStyles(this.formItemSurname, styles['surname']);
    this.labelSurname = createDomNode(this.labelSurname, 'label', styles['label']);
    this.labelSurname.setAttribute('for', 'surname-field');
    this.labelSurname.innerText = 'Last Name';
    this.inputSurname = createDomNode(this.inputName, 'input', styles['input']);
    this.inputSurname.setAttribute('type', 'text');
    this.inputSurname.id = 'surname-field';
    this.inputSurname.setAttribute('placeholder', 'Doe');
    this.inputSurname.setAttribute('required', '');
    this.formItemSurname.append(this.labelSurname, this.inputSurname);

    this.formItemEmail = createDomNode(this.formItemEmail, 'div', styles['form-item']);
    addStyles(this.formItemEmail, styles['email']);
    this.labelEmail = createDomNode(this.labelEmail, 'label', styles['label']);
    this.labelEmail.setAttribute('for', 'email-field');
    this.labelEmail.innerText = 'Email';
    this.inputEmail = createDomNode(this.inputEmail, 'input', styles['input']);
    this.inputEmail.setAttribute('type', 'email');
    this.inputEmail.id = 'email-field';
    this.inputEmail.setAttribute('placeholder', 'johndoe@gmail.com');
    this.inputEmail.setAttribute('required', '');
    this.formItemEmail.append(this.labelEmail, this.inputEmail);

    this.avatar = createDomNode(this.avatar, 'img', styles['avatar']);
    this.avatar.setAttribute('src', './images/avatar-reg.jpg');

    this.buttonField = createDomNode(this.buttonField, 'div', styles['button-field']);
    this.buttonAdd = createDomNode(this.buttonAdd, 'button', styles['button-add']);
    this.buttonAdd.setAttribute('type', 'submit');
    this.buttonAdd.innerText = 'add user';
    this.buttonCancel = createDomNode(this.buttonCancel, 'button', styles['button-cancel']);

    this.buttonCancel.addEventListener('click', () => {
      this.hideRegisterForm();
    });

    this.buttonCancel.innerText = 'cancel';
    this.buttonField.append(this.buttonAdd, this.buttonCancel);

    this.formFields.append(this.formItemName, this.formItemSurname, this.formItemEmail);
    this.avatarField.append(this.avatar);
    this.registerFormWrapper.append(this.formFields, this.avatarField, this.buttonField);

    this.cover = createDomNode(this.cover, 'div', styles['cover']);
    this.cover.id = 'cover';

    this.registerForm.append(this.formHeader, this.registerFormWrapper);

    this.registerFormContainer.append(this.registerForm, this.cover);

    ////////////////
   /*  const uploadImage = () => {
      const file = this.avatarField;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.avatar.removeAttribute('src');
        this.avatar.setAttribute('src', `${reader.result}`);
      }
    } */

    /* this.avatar.addEventListener('click', uploadImage); */

  }

  getRegisterForm(): HTMLElement {
    return this.registerFormContainer;
  }

  hideRegisterForm(): void {
    //addStyles(this.registerFormContainer, styles['hidden']);
    this.registerFormContainer.style.display = 'none';
    console.log('hide');
  }
  revealRegisterForm(): void {
    // this.registerFormContainer.classList.remove(`${/(hidden)-[a-zA-Z0-9_]+/g}`);
    this.registerFormContainer.style.display = 'block';
    console.log('reveal');
  }
}
