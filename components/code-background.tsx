"use client"

export function CodeBackground() {
  const codeSnippets = [
    'import { useState } from "react"',
    "const [data, setData] = useState([])",
    "export default function Component() {",
    '  return <div className="container">',
    "async function fetchData() {",
    '  const response = await fetch("/api")',
    "  return response.json()",
    "}",
    "interface User {",
    "  id: string",
    "  name: string",
    "  email: string",
    "}",
    "const handleClick = () => {",
    '  console.log("Clicked!")',
    "}",
    "export const config = {",
    '  runtime: "edge"',
    "}",
  ]

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="absolute inset-0 flex flex-col gap-4 animate-code-scroll">
        {[...codeSnippets, ...codeSnippets].map((snippet, i) => (
          <div
            key={i}
            className="font-mono text-sm text-primary/60 whitespace-nowrap px-4"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            {snippet}
          </div>
        ))}
      </div>
    </div>
  )
}
