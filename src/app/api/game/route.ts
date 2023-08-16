/* eslint-disable camelcase */
import {
  PrismaClientUnknownRequestError,
  PrismaClientValidationError
} from '@prisma/client/runtime/library'
import {
  generarSlug,
  obtenerFechaHoraActual
} from '@/app/components/DateNowFunct/dateNow'
import prismadb from '@/lib/prismaDb'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page')
  const pageNumber = page ? parseInt(page) : 1
  try {
    const take = 12
    const skip = (pageNumber - 1) * take

    const games = await prismadb.game.findMany({
      take,
      skip,
      include: {
        genres: true,
        parent_platforms: true,
        stores: true,
        short_screenshots: true
      }
    })
    return NextResponse.json(games)
  } catch (error) {
    if (error instanceof PrismaClientUnknownRequestError) {
      return NextResponse.json({ message: error.message, error: error.name })
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
