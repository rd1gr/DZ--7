// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить 
// еще один класс "super-dropdown", необходимо использовать
//  методы forEach и querySelectorAll и свойство classList
//  у элементов.

// const itemEl = document.querySelectorAll('.dropdown-item');
// itemEl.forEach(element => {
//     element.classList.toggle('super-dropdown');
// }); 

//  2. У элемента с классом btn необходимо убрать класс 
//  "btn-secondary", если он присутствует у этого элемента, 
//  либо добавить, если такого класса у элемента не было.


// const btnEl = document.querySelector('.btn');
// if (btnEl.classList.contains('btn-secondary')) {
//     btnEl.classList.remove('btn-secondary');
// }
// else {
//     btnEl.classList.add('btn-secondary');
//     } 

// 3. Необходимо удалить класс "dropdown-menu" у элемента, 
// у которого присутствует класс "menu".

// const menuEl = document.querySelectorAll('.menu');
// menuEl.forEach(element => {
// if (element.classList.contains('dropdown-menu')) {
// element.classList.remove('dropdown-menu');
// }
// })


// 4. У элемента с id "dropdownMenuButton" замените id на 
// "superDropdown".

// const menuBtnEl = document.getElementById("dropdownMenuButton");
// menuBtnEl.id = "superDropdown";

// 5. Добавьте атрибут data-dd со значением 3 элементу у которого 
// существует атрибут "aria-labelledby" равный "dropdownMenuButton"
//  используя dataset.

//  const attribute = document.querySelectorAll('[aria-labelledby="dropdownMenuButton"]');
//  attribute.forEach(element => {
//  element.dataset.add = '3'
//  });


// 6. Удалите атрибут type у элемента с классом "dropdown-toggle".

const attribute = document.querySelector('.dropdown-toggle');
attribute.removeAttribute('type');