// const routes = require("./routes");

// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");

// const app = express();

// app.use(cors());
// app.use(morgan("combined"));
// app.use(express.json());
// app.use(routes);

// app.get("/ping", (req, res) => {
//   res.status(200).query({ message: "ping" });
// });

// const PORT = process.env.PORT;

// const start = async () => {
//   try {
//     Server.listen(PORT, () => console.log(`Server is listening ${PORT}`));
//   } catch (err) {
//     console.error(err);
//   }
// };

// start();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(routes);
app.use(cors());
app.use(morgan("dev"));

app.get("/ping", (req, res) => {
  return res.status(200).json({ message: "pong" });
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
