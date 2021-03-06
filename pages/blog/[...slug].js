import { useRouter } from "next/router";

const BlogPostsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {slug?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostsPage;
