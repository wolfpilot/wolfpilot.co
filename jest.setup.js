// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom"
import { TextEncoder, TextDecoder } from "util"

/**
 * Fix TextEncoder error during test runtime
 *
 * For more info, see:
 * https://github.com/inrupt/solid-client-authn-js/issues/1676#issuecomment-917016646
 */
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
