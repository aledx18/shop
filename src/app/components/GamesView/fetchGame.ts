export async function getGames({ page }: { page: number }) {
  const res = await fetch(
    `https://gameshop-pearl.vercel.app/api/game?page=${page}`
  )
  const data = await res.json()
  return data
}
// https://gameshop-pearl.vercel.app/
export async function getGameById(id: string) {
  const res = await fetch(`https://gameshop-pearl.vercel.app/api/game/${id}`)
  return await res.json()
}
