import { NextResponse } from "next/server"
export async function POST(request) {
    try {
        let body = await request.json()
        console.log(body, 'body')
        return NextResponse.json(body)
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:'Failed to create a category'
        },{status:500}) 
    }
}