import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Bekleme listesi kaydi. Supabase env degiskenleri tanimliysa kayit
 * `waitlist` tablosuna yazilir; tanimli degilse kayit alinamadigi acikca bildirilir.
 * Gerekli tablo icin README'deki SQL'e bakin.
 */
export async function POST(request: Request) {
  let email: unknown;

  try {
    ({ email } = (await request.json()) as { email?: unknown });
  } catch {
    return NextResponse.json({ message: "Geçersiz istek." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { message: "Geçerli bir e-posta adresi girin." },
      { status: 400 },
    );
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return NextResponse.json(
      {
        message:
          "Kayıt sistemi henüz aktif değil. Bize info@pillomi.com adresinden ulaşabilirsiniz.",
      },
      { status: 503 },
    );
  }

  const res = await fetch(`${url}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify({
      email: email.trim().toLowerCase(),
      source: "coming-soon",
    }),
  });

  if (!res.ok) {
    console.error("Supabase waitlist error", res.status, await res.text());
    return NextResponse.json(
      { message: "Kaydınızı şu anda alamadık, biraz sonra tekrar deneyin." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Kaydınızı aldık, açılışta ilk siz haberdar olacaksınız.",
  });
}
