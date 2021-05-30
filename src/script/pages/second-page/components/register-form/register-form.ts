import { createDomNode, addStyles } from '../../../../common';
import styles from './register-form.scss';
import { DataBase } from '@/shared/dataBase';
import { MyRecord } from '@/shared/My-record';

export default class RegisterForm {
  registerFormContainer: HTMLElement;
  registerForm: HTMLElement;
  registerFormWrapper: HTMLElement;
  formHeader: HTMLElement;
  formFields: HTMLElement;
  avatarField: HTMLElement;
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

  closeCross: HTMLElement;

  idB: DataBase;

  constructor() {
    this.idB = new DataBase();
    this.idB.init('GarretHawke');

    this.registerFormContainer = createDomNode(this.registerFormContainer, 'div', styles['register-form-container']);

    this.registerForm = createDomNode(this.registerForm, 'div', styles['register-form']);
    this.closeCross = createDomNode(this.closeCross, 'div', styles['close-cross']);
    this.closeCross.addEventListener('click', this.hideRegisterForm.bind(this));

    this.registerFormWrapper = createDomNode(this.registerFormWrapper, 'form', styles['form']);
    this.formHeader = createDomNode(this.formHeader, 'h3', styles['form-header']);
    this.formHeader.innerText = 'Register new Player';

    this.formFields = createDomNode(this.formFields, 'div', styles['form-fields']);
    this.avatarField = createDomNode(this.avatarField, 'div', styles['avatar-field']);

    this.formItemName = createDomNode(this.formItemName, 'div', styles['form-item']);
    addStyles(this.formItemName, styles['name']);
    this.labelName = createDomNode(this.labelName, 'label', styles['label']);
    this.labelName.setAttribute('for', 'name-field');
    this.labelName.setAttribute('autocomplete', 'nope');
    this.labelName.innerText = 'First Name';
    this.inputName = createDomNode(this.inputName, 'input', styles['input']);
    this.inputName.setAttribute('type', 'text');
    this.inputName.setAttribute('pattern', '[a-zA-Zа-яА-я]{1,30}');
    this.inputName.id = 'name-field';
    this.inputName.setAttribute('placeholder', 'John');
    this.inputName.setAttribute('required', '');
    this.formItemName.append(this.labelName, this.inputName);

    this.formItemSurname = createDomNode(this.formItemSurname, 'div', styles['form-item']);
    addStyles(this.formItemSurname, styles['surname']);
    this.labelSurname = createDomNode(this.labelSurname, 'label', styles['label']);
    this.labelSurname.setAttribute('for', 'surname-field');
    this.labelSurname.setAttribute('autocomplete', 'nope');
    this.labelSurname.innerText = 'Last Name';
    this.inputSurname = createDomNode(this.inputName, 'input', styles['input']);
    this.inputSurname.setAttribute('type', 'text');
    this.inputSurname.setAttribute('pattern', '[a-zA-Zа-яА-я]{1,30}');
    this.inputSurname.id = 'surname-field';
    this.inputSurname.setAttribute('placeholder', 'Doe');
    this.inputSurname.setAttribute('required', '');
    this.formItemSurname.append(this.labelSurname, this.inputSurname);

    this.formItemEmail = createDomNode(this.formItemEmail, 'div', styles['form-item']);
    addStyles(this.formItemEmail, styles['email']);
    this.labelEmail = createDomNode(this.labelEmail, 'label', styles['label']);
    this.labelEmail.setAttribute('for', 'email-field');
    this.labelEmail.setAttribute('autocomplete', 'nope');
    this.labelEmail.innerText = 'Email';
    this.inputEmail = createDomNode(this.inputEmail, 'input', styles['input']);
    this.inputEmail.setAttribute('type', 'email');
    //this.inputEmail.setAttribute('pattern', '');
    this.inputEmail.id = 'email-field';
    this.inputEmail.setAttribute('placeholder', 'johndoe@gmail.com');
    this.inputEmail.setAttribute('required', '');
    this.formItemEmail.append(this.labelEmail, this.inputEmail);

    this.avatar = createDomNode(this.avatar, 'img', styles['avatar']);
    this.avatar.setAttribute('src', '/images/avatar-reg.jpg');

    this.buttonField = createDomNode(this.buttonField, 'div', styles['button-field']);
    this.buttonAdd = createDomNode(this.buttonAdd, 'button', styles['button-add']);
    this.buttonAdd.setAttribute('type', 'submit');
    this.buttonAdd.style.cursor = 'default';
    this.buttonAdd.style.backgroundColor = 'rgba(227, 242, 253, 1)';
    this.buttonAdd.innerText = 'add user';

    const validate = () => {
      if (nameInput.validity.valid && surnameInput.validity.valid && emailInput.validity.valid) {
        this.buttonAdd.style.cursor = 'pointer';
        this.buttonAdd.style.backgroundColor = 'rgba(33, 150, 243, 1)';
        this.buttonAdd.onmouseover = () =>this.buttonAdd.style.backgroundColor = 'rgba(33, 150, 243, 0.7)';
        this.buttonAdd.onmouseleave = () => this.buttonAdd.style.backgroundColor = 'rgba(33, 150, 243, 1)';
      } else {
        this.buttonAdd.style.cursor = 'default';
        this.buttonAdd.style.backgroundColor = 'rgba(227, 242, 253, 1)';
      }
    }

    let nameInput = this.inputName as HTMLInputElement;
    let surnameInput = this.inputSurname as HTMLInputElement;
    let emailInput = this.inputEmail as HTMLInputElement;

    this.inputName.addEventListener('input', validate);
    this.inputSurname.addEventListener('input', validate);
    this.inputEmail.addEventListener('input', validate);


    const startButton = document.getElementById('start-button');

    //
    /* this.buttonAdd.addEventListener('click', () => {
      event?.preventDefault();
      console.log('send to db');
      this.sendRegisterForm();
      localStorage.setItem('firstName', nameInput.value);
      localStorage.setItem('lastName', surnameInput.value);
      localStorage.setItem('email', emailInput.value);
    }); */



    //
    this.buttonAdd.addEventListener('click', async () => {
      event?.preventDefault();
      console.log('send to db');
      this.sendRegisterForm();

      let user = {
        firstName: nameInput.value,
        lastName: surnameInput.value,
        email: emailInput.value,
        score: 0,
      }

     let newRec = await this.idB.write<MyRecord>('scoreCollection', user);
      console.log(newRec);

      //this.clearRegisterForm();
    });
    //

    this.buttonCancel = createDomNode(this.buttonCancel, 'button', styles['button-cancel']);

    this.buttonCancel.addEventListener('click', () => {
      event?.preventDefault();
      //this.hideRegisterForm();
      this.clearRegisterForm();
    });

    this.buttonCancel.innerText = 'cancel';
    this.buttonField.append(this.buttonAdd, this.buttonCancel);

    this.formFields.append(this.formItemName, this.formItemSurname, this.formItemEmail);
    this.avatarField.append(this.avatar);
    this.registerFormWrapper.append(this.formFields, this.avatarField, this.buttonField);

    this.cover = createDomNode(this.cover, 'div', styles['cover']);
    this.cover.id = 'cover';

    this.registerForm.append(this.formHeader, this.registerFormWrapper, this.closeCross);

    this.registerFormContainer.append(this.registerForm, this.cover);
  }

  getRegisterForm(): HTMLElement {
    return this.registerFormContainer;
  }

  sendRegisterForm(): void {
    const nameField = this.inputName as HTMLInputElement;
    const surnameField = this.inputSurname as HTMLInputElement;
    const emailField = this.inputEmail as HTMLInputElement;
    if (nameField.validity.valid && surnameField.validity.valid && emailField.validity.valid) {
      this.registerFormContainer.style.display = 'none';
      console.log('hide');
    }
  }

  hideRegisterForm(): void {
    this.registerFormContainer.style.display = 'none';
  }

  revealRegisterForm(): void {
    this.registerFormContainer.style.display = 'block';
    console.log('appear');
  }

  clearRegisterForm(): void {
    let nameInput = this.inputName as HTMLInputElement;
    let surnameInput = this.inputSurname as HTMLInputElement;
    let emailInput = this.inputEmail as HTMLInputElement;
    nameInput.value = '';
    surnameInput.value = '';
    emailInput.value = '';
  }
}
