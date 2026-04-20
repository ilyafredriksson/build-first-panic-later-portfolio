import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-background via-background to-muted/20">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.2),transparent_50%)]" />

        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full border border-primary/30 p-1 shadow-xl shadow-primary/20">
              <Image
                src="/profile.png"
                alt="Ilya Fredriksson"
                width={240}
                height={240}
                className="size-44 rounded-full object-cover sm:size-56"
                priority
              />
            </div>
          </div>

          <p className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium tracking-wide text-primary">
            FRONTEND • WEBBSÄKERHET • REACT/NEXT.JS
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Frontendutvecklare
            <span className="block text-primary">med inriktning på webbsäkerhet</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Frontendutvecklare med fokus på React/Next.js, tillgänglighet och
            webbsäkerhet. Jag bygger användarvänliga gränssnitt med tydlig
            struktur och säker autentisering.
          </p>

          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-primary/30 bg-primary/10 p-4 sm:p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-primary">Snabb ansökan</p>
            <p className="mt-1 text-sm text-foreground/90">För rekryterare: ladda ner CV och personligt brev direkt, eller kontakta mig på mejl.</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              <Link href="/Ilya-Fredriksson-CV.pdf" target="_blank" rel="noreferrer" className={buttonVariants({ className: "w-full sm:w-auto" })}>
                CV (PDF)
              </Link>
              <Link href="/Personligt-Brev-Ilya-Fredriksson-2026.pdf" target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", className: "w-full sm:w-auto" })}>
                Personligt brev (PDF)
              </Link>
              <Link href="mailto:fredrikssonilya@gmail.com" className={buttonVariants({ variant: "outline", className: "w-full sm:w-auto" })}>
                Kontakta mig
              </Link>
            </div>
          </div>

          <div className="group relative mx-auto mt-5 max-w-xl overflow-hidden rounded-lg border border-sky-500/40 bg-gradient-to-r from-sky-500/20 via-cyan-500/10 to-transparent px-4 py-3 text-left shadow-lg shadow-sky-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-500/20 motion-safe:hover:scale-[1.01]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.2),transparent_45%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            <p className="relative inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500/60" />
                <span className="relative inline-flex size-2 rounded-full bg-sky-500" />
              </span>
              Om mig i korthet
            </p>
            <p className="relative mt-1 text-sm font-medium text-foreground/90">
              Kod som teamet förstår, användarna gillar och angripare helst undviker.
            </p>
            <p className="relative mt-1 text-sm text-muted-foreground">
              Frontend med fokus på användaren, prestandan och att slippa deploy-and-pray.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="rounded-full border px-3 py-1 text-muted-foreground">Webbutveckling</span>
            <span className="rounded-full border px-3 py-1 text-muted-foreground">Svenska / Engelska / Ryska</span>
            <span className="rounded-full border px-3 py-1 text-muted-foreground">Tillgänglig för nya uppdrag</span>
          </div>

          <div className="mx-auto mt-4 grid max-w-3xl gap-2 text-left text-sm sm:grid-cols-3">
            <p className="rounded-lg border px-3 py-2 text-muted-foreground"><strong className="text-foreground">Roll:</strong> Junior Frontend</p>
            <p className="rounded-lg border px-3 py-2 text-muted-foreground"><strong className="text-foreground">Plats:</strong> Stockholm </p>
            <p className="rounded-lg border px-3 py-2 text-muted-foreground"><strong className="text-foreground">Arbetsform:</strong> Hybrid / Remote</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="mailto:fredrikssonilya@gmail.com" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
              Kontakta mig
            </Link>
            <Link href="/Ilya-Fredriksson-CV.pdf" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })} target="_blank" rel="noreferrer">
              Ladda ner CV
            </Link>
            <Link href="/Personligt-Brev-Ilya-Fredriksson-2026.pdf" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })} target="_blank" rel="noreferrer">
              Personligt brev
            </Link>
            <Link href="#projects" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })}>
              Se projekt
            </Link>
            <Link
              href="https://github.com/ilyafredriksson"
              className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/ilya-fredriksson-197313353/"
              className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-2xl border border-primary/30 bg-primary/10 p-4 sm:p-5">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-primary">Tillgänglig för uppdrag</p>
                <p className="mt-1 text-sm text-foreground/90">
                  Öppen för frontendroller, webbutvecklingsuppdrag och team med högt kvalitetstänk.
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full border border-primary/30 bg-background/70 px-2.5 py-1">Junior Frontend</span>
                  <span className="rounded-full border border-primary/30 bg-background/70 px-2.5 py-1">React / Next.js</span>
                  <span className="rounded-full border border-primary/30 bg-background/70 px-2.5 py-1">Webbsäkerhet</span>
                </div>
              </div>
              <Link
                href="mailto:fredrikssonilya@gmail.com"
                className={buttonVariants({ variant: "outline", className: "border-primary/40 bg-background" })}
              >
                Kontakta mig
              </Link>
            </div>
          </div>

          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-primary">Utvalda projekt</p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight">Projekt som visar min kompetens</h2>
            </div>
            <Link href="#projects" className={buttonVariants({ variant: "ghost" })}>
              Visa alla
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Realtime Blog Platform */}
            <Card className="border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>Realtime Blog Platform</CardTitle>
                  <span className="inline-flex items-center rounded-full bg-green-500/20 px-2 py-1 text-xs font-semibold text-green-700 dark:text-green-400">
                    Live ✓
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>Fullstack blogg med auth, kommentarer och realtime-flöden byggd med Next.js och Convex.</p>
                <p className="text-xs"><strong className="text-foreground">Resultat:</strong> Implementerade komplett auth-flöde och kommentarsfunktion med stabil deploy på Vercel.</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center rounded-full bg-slate-900/20 px-2.5 py-1 font-medium text-slate-700 dark:bg-slate-400/20 dark:text-slate-300">Next.js</span>
                  <span className="inline-flex items-center rounded-full bg-orange-500/20 px-2.5 py-1 font-medium text-orange-700 dark:text-orange-400">Convex</span>
                  <span className="inline-flex items-center rounded-full bg-purple-500/20 px-2.5 py-1 font-medium text-purple-700 dark:text-purple-400">Auth</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Link href="https://deploy-and-pray.vercel.app/" target="_blank" rel="noreferrer" className={buttonVariants({ className: "flex-1" })}>
                  🚀 Live Demo
                </Link>
                <Link
                  href="https://github.com/ilyafredriksson/deploy-and-pray"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline", className: "flex-1" })}
                >
                  GitHub
                </Link>
              </CardFooter>
            </Card>

            {/* Boka Catering */}
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>Boka Catering</CardTitle>
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-2 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
                    LIA
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>Booking-system för cateringservice från min LIA-period. Full-stack lösning med databas och användarhantering.</p>
                <p className="text-xs"><strong className="text-foreground">Resultat:</strong> Levererade bokningsflöde från formulär till lagring i databas med fokus på tydlig användarupplevelse.</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center rounded-full bg-orange-500/20 px-2.5 py-1 font-medium text-orange-700 dark:text-orange-400">HTML/CSS</span>
                  <span className="inline-flex items-center rounded-full bg-yellow-500/20 px-2.5 py-1 font-medium text-yellow-700 dark:text-yellow-400">JavaScript</span>
                  <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-1 font-medium text-green-700 dark:text-green-400">PHP/MySQL</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Link href="https://github.com/ilyafredriksson/boka-catering" target="_blank" rel="noreferrer" className={buttonVariants({ className: "flex-1" })}>
                  GitHub
                </Link>
              </CardFooter>
            </Card>

            {/* React Crypto App */}
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>React Crypto App</CardTitle>
                  <span className="inline-flex items-center rounded-full bg-cyan-500/20 px-2 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                    Dashboard
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>Crypto dashboard i React med API-data, filtrering och tydlig visualisering av marknadsdata.</p>
                <p className="text-xs"><strong className="text-foreground">Resultat:</strong> Byggde dynamisk listning med sök/filter och förbättrade överblick av realtidsdata i UI.</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center rounded-full bg-cyan-500/20 px-2.5 py-1 font-medium text-cyan-700 dark:text-cyan-400">React</span>
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-2.5 py-1 font-medium text-blue-700 dark:text-blue-400">API</span>
                  <span className="inline-flex items-center rounded-full bg-indigo-500/20 px-2.5 py-1 font-medium text-indigo-700 dark:text-indigo-400">State</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Link href="https://github.com/ilyafredriksson/react-crypto-app" target="_blank" rel="noreferrer" className={buttonVariants({ className: "flex-1" })}>
                  GitHub
                </Link>
              </CardFooter>
            </Card>

            {/* QR Generator */}
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>QR Generator</CardTitle>
                  <span className="inline-flex items-center rounded-full bg-red-500/20 px-2 py-1 text-xs font-semibold text-red-700 dark:text-red-400">
                    Utility
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>Snabb utility-app för att generera QR-koder med fokus på enkel UX och ren frontendstruktur.</p>
                <p className="text-xs"><strong className="text-foreground">Resultat:</strong> Levererade enkel och snabb QR-generering med tydlig input/output och responsivt gränssnitt.</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center rounded-full bg-yellow-500/20 px-2.5 py-1 font-medium text-yellow-700 dark:text-yellow-400">JavaScript</span>
                  <span className="inline-flex items-center rounded-full bg-orange-500/20 px-2.5 py-1 font-medium text-orange-700 dark:text-orange-400">CSS</span>
                  <span className="inline-flex items-center rounded-full bg-pink-500/20 px-2.5 py-1 font-medium text-pink-700 dark:text-pink-400">UI</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Link href="https://github.com/ilyafredriksson/QRGenerator" target="_blank" rel="noreferrer" className={buttonVariants({ className: "flex-1" })}>
                  GitHub
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-medium text-primary">Frontend</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">HTML, CSS, JavaScript, React</h3>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Accessibility",
                  "UI/UX",
                ].map((item) => (
                  <span key={item} className="rounded-full border px-3 py-1 text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-medium text-primary">Backend & drift</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">Node.js, API och säkerhet</h3>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {[
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "REST API",
                  "JWT",
                  "Vercel",
                ].map((item) => (
                  <span key={item} className="rounded-full border px-3 py-1 text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-card p-5">
            <p className="text-sm font-medium text-primary">Lär mig just nu</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full border px-3 py-1 text-muted-foreground">Webbsäkerhet i frontend</span>
              <span className="rounded-full border px-3 py-1 text-muted-foreground">Säker API-integration</span>
              <span className="rounded-full border px-3 py-1 text-muted-foreground">Agil testning</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-sm font-medium text-primary">Status</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">Nuvarande läge</h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border p-4 transition-colors hover:bg-muted/40">
                <p className="text-3xl font-extrabold">React/Next</p>
                <p className="text-sm text-muted-foreground">Bygger moderna och responsiva webbgränssnitt</p>
              </div>
              <div className="rounded-xl border p-4 transition-colors hover:bg-muted/40">
                <p className="text-3xl font-extrabold">Säkerhet</p>
                <p className="text-sm text-muted-foreground">Arbetar med JWT, säkra API-flöden och webbsäkerhet</p>
              </div>
              <div className="rounded-xl border p-4 transition-colors hover:bg-muted/40">
                <p className="text-3xl font-extrabold">Leverans</p>
                <p className="text-sm text-muted-foreground">Versionshantering, deploy och stabil build-process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-card p-6 sm:p-8">
            <p className="text-sm font-medium text-primary">Det jag prioriterar</p>
            <blockquote className="mt-3 text-lg leading-relaxed text-foreground/90 sm:text-xl">
              “Ren UI, säkerhetstänk från start och kod som teamet kan jobba vidare i.”
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              Min bakgrund i BJJ har lärt mig tålamod, fokus och uthållighet i problemlösning.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border bg-card p-6 shadow-sm lg:col-span-2">
              <p className="text-sm font-medium text-primary">Om mig</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">Ilya Fredriksson</h3>
              
              <div className="mt-4 space-y-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm font-medium text-foreground">Varför anställa mig?</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jag är en driven juniorutvecklare som inte bara kodar—jag bygger med fokus på 
                  <strong className="text-foreground"> säkerhet, prestanda och användarupplevelse</strong>. 
                  Med bakgrund från vård och industri förstår jag vikten av ansvar och kvalitet. 
                  Jag lär mig snabbt, arbetar strukturerat under tidspress och kommunicerar tydligt 
                  med teamet.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Min väg till frontend</p>
                
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex size-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">1</div>
                      <div className="hidden sm:block h-12 w-px bg-primary/20" />
                    </div>
                    <div className="pb-2">
                      <p className="font-semibold text-foreground">Tidigare yrken (vård & industri)</p>
                      <p className="text-sm text-muted-foreground">
                        Lärt mig struktur, ansvar och hur man löser problem under tidspress.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex size-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">2</div>
                      <div className="hidden sm:block h-12 w-px bg-primary/20" />
                    </div>
                    <div className="pb-2">
                      <p className="font-semibold text-foreground">Kodningsutbildning & LIA</p>
                      <p className="text-sm text-muted-foreground">
                        Genomförde intensiv webbutvecklingsutbildning, byggt Boka Catering för verklig kund under LIA-period.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex size-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">3</div>
                      <div className="hidden sm:block h-12 w-px bg-primary/20" />
                    </div>
                    <div className="pb-2">
                      <p className="font-semibold text-foreground">Fullstack projekt & säkerhet</p>
                      <p className="text-sm text-muted-foreground">
                        Byggt blogg med auth, Crypto dashboard, QR-generator. Fördjupat säkerhetskunnande.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex size-8 items-center justify-center rounded-full bg-green-500/20 text-xs font-bold text-green-700 dark:text-green-400">✓</div>
                    </div>
                    <div className="pb-2">
                      <p className="font-semibold text-foreground">Redo för nya utmaningar</p>
                      <p className="text-sm text-muted-foreground">
                        Söker juniorroll där jag kan växa i ett engagerat team. Erbjuder dedikation, lärvilja och säkerhetstänk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border p-4 transition-colors hover:bg-muted/40">
                  <p className="text-xs text-muted-foreground">Min styrka</p>
                  <p className="mt-1 font-semibold">Frontend + Säkerhet</p>
                </div>
                <div className="rounded-xl border p-4 transition-colors hover:bg-muted/40">
                  <p className="text-xs text-muted-foreground">Tech Stack</p>
                  <p className="mt-1 font-semibold">React, Next.js, Node</p>
                </div>
                <div className="rounded-xl border p-4 transition-colors hover:bg-muted/40">
                  <p className="text-xs text-muted-foreground">Min approach</p>
                  <p className="mt-1 font-semibold">Agile, Git, Teamwork</p>
                </div>
              </div>
            </div>

            <div id="contact" className="scroll-mt-24 rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm font-medium text-primary">Kontakt</p>
              <h3 className="mt-2 text-xl font-bold tracking-tight">Tillgänglig för jobb</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Hör gärna av dig om frontendroller, webbutvecklingsuppdrag eller samarbete.
              </p>

              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <p>E-post: fredrikssonilya@gmail.com</p>
                <p>Telefon: 072 715 10 53</p>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <Link
                  href="mailto:fredrikssonilya@gmail.com"
                  className={buttonVariants({ className: "w-full" })}
                >
                  Skicka mejl
                </Link>
                <Link
                  href="tel:+46727151053"
                  className={buttonVariants({ variant: "outline", className: "w-full" })}
                >
                  Ring mig
                </Link>
                <Link
                  href="https://github.com/ilyafredriksson"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline", className: "w-full" })}
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ilya-fredriksson-197313353/"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline", className: "w-full" })}
                >
                  LinkedIn
                </Link>
                <Link
                  href="/Ilya-Fredriksson-CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline", className: "w-full" })}
                >
                  Ladda ner CV
                </Link>
                <Link
                  href="/Personligt-Brev-Ilya-Fredriksson-2026.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline", className: "w-full" })}
                >
                  Personligt brev
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>Ilya Fredriksson • Järfälla • 072 715 10 53</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/ilyafredriksson" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors duration-200">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/ilya-fredriksson-197313353/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors duration-200">
              LinkedIn
            </Link>
            <Link href="mailto:fredrikssonilya@gmail.com" className="hover:text-foreground transition-colors duration-200">
              E-post
            </Link>
            <Link href="/Ilya-Fredriksson-CV.pdf" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors duration-200">
              CV
            </Link>
            <Link href="/Personligt-Brev-Ilya-Fredriksson-2026.pdf" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors duration-200">
              Personligt brev
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
