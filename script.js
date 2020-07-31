const email_field = document.querySelector("#email-input");
const name_field = document.querySelector("#name-input");
const email_field_before = document.querySelector(".email-animation");
const name_field_before = document.querySelector(".name-animation");

email_field.addEventListener("focusout", () => {
  email_field.value.length > 0
    ? email_field_before.classList.add("js-field-active")
    : email_field_before.classList.remove("js-field-active");
});
name_field.addEventListener("focusout", () => {
  name_field.value.length > 0
    ? name_field_before.classList.add("js-field-active")
    : name_field_before.classList.remove("js-field-active");
});
