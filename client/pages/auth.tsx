// import useUser from "../lib/useUser";
// import Layout from "../components/Layout";

const Profile = () => {
  // Fetch the user client-side
  //   const { user } = useUser({ redirectTo: "/login" });
  let user = true;

  // Server-render loading state
  if (!user) {
    return <div>Loading...</div>;
  }

  // Once the user request finishes, show the user
  return (
    <div>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Profile;
