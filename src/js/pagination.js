import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { renderData } from './events';
import { query } from './search-form';

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination('pagination', options); // 'pagination' = id в div
export const page = pagination.getCurrentPage();

export function reset(totalItems) {
  pagination.reset(totalItems);
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  console.log(currentPage);

  renderData(currentPage, query);
});