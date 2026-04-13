import type { Metadata } from "next";
import Link from "next/link";
import CookieSettingsLink from "@/components/CookieSettingsLink";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/polityka-prywatnosci", {
  title: "Polityka prywatności i plików cookies",
  description:
    "Polityka prywatności i cookies serwisu Pomocny Tomek (pomocnytomek.pl): zasady przetwarzania danych osobowych i plików cookies.",
});

const SECTIONS = [
  { id: "admin", label: "1. Administrator danych osobowych" },
  { id: "zakres", label: "2. Zakres polityki" },
  { id: "dane", label: "3. Jakie dane mogą być przetwarzane" },
  { id: "cele", label: "4. Cele i podstawy prawne przetwarzania danych" },
  { id: "obowiazek", label: "5. Czy podanie danych jest obowiązkowe" },
  { id: "odbiorcy", label: "6. Odbiorcy danych" },
  { id: "poza-eog", label: "7. Przekazywanie danych poza EOG" },
  { id: "okres", label: "8. Okres przechowywania danych" },
  { id: "prawa", label: "9. Prawa użytkownika" },
  { id: "cookies", label: "10. Pliki cookies i podobne technologie" },
  { id: "narzedzia", label: "11. Narzędzia analityczne i marketingowe" },
  { id: "logi", label: "12. Logi serwera" },
  { id: "ustawienia", label: "13. Zmiana ustawień cookies" },
  { id: "zmiany", label: "14. Zmiany Polityki" },
] as const;

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 pt-28 pb-16 md:pt-32 md:pb-20">
          <p className="text-white/50 text-sm font-medium tracking-wider uppercase mb-4">
            Informacje prawne
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.12] tracking-tight">
            Polityka prywatności i plików cookies
          </h1>
          <p className="mt-6 text-white/70 text-sm md:text-base">
            Data ostatniej aktualizacji: 23 marca 2026
          </p>
          <p className="mt-1 text-white/50 text-sm">Serwis: pomocnytomek.pl</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full -mb-1">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48V28C360 44 720 4 1080 24C1260 36 1380 42 1440 36V48H0Z"
              className="fill-cream"
            />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          {/* Box z danymi administratora */}
          <div id="admin" className="rounded-2xl border border-cream-dark/50 bg-white p-6 md:p-8 mb-12 shadow-sm scroll-mt-24">
            <h2 className="text-lg font-bold text-text mb-4">
              1. Administrator danych osobowych
            </h2>
            <p className="text-text-light text-[15px] leading-relaxed">
              Administratorem danych osobowych jest <strong className="text-text">Klimkowicz Tomasz FHU Tomex</strong>, z siedzibą przy ul. Harcerskiej 2A, 44-335 Jastrzębie-Zdrój, NIP: 6331655761, REGON: 277625509.
            </p>
            <p className="text-text-light text-[15px] leading-relaxed mt-3">
              W sprawach związanych z przetwarzaniem danych osobowych można skontaktować się z Administratorem pod adresem e-mail:{" "}
              <a href="mailto:pomocnytom@gmail.com" className="text-forest font-medium hover:underline">
                pomocnytom@gmail.com
              </a>{" "}
              lub telefonicznie:{" "}
              <a href="tel:+48790302007" className="text-forest font-medium hover:underline">
                790 302 007
              </a>.
            </p>
          </div>

          {/* Spis treści */}
          <nav className="rounded-2xl border border-cream-dark/50 bg-white p-6 md:p-8 mb-12 shadow-sm" aria-label="Spis treści">
            <h2 className="text-lg font-bold text-text mb-4">Spis treści</h2>
            <ul className="space-y-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-text-light hover:text-forest text-[15px] leading-relaxed transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Treść sekcji */}
          <div className="space-y-12">
            <article id="zakres" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">2. Zakres polityki</h2>
              <p className="text-text-light text-[15px] leading-relaxed">
                Niniejsza Polityka opisuje zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies i podobnych technologii w związku z korzystaniem z Serwisu, kontaktem telefonicznym, kontaktem e-mailowym oraz korzystaniem z formularza kontaktowego, jeśli jest dostępny w Serwisie.
              </p>
            </article>

            <article id="dane" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">3. Jakie dane mogą być przetwarzane</h2>
              <p className="text-text-light text-[15px] leading-relaxed mb-4">
                W zależności od sposobu korzystania z Serwisu mogą być przetwarzane:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-light text-[15px] leading-relaxed">
                <li>imię i nazwisko,</li>
                <li>numer telefonu,</li>
                <li>adres e-mail,</li>
                <li>treść wiadomości lub opis zlecenia,</li>
                <li>dane podane w toku kontaktu dotyczące miejsca wykonania usługi lub zakresu prac,</li>
                <li>dane techniczne związane z korzystaniem z Serwisu, w tym adres IP, informacje o urządzeniu, przeglądarce, systemie operacyjnym, źródle wejścia na stronę, a także dane zapisywane w plikach cookies i logach serwera.</li>
              </ul>
            </article>

            <article id="cele" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">4. Cele i podstawy prawne przetwarzania danych</h2>
              <p className="text-text-light text-[15px] leading-relaxed mb-6">
                Dane mogą być przetwarzane w następujących celach:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-text text-base mb-2">a) obsługa zapytania i kontakt z użytkownikiem</h3>
                  <p className="text-text-light text-[15px] leading-relaxed">
                    Jeżeli kontaktujesz się telefonicznie, e-mailowo lub przez formularz, Twoje dane są przetwarzane w celu odpowiedzi na zapytanie, przygotowania wyceny, ustalenia szczegółów usługi oraz podjęcia działań przed ewentualnym zawarciem umowy. Podstawą prawną jest art. 6 ust. 1 lit. b RODO, a w przypadku ogólnej korespondencji również art. 6 ust. 1 lit. f RODO, czyli prawnie uzasadniony interes Administratora polegający na obsłudze zapytań.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-text text-base mb-2">b) realizacja umowy i rozliczenia</h3>
                  <p className="text-text-light text-[15px] leading-relaxed">
                    Jeżeli dojdzie do zlecenia usługi, dane mogą być przetwarzane w celu realizacji umowy, kontaktu w sprawie zlecenia, wystawienia dokumentów księgowych oraz wykonania obowiązków podatkowych i rachunkowych. Podstawą prawną jest art. 6 ust. 1 lit. b oraz lit. c RODO.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-text text-base mb-2">c) dochodzenie lub obrona roszczeń</h3>
                  <p className="text-text-light text-[15px] leading-relaxed">
                    Dane mogą być przetwarzane również w celu ustalenia, dochodzenia lub obrony roszczeń związanych z prowadzoną działalnością. Podstawą prawną jest art. 6 ust. 1 lit. f RODO.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-text text-base mb-2">d) prowadzenie statystyk i analityki ruchu w Serwisie</h3>
                  <p className="text-text-light text-[15px] leading-relaxed">
                    Dane mogą być przetwarzane w celu analizy ruchu, poprawy działania strony i oceny skuteczności źródeł odwiedzin, w szczególności z wykorzystaniem narzędzi takich jak Google Analytics 4. W zakresie cookies analitycznych podstawą jest zgoda użytkownika oraz przepisy dotyczące przechowywania i uzyskiwania dostępu do informacji na urządzeniu końcowym.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-text text-base mb-2">e) prowadzenie działań marketingowych i pomiar skuteczności reklam</h3>
                  <p className="text-text-light text-[15px] leading-relaxed">
                    Dane mogą być przetwarzane w celu pomiaru skuteczności reklam, tworzenia grup odbiorców oraz optymalizacji kampanii reklamowych, w szczególności z wykorzystaniem narzędzi takich jak Meta Pixel. W zakresie cookies marketingowych podstawą jest zgoda użytkownika.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-text text-base mb-2">f) zapewnienie bezpieczeństwa Serwisu i jego prawidłowego działania</h3>
                  <p className="text-text-light text-[15px] leading-relaxed">
                    Dane techniczne i logi serwera mogą być przetwarzane w celu zapewnienia bezpieczeństwa, diagnozowania błędów, przeciwdziałania nadużyciom i utrzymania prawidłowego działania Serwisu. Podstawą prawną jest art. 6 ust. 1 lit. f RODO.
                  </p>
                </div>
              </div>
            </article>

            <article id="obowiazek" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">5. Czy podanie danych jest obowiązkowe</h2>
              <p className="text-text-light text-[15px] leading-relaxed">
                Podanie danych jest dobrowolne, ale w praktyce może być konieczne, jeśli chcesz otrzymać odpowiedź, wycenę lub skorzystać z usługi. Brak podania danych kontaktowych może uniemożliwić odpowiedź na wiadomość albo przygotowanie wyceny.
              </p>
            </article>

            <article id="odbiorcy" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">6. Odbiorcy danych</h2>
              <p className="text-text-light text-[15px] leading-relaxed mb-4">
                Dane mogą być przekazywane podmiotom, które wspierają Administratora w prowadzeniu strony i działalności, w szczególności:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-light text-[15px] leading-relaxed">
                <li>dostawcy hostingu i utrzymania strony internetowej, w tym Netlify,</li>
                <li>dostawcy poczty e-mail,</li>
                <li>podmiotom zapewniającym wsparcie IT,</li>
                <li>dostawcom narzędzi analitycznych i marketingowych, w szczególności Google i Meta,</li>
                <li>podmiotom świadczącym usługi księgowe lub prawne, jeśli jest to niezbędne do realizacji obowiązków Administratora.</li>
              </ul>
            </article>

            <article id="poza-eog" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">7. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>
              <p className="text-text-light text-[15px] leading-relaxed">
                W związku z korzystaniem z niektórych narzędzi analitycznych, marketingowych lub infrastrukturalnych dane mogą być przekazywane poza Europejski Obszar Gospodarczy, w tym do Stanów Zjednoczonych. W takim przypadku przekazanie odbywa się na podstawie odpowiednich mechanizmów prawnych, w szczególności decyzji stwierdzającej odpowiedni stopień ochrony danych dla EU-US Data Privacy Framework albo innych dopuszczalnych zabezpieczeń przewidzianych przez RODO.
              </p>
            </article>

            <article id="okres" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">8. Okres przechowywania danych</h2>
              <p className="text-text-light text-[15px] leading-relaxed mb-4">
                Dane przechowujemy przez okres niezbędny do realizacji celu, dla którego zostały zebrane, a następnie przez czas wymagany przez przepisy albo potrzebny do zabezpieczenia roszczeń. Co do zasady:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-light text-[15px] leading-relaxed">
                <li>dane z zapytań i korespondencji przechowujemy przez czas potrzebny do obsługi sprawy, a następnie maksymalnie przez 24 miesiące od zakończenia kontaktu,</li>
                <li>dane związane z realizacją usługi i dokumentami księgowymi przechowujemy przez okres wymagany przepisami prawa,</li>
                <li>dane przetwarzane na podstawie zgody przechowujemy do czasu jej wycofania albo do czasu utraty przydatności,</li>
                <li>logi techniczne przechowujemy przez okres niezbędny dla bezpieczeństwa i administracji Serwisem.</li>
              </ul>
            </article>

            <article id="prawa" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">9. Prawa użytkownika</h2>
              <p className="text-text-light text-[15px] leading-relaxed mb-4">
                Osobie, której dane dotyczą, przysługuje prawo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-light text-[15px] leading-relaxed">
                <li>dostępu do danych,</li>
                <li>sprostowania danych,</li>
                <li>usunięcia danych,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,</li>
                <li>przenoszenia danych, jeżeli podstawą przetwarzania jest zgoda lub umowa i przetwarzanie odbywa się w sposób zautomatyzowany,</li>
                <li>cofnięcia zgody w dowolnym momencie, jeśli przetwarzanie odbywa się na podstawie zgody, przy czym cofnięcie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego wcześniej,</li>
                <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
              </ul>
            </article>

            <article id="cookies" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">10. Pliki cookies i podobne technologie</h2>
              <p className="text-text-light text-[15px] leading-relaxed mb-4">
                Serwis korzysta lub może korzystać z plików cookies oraz podobnych technologii. Cookies to niewielkie informacje zapisywane na urządzeniu użytkownika i odczytywane przez Serwis lub podmioty trzecie, których narzędzia są stosowane w Serwisie.
              </p>
              <p className="text-text-light text-[15px] leading-relaxed mb-4">
                W Serwisie mogą być stosowane następujące rodzaje cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-light text-[15px] leading-relaxed">
                <li><strong className="text-text">niezbędne</strong> – potrzebne do prawidłowego działania strony, bezpieczeństwa, zapamiętania ustawień prywatności lub utrzymania sesji,</li>
                <li><strong className="text-text">analityczne</strong> – służące do badania statystyk i sposobu korzystania z Serwisu,</li>
                <li><strong className="text-text">marketingowe</strong> – służące do mierzenia skuteczności reklam i działań remarketingowych.</li>
              </ul>
              <p className="text-text-light text-[15px] leading-relaxed mt-4">
                Niezbędne cookies mogą być używane bez zgody użytkownika, natomiast cookies analityczne i marketingowe powinny być uruchamiane dopiero po uzyskaniu zgody.
              </p>
            </article>

            <article id="narzedzia" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">11. Narzędzia analityczne i marketingowe</h2>
              <p className="text-text-light text-[15px] leading-relaxed mb-4">
                Serwis korzysta lub może korzystać z takich narzędzi jak:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-text-light text-[15px] leading-relaxed">
                <li><strong className="text-text">Google Analytics 4</strong> – do analizy ruchu i statystyk odwiedzin,</li>
                <li><strong className="text-text">Meta Pixel</strong> – do pomiaru skuteczności reklam i działań marketingowych w systemach Meta.</li>
              </ul>
              <p className="text-text-light text-[15px] leading-relaxed mt-4">
                Narzędzia te mogą wykorzystywać cookies lub podobne technologie i mogą przetwarzać takie dane jak adres IP, identyfikatory online, informacje o urządzeniu, przeglądarce, aktywności w Serwisie i źródle wejścia. Narzędzia analityczne i marketingowe wymagające zgody powinny działać dopiero po jej wyrażeniu przez użytkownika.
              </p>
            </article>

            <article id="logi" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">12. Logi serwera</h2>
              <p className="text-text-light text-[15px] leading-relaxed">
                Korzystanie z Serwisu może wiązać się z zapisywaniem informacji w logach serwera. Obejmują one między innymi adres IP, datę i czas połączenia, informacje o przeglądarce i systemie operacyjnym oraz inne dane techniczne potrzebne do administrowania Serwisem i zapewnienia jego bezpieczeństwa.
              </p>
            </article>

            <article id="ustawienia" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">13. Zmiana ustawień cookies</h2>
              <p className="text-text-light text-[15px] leading-relaxed">
                Użytkownik może zarządzać cookies za pomocą ustawień przeglądarki oraz ustawień udostępnionych w banerze cookies lub w panelu ustawień prywatności w Serwisie. Ograniczenie niektórych cookies może wpływać na prawidłowe działanie wybranych funkcji strony.
              </p>
              <p className="text-text-light text-[15px] leading-relaxed mt-4">
                Możesz w każdej chwili zmienić swoją decyzję – kliknij{" "}
                <CookieSettingsLink /> w stopce strony.
              </p>
            </article>

            <article id="zmiany" className="scroll-mt-24">
              <h2 className="text-xl font-bold text-text mb-4">14. Zmiany Polityki</h2>
              <p className="text-text-light text-[15px] leading-relaxed">
                Administrator może aktualizować niniejszą Politykę w przypadku zmian w przepisach prawa, zmian technicznych w Serwisie albo wdrożenia nowych narzędzi lub sposobów przetwarzania danych. Aktualna wersja Polityki jest publikowana w Serwisie wraz z datą ostatniej aktualizacji.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
