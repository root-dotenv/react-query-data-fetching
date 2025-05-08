import { useQuery, useMutation } from "@tanstack/react-query";
import { getPosts } from "../api/postsAPI";

export const usePosts = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 1000 * 60 * 5, // - - - custom stale time value will override the value set inn the configuration in the Main query provider component
  });

  return {
    postsQuery,
  };
};
