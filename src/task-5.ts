interface User {
  name: string;
  age: number;
}
// interface createUser {
//   name: string;
//   age: number;
//   isAdmin: boolean;
// }
type createUser = User & {
  isAdmin: boolean;
};

function createUser({ name, age }: User): createUser {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });
