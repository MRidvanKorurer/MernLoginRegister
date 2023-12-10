const Auth = require("../models/auth");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Auth.create({ username, email, password: hashedPassword });

    res.status(201).json({
      status: "OK",
      newUser,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "email adresi hatalı" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(400).json({ error: "paralo hatalı" });
    }

    res.status(200).json({
      status: "OK",
      email: user.email,
      password: user.password,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { register, login };
