import UserModel from '../../../Models/UserModel';

// const connectDB = require('../../utils/connectDB');
// connectDB()
export default async function handler(req, res) {
    const { id } = req.query
    if (req.method === "DELETE") {
        await UserModel.findOneAndDelete({ _id: id })
        res.json("Deleted")
    }
    if (req.method === "PUT") {
        const { name, email, phone } = req.body
        await UserModel.findOneAndUpdate({ _id: id }, { name: name, email: email, phone: phone })
            .then((resp) => {
                res.json("Updated")
                // console.log(resp)
            })
            .catch((err) => console.log(err))
    }
}
