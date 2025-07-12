export async function fetchUser(userId: number): Promise<{ id: number; name: string }> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.json();
}
