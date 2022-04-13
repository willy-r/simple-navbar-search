import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function searchUsersByFirstName(searchText) {
  const res = await api.get(`/users?first_name_like=${searchText}`);
  return res.data;
}
