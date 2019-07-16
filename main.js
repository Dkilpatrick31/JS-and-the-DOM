// what am i doing?
// change the color of the h1 element.
// make the button clickable and when it's clicked it needs to change the headings color.
// the input will make it to where the user can type in a color or hex# and it'll tell the button what color to make the heading.

const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myList = document.getElementsByTagName('li');
const errorNotGreen = document.getElementsByClassName('error-not-purple');


// Adding and event listener, telling what to look for, then telling
myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
})

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'green';
}

for (let i = 0; i < errorNotGreen.length; i += 1) {
errorNotGreen[i].style.color = 'purple';
}
