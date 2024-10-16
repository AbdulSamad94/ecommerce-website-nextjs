import { NextResponse } from 'next/server';
import { fetchProductById } from '@/app/util/api';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const product = await fetchProductById(id);
        return NextResponse.json({ product });
    } catch (error) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
}