import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';
import axios from 'axios';

const base = process.env.REACT_APP_API_URL;

const listTasks = async () => {
  const { data } = await axios.get(`${base}tasks`);
  return camelcaseKeys(data.data);
};

const createTask = async body => {
  const { data } = await axios.post(`${base}tasks`, snakecaseKeys(body));
  return camelcaseKeys(data);
};

const getTasks = async id => {
  const { data } = await axios.get(`${base}tasks/${id}`);
  return camelcaseKeys(data);
};

const editTask = async (id, body) => {
  const { data } = await axios.put(`${base}tasks/${id}`, snakecaseKeys(body));
  return camelcaseKeys(data);
};

const destroyTask = id => {
  return axios.delete(`${base}tasks/${id}`);
};

export default {
  list: listTasks,
  create: createTask,
  get: getTasks,
  edit: editTask,
  destroy: destroyTask,
};
