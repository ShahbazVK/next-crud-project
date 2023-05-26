// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const connectDB = require('../../utils/connectDB');
connectDB()
export default function handler(req, res) {
  if (req.method === "GET") res.status(200).json({ name: 'Get data' })
  if (req.method === "POST") res.status(200).json({ name: 'POST data' })
}
