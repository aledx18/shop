/* eslint-disable camelcase */
import { generarSlug } from '@/app/components/DateNowFunct/dateNow'
import prismadb from '@/lib/prismaDb'
import { NextResponse } from 'next/server'

interface Params {
  params: { id: string }
}

export async function GET(request: Request, { params }: Params) {
  try {
    const games = await prismadb.game.findUnique({
      where: { id: params.id },
      include: {
        short_screenshots: true,
        genres: true,
        parent_platforms: true,
        stores: true
      }
    })
    if (games == null) {
      return NextResponse.json({ message: 'Game not found' }, { status: 404 })
    }
    return NextResponse.json(games)
  } catch (error) {
    return NextResponse.json({ message: 'error', error }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const gamesDelete = await prismadb.game.delete({
      where: { id: params.id }
    })
    return NextResponse.json(gamesDelete)
  } catch (error) {
    return NextResponse.json({ message: 'error', error }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { name, price, released, background_image, description } =
      await request.json()

    const gameUpdate = await prismadb.game.update({
      where: { id: params.id },
      data: {
        name,
        price,
        released,
        background_image,
        description,
        slug: generarSlug(name)
      }
    })
    return NextResponse.json(gameUpdate)
  } catch (error) {
    return NextResponse.json({ message: 'error', error }, { status: 500 })
  }
}
