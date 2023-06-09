/*
import ProjectList from './ProjectList';
import { useProjects } from './hooks/UseProjectHook';

function ProjectsPage() {
  const {
    projects,
    loading,
    error,
    setCurrentPage,
    saveProject,
    saving,
    savingError,
  } = useProjects();

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      <h1>Projects</h1>
      {saving && <span className="toast">Saving...</span>}

      {(error || savingError) && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error} {savingError}
              </p>
            </section>
          </div>
        </div>
      )}

      <ProjectList projects={projects} onSave={saveProject} />

      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default ProjectsPage;

*/
export {};
