import { getUser } from "./userDB";

export function createOrder(userId: number, item: string): string {
  const user = getUser(userId);
  if (!user) {
    throw new Error("User not found");
  }
  return `Order placed for ${item} by ${user.name}`;
}
