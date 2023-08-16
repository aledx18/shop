export async function getGames({ page }: { page: number }) {
  const res = await fetch(`http://localhost:3000/api/game?page=${page}`, {
    cache: 'no-store'
  })
  const data = await res.json()
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  return data
}
