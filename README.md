# Pillomi — pillomi.com

Pillomi seyahat boyun yastığı için "yakında açılıyoruz" sitesi.
Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript. Vercel'e deploy edilmek üzere hazır.

## Geliştirme

```bash
npm install
npm run dev
```

http://localhost:3000

## Vercel'e yayınlama

İlk kurulumda Vercel hesabına giriş yapılması gerekir; bu adımı kendi terminalinizde çalıştırın:

```bash
npx vercel login
```

Ardından projeyi bağlayıp yayına alın:

```bash
npx vercel --prod
```

Sorular geldiğinde:

- **Set up and deploy?** → `y`
- **Which scope?** → kendi hesabınız
- **Link to existing project?** → `n`
- **Project name?** → `pillomi`
- **In which directory is your code located?** → `./`
- Framework olarak Next.js otomatik algılanır, ayar değiştirmeye gerek yok.

### Alternatif: GitHub üzerinden

1. GitHub'da `pillomi` adında boş bir repo açın.
2. `git remote add origin https://github.com/<kullanici>/pillomi.git`
3. `git push -u origin main`
4. vercel.com → **Add New → Project** → repoyu seçin → **Deploy**.

Bu yöntemde her `git push` otomatik yeni deploy tetikler.

### pillomi.com alan adını bağlama

Vercel panelinde **Project → Settings → Domains → Add** ile `pillomi.com` ve
`www.pillomi.com` ekleyin. Vercel'in verdiği kayıtları alan adı sağlayıcınızda tanımlayın:

| Kayıt | Ad    | Değer                 |
| ----- | ----- | --------------------- |
| A     | `@`   | `76.76.21.21`         |
| CNAME | `www` | `cname.vercel-dns.com` |

(Vercel panelde güncel değerleri gösterir; farklıysa oradakini kullanın.)

## Supabase (e-posta bekleme listesi)

Site, e-posta kayıtlarını `/api/subscribe` üzerinden Supabase'e yazar.
Ortam değişkenleri tanımlı değilken form kayıt almaz ve ziyaretçiye
"kayıt sistemi henüz aktif değil" mesajı gösterir — yani yanlış bir onay verilmez.

Aktif etmek için:

1. Supabase'te proje açın ve SQL Editor'de şunu çalıştırın:

```sql
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'coming-soon',
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;
-- Kayıtlar yalnızca sunucu tarafından service role key ile yazılır,
-- bu yüzden ek bir policy gerekmez.
```

2. `.env.example` dosyasını `.env.local` olarak kopyalayıp değerleri doldurun.
3. Aynı değişkenleri Vercel'de **Settings → Environment Variables** altına ekleyin:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY` (gizli, sadece sunucuda kullanılır)

## Yapı

```
logo.png              # marka master dosyası (kırpmalar bundan üretilir)
logo animasyon.mp4    # animasyon master dosyası
app/
  layout.tsx          # fontlar, SEO meta etiketleri
  page.tsx            # tek sayfa "yakında" içeriği
  globals.css         # marka renkleri ve tipografi (Tailwind v4 @theme)
  icon.png            # favicon        } logo.png'den üretildi,
  apple-icon.png      # iOS ikonu      } Next.js dosya adından otomatik bağlar
  opengraph-image.png # sosyal paylaşım görseli (1200×630)
  robots.ts / sitemap.ts
  api/subscribe/      # bekleme listesi kaydı (Supabase)
  components/         # Logo, LogoVideo, Icons, NotifyForm
public/
  pillomi-mark.png      # şeffaf "P" işareti
  pillomi-wordmark.png  # şeffaf "pillomi" yazısı
  pillomi-logo.png      # şeffaf dikey kilit (işaret + yazı)
  logo-animasyon.mp4    # hero'daki marka animasyonu
  logo-animasyon-poster.jpg
```

### Logo varlıkları hakkında

Hepsi kök dizindeki `logo.png` (1254×1254) dosyasından kırpıldı ve krem zemini
`colorkey` ile şeffaflaştırıldı. Şeffaf oldukları için hem krem hem mürdüm zeminde
kullanılabiliyor; koyu zeminde `<LogoMark light />` Tailwind'in `brightness-0 invert`
kombinasyonuyla beyaz knockout'a çeviriyor.

```bash
# işaret (P)            # yazı                    # dikey kilit
ffmpeg -i logo.png -vf "crop=311:443:479:274,colorkey=0xFAF6F0:0.10:0.06,scale=-1:192" public/pillomi-mark.png
ffmpeg -i logo.png -vf "crop=549:162:352:756,colorkey=0xFAF6F0:0.10:0.06,scale=-1:112" public/pillomi-wordmark.png
ffmpeg -i logo.png -vf "crop=550:644:352:274,colorkey=0xFAF6F0:0.10:0.06,scale=-1:512" public/pillomi-logo.png
```

> **Dikkat:** Sayfa `lang="tr"` olduğu için CSS `uppercase`, İngilizce kelimelerdeki
> `i` harfini Türkçe kuralıyla `İ` yapıyor ("TRAVEL NECK PİLLOW"). Bu yüzden İngilizce
> metinler doğrudan büyük harfle yazılıyor. Türkçe başlıklarda `uppercase` doğru
> çalışıyor (örn. "MAKİNADA YIKANABİLİR"), orada sorun yok.

### Hero animasyonu hakkında

`public/logo-animasyon.mp4`, kök dizindeki `logo animasyon.mp4` dosyasından üretildi.
Üç işlem uygulandı:

1. Ses kanalı çıkarıldı, `faststart` eklendi.
2. Zemindeki beyaz tam beyaza çekildi
   (`colorlevels=rimax=0.96:gimax=0.94:bimax=0.92`). Video sayfada `mix-blend-darken`
   ile gösterildiği için bu sayede kendi arka planı tamamen kaybolur ve animasyon
   krem zeminin üzerinde duruyormuş gibi görünür. **Bu adım atlanırsa video köşeli
   bir kutu olarak görünür.**
3. İleri-geri (boomerang) döngü: video bir kez normal, bir kez ters oynuyor
   (5 sn → 10 sn). Tarayıcılar videoyu geri saramadığı için bu dosyaya gömüldü.
   Dönüş noktalarındaki tekrar eden kareler `trim` ile atıldı, yoksa her döngüde
   takılma olur.

Videoyu değiştirirseniz aynı zinciri tekrarlayın:

```bash
# 1-2. adım
ffmpeg -i "yeni video.mp4" -an \
  -vf "format=rgb24,colorlevels=rimax=0.96:gimax=0.94:bimax=0.92,format=yuv420p" \
  -c:v libx264 -crf 20 -preset slow -movflags +faststart duz.mp4

# 3. adım — N = duz.mp4'ün toplam kare sayısı (ffprobe ile öğrenin)
ffmpeg -i duz.mp4 -filter_complex \
  "[0:v]split[a][b];[b]reverse,trim=start_frame=1:end_frame=N,setpts=PTS-STARTPTS[r];[a][r]concat=n=2:v=1[out]" \
  -map "[out]" -an -c:v libx264 -crf 20 -preset slow -pix_fmt yuv420p \
  -movflags +faststart public/logo-animasyon.mp4
```

### Marka renkleri

`logo.png` üzerinden ölçüldü.

| İsim   | Değer     | Kullanım                |
| ------ | --------- | ----------------------- |
| cream  | `#fbf6f0` | arka plan               |
| plum   | `#5a1f47` | ürün rengi, vurgu blok  |
| orange | `#f1623e` | logo, buton, alt çizgi  |
| ink    | `#17161a` | metin                   |

## Sıradaki adımlar

- Gerçek ürün fotoğraflarını `public/` altına eklemek
- Ürün / sepet / ödeme akışı (Supabase + ödeme sağlayıcı)
- Instagram hesabı bağlantısını güncellemek (`app/page.tsx` içinde)
