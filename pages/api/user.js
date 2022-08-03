export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.json({ message: "Hello World" });
      break;
    default:
      res.json({ message: "Method not allowed" });
      break;
  }
}
