import api from "./axios";
import type { Post } from "./types/posts";

export const getPosts = async (): Promise<Post[]> => {
  const response = await api.get("/posts");
  return response.data;
};
