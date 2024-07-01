


const getForm = document.querySelector('.login-form')
console.log(getForm)

getForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;

    const info = {
        email: elements.email.value,
        password: elements.password.value,
    };
    if (elements.email.value === "" || elements.password.value === "") {
        return alert('All form fields must be filled in')
    } else {
        console.log(info);
    }
    

    event.currentTarget.reset()
}
