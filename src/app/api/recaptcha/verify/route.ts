import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();
    if (!token) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      console.error("RECAPTCHA_SECRET_KEY is not set");
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);

    const verifyResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      },
    );
    const data = await verifyResponse.json();

    if (data.success && typeof data.score === "number" && data.score > 0.5) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: false }, { status: 400 });
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

