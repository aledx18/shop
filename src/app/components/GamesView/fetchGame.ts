export async function getGames({
  page,
  slug,
  orderBy
}: {
  page: number
  slug: string
  orderBy: string
}) {
  const res = await fetch(
    `https://gameshop-pearl.vercel.app/api/game?page=${page}&slug=${slug}&orderBy=${orderBy}`,
    { cache: 'no-cache' }
  )
  const data = await res.json()
  return data
}
// https://gameshop-pearl.vercel.app/
export async function getGameById(id: string) {
  const res = await fetch(`https://gameshop-pearl.vercel.app/${id}`)
  return await res.json()
}
