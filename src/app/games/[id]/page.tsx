async function getGame(id: any) {
  const res = await fetch(`http://localhost:3000/api/game/${id}`)
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return await res.json()
}

export default async function GetGameDetail({ params }: any) {
  const data = await getGame(params.id)
  return (
    <>
      <h1> {data.name} !</h1>
    </>
  )
}
