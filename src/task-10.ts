interface User {
  id: number;
  name: string;
}
const users = ["alice", "bob", "charlie"];

function toUserObjects(array: string[]): User[] {
  return array.map((name, index) => ({
    id: index + 1,
    name,
  }));
}
toUserObjects;
users;
