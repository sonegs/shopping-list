import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getFilter, FilterResult } from '@/lib/api/filters.api';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get('id');

  if (!idParam) {
    return NextResponse.json(
      { error: 'Missing category id' },
      { status: 400 }
    );
  }

  const id = parseInt(idParam, 10);

  if (Number.isNaN(id)) {
    return NextResponse.json(
      { error: 'Invalid category id' },
      { status: 400 }
    );
  }

  try {
    const category: FilterResult = await getFilter(id);
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
