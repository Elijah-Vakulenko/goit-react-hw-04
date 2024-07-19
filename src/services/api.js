import axios from "axios";

const accessKey = "GlfM3-88yWSKTry7LxAZpnGQ87Jbs5FmaIxlagwEScU";
const apiUrl = "https://api.unsplash.com/";

export const requestImages = async () => {
  const { data } = await axios.get(
    `${apiUrl}/search/photos?client_id=${accessKey}`
  );
  return data;
};

export const requestImagesByQuery = async (query = "", page = 1) => {
  const { data } = await axios.get(
    `${apiUrl}/search/photos?client_id=${accessKey}&query=${query}&page=${page}`
  );
  return data;
};