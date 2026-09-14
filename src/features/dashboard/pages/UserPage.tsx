import { useUserQuery } from "../../../hooks/useUserQuery";
import { useUpdateUser } from "../../../hooks/useUpdateUser";

function UserPage() {
  const userQuery = useUserQuery();

  const updateUserMutation = useUpdateUser();

  const {
    data: user,
    isPending,
    isError,
    error,
    isFetching,
  } = userQuery;

  function handleUpdateUser() {
    updateUserMutation.mutate({
      name: "Rajesh Updated",
    });
  }

  if (isPending) {
    return <p>Loading user...</p>;
  }

  if (isError) {
    return (
      <p>
        Error: {error.message}
      </p>
    );
  }

  if (!user) {
    return <p>No user found.</p>;
  }

  return (
    <section>
      <h2>User</h2>

      <p>
        Name: <strong>{user.name}</strong>
      </p>

      <p>
        Username: {user.username}
      </p>

      <p>
        Email: {user.email}
      </p>

      {isFetching && (
        <p>Refreshing data...</p>
      )}

      <hr />

      <button
        onClick={handleUpdateUser}
        disabled={updateUserMutation.isPending}
      >
        {updateUserMutation.isPending
          ? "Updating..."
          : "Update Name"}
      </button>

      {updateUserMutation.isSuccess && (
        <p>
          User updated successfully.
        </p>
      )}

      {updateUserMutation.isError && (
        <p>
          Update failed:{" "}
          {updateUserMutation.error.message}
        </p>
      )}
    </section>
  );
}

export default UserPage;