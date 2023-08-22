'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { useDebounce } from 'use-debounce'

const Search = ({ slug }: { slug?: string }) => {
  const router = useRouter()
  const initialRender = useRef(true)

  const [text, setText] = useState(slug)
  const [query] = useDebounce(text, 800)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (!query) {
      router.push('/games')
    } else {
      router.push(`/games?slug=${query}`)
    }
  }, [query])

  return (
    <div className='flex '>
      <Input
        value={text}
        type='search'
        placeholder='Search...'
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default Search
