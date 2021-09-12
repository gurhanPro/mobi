import axios from 'axios';

// const BASE_URL = 'https://engine.staging.aspin-inclusivity.com/'
const BASE_URL = 'http://localhost:8443'


const crudeInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const crudeInstance2 = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${getAccessToken()}`,
    // 'Authorization': 'Bearer 190b6f79-9e63-419c-a88e-8c49b72523c2',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Content-Language': 'en',
  },
});



export function getGroupProducts() {
  return crudeInstance.get(`/public/groups/products?partner=britamguid`);
}

export function getToken() {

  const auth = {
    username: 'BaobabClient',
    password: 'Client@#65467'
  }
  return crudeInstance.post(`oauth/token?grant_type=client_credentials&scope=all`, {}, {
    auth: {
      username: 'BaobabClient',
      password: 'Client@#65467'
    }
  });
}


export function getGroupByGroupLink(groupLink) {
  axios.defaults.headers.common.Authorization = `Bearer ${groupLink.token.access_token}`;
  return crudeInstance2.get(`/api/groups/pre_register/link?partner=britamguid&registration_link=${groupLink.groupLink}`);
}


export function getGroupMembersbyGroupId(groupId) {
  return crudeInstance2.get(`/api/groups/temp/all?page=0&size=50&groupId=${groupId}&partner=britamguid`);
}
export function addFamilyToGroup(family) {
  return crudeInstance2.post(`api/groups/temp/add/family?partner=britamguid`, family);
}

function getAccessToken(){
  const authString = localStorage.getItem('auth');
    const authObject = JSON.parse(authString);
    const token = authObject?.access_token;
    return token;
}

