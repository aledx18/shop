import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar'
import Link from 'next/link'

const link = [
  { id: 0, name: 'Released ', order: 'released' },
  { id: 1, name: 'Name', order: 'name' },
  { id: 2, name: 'Relevance', order: 'relevance' }
]

export default function Order({
  orderBy,
  page
}: {
  orderBy: string
  page: number
}) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Order By</MenubarTrigger>
        <MenubarContent>
          {link.map((item) => (
            <Link
              key={item.id}
              href={{
                pathname: '/games',
                query: {
                  ...(page ? { page } : {}),
                  orderBy: item.order
                }
              }}>
              <MenubarItem
                className={orderBy === item.order ? 'text-[#22c55e]' : ''}>
                {item.name}
              </MenubarItem>
            </Link>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
