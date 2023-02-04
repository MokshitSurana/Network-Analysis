import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const method = req.method;
    switch (method) {
        case "GET":
            let q = req.query.q;
            q = q as string;
            try {
                const articles = await prisma.article.findMany({
                    where: {
                        title: {
                            contains: q,
                            mode: "insensitive",
                        },
                    },
                    limit: 10,
                });
                res.status(200).json(articles);
            } catch (error) {
                console.log(error);
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
