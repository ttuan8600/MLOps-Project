import {getUserWithLogging} from "../../components/userService";
import * as api from "../../components/api";
import * as logger from "../../components/logger";
import {createOrder} from "../../components/oderService";

describe('userService - integration test', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('fetches user and logs the result', async () => {
    // Mock fetchUser and log
    jest.spyOn(api, 'fetchUser').mockResolvedValue({ id: 1, name: 'Alice' });
    const logSpy = jest.spyOn(logger, 'log').mockImplementation(() => {});

    const user = await getUserWithLogging(1);

    expect(api.fetchUser).toHaveBeenCalledWith(1);
    expect(logSpy).toHaveBeenCalledWith('Fetched user: Alice');
    expect(user.name).toBe('Alice');
  });
});

describe("Order Service Integration", () => {
  test("creates an order for a valid user", () => {
    const result = createOrder(1, "Laptop");
    expect(result).toBe("Order placed for Laptop by Alice");
  });

  test("throws error for non-existent user", () => {
    expect(() => createOrder(999, "Phone")).toThrow("User not found");
  });
});
