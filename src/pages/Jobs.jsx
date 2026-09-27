import { Link } from "react-router-dom";
function Jobs() {
  const jobs = [
    { id: 101, title: "Frontend Developer" },
    { id: 102, title: "React Developer" },
    { id: 103, title: "Full Stack Developer" },
  ];

  return (
    <>
      <h1>All Jobs</h1>

      {jobs.map((job) => (
  <div key={job.id}>
    <Link to={`/jobs/${job.id}`}>
      {job.title}
    </Link>
  </div>
))}
    </>
  );
}

export default Jobs;