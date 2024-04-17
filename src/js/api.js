import axios from "axios";
import { query } from './search-form';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
const API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';

export async function fetchData(page) { 
    const resp = await axios.get(`${BASE_URL}events.json?page=${page}&apikey=${API_KEY}&keyword=${query}`);
    console.log(resp.data);
    return resp.data;

}   
export async function fetchDataId(id) {
    const resp = await axios.get(`${BASE_URL}events.json?id=${id}&apikey=${API_KEY}`);

    return resp.data;
}

fetchDataId ('Z7r9jZ1AdP973');