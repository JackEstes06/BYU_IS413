import { useEffect, useState } from 'react';
import { Project } from '../types/Project';
import { fetchProjects } from '../api/ProjectsAPI';
import Pagination from '../Components/Pagination';

const AdminProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNum, setPageNum] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <>
      <h1>Admin - Projects</h1>
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
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => console.log(`Edit project: ${p.projectId}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => console.log(`Edit project: ${p.projectId}`)}
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
