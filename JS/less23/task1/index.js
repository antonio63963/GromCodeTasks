// https://gromcode.s3.eu-central-1.amazonaws.com/front-end/javascript/lesson23/task1/example.png
// так можно получить данные формы
// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]
// const formData = formFields.reduce(function(acc, formField) {
//     const prop = formField[0]; // здесь "name" инпута
//     const value = formField[0]; // здесь "value" инпута
//     // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//     // const [prop, value] = formField;
//     return {
//         // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//         ...acc,
//         // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//         [prop]: value,
//     };
// }, {});

const inputEmailElem = document.querySelector('#email');
const inputPasswordElem = document.querySelector('#password');
const errorEmailElem = document.querySelector('.error-text_email');
const errorPasswordElem = document.querySelector('.error-text_password');
const loginFormElem = document.querySelector('.login-form');

const isValue = (value) =>
    value ? undefined : 'Required';

const isEmail = (value) =>
    value.includes('@') ? undefined : 'Should be an email';

const validators = {
    email: [isValue, isEmail],
    password: [isValue],
};

const runValidation = (fieldName, value) => {
    return validators[fieldName]
        .map((validator) => validator(value))
        .filter(textError => textError).join(', ');

}

const checkEmail = (event) => {
    const errorText = runValidation('email', event.target.value);
    errorEmailElem.textContent = errorText;
};
const checkPassword = (event) => {
    const errorText = runValidation('password', event.target.value);
    errorPasswordElem.textContent = errorText;
};

const onSubmit = (event) => {
    event.preventDefault();
    const formData = [...new FormData(loginFormElem)];
    const res = formData.reduce((acc, formField) => {
        const [prop, value] = formField;
     return  ({...acc, [prop]: value});
        
    }, {});
    alert(JSON.stringify(res));
    console.log(res);

};

inputEmailElem.addEventListener('input', checkEmail);
inputPasswordElem.addEventListener('input', checkPassword);
loginFormElem.addEventListener('submit', onSubmit);