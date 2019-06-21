import {join} from "https://deno.land/std/fs/path.ts";
import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

console.log(join(Deno.cwd(), './README.md'));

test({
  name: "testing example",
  fn(): void {
    assertEquals("mark", "mark");
    assertEquals({ name: "mark" }, { name: "mark", age: 37 });
  }
});

runTests();