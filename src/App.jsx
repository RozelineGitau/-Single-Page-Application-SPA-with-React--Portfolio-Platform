import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

import projectsData from "./data/projects";

import "./App.css";

function App() {
  const [projects, setProjects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <main>
        <ProjectForm onAddProject={addProject} />

        <section className="projects-section">
          <SearchBar
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
          />

          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </div>
  );
}

export default App;