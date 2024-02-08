"use client";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import MessageUsEmail from "@/components/EmailMessage";

const resend = new Resend("re_WRyJxdv2_GYa6iTQCagnJ8tzWcFM1XWro");

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: `abirham.johannes@gmail.com`,
      subject: `${name} has a message!`,
      react: MessageUsEmail({ name, email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
