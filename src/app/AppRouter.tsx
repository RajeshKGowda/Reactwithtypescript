import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
  
  import AppLayout from "./AppLayout";
  
  import { TaskProvider } from "../context/TaskContext";
  
  import DashboardPage from "../features/dashboard/pages/DashboardPage";
  
  import UserPage from "../features/dashboard/pages/UserPage";
  
  import TasksPage from "../features/tasks/pages/TasksPage";
  
  import TaskDetailsPage from "../features/tasks/pages/TaskDetailsPage";
  
  import SettingsPage from "../features/settings/pages/SettingsPage";
  
  import NotFoundPage from "../pages/NotFoundPage";
  
  function AppRouter() {
    return (
      <BrowserRouter>
        <TaskProvider>
          <Routes>
            <Route
              path="/"
              element={<AppLayout />}
            >
              <Route
                index
                element={<DashboardPage />}
              />
  
              <Route
                path="user"
                element={<UserPage />}
              />
  
              <Route
                path="tasks"
                element={<TasksPage />}
              />
  
              <Route
                path="tasks/:taskId"
                element={<TaskDetailsPage />}
              />
  
              <Route
                path="settings"
                element={<SettingsPage />}
              />
  
              <Route
                path="*"
                element={<NotFoundPage />}
              />
            </Route>
          </Routes>
        </TaskProvider>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;