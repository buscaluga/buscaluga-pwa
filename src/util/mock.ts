import { sleep } from "../util/sleep";

const API_MOCK_ENABLED = process.env.REACT_APP_API_MOCK_ENABLED === "true";
const API_MOCK_DELAY = Number(process.env.REACT_APP_API_MOCK_DELAY);

// Use this to return mock with env options
export async function mockWrapper<T>(mock: T) {
  if (API_MOCK_ENABLED) {
    if (API_MOCK_DELAY !== 0) {
      await sleep(API_MOCK_DELAY);
    }
    return mock;
  }
}
