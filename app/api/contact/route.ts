import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/contact-schema'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed.', issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    )
  }

  const { name, email, message } = parsed.data

  // In production, wire this to an email provider (Resend, etc.) or a database.
  console.log('[v0] New contact message:', { name, email, message })

  return NextResponse.json({ ok: true })
}
