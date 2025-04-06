import { useEffect, useState } from 'react';
import { Project } from '../types/Project';
import { deleteProject, fetchProjects } from '../api/ProjectsAPI';
import Pagination from '../Components/Pagination';
import NewProjectForm from '../Components/NewProjectForm';
import EditProjectForm from '../Components/EditProjectForm';

const AdminProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNum, setPageNum] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editProject, setEditProject] = useState<Project | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects(pageSize, pageNum, []);

        setProjects(data.projects);
        setTotalPages(Math.ceil(data.numProjects / pageSize));

        console.log(`Projects: ${data.projects}`);
        console.log(`Total Pages: ${data.numProjects}`);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [pageSize, pageNum]);

  const handleDelete = async (projectId: number) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this project?'
    );
    if (!confirmDelete) return;

    try {
      await deleteProject(projectId);
      setProjects(projects.filter((p) => p.projectId !== projectId));
    } catch (e) {
      console.error(`Error handling delete for project: ${e}`);
      throw e;
    }
  };

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <>
      <h1>Admin - Projects</h1>

      {!showForm && (
        <button
          className="btn btn-success mb-3"
          onClick={() => setShowForm(true)}
        >
          Add Project
        </button>
      )}

      {showForm && (
        <NewProjectForm
          onSuccess={() => {
            setShowForm(false);
            fetchProjects(pageSize, pageNum, []).then((data) =>
              setProjects(data.projects)
            );
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {editProject && (
        <EditProjectForm
          project={editProject}
          onSuccess={() => {
            setEditProject(null);
            fetchProjects(pageSize, pageNum, []).then((data) =>
              setProjects(data.projects)
            );
          }}
          onCancel={() => setEditProject(null)}
        />
      )}

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Regional Programs</th>
            <th>Impact</th>
            <th>Phase</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.projectId}>
              <td>{p.projectId}</td>
              <td>{p.projectName}</td>
              <td>{p.projectType}</td>
              <td>{p.projectRegionalProgram}</td>
              <td>{p.projectImpact}</td>
              <td>{p.projectPhase}</td>
              <td>{p.projectFunctionalityStatus}</td>
              <td className="text-center">
                <button
                  className="btn btn-primary btn-sm me-2 w-100"
                  onClick={() => setEditProject(p)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm w-100"
                  onClick={() => handleDelete(p.projectId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={pageNum}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={setPageNum}
        onPageSizeChange={(newSize) => {
          setPageSize(newSize);
          setPageNum(1);
        }}
      />
    </>
  );
};

export default AdminProjectsPage;
