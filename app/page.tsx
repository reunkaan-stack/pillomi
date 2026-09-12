import { Logo, LogoMark } from "./components/Logo";
import { NeckPillow } from "./components/NeckPillow";
import { NotifyForm } from "./components/NotifyForm";
import {
  FeatherIcon,
  HandWashIcon,
  InstagramIcon,
  MailIcon,
  PlaneIcon,
  ShieldIcon,
  WashingMachineIcon,
} from "./components/Icons";

const features = [
  { Icon: FeatherIcon, title: "Yumuşak Doku", text: "Cilt dostu kumaş" },
  { Icon: HandWashIcon, title: "Kolay Temizlenir", text: "Hijyenik kullanım" },
  {
    Icon: WashingMachineIcon,
    title: "Makinada Yıkanabilir",
    text: "Pratik temizlik",
  },
  {
    Icon: PlaneIcon,
    title: "Seyahat İçin İdeal",
    text: "Her yolculukta konfor",
  },
  {
    Icon: ShieldIcon,
    title: "Saç Ekimi Sonrası Destek",
    text: "Hassas boyunlar için ideal",
  },
];

const careSteps = [
  {
    step: "1",
    title: "Ürünü makineye yerleştirin",
    text: "Bağlantı klipsini kapalı konumda yıkamanızı öneririz.",
  },
  {
    step: "2",
    title: "Hassas programda yıkayın",
    text: "30°C (maksimum), hassas program, düşük devir.",
  },
  {
    step: "3",
    title: "Kurutun ve yeniden kullanın",
    text: "Doğal ortamda kurutmanız daha uzun ömürlü kullanım sağlar.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Arka plan lekeleri */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-orange/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-52 top-64 h-[30rem] w-[30rem] rounded-full bg-plum/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8">
        {/* ---------- Header ---------- */}
        <header className="flex items-center justify-between py-7">
          <Logo tagline />
          <span className="hidden items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-medium tracking-wide text-ink-soft backdrop-blur sm:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
            </span>
            pillomi.com · çok yakında
          </span>
        </header>

        {/* ---------- Hero ---------- */}
        <section className="grid items-center gap-12 pb-16 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-10">
          <div className="rise">
            <p className="font-script text-3xl leading-tight text-ink sm:text-4xl">
              <span className="swash">Her yolculukta yanında!</span>
            </p>

            <h1 className="mt-6 text-[2.7rem] font-bold leading-[1.05] tracking-[-0.035em] text-ink sm:text-6xl">
              Çok yakında
              <br />
              <span className="text-plum">yayında.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
              Pillomi seyahat boyun yastığı; yumuşacık polar dokusu, güvenli
              klips sistemi ve makinada yıkanabilir yapısıyla uçakta, arabada,
              trende ve otobüste boynunuzu destekler. Online satışımız çok
              yakında burada.
            </p>

            <div className="mt-9 max-w-xl">
              <NotifyForm />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
              <span>Uçak</span>
              <span className="h-1 w-1 rounded-full bg-orange" />
              <span>Araba</span>
              <span className="h-1 w-1 rounded-full bg-orange" />
              <span>Tren</span>
              <span className="h-1 w-1 rounded-full bg-orange" />
              <span>Otobüs</span>
            </div>
          </div>

          {/* Ürün görseli */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative rounded-[2.5rem] bg-cream-deep/70 px-6 py-10 shadow-[0_30px_80px_-40px_rgba(61,20,48,0.55)]">
              <NeckPillow className="float-soft mx-auto w-full max-w-sm" />

              <span className="absolute -left-3 top-8 -rotate-6 rounded-full bg-orange px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-wide text-white shadow-lg sm:-left-6">
                Makinada yıkanabilir
              </span>
              <span className="absolute -right-2 bottom-10 rotate-3 rounded-full bg-white px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-wide text-plum shadow-lg sm:-right-5">
                28 × 28 × 10 cm
              </span>
            </div>

            <p className="mt-7 text-center font-script text-2xl leading-snug text-ink">
              <span className="swash">Ne kadar yolculuk o kadar rahatlık!</span>
            </p>
          </div>
        </section>

        {/* ---------- Özellikler ---------- */}
        <section className="rounded-[2rem] border border-ink/5 bg-white/70 px-4 py-10 backdrop-blur sm:px-8">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
            {features.map(({ Icon, title, text }) => (
              <li
                key={title}
                className="flex flex-col items-center px-2 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-orange text-orange">
                  <Icon className="h-7 w-7" />
                </span>
                <h2 className="mt-4 text-[0.78rem] font-semibold uppercase leading-snug tracking-[0.06em] text-ink">
                  {title}
                </h2>
                <p className="mt-1.5 text-[0.8rem] text-ink-soft">{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Bakım ---------- */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-script text-3xl text-ink sm:text-4xl">
              <span className="swash">Makinada yıkanabilir!</span>
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              Hijyenik kullanım için dilediğiniz zaman makinede yıkayın, ilk
              günkü konforunda kullanın.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 sm:grid-cols-3">
            {careSteps.map(({ step, title, text }) => (
              <li
                key={step}
                className="rounded-3xl border border-ink/5 bg-white/70 p-7 backdrop-blur"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">
                  {step}
                </span>
                <h3 className="mt-5 text-base font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Kapanış ---------- */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-plum px-8 py-14 text-center text-white sm:px-14 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/25 blur-3xl"
          />
          <div className="relative">
            <LogoMark className="mx-auto h-12 w-auto text-orange" />
            <h2 className="mt-7 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              Yakında açılıyoruz
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
              Online mağazamız hazırlanıyor. Açılıştan ilk haberdar olmak için
              e-posta adresinizi bırakın ya da bize doğrudan yazın.
            </p>
            <a
              href="mailto:info@pillomi.com"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-plum"
            >
              <MailIcon />
              info@pillomi.com
            </a>
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="flex flex-col items-center gap-6 py-12 sm:flex-row sm:justify-between">
          <Logo tagline />
          <div className="flex items-center gap-5 text-ink-soft">
            <a
              href="https://instagram.com/pillomi"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Pillomi Instagram"
              className="transition hover:text-orange"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:info@pillomi.com"
              aria-label="Pillomi e-posta"
              className="transition hover:text-orange"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-ink-soft">
            © {new Date().getFullYear()} Pillomi. Tüm hakları saklıdır.
          </p>
        </footer>
      </div>
    </main>
  );
}
