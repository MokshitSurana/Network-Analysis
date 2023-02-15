import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case "GET":
      const { id } = req.query;
      const articleId = id as string;
      console.log(articleId);

      try {
        fetch(`${process.env.MODEL_API_ENDPOINT}/recommend/${articleId}`)
          .then((r) => r.json())
          .then((data) => {
            res.status(200).json(data);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Internal Server Error" });
          });
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
      }
      break;
    case "POST":
      break;
    case "PATCH":
      break;
    case "DELETE":
      break;
    default:
      res.status(500).json({ message: "Method not allowed" });
      break;
  }
}