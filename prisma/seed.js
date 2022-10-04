const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const userData = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    tasks: {
      create: [
        {
          title: "Join the Prisma Slack",
          description: "https://slack.prisma.io",
          status: "todo",
        },
      ],
    },
  },
  {
    name: "Nilu",
    email: "nilu@prisma.io",
    tasks: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          description:
            "https://www.twitter.com/prisma",
          status: "doing",
        },
      ],
    },
  },
  {
    name: "Mahmoud",
    email: "mahmoud@prisma.io",
    posts: {
      create: [
        {
          title:
            "Ask a question about Prisma on GitHub",
          description:
            "https://www.github.com/prisma/prisma/discussions",
          status: "todo",
        },
        {
          title: "Prisma on YouTube",
          description: "https://pris.ly/youtube",
        },
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(
      `Created user with id: ${user.id}`
    )
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
