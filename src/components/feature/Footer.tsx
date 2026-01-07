import { useState } from 'react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleManageCookies = () => {
    window.dispatchEvent(new CustomEvent('manageCookies'));
  };

  const openModal = (modalId: string) => {
    setActiveModal(modalId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <footer className="bg-[#1C1C1C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Logo & Description */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#007BFF] rounded-lg">
                    <i className="ri-flashlight-line text-white text-lg"></i>
                  </div>
                  <span className="text-xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                    ElectroFix
                  </span>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Servicii profesionale de instalații și reparații electrice pentru case, apartamente și spații comerciale. 
                  Rapid, sigur și certificat.
                </p>
                <div className="flex items-center space-x-2 text-[#FFD200]">
                  <i className="ri-shield-check-line"></i>
                  <span className="text-sm">Electrician autorizat ANRE</span>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-4">Navigare rapidă</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => scrollToSection('despre')}
                      className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                    >
                      Despre noi
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('servicii')}
                      className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                    >
                      Servicii
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('testimoniale')}
                      className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                    >
                      Testimoniale
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <i className="ri-phone-line text-[#007BFF]"></i>
                    <a href="tel:0720000000" className="text-gray-300 hover:text-white">
                      0720 000 000
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-mail-line text-[#007BFF]"></i>
                    <a href="mailto:contact@electrofix.ro" className="text-gray-300 hover:text-white">
                      contact@electrofix.ro
                    </a>
                  </div>
                  <div className="flex items-start space-x-2">
                    <i className="ri-map-pin-line text-[#007BFF] mt-1"></i>
                    <span className="text-gray-300">
                      București, Strada Energiei nr. 22
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="border-t border-gray-700 pt-6 mb-6">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-4">Informații legale</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => openModal('termeni')}
                    className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                  >
                    Termeni și condiții
                  </button>
                  <button
                    onClick={() => openModal('gdpr')}
                    className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                  >
                    GDPR
                  </button>
                  <button
                    onClick={() => openModal('cookies')}
                    className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                  >
                    Politica de cookies
                  </button>
                  <a 
                    href="/politica-confidentialitate"
                    className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                  >
                    Politica de confidențialitate
                  </a>
                </div>
              </div>
            </div>
            
            {/* Cookie Management */}
            <div className="border-t border-gray-700 pt-6 pb-2">
              <div className="flex justify-center">
                <button
                  onClick={handleManageCookies}
                  className="text-gray-400 hover:text-[#007BFF] transition-colors text-sm cursor-pointer"
                >
                  Administrează consimțământul cookie-urilor
                </button>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-gray-400 text-sm">
                  © {currentYear} ElectroFix – Toate drepturile rezervate
                </div>
                
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://websiteon.ro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#007BFF] hover:text-[#FFD200] transition-colors text-sm font-medium"
                  >
                    Made by WebsiteON.ro
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal pentru Termeni și Condiții */}
      {activeModal === 'termeni' && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#1C1C1C]">
                Termeni și Condiții
              </h2>
              <button 
                onClick={closeModal}
                className="w-10 h-10 bg-[#007BFF] text-white rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6 prose prose-lg max-w-none">
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">1. Introducere</h3>
                <p className="text-gray-700">
                  Acești termeni și condiții reglementează utilizarea serviciilor oferite de ElectroFix, 
                  cu sediul în București, Strada Energiei nr. 22. Prin accesarea și utilizarea serviciilor 
                  noastre, acceptați să fiți legat de acești termeni.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">2. Servicii oferite</h3>
                <p className="text-gray-700 mb-3">ElectroFix oferă următoarele servicii:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Instalații electrice complete pentru locuințe și spații comerciale</li>
                  <li>Reparații și intervenții rapide pentru defecțiuni electrice</li>
                  <li>Modernizări și upgrade-uri ale sistemelor electrice</li>
                  <li>Consultanță și verificări periodice de siguranță</li>
                  <li>Servicii de urgență disponibile 24/7</li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">3. Programări și intervenții</h3>
                <p className="text-gray-700">
                  Programările se pot face telefonic la 0720 000 000 sau prin formularul online. 
                  Ne angajăm să respectăm programul stabilit și să vă informăm în avans în cazul 
                  unor întârzieri neprevăzute.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">4. Prețuri și plăți</h3>
                <p className="text-gray-700">
                  Prețurile sunt stabilite în funcție de complexitatea lucrării și materialele necesare. 
                  Oferim o estimare de cost înainte de începerea lucrărilor. Plata se poate efectua 
                  în numerar sau prin transfer bancar.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">5. Garanție</h3>
                <p className="text-gray-700">
                  Toate lucrările efectuate beneficiază de o garanție de 12 luni. Garanția acoperă 
                  defectele de execuție, dar nu include defecțiunile cauzate de utilizare necorespunzătoare 
                  sau factori externi.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">6. Responsabilități</h3>
                <p className="text-gray-700">
                  ElectroFix se angajează să execute lucrările conform normelor ANRE și standardelor 
                  de siguranță în vigoare. Clientul trebuie să asigure accesul la locația intervenției 
                  și să furnizeze informații complete despre instalația existentă.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">7. Anulări</h3>
                <p className="text-gray-700">
                  Anulările programărilor trebuie comunicate cu cel puțin 24 de ore înainte. 
                  În caz de anulare tardivă sau neprezentare, ne rezervăm dreptul de a percepe 
                  un cost de deplasare.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">8. Contact</h3>
                <p className="text-gray-700">Pentru orice întrebări:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Telefon: 0720 000 000</li>
                  <li>Email: contact@electrofix.ro</li>
                  <li>Adresa: București, Strada Energiei nr. 22</li>
                </ul>
              </section>

              <p className="text-sm text-gray-600 mt-8">Ultima actualizare: Ianuarie 2026</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal pentru GDPR */}
      {activeModal === 'gdpr' && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#1C1C1C]">
                Informații GDPR
              </h2>
              <button 
                onClick={closeModal}
                className="w-10 h-10 bg-[#007BFF] text-white rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6 prose prose-lg max-w-none">
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">1. Ce este GDPR?</h3>
                <p className="text-gray-700">
                  Regulamentul General privind Protecția Datelor (GDPR) este o lege europeană care 
                  protejează datele personale ale cetățenilor UE. ElectroFix respectă în totalitate 
                  prevederile acestui regulament.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">2. Drepturile dumneavoastră GDPR</h3>
                <div className="space-y-4">
                  <div className="bg-[#F4F5F7] p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">
                      <i className="ri-eye-line mr-2 text-[#007BFF]"></i>
                      Dreptul de acces
                    </h4>
                    <p className="text-gray-700">
                      Puteți solicita o copie a tuturor datelor personale pe care le deținem despre dumneavoastră.
                    </p>
                  </div>

                  <div className="bg-[#F4F5F7] p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">
                      <i className="ri-edit-line mr-2 text-[#007BFF]"></i>
                      Dreptul de rectificare
                    </h4>
                    <p className="text-gray-700">
                      Puteți cere corectarea datelor inexacte sau completarea datelor incomplete.
                    </p>
                  </div>

                  <div className="bg-[#F4F5F7] p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">
                      <i className="ri-delete-bin-line mr-2 text-[#007BFF]"></i>
                      Dreptul de ștergere
                    </h4>
                    <p className="text-gray-700">
                      Puteți solicita ștergerea datelor personale în anumite condiții ("dreptul de a fi uitat").
                    </p>
                  </div>

                  <div className="bg-[#F4F5F7] p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">
                      <i className="ri-shield-line mr-2 text-[#007BFF]"></i>
                      Dreptul la portabilitate
                    </h4>
                    <p className="text-gray-700">
                      Puteți primi datele într-un format structurat pentru transfer la alt furnizor.
                    </p>
                  </div>

                  <div className="bg-[#F4F5F7] p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">
                      <i className="ri-close-circle-line mr-2 text-[#007BFF]"></i>
                      Dreptul de opoziție
                    </h4>
                    <p className="text-gray-700">
                      Puteți vă opune prelucrării datelor pentru marketing direct sau alte scopuri.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">3. Cum exercitați aceste drepturi?</h3>
                <div className="bg-white border-2 border-[#007BFF] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#1C1C1C] mb-4">Contactați-ne prin:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <i className="ri-mail-line text-[#007BFF]"></i>
                      <span><strong>Email:</strong> contact@electrofix.ro</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-phone-line text-[#007BFF]"></i>
                      <span><strong>Telefon:</strong> 0720 000 000</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-map-pin-line text-[#007BFF]"></i>
                      <span><strong>Adresa:</strong> București, Strada Energiei nr. 22</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-[#F4F5F7] rounded-lg">
                    <p className="text-sm">
                      <strong>Timp de răspuns:</strong> Vă vom răspunde în maximum 30 de zile de la primirea cererii.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">4. Securitatea datelor</h3>
                <p className="text-gray-700">
                  Implementăm măsuri de securitate tehnice și organizatorice adecvate pentru protejarea 
                  datelor împotriva accesului neautorizat, modificării, divulgării sau distrugerii.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">5. Plângeri</h3>
                <p className="text-gray-700 mb-3">
                  Dacă considerați că drepturile dumneavoastră GDPR au fost încălcate, puteți depune 
                  o plângere la:
                </p>
                <div className="bg-[#F4F5F7] p-4 rounded-xl">
                  <p className="font-semibold">Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</p>
                  <p className="text-gray-700">Website: www.dataprotection.ro</p>
                  <p className="text-gray-700">Email: anspdcp@dataprotection.ro</p>
                  <p className="text-gray-700">Telefon: 021.252.5599</p>
                </div>
              </section>

              <p className="text-sm text-gray-600 mt-8">Ultima actualizare: Ianuarie 2026</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal pentru Politica de Cookies */}
      {activeModal === 'cookies' && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#1C1C1C]">
                Politica de Cookies
              </h2>
              <button 
                onClick={closeModal}
                className="w-10 h-10 bg-[#007BFF] text-white rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6 prose prose-lg max-w-none">
              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">1. Ce sunt cookies-urile?</h3>
                <p className="text-gray-700">
                  Cookies-urile sunt fișiere mici de text care se stochează pe dispozitivul dumneavoastră 
                  când vizitați site-ul nostru electrofix.ro. Ele ne ajută să îmbunătățim experiența 
                  de navigare și să personalizăm conținutul.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">2. Tipuri de cookies folosite</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-2">Cookies esențiale</h4>
                    <p className="text-gray-700">
                      Necesare pentru funcționarea corectă a site-ului. Nu pot fi dezactivate și includ:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Cookies de sesiune pentru navigare</li>
                      <li>Cookies pentru securitate</li>
                      <li>Cookies pentru funcționalitatea formularelor</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-2">Cookies de performanță</h4>
                    <p className="text-gray-700">
                      Ne ajută să înțelegem cum interacționați cu site-ul nostru:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Google Analytics (trafic, pagini vizitate)</li>
                      <li>Timpul petrecut pe site</li>
                      <li>Ratele de conversie</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-2">Cookies de marketing</h4>
                    <p className="text-gray-700">
                      Folosite pentru publicitate personalizată (doar cu consimțământul dumneavoastră).
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">3. Gestionarea cookies-urilor</h3>
                <p className="text-gray-700 mb-3">Puteți controla cookies-urile prin:</p>
                <div className="space-y-3">
                  <div className="bg-[#F4F5F7] p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Setările browserului</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Chrome: Setări → Confidențialitate și securitate → Cookies</li>
                      <li>Firefox: Opțiuni → Confidențialitate și securitate</li>
                      <li>Safari: Preferințe → Confidențialitate</li>
                      <li>Edge: Setări → Cookies și permisiuni site</li>
                    </ul>
                  </div>

                  <div className="bg-[#F4F5F7] p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Bannerul de consimțământ</h4>
                    <p className="text-gray-700">
                      La prima vizită, veți vedea un banner unde puteți alege ce tipuri de cookies acceptați. 
                      Puteți modifica preferințele oricând din footer.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">4. Impactul dezactivării</h3>
                <p className="text-gray-700">Dezactivarea anumitor cookies poate afecta:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Funcționarea corectă a formularelor</li>
                  <li>Personalizarea conținutului</li>
                  <li>Funcțiile de analiză a traficului</li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">5. Contact</h3>
                <p className="text-gray-700">Pentru întrebări despre cookies-uri:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Email: contact@electrofix.ro</li>
                  <li>Telefon: 0720 000 000</li>
                </ul>
              </section>

              <p className="text-sm text-gray-600 mt-8">Ultima actualizare: Ianuarie 2026</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
