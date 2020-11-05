const user = {
  name: "John",
  lastName: "Doe",
  age: 40,
  email: "john@gmail.com",
};

const SecondComponent = () => {
  return (
    <div class="user-container">
      <h3> {user.name} </h3>
      <h3> {user.lastName} </h3>
      <h3> {user.age} </h3>
      <h3> {user.email} </h3>
    </div>
  );
};

export default SecondComponent;
