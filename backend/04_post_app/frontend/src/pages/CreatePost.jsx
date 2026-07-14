import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios.post("http://localhost:3000/create-post", formData).then((res) => {
      console.log(res);
      alert("Post created successfully!");
      navigate("/feed");
    }).catch((err) => {
      console.error(err);
      alert("Failed to create post. Please make sure the backend is running and try again.");
    });
  };
  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image" />
        <input
          type="text"
          name="caption"
          required
          placeholder="Enter caption"
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
