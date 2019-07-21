const toggleList = document.getElementById('toggleList');
const list = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');


toggleList.addEventListener('click', () => {
  if (list.style.display == 'none') {
    toggleList.textContent = 'Hide List';
    list.style.display = 'block';
  } else {
    toggleList.textContent = 'Show List';
    list.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.textContent = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

// for (let i = 0; i < myList.length; i += 1) {
//   myList[i].style.color = 'red';
// }
//
// for (let i = 0; i < errorNotPurple.length; i += 1) {
//   errorNotPurple[i].style.color = 'blue';
// }
//
// for (let i = 0; i < evens.length; i += 1) {
//   evens[i].style.backgroundColor = 'lightgray';
// }
//













































// const toggleList = document.getElementById('toggleList');
// const listDiv = document.querySelector('.list');
// const descriptionInput = document.querySelector('input.description');
// const descriptionP = document.querySelector('p.description');
// const descriptionButton = document.querySelector('button.description');
// const addItemInput = document.querySelector('input.addItemInput');
// const addItemButton = document.querySelector('button.addItemButton');
// const removeItemButton = document.querySelector('button.removeItemButton');
//
//   // listDiv.addEventListener('mouseover', (event) => {
//   //   if (event.target.tagName == "BUTTON") {
//   //     let li = event.target;
//   //     let ul = li.parentNode;
//   //     ul.removeChild(li);
//   //   }
//   // });
//
//   listDiv.addEventListener('mouseover', (event) => {
//     if (event.target.tagName == "LI") {
//       event.target.textContent = event.target.textContent.toUpperCase();
//     }
//   });
//
//   listDiv.addEventListener('mouseout', (event) => {
//     if (event.target.tagName == "LI") {
//       event.target.textContent = event.target.textContent.toLowerCase();
//     }
//   });
//
// // add an event listener that can show or hide the list.
// toggleList.addEventListener('click', () => {
//   if (listDiv.style.display == "none") {
//     toggleList.textContent = 'Hide List';
//     listDiv.style.display = 'block';
//   } else {
//     toggleList.textContent = 'Show List';
//     listDiv.style.display = "none";
//   }
// });
//
// // add an event listenever that changes what the list description says.
// descriptionButton.addEventListener('click', () => {
//   descriptionP.innerHTML = descriptionInput.value + ':';
//   descriptionInput.value = '';
// });
//
// // add an event listener that creates an li element and add the value from the input next to the add item button.
// addItemButton.addEventListener('click', () => {
//   let ul = document.getElementsByTagName('ul')[0];
//   let li = document.createElement('li');
//   li.textContent = addItemInput.value;
//   ul.appendChild(li);
//   addItemInput.value = '';
// });
//
// // add an event listener to the removeItemButton so that it removes the last child in the list.
// removeItemButton.addEventListener('click', () => {
//   let ul = document.getElementsByTagName('ul')[0];
//   let li = document.querySelector('li:last-child');
//   ul.removeChild(li);
// });
