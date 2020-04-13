const server = require("./server.js");

const PORT = process.env.PORT || 5010;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
