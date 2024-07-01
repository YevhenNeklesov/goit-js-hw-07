


const categories = document.querySelectorAll(`li.item`)
console.log(`Numbers of categories: ${categories.length}`)

categories.forEach(category => {
    const title = category.querySelector(`h2`).textContent;
    const categoriesElementCount = category.querySelectorAll(`li`).length;

    console.log(`Category: ${title}`)
    console.log(`Elements: ${categoriesElementCount}`)
});

