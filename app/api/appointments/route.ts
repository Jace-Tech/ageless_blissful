import { PrismaClient } from '@prisma/client';
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const appointment = await prisma.appointment.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        service: body.service,
        location: body.location,
        date: new Date(body.date),
        time: body.time,
        message: body.message || '',
        status: 'pending'
      }
    })

    return NextResponse.json({ success: true, appointment })
  } catch (error) {
    console.error('Error creating appointment:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create appointment' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ success: true, appointments })
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch appointments' },
      { status: 500 }
    )
  }
}