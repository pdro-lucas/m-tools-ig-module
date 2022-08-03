import axios from "../../src/services/axios";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const { username } = req.body;
      try {
        const { data } = await axios.get(
          `${process.env.IG_USER_ID}?fields=business_discovery.username(${username}){followers_count,media{comments_count,like_count}}`,
          {
            params: {
              access_token: process.env.IG_ACCESS_TOKEN,
            },
          }
        );
        res.status(200).json({ data });
      } catch (e) {
        res.status(404).json({
          status: "error",
          message: "usuário não encontrado ou não possui uma conta empresarial",
        });
      }
      break;
    default:
      res.json({ message: "Method not allowed" });
      break;
  }
}
