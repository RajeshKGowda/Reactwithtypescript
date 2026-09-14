import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <header>
        <h1>React Advanced POC</h1>

        <nav>
          <NavLink to="/">
            Dashboard
          </NavLink>{" "}
          |{" "}
          <NavLink to="/tasks">
            Tasks
          </NavLink>{" "}
          |{" "}
          <NavLink to="/settings">
            Settings
          </NavLink>
        </nav>
      </header>

      <hr />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;