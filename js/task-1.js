const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);

// 2
const item = categories =>
  categories.forEach(el => {
    console.log(`Category: ${el.querySelector('h2').textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`);
  });
item(categories);
