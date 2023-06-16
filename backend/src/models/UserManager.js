const connection = require("./index");

const dbQuery = connection.promise();

const findAll = async () => {
  try {
    const [result] = await dbQuery.query("SELECT * FROM user");
    return result;
  } catch (err) {
    console.error(err);
    return err.errno;
  }
};

const addOne = async ({ firstname, lastname, job, email, phone, password }) => {
  try {
    const [result] = await dbQuery.query(
      "INSERT INTO user (firstname, lastname, job, email, phone, password) VALUES (?,?,?,?,?,?)",
      [firstname, lastname, job, email, phone, password]
    );
    return {
      id: result.insertId,
      firstname,
      lastname,
      job,
      email,
      phone,
      password,
    };
  } catch (err) {
    console.error(err);
    return err.errno;
  }
};

const updateOne = async (id, user) => {
  try {
    const [result] = await dbQuery.query("UPDATE user SET ? WHERE id=?", [
      user,
      id,
    ]);
    if (result.affectedRows === 1) {
      return [0];
    }
    return [1];
  } catch (err) {
    console.error(err);
    return err.errno;
  }
};

module.exports = {
  findAll,
  addOne,
  updateOne,
};
