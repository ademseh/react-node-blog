import axios from "axios";

export const fetchBlogs = async () => {
  let response = await axios.get("https://dummyjson.com/posts?limit=10");
  return response.data;
};
