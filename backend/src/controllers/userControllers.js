/*
const joi = require("joi");

const userManager = require("../models/UserManager");
// const { hashPassword } = require("../utils/auth.js");

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return joi
    .object({
      firstname: joi.string().max(100).presence(presence),
      lastname: joi.string().max(100).presence(presence),
      job: joi.string().max(150).presence(presence),
      email: joi.string().max(150).presence(presence),
      phone: joi.string().max(50).presence(presence),
      hashedPassword: joi.string().max(50).presence(presence),
      profilePicture: joi
        .string()
        .max(100)
        .allow(null)
        .allow("")
        .presence("optional"),
    })
    .validate(data, { abortEarly: false }).error;
};

const getAll = async (req, res) => {
  const result = await userManager.findAll();
  return res.json(result);
};

const addOne = async (req, res) => {
  console.log(req.body);
  const errors = validate(req.body);
  if (errors) return res.sendStatus(422);
  const { firstname, lastname, job, email, phone, password } = req.body;
  const hashed = await hashPassword(password);
  if (!hashed) {
    return res.sendStatus(500);
  }
  console.log(hashed);
  const result = await userManager.addOne({
    firstname,
    lastname,
    job,
    email,
    phone,
    password: hashed,
  });
  switch (result[0]) {
    case 0:
      return res.json(result[1]);
    case 1062:
      return res.status(409).send("User already exists");
    default:
      return res.sendStatus(500);
  }
};

const updateOne = async (req, res) => {
  if (isNaN(req.params.id)) return res.sendStatus(422);
  const id = req.params.id;
  const errors = validate(req.body, false);
  if (errors) return res.sendStatus(422);
  const { password } = req.body;
  let hashedPassword = null;
  if (password) {
    hashedPassword = await hashPassword(password);
    req.body.password = hashedPassword;
  }
  const result = await userManager.updateOne(id, req.body);
  switch (result[0]) {
    case 0:
      return res.sendStatus(204);
    case 1:
      return res.sendStatus(404);
    case 1062:
      return res.status(409).send("User already exists");
    default:
      return res.sendStatus(500);
  }
};

module.exports = {
  getAll,
  addOne,
  updateOne,
};
*/
