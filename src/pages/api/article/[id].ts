import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case "GET":
      let { id } = req.query;
      id = id as string;
      try {
        const article = await prisma.article.findUnique({
          where: {
            uuid: id,
          },
        });
        if (!article) res.status(404).json({ message: "Blog not found" });
        else res.status(200).json(article);
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
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
