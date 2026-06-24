import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://lambach.in/');
    const html = await res.text();
    // extract everything containing "who-we-are" or "about"
    const links = html.match(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi);
    return NextResponse.json({ links });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
