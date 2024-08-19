import User from "../models/user.js";
import mongoose from "mongoose";

export class UserService {
  constructor() {
    this.getUsers = this.getUsers.bind(this);
    this.getUser = this.getUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json( users );
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async getUser(req, res) {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async createUser(req, res) {
    try {
      const user = new User(req.body);
      const newUser = await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const user = req.body;
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).send("No user with that id");
      }
      const updatedUser = await User.findByIdAndUpdate(userId, user, {
        new: true,
      }
      )
      res.json( updatedUser );
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      await user.deleteOne();
      res.json({ msg: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
}
