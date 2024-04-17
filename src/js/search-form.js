import {renderData} from './events';
import { page } from './pagination';

const list = document.querySelector('.list');
const form = document.querySelector('.search-form');
form.addEventListener('submit', handleSubmit);

export let query = ''; 

function handleSubmit(event) {
    event.preventDefault();
    query = event.target.elements.searchQuery.value
    console.log(query);
    
    list.innerHTML = '';
    renderData(page, query);
}