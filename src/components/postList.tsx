import { usePosts } from "../hooks/usePosts";
import { PostItem } from "./postItem/postItem";
import type { Post } from "../api/types/posts";

export const PostsList = () => {
  const {
    postsQuery: { data, isLoading, isError, error },
  } = usePosts();

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="posts-list">
      <h2>Posts</h2>
      {data?.map((post: Post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};
