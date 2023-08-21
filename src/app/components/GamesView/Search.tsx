'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Search = ({ slug }: { slug?: string }) => {
  const router = useRouter()

  const [text, setText] = useState(slug)

  function handdleSubmit() {
    if (!text) {
      return
    }
    router.push(`/games?slug=${text}`)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handdleSubmit()
      }}
      className='flex space-x-2'>
      <Input
        value={text}
        type='search'
        placeholder='Search...'
        onChange={(e) => setText(e.target.value)}
      />
      <Button type='submit'>Search</Button>
    </form>
  )
}

export default Search
