import SearchBar from "./SearchBar";
import ProjectList from "./ProjectList";

function ProjectSection({ searchTerm, onSearch, projects }) {
  return (
    <section className="projects-section">
      <SearchBar
        searchTerm={searchTerm}
        onSearch={onSearch}
      />

      <ProjectList projects={projects} />
    </section>
  );
}

export default ProjectSection;