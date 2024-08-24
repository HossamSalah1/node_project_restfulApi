const userModle = require("../Models/users")

const create = async (req, res) => {
    let newData = req.body
    try {
        const newUser = await userModle.create(newData);
        res.status(201).json({message:'created',data:newUser})
    } catch (error) {
        res.status(400).json({message:error.message})

    }



}

module.exports = { create }