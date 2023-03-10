// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/client";

type RequestBody = {
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: RequestBody = JSON.parse(req.body);

    if (req.method === "POST") {
      if (!post.title.length) {
        return res.status(400).json({ message: "Title is required" });
      }
    }
    try {
      const data = await prisma.post.create({ data: { title: post.title } });
      console.log(data);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
