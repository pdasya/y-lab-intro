export interface MockResponse {
  success: boolean;
  message?: string;
}

const mockFetch = (email: string, password: string): Promise<MockResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        resolve({ success: true });
      } else {
        resolve({ success: false, message: "Invalid email or password" });
      }
    }, 1000);
  });
};

export default mockFetch;
