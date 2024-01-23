const {
  getAll,
  getOneBasedOnCondition,
  getById,
} = require("../utils/dbFunctions");
let tableName = "users";

// we will only pass the table name over here thats sit

const getAllUsers = async () => {
  let result = await getAll(tableName);
  return result;
};

const getOneUser = async (conditions) => {
  let result = await getOneBasedOnCondition(tableName, conditions);
  return result;
};

const getUserById = async (id) => {
  let result = await getById(tableName, id);
  return result;
};

module.exports = {
  getAllUsers,
  getOneUser,
  getUserById,
};
