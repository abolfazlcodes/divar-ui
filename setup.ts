import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, vi } from "vitest";

beforeAll(() => {
  vi.mock("next/font/google", () => ({
    // eslint-disable-next-line camelcase
    Vazirmatn({}) {
      return {
        className: "",
      };
    },
  }));
});

afterEach(() => {
  cleanup();
});

// beforeEach(() => {
//   vi.mock('next/router', () => ({
//     useRouter() {
//       return {
//         route: '/',
//         pathname: '',
//         query: '',
//         asPath: '',
//         locale: 'en',
//       };
//     },
//   }));
// });
