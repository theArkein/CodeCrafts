import React, { HTMLAttributes } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const items: {
  id: number
  name: string
  description: string
  img?: string
  path: string
  enabled: boolean
  status: "Coming soon" | "In progress" | "Completed"
}[] = [
  {
    id: 1,
    name: "CodeCrafts",
    description:
      "A platform where you can find ready to use code crafted solutions to your problems.",
    path: "https://www.example.com",
    enabled: true,
    status: "Coming soon",
  },
  {
    id: 1,
    name: "Portfolio Tracker",
    description:
      "A stock portfolio tracker tool that monitors and manages your investments, providing real-time updates on the performance of stocks in your portfolio",
    path: "https://www.example.com",
    enabled: true,
    status: "Completed",
  },
]

const StatusColorMapper = {
  "Coming soon": "bg-gray-200 dark:bg-gray-400",
  "In progress": "bg-blue-200 dark:bg-blue-800",
  Completed: "bg-green-200 dark:bg-green-800",
}

type CodeCraftsListProps = HTMLAttributes<HTMLDivElement>

const CodeCraftsList = ({ className, ...props }: CodeCraftsListProps) => {
  return (
    <div {...props} className={cn(className)}>
      {items.map((item) => (
        <Card className="w-[350px] cursor-pointer">
          <Link
            key={item.id}
            target="_blank"
            href={item.path}
            className=" block min-h-full"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-4 text-xl">
                {item.name}{" "}
                <Badge
                  variant="secondary"
                  className={cn(" text-xs", StatusColorMapper[item.status])}
                >
                  {item.status}
                </Badge>
              </CardTitle>
              <CardDescription className="text-justify text-xs text-muted-foreground">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>
      ))}
    </div>
  )
}

export default CodeCraftsList
