const normalizePort = (val) => {
  if (typeof val === "undefined") {
    return false;
  }

  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    throw new Error(`Port ${val} incorrect`);
  }

  if (port >= 0) {
    return port;
  }

  throw new Error(`Port ${val} incorrect`);
};

const httpPort = normalizePort(process.env.PORT) || 3000;

module.exports = {
  httpPort,
  ws: {
    origins: ["http://localhost:5500"],
  },
};
