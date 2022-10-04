import prisma from "../../../lib/prisma"

// PUT /api/publish/:id
export default async function handle(req, res) {
  const postId = req.query.id
  const post = await prisma.task.update({
    where: { id: Number(postId) },
    data: { status: "todo" },
  })
  res.json(post)
}
