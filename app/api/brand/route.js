import { NextResponse } from "next/server"
export async function POST(request) {
    try {
        const {title} = await request.json() 
        const Brand = {title}
        console.log(Brand, 'body')
        return NextResponse.json(Brand)
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:'Failed to create a brand'
        },{status:500}) 
    }
}