import { NextResponse } from "next/server"
export async function POST(request) {
    try {
        const {
            title,
            categoryId,
            sku,
            barcode,
            qty,
            unitId,
            brandId,
            supplierId,
            buyingPrice,
            sellingPrice,
            reOrderPoint,
            warehouseId,
            imageUrl,
            weight,
            dimension,
            taxRate,
            description,
            notes
        } = await request.json()
        const item = {
            title,
            categoryId,
            sku,
            barcode,
            qty,
            unitId,
            brandId,
            supplierId,
            buyingPrice,
            sellingPrice,
            reOrderPoint,
            warehouseId,
            imageUrl,
            weight,
            dimension,
            taxRate,
            description,
            notes
        }
        console.log(item, 'body')
        return NextResponse.json(item)
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: 'Failed to create a item'
        }, { status: 500 })
    }
}