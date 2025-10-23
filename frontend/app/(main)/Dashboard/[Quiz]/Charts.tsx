"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

export const description = "A bar chart"

const chartConfig = {
  students: {
    label: "Students",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

type ChartBarDefaultProps = {
  ClassName?: string
  className?: string
  data?: Array<{ marks: number; students: number }>
  title?: string
  description?: string
}

export function ChartBarDefault({
  ClassName,
  className,
  data = [],
  title = "Score Distribution",
  description = "Marks vs number of students",
}: ChartBarDefaultProps) {
  const resolvedClassName = cn("w-full max-w-4xl", ClassName, className)

  return (
    <Card className={resolvedClassName}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-4 pb-2 sm:px-6">
        <ChartContainer
          className="h-[240px] w-full sm:h-[280px]"
          config={chartConfig}
        >
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="marks"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <YAxis
              dataKey="students"
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              width={40}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="students" fill="var(--color-students)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing unique student counts per mark band
        </div>
      </CardFooter> */}
    </Card>
  )
}
