import { NextResponse } from "next/server"
export async function POST(request) {
    try {
        const {
            transferStockQty,
            receivingBranchId,
            adjustmentNotes

        } = await request.json()
        const adjustment = {
            transferStockQty,
            receivingBranchId,
            adjustmentNotes
        }
        console.log(adjustment, 'adjustment')
        return NextResponse.json(adjustment)
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message: 'Failed to create a adjustment'
        }, { status: 500 })
    }
}