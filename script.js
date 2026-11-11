/* STIPRODUCTS Website v2.0
   Set CONTACT_CONFIG.endpoint before launch (Formspree, Getform, or own backend). */
const CONTACT_CONFIG = {
  endpoint: "",
  method: "POST"
};

const translations = {
ro: {
skip:"Sari la conținut",announcement:"Digital. Produse. Producție. Comerț și distribuție.",
navHome:"Home",navAbout:"About Us",navDivisions:"Divisions",navProducts:"Products",navContact:"Contact",
eyebrow:"STIPRODUCTS SRL · ROMÂNIA",
heroTitle:"STIPRODUCTS<br><em>Digital. Products. Trade.</em>",
heroCopy:"Conectăm idei, dezvoltăm produse și creăm valoare.",
explore:"Descoperă diviziile",talk:"Hai să discutăm",heroMeta:"CINCI DIVIZII · UN SINGUR STANDARD",
aboutIndex:"COMPANIA",aboutEyebrow:"CINE SUNTEM",
aboutTitle:"O structură corporativă.<br><em>Mai multe direcții.</em>",
aboutText:"STIPRODUCTS SRL este o companie din România care reunește servicii digitale, dezvoltare de produse, producție și comerț. Lucrăm pe direcții complementare, cu același standard de claritate, calitate și responsabilitate.",
aboutSide:"Ne concentrăm pe inițiative clare, parteneriate corecte și execuție responsabilă. Fiecare proiect începe cu înțelegerea nevoii și continuă cu o soluție potrivită.",
principles:"Principiile noastre",areasIndex:"DIVIZII",whatWeDo:"CE FACEM",
areasTitle:"Cinci divizii.<br><em>Un singur standard.</em>",
digitalText:"Software, aplicații, automatizări de procese, digitalizare și optimizare a fluxurilor de lucru pentru companii.",
digitalL1:"Software și aplicații",digitalL2:"Automatizări de procese",digitalL3:"Digitalizare și fluxuri de lucru",digitalL4:"Soluții digitale pentru companii",
digitalTag:"SERVICII · TEHNOLOGIE",
silverText:"Produse din metale prețioase: medalii din argint 999, design propriu, obiecte de colecție, ambalaje premium și certificate de autenticitate, acolo unde este cazul.",
silverL1:"Medalii din argint 999",silverL2:"Design propriu",silverL3:"Produse de colecție",silverL4:"Ambalaje premium",
silverTag:"PRODUSE · COLECȚII",development:"ÎN DEZVOLTARE",
customText:"Produse personalizate B2B pentru industria hotelieră: chei și brelocuri din pietre naturale de mare, cu număr de cameră și posibilitate de inscripționare logo hotel.",
customL1:"Chei și brelocuri pentru camere",customL2:"Pietre naturale de mare",customL3:"Personalizare cu număr de cameră",customL4:"Inscripționare logo hotel",
customTag:"B2B · HOTELIER",
candlesText:"Producție și dezvoltare de lumânări: decorative turnate, sculpturale, parfumate, în recipiente, colecții sezoniere și cadouri pentru evenimente sau parteneriate corporate.",
candlesL1:"Lumânări decorative și sculpturale",candlesL2:"Lumânări parfumate",candlesL3:"Colecții sezoniere și tematice",candlesL4:"Cadouri și evenimente",
candlesTag:"PRODUCȚIE · DEZVOLTARE",
tradeText:"Comerț și distribuție: selecție de furnizori, comercializare de produse proprii și selectate, canale B2B și B2C, parteneriate și vânzare prin magazin online sau marketplace-uri.",
tradeL1:"Identificare și selecție furnizori",tradeL2:"Produse proprii și selectate",tradeL3:"Distribuție B2B și B2C",tradeL4:"Parteneriate comerciale",
tradeTag:"COMERȚ · DISTRIBUȚIE",
productsIndex:"PRODUSE",productsEyebrow:"OFERTA CONCRETĂ",
productsTitle:"Produse și direcții<br><em>în lucru.</em>",
productsNote:"Prețurile, stocurile și disponibilitatea comercială se comunică doar după confirmare. Puteți solicita o ofertă pentru orice direcție.",
pMedalName:"Medalie Lakshmi și Ganesha",
pMedalText:"Medalie din argint 999, design propriu, cu simbolurile Lakshmi și Ganesha. Greutate netă: 5 grame. Producție inițială estimată: 100 bucăți. Obiect de colecție — nu este monedă cu putere circulatorie.",
pKeysName:"Chei și brelocuri hotel",
pKeysText:"Produse personalizate din pietre naturale de mare, pentru camere de hotel, pensiuni și resorturi. Numerotare camere și posibilitate de inscripționare logo. Direcție B2B.",
pCandlesName:"Lumânări decorative și sculpturale",
pCandlesText:"Gamă în dezvoltare: lumânări turnate, sculpturale, parfumate și în recipiente decorative, inclusiv colecții sezoniere și cadouri corporate.",
pDigitalName:"Soluții digitale pentru companii",
pDigitalText:"Software, aplicații, automatizări și digitalizare de fluxuri. Disponibil ca discuție de proiect, nu ca pachet standard publicat.",
pTradeName:"Selecție comercială și distribuție",
pTradeText:"Identificare furnizori, comercializare de produse proprii și selectate, parteneriate B2B/B2C. Canalele de magazin online vor fi anunțate când sunt confirmate.",
statusDevelopment:"În dezvoltare",statusAvailable:"Disponibil",statusSoon:"În curând",
quote:"Solicită ofertă",
approachIndex:"ABORDARE",ourApproach:"MODUL NOSTRU DE LUCRU",
statementTitle:"Claritate în plan.<br><em>Atenție în execuție.</em>",
p1Title:"Pragmatism",p1Text:"Alegem soluții care răspund unei nevoi concrete.",
p2Title:"Calitate",p2Text:"Urmărim consistență, transparență și atenție la detalii.",
p3Title:"Parteneriat",p3Text:"Construim relații comerciale bazate pe încredere.",
contactEyebrow:"URMĂTORUL PAS",contactTitle:"Ai un proiect<br><em>în minte?</em>",
contactText:"Suntem deschiși la discuții despre colaborări, produse, producție și oportunități comerciale.",
emailNote:"Adresa de email este provizorie și va fi confirmată înainte de publicare.",
nameLabel:"Nume",emailLabel:"Email",companyLabel:"Companie",divisionLabel:"Divizie de interes",messageLabel:"Mesaj",
send:"Trimite mesajul",
formNote:"Formularul este pregătit pentru conectarea la un serviciu de email sau backend. Datele nu sunt trimise către un server până la configurare.",
rights:"TOATE DREPTURILE REZERVATE",privacy:"Confidențialitate",terms:"Termeni",contact:"Contact",
namePlaceholder:"Numele tău",companyPlaceholder:"Companie (opțional)",messagePlaceholder:"Spune-ne câteva detalii...",
formStored:"Mesajul a fost înregistrat local. Conectează un serviciu de email în CONTACT_CONFIG înainte de publicare.",
formSent:"Mesajul a fost trimis.",formError:"Mesajul nu a putut fi trimis. Încearcă din nou.",
metaTitle:"STIPRODUCTS | Digital. Products. Trade.",
metaDesc:"STIPRODUCTS SRL – Digital. Products. Trade. Conectăm idei, dezvoltăm produse și creăm valoare.",
privacyTitle:"Confidențialitate",
privacyText:"Această versiune nu colectează date pe un server până la conectarea unui serviciu de email. Mesajele pot fi stocate temporar în browser. Înainte de publicare, completează politica cu datele reale ale operatorului.",
termsTitle:"Informații legale",
termsText:"STIPRODUCTS SRL. Datele de sediu, CUI, numărul din Registrul Comerțului, telefonul și adresa de email vor fi publicate după confirmare. Conținutul site-ului este informativ. Produsele STI SILVER nu sunt monede cu putere circulatorie."
},
en: {
skip:"Skip to content",announcement:"Digital. Products. Production. Trade and distribution.",
navHome:"Home",navAbout:"About Us",navDivisions:"Divisions",navProducts:"Products",navContact:"Contact",
eyebrow:"STIPRODUCTS SRL · ROMANIA",
heroTitle:"STIPRODUCTS<br><em>Digital. Products. Trade.</em>",
heroCopy:"Connecting ideas, developing products and creating value.",
explore:"Explore the divisions",talk:"Let’s talk",heroMeta:"FIVE DIVISIONS · ONE STANDARD",
aboutIndex:"THE COMPANY",aboutEyebrow:"WHO WE ARE",
aboutTitle:"A corporate structure.<br><em>Multiple directions.</em>",
aboutText:"STIPRODUCTS SRL is a Romanian company bringing together digital services, product development, production and trade. Complementary activities, one standard of clarity, quality and responsibility.",
aboutSide:"We focus on clear initiatives, fair partnerships and responsible execution. Every project starts with understanding the need and continues with a suitable solution.",
principles:"Our principles",areasIndex:"DIVISIONS",whatWeDo:"WHAT WE DO",
areasTitle:"Five divisions.<br><em>One standard.</em>",
digitalText:"Software, applications, process automation, digitisation and workflow optimisation for companies.",
digitalL1:"Software and applications",digitalL2:"Process automation",digitalL3:"Digitisation and workflows",digitalL4:"Digital solutions for companies",
digitalTag:"SERVICES · TECHNOLOGY",
silverText:"Precious-metal products: 999 silver medals, original design, collectible pieces, premium packaging and certificates of authenticity where applicable.",
silverL1:"999 silver medals",silverL2:"Original design",silverL3:"Collectible products",silverL4:"Premium packaging",
silverTag:"PRODUCTS · COLLECTIONS",development:"IN DEVELOPMENT",
customText:"B2B custom products for hospitality: room keys and keychains made from natural sea stones, with room numbers and optional hotel-logo engraving.",
customL1:"Hotel keys and keychains",customL2:"Natural sea stones",customL3:"Room-number personalisation",customL4:"Hotel logo inscription",
customTag:"B2B · HOSPITALITY",
candlesText:"Candle production and product development: moulded decorative candles, sculptural pieces, scented candles, container candles, seasonal collections and gifts for events or corporate partners.",
candlesL1:"Decorative and sculptural candles",candlesL2:"Scented candles",candlesL3:"Seasonal and themed collections",candlesL4:"Gifts and events",
candlesTag:"PRODUCTION · DEVELOPMENT",
tradeText:"Trade and distribution: supplier selection, commercialisation of own and selected products, B2B and B2C channels, partnerships, and future sales via online store or marketplaces.",
tradeL1:"Supplier identification and selection",tradeL2:"Own and selected products",tradeL3:"B2B and B2C distribution",tradeL4:"Commercial partnerships",
tradeTag:"TRADE · DISTRIBUTION",
productsIndex:"PRODUCTS",productsEyebrow:"CONCRETE OFFER",
productsTitle:"Products and directions<br><em>in progress.</em>",
productsNote:"Prices, stock and commercial availability are shared only after confirmation. You may request a quotation for any direction.",
pMedalName:"Lakshmi and Ganesha medal",
pMedalText:"999 silver medal, original design, featuring Lakshmi and Ganesha symbols. Net weight: 5 grams. Estimated initial production: 100 pieces. A collectible object — not legal tender.",
pKeysName:"Hotel keys and keychains",
pKeysText:"Custom products from natural sea stones for hotels, guesthouses and resorts. Room numbering and optional logo inscription. B2B direction.",
pCandlesName:"Decorative and sculptural candles",
pCandlesText:"Range in development: moulded, sculptural, scented and container candles, including seasonal collections and corporate gifts.",
pDigitalName:"Digital solutions for companies",
pDigitalText:"Software, applications, automation and workflow digitisation. Available as a project discussion, not as a published standard package.",
pTradeName:"Commercial selection and distribution",
pTradeText:"Supplier identification, own and selected products, B2B/B2C partnerships. Online-store channels will be announced when confirmed.",
statusDevelopment:"In development",statusAvailable:"Available",statusSoon:"Coming soon",
quote:"Request a quote",
approachIndex:"APPROACH",ourApproach:"HOW WE WORK",
statementTitle:"Clarity in planning.<br><em>Care in execution.</em>",
p1Title:"Pragmatism",p1Text:"We choose solutions that address a real need.",
p2Title:"Quality",p2Text:"We value consistency, transparency and attention to detail.",
p3Title:"Partnership",p3Text:"We build business relationships based on trust.",
contactEyebrow:"THE NEXT STEP",contactTitle:"Have a project<br><em>in mind?</em>",
contactText:"We are open to conversations about partnerships, products, production and commercial opportunities.",
emailNote:"The email address is provisional and must be confirmed before publication.",
nameLabel:"Name",emailLabel:"Email",companyLabel:"Company",divisionLabel:"Division of interest",messageLabel:"Message",
send:"Send message",
formNote:"The form is prepared for an email service or backend. Data is not sent to a server until that connection is configured.",
rights:"ALL RIGHTS RESERVED",privacy:"Privacy",terms:"Legal",contact:"Contact",
namePlaceholder:"Your name",companyPlaceholder:"Company (optional)",messagePlaceholder:"Tell us a little about it...",
formStored:"Your message was stored locally. Connect an email service in CONTACT_CONFIG before launch.",
formSent:"Your message was sent.",formError:"The message could not be sent. Please try again.",
metaTitle:"STIPRODUCTS | Digital. Products. Trade.",
metaDesc:"STIPRODUCTS SRL – Digital. Products. Trade. Connecting ideas, developing products and creating value.",
privacyTitle:"Privacy",
privacyText:"This version does not collect data on a server until an email service is connected. Messages may be stored temporarily in the browser. Before publishing, complete the privacy policy with the operator’s actual details.",
termsTitle:"Legal information",
termsText:"STIPRODUCTS SRL. Registered office, tax ID, Trade Register number, phone and email will be published after confirmation. This website is informational. STI SILVER products are not legal tender."
},
de: {
skip:"Zum Inhalt springen",announcement:"Digital. Produkte. Produktion. Handel und Vertrieb.",
navHome:"Home",navAbout:"About Us",navDivisions:"Divisions",navProducts:"Products",navContact:"Contact",
eyebrow:"STIPRODUCTS SRL · RUMÄNIEN",
heroTitle:"STIPRODUCTS<br><em>Digital. Products. Trade.</em>",
heroCopy:"Wir verbinden Ideen, entwickeln Produkte und schaffen Werte.",
explore:"Divisionen entdecken",talk:"Kontakt aufnehmen",heroMeta:"FÜNF DIVISIONEN · EIN STANDARD",
aboutIndex:"UNTERNEHMEN",aboutEyebrow:"WER WIR SIND",
aboutTitle:"Eine Unternehmensstruktur.<br><em>Mehrere Richtungen.</em>",
aboutText:"STIPRODUCTS SRL ist ein rumänisches Unternehmen für digitale Services, Produktentwicklung, Produktion und Handel. Ergänzende Tätigkeiten, ein Standard für Klarheit, Qualität und Verantwortung.",
aboutSide:"Wir konzentrieren uns auf klare Initiativen, faire Partnerschaften und verantwortungsvolle Umsetzung. Jedes Projekt beginnt mit dem Verständnis des Bedarfs.",
principles:"Unsere Prinzipien",areasIndex:"DIVISIONEN",whatWeDo:"WAS WIR TUN",
areasTitle:"Fünf Divisionen.<br><em>Ein Standard.</em>",
digitalText:"Software, Anwendungen, Prozessautomatisierung, Digitalisierung und Optimierung von Arbeitsabläufen für Unternehmen.",
digitalL1:"Software und Anwendungen",digitalL2:"Prozessautomatisierung",digitalL3:"Digitalisierung und Workflows",digitalL4:"Digitale Lösungen für Unternehmen",
digitalTag:"SERVICES · TECHNOLOGIE",
silverText:"Edelmetallprodukte: Medaillen aus 999er Silber, eigenes Design, Sammlerstücke, Premiumverpackung und Echtheitszertifikate, soweit vorgesehen.",
silverL1:"Medaillen aus 999er Silber",silverL2:"Eigenes Design",silverL3:"Sammlerprodukte",silverL4:"Premiumverpackung",
silverTag:"PRODUKTE · KOLLEKTIONEN",development:"IN ENTWICKLUNG",
customText:"Personalisierte B2B-Produkte für die Hotellerie: Zimmerschlüssel und Anhänger aus natürlichen Meeressteinen, mit Zimmernummer und optionaler Logo-Gravur.",
customL1:"Hotelschlüssel und Anhänger",customL2:"Natürliche Meeressteine",customL3:"Personalisierung mit Zimmernummer",customL4:"Hotel-Logo",
customTag:"B2B · HOTELLERIE",
candlesText:"Kerzenproduktion und Produktentwicklung: gegossene Dekorkerzen, skulpturale Stücke, Duftkerzen, Kerzen in Gefäßen, saisonale Kollektionen sowie Geschenke für Events und Unternehmen.",
candlesL1:"Dekorative und skulpturale Kerzen",candlesL2:"Duftkerzen",candlesL3:"Saisonale und thematische Kollektionen",candlesL4:"Geschenke und Events",
candlesTag:"PRODUKTION · ENTWICKLUNG",
tradeText:"Handel und Vertrieb: Lieferantenauswahl, Vermarktung eigener und ausgewählter Produkte, B2B- und B2C-Kanäle, Partnerschaften sowie späterer Verkauf über Onlineshop oder Marktplätze.",
tradeL1:"Identifikation und Auswahl von Lieferanten",tradeL2:"Eigene und ausgewählte Produkte",tradeL3:"B2B- und B2C-Vertrieb",tradeL4:"Handelspartnerschaften",
tradeTag:"HANDEL · VERTRIEB",
productsIndex:"PRODUKTE",productsEyebrow:"KONKRETES ANGEBOT",
productsTitle:"Produkte und Richtungen<br><em>in Arbeit.</em>",
productsNote:"Preise, Bestände und kommerzielle Verfügbarkeit werden erst nach Bestätigung mitgeteilt. Für jede Richtung kann ein Angebot angefragt werden.",
pMedalName:"Medaille Lakshmi und Ganesha",
pMedalText:"Medaille aus 999er Silber, eigenes Design, mit den Symbolen Lakshmi und Ganesha. Nettogewicht: 5 Gramm. Geschätzte Erstproduktion: 100 Stück. Sammlerobjekt — kein gesetzliches Zahlungsmittel.",
pKeysName:"Hotelschlüssel und Anhänger",
pKeysText:"Personalisierte Produkte aus natürlichen Meeressteinen für Hotels, Pensionen und Resorts. Zimmernummerierung und optionale Logo-Gravur. B2B-Ausrichtung.",
pCandlesName:"Dekorative und skulpturale Kerzen",
pCandlesText:"Sortiment in Entwicklung: gegossene, skulpturale, duftende Kerzen und Kerzen in Gefäßen, inklusive saisonaler Kollektionen und Firmengeschenke.",
pDigitalName:"Digitale Lösungen für Unternehmen",
pDigitalText:"Software, Anwendungen, Automatisierung und Digitalisierung von Abläufen. Verfügbar als Projektgespräch, nicht als veröffentlichtes Standardpaket.",
pTradeName:"Handelsauswahl und Vertrieb",
pTradeText:"Lieferantenidentifikation, eigene und ausgewählte Produkte, B2B/B2C-Partnerschaften. Online-Kanäle werden bekannt gegeben, sobald sie bestätigt sind.",
statusDevelopment:"In Entwicklung",statusAvailable:"Verfügbar",statusSoon:"Demnächst",
quote:"Angebot anfragen",
approachIndex:"ARBEITSWEISE",ourApproach:"WIE WIR ARBEITEN",
statementTitle:"Klare Planung.<br><em>Sorgfältige Umsetzung.</em>",
p1Title:"Pragmatismus",p1Text:"Wir wählen Lösungen, die einen konkreten Bedarf erfüllen.",
p2Title:"Qualität",p2Text:"Wir achten auf Beständigkeit, Transparenz und Details.",
p3Title:"Partnerschaft",p3Text:"Wir bauen Geschäftsbeziehungen auf Vertrauen auf.",
contactEyebrow:"DER NÄCHSTE SCHRITT",contactTitle:"Haben Sie ein Projekt<br><em>im Sinn?</em>",
contactText:"Wir freuen uns auf Gespräche über Kooperationen, Produkte, Produktion und Geschäftsmöglichkeiten.",
emailNote:"Die E-Mail-Adresse ist vorläufig und muss vor der Veröffentlichung bestätigt werden.",
nameLabel:"Name",emailLabel:"E-Mail",companyLabel:"Unternehmen",divisionLabel:"Interessierende Division",messageLabel:"Nachricht",
send:"Nachricht senden",
formNote:"Das Formular ist für einen E-Mail-Dienst oder ein Backend vorbereitet. Daten werden erst nach der Konfiguration an einen Server gesendet.",
rights:"ALLE RECHTE VORBEHALTEN",privacy:"Datenschutz",terms:"Rechtliches",contact:"Kontakt",
namePlaceholder:"Ihr Name",companyPlaceholder:"Unternehmen (optional)",messagePlaceholder:"Erzählen Sie uns mehr...",
formStored:"Die Nachricht wurde lokal gespeichert. Verbinden Sie vor dem Launch einen E-Mail-Dienst in CONTACT_CONFIG.",
formSent:"Ihre Nachricht wurde gesendet.",formError:"Die Nachricht konnte nicht gesendet werden. Bitte erneut versuchen.",
metaTitle:"STIPRODUCTS | Digital. Products. Trade.",
metaDesc:"STIPRODUCTS SRL – Digital. Products. Trade. Wir verbinden Ideen, entwickeln Produkte und schaffen Werte.",
privacyTitle:"Datenschutz",
privacyText:"Diese Version erhebt keine Serverdaten, bis ein E-Mail-Dienst angebunden ist. Nachrichten können vorübergehend im Browser gespeichert werden. Ergänzen Sie vor der Veröffentlichung die Hinweise mit den tatsächlichen Angaben zum Betreiber.",
termsTitle:"Rechtliche Informationen",
termsText:"STIPRODUCTS SRL. Sitz, Steuernummer, Handelsregisternummer, Telefon und E-Mail werden nach Bestätigung veröffentlicht. Diese Website dient der Information. STI-SILVER-Produkte sind kein gesetzliches Zahlungsmittel."
}
};

const PRODUCTS = [
  {id:"medal", division:"silver", status:"development", nameKey:"pMedalName", textKey:"pMedalText", visual:"medal"},
  {id:"keys", division:"custom", status:"development", nameKey:"pKeysName", textKey:"pKeysText", visual:"keys"},
  {id:"candles", division:"candles", status:"development", nameKey:"pCandlesName", textKey:"pCandlesText", visual:"candles"},
  {id:"digital", division:"digital", status:"available", nameKey:"pDigitalName", textKey:"pDigitalText", visual:"digital"},
  {id:"trade", division:"trade", status:"soon", nameKey:"pTradeName", textKey:"pTradeText", visual:"trade"}
];

const DIVISION_LABEL = {digital:"STI Digital", silver:"STI Silver", custom:"STI Custom", candles:"STI Candles", trade:"STI Trade"};
const STATUS_CLASS = {development:"", available:"status-available", soon:"status-soon"};
const STATUS_KEY = {development:"statusDevelopment", available:"statusAvailable", soon:"statusSoon"};
const VISUALS = {
  medal:'<div class="coin"><div class="coin-inner"><span>STI</span><b>999</b><small>5 g</small></div></div>',
  keys:'<div class="pebble"><b>12</b><small>SUITE</small></div>',
  candles:'<div class="candle"><span class="flame"></span><span class="wick"></span></div>',
  digital:'<div class="digital-window"><span></span><span></span><span></span><b>STI<span>.</span></b><i></i></div>',
  trade:'<div class="trade-box"><span>STI</span><b>TRADE</b><i></i></div>'
};

let currentLang = localStorage.getItem("stiproducts-lang") || "ro";

function pageMeta(section) {
  const t = translations[currentLang];
  const map = {
    home: t.metaTitle,
    about: "STIPRODUCTS | " + t.navAbout,
    divisions: "STIPRODUCTS | " + t.navDivisions,
    products: "STIPRODUCTS | " + t.navProducts,
    contact: "STIPRODUCTS | " + t.navContact,
    approach: "STIPRODUCTS | " + t.approachIndex
  };
  return map[section] || t.metaTitle;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("stiproducts-lang", lang);
  document.documentElement.lang = lang;
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (t[el.dataset.i18n]) el.innerHTML = t[el.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  document.title = t.metaTitle;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", t.metaDesc);
  const ogt = document.querySelector('meta[property="og:title"]');
  const ogd = document.querySelector('meta[property="og:description"]');
  if (ogt) ogt.setAttribute("content", t.metaTitle);
  if (ogd) ogd.setAttribute("content", t.metaDesc);
  renderProducts();
  updateHashTitle();
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const t = translations[currentLang];
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card">
      <div class="product-visual card-visual">${VISUALS[p.visual]}</div>
      <div class="product-div">${DIVISION_LABEL[p.division]}</div>
      <h3>${t[p.nameKey]}</h3>
      <p>${t[p.textKey]}</p>
      <div class="product-meta">
        <span class="status ${STATUS_CLASS[p.status]}">${t[STATUS_KEY[p.status]]}</span>
        <button class="quote-btn" type="button" data-quote="${p.id}" data-division="${p.division}">${t.quote}</button>
      </div>
    </article>`).join("");
  grid.querySelectorAll("[data-quote]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("divisionSelect").value = btn.dataset.division;
      document.getElementById("productField").value = btn.dataset.quote;
      const name = translations[currentLang][PRODUCTS.find(x => x.id === btn.dataset.quote).nameKey];
      const ta = document.querySelector('textarea[name="message"]');
      if (!ta.value) ta.value = name;
      document.getElementById("contact").scrollIntoView({behavior:"smooth"});
    });
  });
}

function updateHashTitle() {
  const id = (location.hash || "#home").replace("#", "").split("?")[0];
  const section = ["home","about","divisions","products","contact","approach"].includes(id) ? id : "home";
  document.title = pageMeta(section);
}

document.querySelectorAll(".lang-btn").forEach(b => b.addEventListener("click", () => setLanguage(b.dataset.lang)));

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("hashchange", updateHashTitle);

const form = document.getElementById("contactForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  const data = Object.fromEntries(new FormData(form).entries());
  const payload = {
    name: data.name,
    email: data.email,
    company: data.company || "",
    division: data.division,
    product: data.product || "",
    message: data.message,
    language: currentLang,
    createdAt: new Date().toISOString()
  };
  if (!CONTACT_CONFIG.endpoint) {
    const key = "stiproducts_inquiries";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.push(payload);
    localStorage.setItem(key, JSON.stringify(existing));
    status.textContent = translations[currentLang].formStored;
    form.reset();
    return;
  }
  try {
    const res = await fetch(CONTACT_CONFIG.endpoint, {
      method: CONTACT_CONFIG.method,
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("send-failed");
    status.textContent = translations[currentLang].formSent;
    form.reset();
  } catch (err) {
    status.textContent = translations[currentLang].formError;
  }
});

const dialog = document.getElementById("legalDialog");
const legal = document.getElementById("legalContent");
document.querySelectorAll("[data-legal]").forEach(a => a.addEventListener("click", e => {
  e.preventDefault();
  const type = a.dataset.legal;
  legal.innerHTML = "<h3>" + translations[currentLang][type === "privacy" ? "privacyTitle" : "termsTitle"] + "</h3><p>" + translations[currentLang][type === "privacy" ? "privacyText" : "termsText"] + "</p>";
  dialog.showModal();
}));
document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });

setLanguage(currentLang);
