const pool = require("../db/db");
const errorHandler = require("./errorHanlder");

async function getAll(tableName) {
  let sql = `select * from ${tableName}`;
  return errorHandler(sql);
}

async function getById(tableName, id) {
  let sql = `select * from ${tableName} where isd = "${id}"`;
  return errorHandler(sql);
}
async function getOneBasedOnCondition(tableName, conditions) {
  let reConditions = conditions
    .map(({ column, value }) => `${column} = "${value}"`)
    .join(" AND ");
  let sql = `select * from ${tableName} where ${reConditions} ;`;
  return errorHandler(sql);
}

module.exports = {
  getAll,
  getOneBasedOnCondition,
  getById,
};
