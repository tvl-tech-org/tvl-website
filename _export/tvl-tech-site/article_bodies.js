// article-bodies.js — body content per slug. Body uses a tiny block schema:
//   { type: 'h2'|'h3'|'p'|'quote'|'code'|'list'|'callout', text|items|lang|... }
// h2 blocks become Table of Contents entries.

const FALLBACK_BODY = (article) => ([
  { type: 'p', text: 'Articolul complet este în pregătire. Între timp, contextul scurt:' },
  { type: 'p', text: article.excerpt },
  { type: 'h2', text: 'De ce vorbim despre asta' },
  { type: 'p', text: 'Am livrat proiecte similare în ' + article.category + ' și vrem să împărtășim ce am învățat — fără filtru de marketing. Articolul complet apare în câteva zile.' },
  { type: 'callout', text: 'Vrei să primești articolul când iese? Abonează-te la newsletter — un email pe lună, fără spam.' },
  { type: 'h2', text: 'Discută cu noi' },
  { type: 'p', text: 'Dacă te lovești de o problemă similară chiar acum, scrie-ne. Răspundem în 48h.' },
]);

const BODIES = {
  'computer-vision-productie': [
    { type: 'p', text: 'Toată lumea vrea computer vision pe linia de producție. Demo-ul arată bine — modelul detectează defectele cu 97% acuratețe pe setul de validare, iar PoC-ul rulează curat în Jupyter. Apoi cineva întreabă: "Bun, când îl punem în producție?", și aici începe partea grea.' },
    { type: 'p', text: 'În ultimii doi ani am livrat trei proiecte de computer vision pentru clienți industriali. Toate au pornit de la același entuziasm. Toate au întâlnit aceleași patru tipuri de probleme. Iată ce am învățat.' },
    { type: 'h2', text: 'Modelul nu e proiectul' },
    { type: 'p', text: 'Cea mai persistentă greșeală — și o facem și noi, nu doar clienții — este să tratezi modelul ca pe deliverable-ul principal. Modelul este 20% din proiect. Restul este infrastructura care îl ține în viață: pipeline-ul de etichetare, monitorizarea drift-ului, mecanismul de rollback când iese ceva prost, și interfața prin care operatorii umani pot suprascrie deciziile lui.' },
    { type: 'p', text: 'Echipa de ML care livrează doar modelul este ca o echipă de chef care livrează doar rețeta. E nevoie de bucătărie, ingrediente, livrare, și cineva care curăță vasele.' },
    { type: 'h2', text: 'Edge cases-urile sunt 80% din muncă' },
    { type: 'p', text: 'Pe setul de antrenament, defectele sunt clare. În realitate, lumina se schimbă, banda transportoare are o zgârietură care arată ca un crack, iar piesa numărul 4 care se mișcă mai încet la fiecare a treia tură creează o umbră ciudată.' },
    { type: 'list', items: [
      'Schimbarea de lumină între tura de zi și cea de noapte',
      'Murdăria pe lentilă după 3 zile fără curățare',
      'Variațiile de lot la materia primă',
      'Vibrațiile mecanice care strică cadrul exact când se face captura',
    ]},
    { type: 'p', text: 'Niciuna dintre astea nu apare în datele de antrenament. Toate apar în primele două săptămâni de producție.' },
    { type: 'h2', text: 'Etichetarea nu se termină niciodată' },
    { type: 'p', text: 'Inițial planificăm 10.000 de imagini etichetate. Estimarea naivă: o săptămână cu trei oameni. Realitatea: trei luni cu un workflow de revizuire în două nivele, pentru că etichetatorul de prim nivel face greșeli pe care doar un specialist le prinde.' },
    { type: 'quote', text: 'Datele bune sunt mai valoroase decât arhitecturile bune. Este lecția pe care o repetăm la fiecare proiect.', author: 'Echipa AI, TVL' },
    { type: 'h2', text: 'Buy-in-ul de pe linia de producție' },
    { type: 'p', text: 'Operatorii de pe linie sunt reflexiv defensivi când apare un sistem AI. Pentru ei, ai două opțiuni: ori vine să-i înlocuiască, ori vine să le facă raportul mai detaliat când greșesc. Ambele sunt rele.' },
    { type: 'p', text: 'Soluția care funcționează: pune sistemul lângă ei, nu deasupra. Modelul propune, operatorul confirmă sau infirmă. La început acuratețea pare lentă, dar se acumulează feedback în timp real care îmbunătățește modelul mai rapid decât orice training set.' },
    { type: 'callout', text: 'Regulă de aur: dacă operatorul nu poate explica unui coleg ce face sistemul, sistemul nu e gata.' },
    { type: 'h2', text: 'Concluzie' },
    { type: 'p', text: 'Computer vision-ul rezolvă probleme reale. Dar nu rezolvă singur — rezolvă împreună cu o echipă care înțelege producția, cu un pipeline de date care se actualizează zilnic, și cu operatori care îl folosesc ca pe un coleg, nu ca pe un șef.' },
    { type: 'p', text: 'Dacă te apropii de un proiect de genul ăsta și vrei să discutăm — fără hype, fără vânzare — scrie-ne.' },
  ],

  'agentic-framework-cotare': [
    { type: 'p', text: 'Un distribuitor industrial primește zilnic 200-500 de cereri de ofertă pe email. Fiecare conține o listă de produse — uneori cu denumiri exacte, uneori cu denumiri colocviale, uneori cu poze proaste de pe șantier. Procesul tradițional: un om citește email-ul, caută produsele în catalogul SAP, alocă codurile, calculează prețul, trimite oferta. Durează 30-90 de minute pe cerere.' },
    { type: 'p', text: 'Am construit un agent AI care face asta în 4 minute. Iată cum.' },
    { type: 'h2', text: 'Arhitectura pe scurt' },
    { type: 'p', text: 'Sistemul are trei straturi: un orchestrator care primește cererea și o sparge pe produse, sub-agenți specializați care caută fiecare produs în catalog, și un layer de validare care verifică regulile de business înainte să trimită oferta înapoi.' },
    { type: 'code', lang: 'mermaid', text: 'flowchart LR\n  Email --> OCR[OCR Gemini 2.5 Pro]\n  OCR --> Orchestrator[Orchestrator Agent]\n  Orchestrator --> Sub1[Sub-agent: Țevărie]\n  Orchestrator --> Sub2[Sub-agent: Electrice]\n  Orchestrator --> Sub3[Sub-agent: Sanitare]\n  Sub1 & Sub2 & Sub3 --> SAP[(SAP catalog)]\n  SAP --> Validator\n  Validator --> Quote[Ofertă PDF]' },
    { type: 'h2', text: 'De ce LangGraph și nu un loop simplu' },
    { type: 'p', text: 'Primul prototip era un single-agent care făcea totul: citea email-ul, căuta produsele, calcula prețul. Funcționa pe demo-uri. Cădea pe cereri reale, unde un email avea 47 de produse din 8 categorii diferite.' },
    { type: 'p', text: 'LangGraph ne-a permis să modelăm explicit fluxul ca un graf de stare: fiecare nod e un sub-agent specialist, muchiile sunt condiționale (dacă produsul este țevărie, du-l la sub-agentul de țevărie). Avantajul real nu este performanța — este explainability. Putem vedea exact ce decizie a luat sistemul, în ce nod, cu ce input.' },
    { type: 'quote', text: 'Decizia să folosim LangGraph + LangSmith ne-a redus timpul de debug cu 80%. Pe un sistem cu agenți, fără logging structurat ești orb.', author: 'Echipa de inginerie' },
    { type: 'h2', text: 'Probleme de care nu am vorbit pe demo' },
    { type: 'list', items: [
      'Costurile de inferență Gemini 2.5 Pro pe OCR-ul de pdf-uri scanate (rezolvat: clasificare prealabilă cu Flash, doar cele complexe trec prin Pro).',
      'Hallucination la coduri SAP care nu există — modelul "inventa" coduri plauzibile. Rezolvat cu validare strictă post-generare.',
      'Mapping-ul produselor cu sinonime regionale (un "cot" în Cluj nu e același "cot" în Constanța).',
    ]},
    { type: 'h2', text: 'Rezultate' },
    { type: 'p', text: 'În producție de 4 luni: 89% din cereri procesate complet automat, 11% rutate către oamenii din echipă pentru clarificări. Timpul mediu pe cerere a scăzut de la 47 de minute la 4 minute. Acuratețea pe coduri SAP: 98.6%.' },
    { type: 'callout', text: 'Vrei un agentic framework similar pentru fluxul tău? Discută cu noi — facem un audit de fezabilitate gratuit.' },
  ],
};

window.getArticleBody = function(article) {
  return BODIES[article.slug] || FALLBACK_BODY(article);
};
