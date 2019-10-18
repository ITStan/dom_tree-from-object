'use strict'

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

createTree(document.getElementById('container'), data);

function createTree(container, data) {
  container.append(createTreeFromObject(data));
}


function createTreeFromObject(data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li'); // используем рекурсию
    li.textContent = key;

    if (typeof data[key] === 'object' && Object.keys(data[key]).length !== 0) {
      li.append(createTreeFromObject(data[key]));
    }
    ul.append(li);
  }
  return ul;
}
