// what am i doing?
// change the color of the h1 element.
// make the button clickable and when it's clicked it needs to change the headings color.
// the input will make it to where the user can type in a color or hex# and it'll tell the button what color to make the heading.

const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
})
