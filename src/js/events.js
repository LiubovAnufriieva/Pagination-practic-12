import { fetchData } from './api';
import { page, reset } from './pagination';
import { query } from './search-form';

const list = document.querySelector('.list');

function createMarkup(data) {
  const markup = data
    .map(
      ({ id, name }) =>
        `<li id="${id}">
            <p id="${id}">${name}</p>
        </li>`
    )
    .join('');

  list.innerHTML = markup;
}

export async function renderData(page, query) {
  const data = await fetchData(page, query);
  console.log(data._embedded.events);

  if (page === 1) {
    reset(data.page.totalElements);
  }
  createMarkup(data._embedded.events);
}

renderData(page, query);
