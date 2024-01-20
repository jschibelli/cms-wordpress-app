// pages/edit/[slug].tsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const EditPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState({ title: "", content: "" });

  useEffect(() => {
    // Fetch the post data from the WordPress API using the slug
    // and then update the state.
    // This is a placeholder, replace with actual data fetching logic.
    setPost({ title: "Sample Title", content: "Sample content..." });
  }, [slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the updated post data to the WordPress API
    console.log("Updated post:", post);
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPost;
