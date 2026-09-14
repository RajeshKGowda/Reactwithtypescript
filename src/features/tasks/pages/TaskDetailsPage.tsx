import {
    Link,
    useNavigate,
    useParams,
  } from "react-router-dom";
  
  function TaskDetailsPage() {
    const { taskId } = useParams();
  
    const navigate = useNavigate();
  
    return (
      <section>
        <h2>Task Details</h2>
  
        <p>
          Task ID: <strong>{taskId}</strong>
        </p>
  
        <button onClick={() => navigate("/tasks")}>
          Back to Tasks
        </button>
  
        <br />
        <br />
  
        <Link to="/tasks">
          Back using Link
        </Link>
      </section>
    );
  }
  
  export default TaskDetailsPage;