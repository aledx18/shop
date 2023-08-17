export async function getGames({ page }: { page: number }) {
  const res = await fetch(`http://localhost:3000/api/game?page=${page}`, {
    cache: 'no-store'
  })
  const data = await res.json()
  return data
}

export async function getGameById(id: string) {
  const res = await fetch(`http://localhost:3000/api/game/${id}`)
  return await res.json()
}
