type User = {
  userName: string;
  age: number;
  city?: string;
};

type Role = "admin" | "user" | "guest";

function createUserCard(user: User, role: Role) {
  return `${user.userName} (${user.age}) - ${role} from ${user.city || "Unknown"}`;
}
createUserCard;
