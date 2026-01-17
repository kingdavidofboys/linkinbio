import { NextResponse } from 'next/server';
import { profileData } from '@/data';

export async function GET() {
  return NextResponse.json(profileData);
}
