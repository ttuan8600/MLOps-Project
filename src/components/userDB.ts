const mockUsers: Record<number, User> = {
  1: { id: 1, name: "Alice" },
  2: { id: 2, name: "Bob" },
};

export function getUser(userId: number): User {
  const user = mockUsers[userId];
  if (!user) throw new Error("User not found");
  return user;
}

