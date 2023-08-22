import { sleep } from "../util/sleep";

const API_MOCK_ENABLED = process.env.REACT_APP_API_MOCK_ENABLED === "true";
const API_MOCK_DELAY = Number(process.env.REACT_APP_API_MOCK_DELAY);

export function isMock() {
  return API_MOCK_ENABLED;
}

export async function delayMock<T>(mock: T) {
  if (API_MOCK_DELAY !== 0) {
    await sleep(API_MOCK_DELAY);
  }
  return mock;
}

export const switchMockAction = <F>(realAction: F, mockedAction: F): F =>
  isMock() ? mockedAction : realAction;

export const getPageTokenMock = (
  pageToken?: string,
  tokenList = [undefined, "b", "c", "d"]
) => {
  const index = tokenList.indexOf(pageToken);
  return { index };
};
