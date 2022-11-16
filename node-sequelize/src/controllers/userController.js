const { User } = require("../models/User");

const createUser = async (req, res) => {
    const { name, email, image } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            image,
        });
        return res.status(201).json({
            message: "User creation successfully",
            user,
        });
    } catch (err) {
        return res.status(400).json({
            message: "User creation failed",
            error: "lala",
        });
    }
};

module.exports = { createUser };
