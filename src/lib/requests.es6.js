import axios from 'axios';

const BASE_URL = 'https://engine.staging.aspin-inclusivity.com/'


const crudeInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});



export function getGroupProducts() {
  console.log('running getGroupProducts in the requests');
  return crudeInstance.get(`/public/groups/products?partner=britamguid`);
}


