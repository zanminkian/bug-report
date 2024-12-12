import assert from "node:assert";
import { describe, it } from "node:test";
import { foo } from "./foo.js";

describe("foo", async () => {
  it("foo should be /foo/bar", () => {
    assert.strictEqual(foo, '/foo/bar')
  })
})