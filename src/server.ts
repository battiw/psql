import "reflect-metadata";
// import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { app } from "./app";
import { connectionDB } from "./helper/connectionDB";

// createConnection()
//   .then(async (connection) => {
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber1";
//     user.lastName = "Saw1";
//     user.age = 253;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

//   })
//   .catch((error) => console.log(error));
(async () => {
  await connectionDB();
  app.listen(4000, () =>
    console.log(`App is running on http://localhost:${4000}`)
  );
})();
