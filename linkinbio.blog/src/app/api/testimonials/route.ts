import { NextResponse } from 'next/server';
import { testimonialsData } from '@/data';

export async function GET() {
  return NextResponse.json(testimonialsData);
}
