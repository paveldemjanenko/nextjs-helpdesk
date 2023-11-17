import { NextResponse } from "next/server";

// only GET by default is static, all other are dynamic and do not need dynamic on line 5

export const dynamic = 'force-dynamic';

export async function GET() {
  const res = await fetch('http://localhost:4000/tickets');

  const tickets = await res.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
}

export async function POST(request) {
  const ticket = await request.json();

  const res = await fetch('http://localhost:4000/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ticket),
  });

  const newTicket = await res.json();

  return NextResponse.json(newTicket, {
    status: 201,
  });
}
