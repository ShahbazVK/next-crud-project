import UserModel from "../../../Models/UserModel"

export default async function handler(req, res) {
    if (req.method === "GET") {
        const users = await UserModel.find({})
        res.send({ data: users })
    }
    if (req.method === "POST") {
        // console.log(req.body)
        const { name, email, phone } = req.body
        UserModel.create({ name: name, email: email, phone, phone })
        res.json("data added")
    }
}
