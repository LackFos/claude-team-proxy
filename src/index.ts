import { Elysia } from "elysia";
import { openapi, fromTypes } from "@elysiajs/openapi";

const app = new Elysia().use(openapi({ references: fromTypes() })).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
