import { fetchDataId } from './api';

const list = document.querySelector('.list');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

list.addEventListener('click', handleClick);

function handleClick(event) {

  const id = event.target.id;
  backdrop.classList.remove('is-hidden');
  // console.log(id);
  getEvent(id);
}

function createMarkupModal(data) {
  const markupModal = `<div class="modal-div"> 
  <img src="${data[0].images[0].url}" alt="${data[0].name}"/>
<p>${data[0].name}</p></div>`;
  modal.innerHTML = markupModal;
}

async function getEvent(id) {
  const data = await fetchDataId(id);
  createMarkupModal(data._embedded.events);
}

backdrop.addEventListener('click', closeModal);


function closeModal() {
backdrop.classList.add('is-hidden')
}