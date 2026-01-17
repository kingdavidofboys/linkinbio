import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Contact Form Submitted:', body);

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
  }
}
