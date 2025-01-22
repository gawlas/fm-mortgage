function validateForm() {
    let isValid = true;

    // amount should not be empty
    const amount = document.querySelector('.js-amount');

    if (amount.value === "") {
        document.querySelector(".js-amount-block").classList.add('form-elements__invalid');
        isValid = false;
    } else {
        document.querySelector(".js-amount-block").classList.remove('form-elements__invalid');
    }

    // term should not be empty
    const term = document.querySelector('.js-term');

    if (term.value === "") {
        document.querySelector(".js-term-block").classList.add('form-elements__invalid');
        isValid = false;
    } else {
        document.querySelector(".js-term-block").classList.remove('form-elements__invalid');
    }

    // rete should not be empty
    const rate = document.querySelector('.js-rate');

    if (rate.value === "") {
        document.querySelector(".js-rate-block").classList.add('form-elements__invalid');
        isValid = false;
    } else {
        document.querySelector(".js-rate-block").classList.remove('form-elements__invalid');
    }

    // radio should be selected
    const checkedRadios = document.querySelector('.js-radios:checked');

    if (checkedRadios == null) {
        document.querySelector(".js-mortgage-type").classList.add('form-elements__invalid');
        isValid = false;
    } else {
        document.querySelector(".js-mortgage-type").classList.remove('form-elements__invalid');
    }

    return isValid;
}


function onSubmit() {
    const isValid = validateForm();

    if (isValid) {
        document.querySelector(".js-result").classList.add("hidden");
        document.querySelector(".js-result-filled").classList.remove("hidden");
    }
}

function onReset(event) {
    event.preventDefault();
    resetForm();
}

function resetForm() {
    const form = document.querySelector(".js-form");
    form.reset();

    document.querySelector(".js-amount-block").classList.remove('form-elements__invalid');
    document.querySelector(".js-term-block").classList.remove('form-elements__invalid');
    document.querySelector(".js-rate-block").classList.remove('form-elements__invalid');
    document.querySelector(".js-mortgage-type").classList.remove('form-elements__invalid');
}

function registerCalculateClick() {
    const button = document.querySelector('.js-calculate-button');
    button.addEventListener('click', onSubmit);
}

function registerResetClick() {
    const button = document.querySelector('.js-reset');
    button.addEventListener('click', onReset);
}

function registerInputEvents() {
    document.querySelector('.js-amount').addEventListener("input", () => {
        document.querySelector(".js-amount-block").classList.remove('form-elements__invalid');
    });

    document.querySelector('.js-term').addEventListener("input", () => {
        document.querySelector(".js-term-block").classList.remove('form-elements__invalid');
    });

    document.querySelector('.js-rate').addEventListener("input", () => {
        document.querySelector(".js-rate-block").classList.remove('form-elements__invalid');
    });

    document.querySelector('.js-repayment').addEventListener("input", () => {
        document.querySelector(".js-mortgage-type").classList.remove('form-elements__invalid');
    });

    document.querySelector('.js-interest').addEventListener("input", () => {
        document.querySelector(".js-mortgage-type").classList.remove('form-elements__invalid');
    });
}

registerCalculateClick();
registerResetClick();
registerInputEvents();