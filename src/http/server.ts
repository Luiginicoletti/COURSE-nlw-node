import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
  return "nlw";
});

app.listen({ port: 3333 }).then(() => {
  console.log("Port 3333 ON 🚀");
});
