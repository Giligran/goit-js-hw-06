const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
const galleryList = document.querySelector('.gallery')

const adding = images.map(({ url, alt }) => {
  const element = document.createElement("li");
  const htmlStr = `<img src="${url}" alt="${alt}" width="320" heigth="240" />`;
  element.insertAdjacentHTML("beforeend", htmlStr);
  return element;
});


galleryList.append(...adding);

// const addImage = images.forEach((image) => {
//   galleryList.insertAdjacentHTML("beforeend", `<img src="${image.url}" alt="${image.alt}"  class="list-item" width="320px">`)
//   const item = document.querySelectorAll('.list-item')
//   console.log(item)
//   console.log(galleryList)

//   // console.log('url', image.url, 'alt', image.alt)
//   // const url = image.url;
//   // const alt = image.alt;
//   // const element = document.createElement('img');
//   // console.log(element)
//   // element.setAttribute("src", url)
//   // element.setAttribute("alt", alt);
//   // element.setAttribute("width", "320px")
//   // element.classList.add("list-item")
//   // galleryList.append(element)
// })

// item.style.margin = '20px';



// const addItem = document.createElement('li');
// const url = images.map(image => image.url);
// const alt = images.map(image => image.alt);
// console.log('url', url, 'alt', alt)
// console.log(addItem)