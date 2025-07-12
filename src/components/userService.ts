import { fetchUser } from './api';
import { log } from './logger';

export async function getUserWithLogging(userId: number) {
  const user = await fetchUser(userId);
  log(`Fetched user: ${user.name}`);
  return user;
}
