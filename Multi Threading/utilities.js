"use strict";

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Root@123456",
  database: "test",
});

const updateData = (id) => {
  try {
    if (connection) {
      connection.query(
        `UPDATE users SET age = age + 1 WHERE id = ${id}`,
        () => {
          console.log("ID: ", id);
          return { id: id };
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
};

exports.updateData = updateData;
