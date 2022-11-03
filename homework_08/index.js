"use strict";

const firstNumberInputElement = document.getElementById("first-number");
const secondNumberInputElement = document.getElementById("second-number");
const operatorInputElement = document.getElementById("operator");
const result = document.getElementById("wrapper__result");
const form = document.getElementById("form");

const calculate = () => {
    switch (operatorInputElement.value) {
        case "+":
            result.textContent =
                Number(firstNumberInputElement.value) +
                Number(secondNumberInputElement.value);
            break;
        case "-":
            result.textContent =
                Number(firstNumberInputElement.value) -
                Number(secondNumberInputElement.value);
            break;
        case "*":
            result.textContent =
                Number(firstNumberInputElement.value) *
                Number(secondNumberInputElement.value);
            break;
        case "/":
            result.textContent =
                Number(firstNumberInputElement.value) /
                Number(secondNumberInputElement.value);
            break;
        case "":
            result.textContent = "Не введён знак";
            break;
        default:
            result.textContent = "Программа не поддерживает такую операцию";
    }
};

const handleForm = (event) => {
    event.preventDefault();
    if (
        !firstNumberInputElement &&
        !operatorInputElement &&
        !secondNumberInputElement
    ) {
        return;
    }
    const { value: firstNumber } = firstNumberInputElement;
    const { value: secondNumber } = secondNumberInputElement;

    if (isNaN(Number(firstNumber)) || isNaN(Number(secondNumber))) {
        result.textContent = "Некорректный ввод чисел";
    } else if (!firstNumber) {
        result.textContent = "Первое число не указано";
    } else if (!secondNumber) {
        result.textContent = "Второе число не указано";
    } else if (
        operatorInputElement.value === "/" &&
        secondNumberInputElement.value === "0"
    ) {
        result.textContent = "Операция некорректна";
    } else {
        calculate();
    }
    console.log(result.textContent);
};
form.addEventListener("submit", handleForm);
