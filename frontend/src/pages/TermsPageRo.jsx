import React from "react";

import FooterRo from "../components/layout/FooterRo";
import NavBarRo from "../components/layout/NavbarRo";

const TermsPage = () => {
  return (
    <>
      <NavBarRo />

      <div className="w-full max-w-[800px] mx-auto my-10 px-4">
        <div className="hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray p-6">
          <h1 className="text-3xl font-bold text-white mb-6 flex items-center gap-2 font-['Press_Start_2P']">
            🧾 Termeni și condiții
          </h1>

          <section className="space-y-8 text-sm text-text-gray leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🚀 Bine ai venit la CodeFlow
              </h2>
              <p>
                Bine ai venit la CodeFlow, un serviciu oferit de Niteowl, Inc.
                Prin înscrierea pe CodeFlow și/sau utilizarea serviciilor
                noastre, ești de acord cu acești Termeni și condiții, cu
                Politica noastră de confidențialitate și cu toate legile și
                reglementările aplicabile.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🌐 Platforme suportate
              </h2>
              <p>
                CodeFlow este compatibil cu toate platformele majore și
                browserele web moderne.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🧠 Responsabilitățile tale
              </h2>
              <p>
                Această pagină explică termenii în baza cărora poți utiliza
                serviciile noastre online și/sau mobile, site-ul web și
                software-ul oferit în legătură cu Serviciul (colectiv denumit
                “Serviciul”). Accesând sau utilizând Serviciul, confirmi că ai
                citit, ai înțeles și ești de acord cu acești Termeni și condiții
                (“Acordul”), precum și cu colectarea și utilizarea informațiilor
                tale conform Politicii de confidențialitate, indiferent dacă
                ești sau nu utilizator înregistrat. Acest Acord se aplică
                tuturor vizitatorilor, utilizatorilor și altor persoane care
                accesează Serviciul (“Utilizatori”).
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Copierea, distribuirea sau dezvăluirea oricărei părți a
                  Serviciului pe orice suport, inclusiv prin „scraping”
                  automatizat sau manual.
                </li>
                <li>
                  Trimiterea excesivă de cereri automate către serviciile
                  noastre sau ocolirea măsurilor noastre de securitate. Cererile
                  excesive sau încercările de perturbare a Serviciului pot duce
                  la o interdicție temporară sau la închiderea contului.
                </li>
                <li>
                  Utilizarea conținutului CodeFlow pentru a provoca daune altor
                  persoane.
                </li>
                <li>
                  Abuzarea sau utilizarea necorespunzătoare a Serviciului
                  într-un mod care perturbă CodeFlow sau afectează alți
                  utilizatori.
                </li>
                <li>
                  Colectarea sau extragerea de informații personale
                  identificabile, inclusiv numele de cont, din cadrul
                  Serviciului.
                </li>
              </ul>
              <p className="mt-2">
                Putem, fără notificare prealabilă, să modificăm sau să
                întrerupem Serviciul sau să stabilim limite de utilizare. Putem
                suspenda sau închide temporar ori permanent accesul tău la
                Serviciu, fără notificare sau răspundere, pentru orice motiv sau
                fără motiv, inclusiv dacă considerăm că ai încălcat acest Acord.
                La încetare, rămâi obligat de acești Termeni.
              </p>
              <p className="mt-2">
                Ești singurul responsabil pentru interacțiunile tale cu alți
                Utilizatori CodeFlow. Ne rezervăm dreptul, dar nu suntem
                obligați, să monitorizăm conflictele dintre tine și alți
                Utilizatori. CodeFlow nu își asumă nicio răspundere pentru
                interacțiunile tale cu alți Utilizatori.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🏫 Conturi școlare
              </h2>
              <p>
                Legea privind Protecția Vieții Private a Copiilor Online
                (“COPPA”) solicită furnizorilor de servicii online să obțină
                consimțământul părinților înainte de a colecta informații
                personale de la copii sub 13 ani. Deoarece CodeFlow oferă
                servicii pentru școli pentru a sprijini programele educaționale,
                CodeFlow se bazează pe școli pentru a obține consimțămintele
                necesare, dacă este cazul.
              </p>
              <p className="mt-2">
                Școlile declară și garantează că au obținut toate
                consimțămintele necesare înainte de a permite elevilor sub 13
                ani accesul la Serviciu și au oferit părinților și tutorilor
                informațiile necesare. Recomandăm școlilor să pună la dispoziția
                părinților Politica noastră de confidențialitate. Pentru
                detalii, trimiteți un email la help@codeflow.io.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🔒 Confidențialitate
              </h2>
              <p>
                Ne pasă de confidențialitatea Utilizatorilor noștri. Prin
                utilizarea Serviciului, îți exprimi acordul cu privire la
                colectarea, utilizarea și divulgarea informațiilor tale
                personale identificabile și a datelor agregate, conform
                descrierii din Politica noastră de confidențialitate, și îți
                exprimi acordul pentru transferul și procesarea informațiilor
                tale în Statele Unite.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🛡️ Securitate
              </h2>
              <p>
                CodeFlow se angajează să mențină securitatea și integritatea
                informațiilor tale. Cu toate acestea, nu putem garanta că terțe
                părți neautorizate nu vor reuși să încalce măsurile noastre de
                securitate. Înțelegi și accepți că furnizezi informațiile tale
                personale pe propriul risc.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-['Press_Start_2P']">
                🔗 Linkuri către terți
              </h2>
              <p>
                Serviciul poate conține linkuri către site-uri web, servicii sau
                oferte ale unor terți care nu sunt deținute sau controlate de
                CodeFlow. CodeFlow nu aprobă și nu își asumă responsabilitatea
                pentru site-urile, materialele, produsele sau serviciile
                terților. Accesarea oricărui serviciu terț se face pe propriul
                risc, iar acest Acord și Politica noastră de confidențialitate
                nu se aplică utilizării acelor site-uri. Ești de acord că
                CodeFlow nu este responsabil pentru nicio pierdere sau daună
                rezultată din interacțiunile tale cu serviciile terților.
              </p>
            </div>
          </section>

          <p className="text-xs text-center text-gray-500 mt-10">
            Ultima modificare: 26.04.2025
          </p>
        </div>
      </div>

      <FooterRo />
    </>
  );
};

export default TermsPage;
