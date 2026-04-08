import { NextResponse } from "next/server"
import { success } from "zod"

export async function POST() {

    console.log("hey this runs on the server side ")

    return NextResponse.json({success:true})
    
}