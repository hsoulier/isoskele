import { ParagraphBase } from "@/components/text"
import { Heading2, Check } from "lucide-react"
import React from "react"

type Props = {
  question: string
  a1?: string
  a2?: string
  a3?: string
  a4?: string
  index: number
}

const Question = ({ question, a1, a2, a3, a4, index }: Props) => {
  console.log(question)
  return (
    <div key={index} className="mx-24">
      <Heading2 className="md:text-3xl mb-8 text-ui-blue">
        {index + 1}- {question}
      </Heading2>
      <div className="flex flex-col gap-3">
        {a1 && (
          <ParagraphBase className="flex items-center gap-4">
            <span className="w-6 h-6 rounded-lg border border-ui-black grid place-content-center">
              <Check size="18" />
            </span>
            {a1}
          </ParagraphBase>
        )}
        {a2 && (
          <ParagraphBase className="flex items-center gap-4">
            <span className="inline-block w-6 h-6 rounded-lg border border-ui-black"></span>
            {a2}
          </ParagraphBase>
        )}
        {a3 && (
          <ParagraphBase className="flex items-center gap-4">
            <span className="inline-block w-6 h-6 rounded-lg border border-ui-black"></span>
            {a3}
          </ParagraphBase>
        )}
        {a4 && (
          <ParagraphBase className="flex items-center gap-4">
            <span className="inline-block w-6 h-6 rounded-lg border border-ui-black"></span>
            {a4}
          </ParagraphBase>
        )}
      </div>
    </div>
  )
}

export default Question
