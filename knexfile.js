const kenx = require("knex")({
    client: "<Client>",
    connection: {
        host: "localhost",
        port: 5432,
        database: "<NameDataBase>",
        user: "<NameUser>",
        password: "<Password>",
    },
  });