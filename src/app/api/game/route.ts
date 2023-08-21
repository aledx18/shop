/* eslint-disable indent */
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
  try {
    const { searchParams } = new URL(request.url)

    const slug = searchParams.get('slug')
    const page = searchParams.get('page')
    const paramsOrder = searchParams.get('orderBy')

    const ascDesc = paramsOrder === 'released' ? 'desc' : 'asc'

    const orderBy =
      paramsOrder === 'name'
        ? paramsOrder
        : paramsOrder === 'released'
        ? 'released'
        : 'relevance'

    const pageNumber = page ? parseInt(page) : 1
    const take = 12
    const skip = (pageNumber - 1) * take

    const games = await prismadb.game.findMany({
      orderBy: orderBy !== 'relevance' ? { [orderBy]: ascDesc } : undefined,
      take,
      skip,
      where: slug
        ? {
            slug: {
              startsWith: slug,
              mode: 'insensitive'
            }
          }
        : undefined,
      include: {
        genres: true,
        parent_platforms: true,
        stores: true,
        short_screenshots: true
      }
    })

    return NextResponse.json(games)
  } catch (error) {
    const errorMessage =
      error instanceof PrismaClientUnknownRequestError
        ? { message: error.message, error: error.name }
        : { message: 'Error', error }

    return NextResponse.json(errorMessage, {
      status: error instanceof PrismaClientUnknownRequestError ? 400 : 500
    })
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
    parent_platforms,
    video
  } = await request.json()
  try {
    const game = await prismadb.game.create({
      data: {
        name,
        video,
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

// export async function GET() {
//   try {
//     const games = await fetch(
//       'https://api.rawg.io/api/games?dates=2013-01-01%2C2022-12-31&key=914982c38be948199378f6cd3d11684d&ordering=-added&page=4&page_size=20'
//     )
//       .then((response) => response.json())
//       .then(async (data) => {
//         const gamesWith = []

//         for (let i = 0; i < data.results.length; i++) {
//           const game = data.results[i]
//           const slug = game.slug
//           const gameDescResponse = await fetch(
//             `https://api.rawg.io/api/games/${slug}?key=914982c38be948199378f6cd3d11684d`
//           )
//           const gameDescData = await gameDescResponse.json()
//           const gameIdvideo = game.id
//           const videoFetch = await fetch(
//             `https://api.rawg.io/api/games/${gameIdvideo}/movies?key=914982c38be948199378f6cd3d11684d`
//           )
//           const videoGame = await videoFetch.json()

//           const gameWithDesc = {
//             slug: game.slug,
//             video:
//               videoGame.results.length > 0
//                 ? videoGame.results[0].data.max
//                 : 'Null',
//             name: game.name,
//             released: game.released,
//             background_image: game.background_image,
//             rating: game.rating,
//             metacritic: game.metacritic || Math.round(Math.random() * 30) + 50,
//             updated: game.updated,
//             price: +(Math.random() * (45.5 - 3.9) + 3.9).toFixed(2),
//             stores: {
//               create: game.stores.map((sto: any) => ({
//                 name: sto.store.name
//               }))
//             },
//             short_screenshots: {
//               create: game.short_screenshots.map((img: any) => ({
//                 image: img.image
//               }))
//             },
//             parent_platforms: {
//               create: game.parent_platforms.map((pt: any) => ({
//                 name:
//                   pt.platform.name === 'Apple Macintosh'
//                     ? 'Mac'
//                     : pt.platform.name
//               }))
//             },
//             genres: {
//               create: game.genres.map((gen: any) => ({
//                 name:
//                   gen.name === 'Massively Multiplayer'
//                     ? 'Massively_multiplayer'
//                     : gen.name
//               }))
//             },
//             description: gameDescData.description_raw
//           }
//           gamesWith.push(gameWithDesc)
//         }

//         return gamesWith
//       })

//     for (const game of games) {
//       await prismadb.game.create({
//         data: game
//       })
//     }
//     return NextResponse.json(games)
//   } catch (error) {
//     if (error instanceof PrismaClientValidationError) {
//       return NextResponse.json({
//         message: error.message,
//         error: error.name
//       })
//     }
//     return NextResponse.json({ message: 'err', error }, { status: 500 })
//   }
// }
