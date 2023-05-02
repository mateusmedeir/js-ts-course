class ValidateForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', event => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const validateFields =this.validateFields();
        const validatePasswords =this.validatePasswords();

        if (validateFields && validatePasswords) {
            alert('Form sent.');
            this.form.submit();
        }
    }

    validatePasswords() {
        let valid = true;

        const password = this.form.querySelector('.password');
        const repeatPassword = this.form.querySelector('.repeat-password');

        if (password.value !== repeatPassword.value) {
            this.createError(password, 'Password and Repeat password fields must be the same.');
            this.createError(repeatPassword, 'Password and Repeat password fields must be the same.');
            valid = false;
        }
        if (password.value.length < 6 || password.value.length > 12){
            this.createError(password, 'Password must be between 6 and 12 characters');
            valid = false;
        }
        return valid;
    }

    validateFields() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove();
        }
        for (let field of this.form.querySelectorAll('.validate')) {
            const label = field.previousElementSibling.innerText;
            if (!field.value) {
                this.createError(field, `"${label}" field cannot be empty`)
            }
            if (field.classList.contains('cpf')) {
                if (!this.validateCPF(field)) valid = false;
            }
            if (field.classList.contains('user')) {
                if (!this.validateUser(field)) valid = false;
            }
        }
        return valid;
    }

    validateCPF(field) {
        const cpf = new ValidateCPF(field.value);

        if (!cpf.validate()) {
            this.createError(field, 'Invalid CPF');
            return false;
        }
        return true;
    }

    validateUser(field) {
        const user = field.value;
        let valid = true;
        if (user.length < 3 || user.length > 12) {
            this.createError(field, 'User must be between 3 and 12 characters long.');
            valid = false;
        }
        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'User can only contain letters and/or number');
            valid = false;
        }
        return valid;
    }

    validatePassword(field) {
        const password = field.value;
        if (password.length < 6 || password.length > 12) {
            this.createError(field, 'Password must be between 6 and 12 characters');
        }
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const validateForm = new ValidateForm();