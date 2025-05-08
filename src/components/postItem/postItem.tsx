import type { Post } from "../../api/types/posts";

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <div
      className={`bg-[ #f9f9f9] p-[1rem] mb-[1rem] rounded flex flex-col
     gap-[6px]`}
    >
      <h3 className={`text-sky-400 font-semibold text-[1.125rem]`}>
        {post.title}
      </h3>
      <p>{post.body}</p>
      <small>
        User ID: {post.userId} | Post ID: {post.id}
      </small>
    </div>
  );
};
