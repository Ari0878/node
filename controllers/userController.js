import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { name } = req.body;

    const user = await User.create({
      id: Date.now(),
      name
    });

    res.status(201).json({
      message: "Usuario creado",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};