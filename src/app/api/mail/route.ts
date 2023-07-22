import { NextRequest, NextResponse } from "next/server";
import { MailSchema, mailSchema } from "@/utils/MailSchema";

export async function POST(request:NextRequest){
    try{
    const mail = (await request.json()) as MailSchema;
    await mailSchema.validate(mail)

    const apiKey = process.env.EMAIL_API_KEY;
    if(!apiKey) throw Error("Email API Key not found");

    const formData = new FormData();
    formData.append('name', mail.name);
    formData.append('email', mail.email);
    formData.append('message', mail.message);
    formData.append('subject', mail.subject);
    formData.append('access_key', apiKey);
    formData.append('from_name', mail.name)

    const body = JSON.stringify(Object.fromEntries(formData.entries()));

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: body
    });

    const result = await response.json()
    if(result.success)
        return NextResponse.json({message:'Email sent successfully'})
    else throw Error("Failed to send email")
    } catch(e){
        const message = e instanceof Error ? e.message : "An error occurred"
        NextResponse.json({message}, {status: 400})
    }
}