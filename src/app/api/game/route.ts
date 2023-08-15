/* eslint-disable camelcase */
import prismadb from '@/lib/prismaDb'
import { NextResponse } from 'next/server'
import {
  PrismaClientUnknownRequestError,
  PrismaClientValidationError
} from '@prisma/client/runtime/library'
import {
  generarSlug,
  obtenerFechaHoraActual
} from '@/app/components/DateNowFunct/dateNow'

export async function GET() {
  try {
    const games = await prismadb.game.findMany({
      include: {
        short_screenshots: true,
        genres: true,
        parent_platforms: true,
        stores: true,
        _count: true
      }
    })
    return NextResponse.json(games)
  } catch (error) {
    if (error instanceof PrismaClientUnknownRequestError) {
      return NextResponse.json({ message: 'Error in Db', error: error.name })
    }
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const {
    name,
    metacritic,
    price,
    rating,
    released,
    background_image,
    description,
    short_screenshots,
    genres,
    stores,
    parent_platforms
  } = await request.json()
  try {
    const game = await prismadb.game.create({
      data: {
        name,
        metacritic,
        price,
        rating,
        released,
        slug: generarSlug(name),
        updated: obtenerFechaHoraActual(),
        background_image,
        description,
        short_screenshots: {
          create: short_screenshots.map((item: { image: string }) => ({
            image: item.image
          }))
        },
        genres: {
          create: genres.map((item: { name: string }) => ({
            name: item.name
          }))
        },
        stores: {
          create: stores.map((item: { name: string }) => ({
            name: item.name
          }))
        },
        parent_platforms: {
          create: parent_platforms.map((item: { name: string }) => ({
            name: item.name
          }))
        }
      }
    })
    return NextResponse.json(game)
  } catch (error) {
    if (error instanceof PrismaClientValidationError) {
      return NextResponse.json({
        message: 'Validation Error',
        error: error.name
      })
    }
    return NextResponse.json({ message: 'err', error }, { status: 500 })
  }
}
