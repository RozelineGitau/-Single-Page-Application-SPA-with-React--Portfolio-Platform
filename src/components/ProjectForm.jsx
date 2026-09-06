import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title,
      description: description
    };

    onAddProject(newProject);

    setTitle("");
    setDescription("");
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <label htmlFor="title">Title</label>

      <input
        id="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="description">Description</label>

      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;