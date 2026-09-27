import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  return <h1>Job Details for Job {id}</h1>;
}

export default JobDetails;