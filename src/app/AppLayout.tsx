import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <header>
        <h1>React Advanced POC</h1>

        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Dashboard
          </NavLink>{" "}
          |{" "}
          <NavLink
            to="/tasks"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Tasks
          </NavLink>{" "}
          |{" "}
          <NavLink
            to="/settings"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
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