import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.log("Waitlist signup (dev mode):", email);
      return NextResponse.json({ success: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "contact@wholesalify.com",
      to: process.env.FOUNDER_EMAIL || "wholesalify@hotmail.com",
      subject: "New Wholesalify Early Access Request",
      html: `
        <h2>New Early Access Request</h2>
        <p>Email: ${email}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
