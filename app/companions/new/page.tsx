"use client"

import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const NewCompanions = () => {
  return (
    <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion</h1>
      </article>
    </main>
  )
}
export default NewCompanions