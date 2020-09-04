module.exports = ({ router }) => {
  const routes = router();

  routes.get("/", (request, response) => {
    response.send("All articles");
  });

  routes.get("/:id", (request, response) => {
    response.send(`Article ${request.params.id}`);
  });

  return routes;
};
