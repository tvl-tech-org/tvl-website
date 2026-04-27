// i18n.js — RO/EN translation dictionary + global state
(function () {
  const DICT = {
    ro: {
      // Header
      'nav.servicii': 'Servicii',
      'nav.proiecte': 'Proiecte',
      'nav.despre': 'Despre',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',
      'nav.cta': 'Începe un proiect',

      // Hero
      'hero.kicker': 'Software custom · AI · Blockchain',
      'hero.subtitle': 'TVL Tech este un studio de software ce lucrează la granița între AI, blockchain și sisteme distribuite. Nu livrăm template-uri — construim sistemul de care afacerea ta chiar are nevoie.',
      'hero.cta_primary': 'Spune-ne problema ta',
      'hero.cta_secondary': 'Vezi proiectele noastre',
      'hero.tagline_motto': 'S E E   T H E   U N S E E N',
      'hero.est': 'EST. 2018 · BUCUREȘTI',

      // Hero taglines
      'tag.cear-functiona.l1': 'Ce-ar fi',
      'tag.cear-functiona.l2': 'dacă ar',
      'tag.cear-functiona.l3': '[orange]funcționa?[/orange]',
      'tag.cear-existat.l1': 'Ce-ar fi',
      'tag.cear-existat.l2': 'dacă ar',
      'tag.cear-existat.l3': '[orange]exista deja?[/orange]',
      'tag.cear-simplu.l1': 'Ce-ar fi',
      'tag.cear-simplu.l2': 'dacă ar fi',
      'tag.cear-simplu.l3': '[orange]simplu?[/orange]',
      'tag.cear-automat.l1': 'Ce-ar fi',
      'tag.cear-automat.l2': 'dacă s-ar',
      'tag.cear-automat.l3': '[orange]face singur?[/orange]',
      'tag.cear-vorbit.l1': 'Ce-ar fi',
      'tag.cear-vorbit.l2': 'dacă datele',
      'tag.cear-vorbit.l3': '[orange]ar vorbi?[/orange]',
      'tag.cear-incepe.l1': 'Ce-ar fi',
      'tag.cear-incepe.l2': 'dacă am',
      'tag.cear-incepe.l3': '[orange]începe astăzi?[/orange]',
      'tag.cear-altfel.l1': 'Ce-ar fi',
      'tag.cear-altfel.l2': 'dacă ar fi',
      'tag.cear-altfel.l3': '[orange]altfel?[/orange]',
      'tag.cear-ajuta.l1': 'Ce-ar fi dacă',
      'tag.cear-ajuta.l2': 'software-ul te-ar',
      'tag.cear-ajuta.l3': '[orange]ajuta, nu încurca?[/orange]',

      // ProblemSolution
      'ps.kicker': 'Ce facem',
      'ps.title.a': 'Fiecare produs',
      'ps.title.b': 'începe cu o',
      'ps.title.c': 'problemă.',
      'ps.problema': 'Problema',
      'ps.solutia': 'Cum o rezolvăm',

      // ProblemSolution rows
      'ps.r1.problem': 'Ai date pe care nimeni nu le poate citi.',
      'ps.r1.solution': 'Programe care înțeleg ce văd',
      'ps.r1.detail': 'Învățăm computerul să citească documente, imagini, fluxuri video și senzori. Datele pe care le aveai dar nu le foloseai devin decizii pe care le poți lua.',
      'ps.r2.problem': 'Operațiunea ta merge pe Excel-uri.',
      'ps.r2.solution': 'Software pe măsură',
      'ps.r2.detail': 'Construim aplicația de care ai nevoie, exact pentru cum lucrează compania ta. Fără să te înghesuim în programe gata făcute care aproape se potrivesc.',
      'ps.r3.problem': 'Ai nevoie de încredere fără un intermediar.',
      'ps.r3.solution': 'Încredere fără hârtii',
      'ps.r3.detail': 'Tranzacții și înțelegeri care se verifică singure, fără ca cineva să trebuiască să confirme manual. Ca un notar digital care lucrează 24/7 și pe care toată lumea îl poate verifica.',
      'ps.r4.problem': 'Echipa ta procesează manual ce ar putea face un agent.',
      'ps.r4.solution': 'Asistenți AI care fac treaba',
      'ps.r4.detail': 'Programe AI care primesc o sarcină complicată și o rezolvă singure — citesc, gândesc, decid. Am construit unul care procesează zilnic mii de cereri pe care înainte le făceau oameni.',
      'ps.r5.problem': 'Nu mai poți integra nimic nou — totul depinde de tot.',
      'ps.r5.solution': 'Reparăm sisteme care nu mai țin pasul',
      'ps.r5.detail': 'Curățăm sistemele vechi care s-au împletit între ele și nu mai pot fi schimbate. Pas cu pas, fără să oprim ce funcționează. La final, sistemul tău începe din nou să respire.',
      'ps.r6.problem': 'Ai 5 sisteme care nu comunică între ele.',
      'ps.r6.solution': 'Programe care se conectează',
      'ps.r6.detail': 'Facem ca SAP-ul, magazinul online, CRM-ul și restul programelor tale să schimbe date între ele automat. Fără ca cineva să mai exporte și să copieze totul în Excel la finalul zilei.',
      'ps.r7.problem': 'Ai cumpărat un SaaS și acum nimeni nu știe să-l configureze.',
      'ps.r7.solution': 'Punem programele să funcționeze cu adevărat',
      'ps.r7.detail': 'Ai cumpărat un program — Salesforce, Microsoft 365, HubSpot — și echipa ta nu îl folosește? Îl configurăm să se potrivească pe cum lucrați și învățăm oamenii să-l folosească zilnic.',
      'ps.r8.problem': 'O lege se schimbă mâine și tu ar trebui să fii deja conform.',
      'ps.r8.solution': 'Conform de la primul cod scris',
      'ps.r8.detail': 'Reguli noi (GDPR, NIS2, eIDAS) nu mai sunt o surpriză la audit — le construim în sistem din prima zi. Avem experiență la nivel european cu proiectul EBSI.',

      // Projects
      'pr.kicker': 'Proiecte',
      'pr.title.a': 'Probleme reale.',
      'pr.title.b': 'Soluții livrate.',
      'pr.subtitle': 'Cinci proiecte din portofoliul nostru — de la infrastructură blockchain europeană la agenți AI care procesează mii de cereri de ofertă pe zi. Fiecare a pornit de la o problemă concretă pe care nimeni nu o rezolvase încă.',
      'pr.problema': 'Problema',
      'pr.solutia': 'Soluția noastră',

      'pr.p1.sector': 'Fintech · Public Sector',
      'pr.p1.title': 'Platformă inteligentă pentru fonduri structurale',
      'pr.p1.problem': 'Antreprenorii și consultanții pierd săptămâni căutând prin ghiduri de finanțare PDF de sute de pagini ca să vadă dacă se califică pentru un program.',
      'pr.p1.solution': 'Platformă AI cu două componente: un back-office care procesează automat ghidurile prin OCR + LLM și extrage criteriile de eligibilitate, și un chatbot conversațional care recomandă programele potrivite în funcție de domeniu și regiune.',

      'pr.p2.sector': 'SaaS · Market Research',
      'pr.p2.title': 'BrainActive — cercetare de piață reinventată cu AI',
      'pr.p2.problem': 'Studiile de piață durează săptămâni: brief, scriere chestionar, distribuție, colectare date. Un proces în care fiecare pas e bottleneck.',
      'pr.p2.solution': 'SaaS cu un asistent AI ("Brainy") care primește brief-ul, generează automat chestionarul optimizat pentru obiectivele studiului, și-l distribuie global către respondenți reali. Construit în Node.js + Next.js, integrat cu GPT-4 prin Azure și Function Calling pentru sincronizare în timp real.',

      'pr.p3.sector': 'Enterprise · Cloud',
      'pr.p3.title': 'Platformă cloud pentru distribuție de licențe software',
      'pr.p3.problem': 'Distribuitorii de software gestionează portofolii de licențe Microsoft, Bitdefender și alți parteneri prin Excel-uri și sisteme manuale care nu scalează.',
      'pr.p3.solution': 'Platformă cloud completă pentru gestionarea distribuției și revânzării de licențe. Arhitectură pregătită pentru integrare AI — recomandare de portofoliu, forecast de cerere, automatizare achiziții.',

      'pr.p4.sector': 'Blockchain · Public Sector EU',
      'pr.p4.title': 'EBSI — infrastructura blockchain europeană',
      'pr.p4.problem': 'Serviciile publice digitale între statele UE nu pot face schimb securizat de documente, identități și credențiale fără un strat comun de încredere.',
      'pr.p4.solution': 'Contribuție la EBSI (European Blockchain Services Infrastructure) — infrastructură blockchain distribuită la nivel european, smart contracts pentru automatizarea proceselor administrative între instituții și sistemul de portofel digital + identitate europeană.',

      'pr.p5.sector': 'Retail · Data & AI',
      'pr.p5.title': 'Transformare digitală cu AI și Data Lake',
      'pr.p5.problem': 'Un distribuitor național gestiona zilnic mii de cereri de ofertă pe email, cu produse nestructurate care trebuiau alocate manual la coduri SAP — proces lent, plin de erori și imposibil de scalat.',
      'pr.p5.solution': 'Aplicație de cotare cu Agentic Framework și OCR (Gemini 2.5 Pro). Un orchestrator inteligent distribuie produsele către sub-agenți AI specializați care alocă codurile SAP după regulile de business. În paralel, un Data Lake în Google Cloud, alimentat din SAP, Oracle APEX, TMS și e-commerce, oferă context pentru toți agenții AI.',

      // AntiPromises
      'ap.kicker': 'Cum lucrăm diferit',
      'ap.title.a': 'Ce',
      'ap.title.b': 'nu',
      'ap.title.c': 'facem.',
      'ap.subtitle': 'Toată lumea îți spune ce face. Noi îți spunem ce nu — pentru că de aici începe diferența între un partener și un furnizor.',

      'ap.r1.headline': 'Nu vindem AI dacă nu e răspunsul.',
      'ap.r1.detail': 'Jumătate din proiectele cu care ne contactează clienții nu au nevoie de AI. Le spunem. Construim ce trebuie, nu ce sună bine la board.',
      'ap.r2.headline': 'Nu facem outsourcing ascuns.',
      'ap.r2.detail': 'Echipa pe care o vezi la kickoff e echipa care livrează. Fără freelanceri necunoscuți, fără sub-contractori în alt fus orar care apar pe Slack.',
      'ap.r3.headline': 'Nu construim sisteme pe care doar noi le putem atinge.',
      'ap.r3.detail': 'Repository, infrastructură, credențiale — totul pe numele tău, din ziua unu. Cod documentat, decizii explicate, oricine din echipa ta poate prelua. Dacă mâine mergem mai departe fiecare pe drumul lui, sistemul rămâne în picioare.',
      'ap.r4.headline': 'Nu livrăm PoC-uri care mor.',
      'ap.r4.detail': 'Dacă pornim un demo, pornim cu producția în minte. Nu construim impresie pentru un singur meeting — construim sisteme care încă rulează peste trei ani.',
      'ap.r5.headline': 'Nu vorbim în acronime.',
      'ap.r5.detail': 'Dacă-ți zicem ceva, înțelegi. CTO sau om de marketing — primești același nivel de claritate. Nu folosim jargon tehnic ca să justificăm ora facturată.',

      // Process
      'proc.kicker': 'Cum lucrăm',
      'proc.title.a': 'De la prototip la',
      'proc.title.b': 'producție',
      'proc.title.c': '. În iterații scurte.',
      'proc.s1.title': 'Ascultăm',
      'proc.s1.body': 'Două săptămâni de discovery. Cartografiem operațiunea ta, identificăm bottleneck-ul și scriem briefingul împreună.',
      'proc.s2.title': 'Construim',
      'proc.s2.body': 'O echipă multidisciplinară — ingineri, designeri, ML scientists — livrează în iterații scurte pe care le poți vedea și folosi imediat.',
      'proc.s3.title': 'Livrăm',
      'proc.s3.body': 'Îți predăm sistemul, documentația și echipa care l-a construit. Sau rămânem alături. Tu decizi.',

      // Testimonials
      'tm.kicker': 'Ce spun clienții noștri',
      'tm.title.a': 'Lăsăm proiectele',
      'tm.title.b': 'să',
      'tm.title.c': 'vorbească.',
      'tm.q1.quote': 'TVL ne-a reconstruit pipeline-ul de detecție a defectelor în opt săptămâni. Rata de rebut a scăzut cu o treime în prima lună.',
      'tm.q1.role': 'Director Operațiuni',
      'tm.q2.quote': 'Nu ne-au vândut un buzzword. Au pus întrebări două săptămâni, apoi au livrat exact ce aveam nevoie.',
      'tm.q2.role': 'CTO',
      'tm.q3.quote': 'Doar auditul de smart contract a justificat colaborarea. Platforma de deasupra rulează de doi ani fără un singur incident critic.',
      'tm.q3.role': 'Fondator',
      'tm.q4.quote': 'O echipă care se comportă ca parte din echipa noastră, nu ca un furnizor. Combinație rară.',
      'tm.q4.role': 'Head of Product',

      // Blog
      'blog.kicker': 'Articole recente',
      'blog.title.a': 'Note din',
      'blog.title.b': 'atelier',
      'blog.title.c': '.',
      'blog.see_all': 'Vezi toate articolele →',
      'blog.read': 'Citește articolul →',
      'blog.read_time': 'min citire',

      // CTA
      'cta.kicker': 'Hai să-l construim',
      'cta.title.a': 'Spune-ne',
      'cta.title.b': 'problema ta.',
      'cta.subtitle': 'Un mesaj scurt. Răspundem într-o zi lucrătoare cu un apel de scoping de 30 de minute, gratuit.',
      'cta.btn': 'Începe un proiect',

      // Footer
      'ft.studio': 'Studio',
      'ft.cap': 'Capabilități',
      'ft.contact': 'Contact',
      'ft.email': 'Email',
      'ft.phone': 'Telefon',
      'ft.office': 'Birou',
      'ft.about': 'Studio de software ce construiește sisteme AI, blockchain și imersive pentru companii care au nevoie de mai mult decât soluții off-the-shelf.',
      'ft.copyright': '© 2026 TVL Tech SRL · Toate drepturile rezervate',
      'ft.l.servicii': 'Servicii',
      'ft.l.proiecte': 'Proiecte',
      'ft.l.proces': 'Proces',
      'ft.l.cariere': 'Cariere',
      'ft.l.ai': 'AI & Vision',
      'ft.l.agentic': 'Agentic AI & Data',
      'ft.l.blockchain': 'Blockchain',
      'ft.l.custom': 'Software custom',
      'ft.address_line1': 'Strada Nerva Traian 27-33,',
      'ft.address_line2': 'București 031042, RO',

      // Modal
      'modal.kicker': 'Începe un proiect',
      'modal.title': 'Spune-ne problema ta.',
      'modal.f.name': 'Numele tău',
      'modal.f.name.ph': 'Alexandru Dan',
      'modal.f.email': 'Email',
      'modal.f.email.ph': 'alex@compania-ta.ro',
      'modal.f.brief': 'Ce încerci să rezolvi?',
      'modal.f.brief.ph': 'Câteva propoziții sunt suficiente.',
      'modal.f.submit': 'Trimite briefingul',
      'modal.done.title': 'Am primit.',
      'modal.done.body': 'Răspundem într-o zi lucrătoare, {name}.',
      'modal.done.greet': 'salut',
    },
    en: {
      // Header
      'nav.servicii': 'Services',
      'nav.proiecte': 'Projects',
      'nav.despre': 'About',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',
      'nav.cta': 'Start a project',

      // Hero
      'hero.kicker': 'Custom software · AI · Blockchain',
      'hero.subtitle': 'TVL Tech is a software studio working at the intersection of AI, blockchain and distributed systems. We don\u2019t deliver templates — we build the system your business actually needs.',
      'hero.cta_primary': 'Tell us your problem',
      'hero.cta_secondary': 'See our projects',
      'hero.tagline_motto': 'S E E   T H E   U N S E E N',
      'hero.est': 'EST. 2018 · BUCHAREST',

      'tag.cear-functiona.l1': 'What if',
      'tag.cear-functiona.l2': 'it actually',
      'tag.cear-functiona.l3': '[orange]worked?[/orange]',
      'tag.cear-existat.l1': 'What if',
      'tag.cear-existat.l2': 'it already',
      'tag.cear-existat.l3': '[orange]existed?[/orange]',
      'tag.cear-simplu.l1': 'What if',
      'tag.cear-simplu.l2': 'it were',
      'tag.cear-simplu.l3': '[orange]simple?[/orange]',
      'tag.cear-automat.l1': 'What if',
      'tag.cear-automat.l2': 'it ran',
      'tag.cear-automat.l3': '[orange]itself?[/orange]',
      'tag.cear-vorbit.l1': 'What if',
      'tag.cear-vorbit.l2': 'data could',
      'tag.cear-vorbit.l3': '[orange]talk back?[/orange]',
      'tag.cear-incepe.l1': 'What if',
      'tag.cear-incepe.l2': 'we started',
      'tag.cear-incepe.l3': '[orange]today?[/orange]',
      'tag.cear-altfel.l1': 'What if',
      'tag.cear-altfel.l2': 'it were',
      'tag.cear-altfel.l3': '[orange]different?[/orange]',
      'tag.cear-ajuta.l1': 'What if',
      'tag.cear-ajuta.l2': 'software',
      'tag.cear-ajuta.l3': '[orange]helped, not hurt?[/orange]',

      // ProblemSolution
      'ps.kicker': 'What we do',
      'ps.title.a': 'Every product',
      'ps.title.b': 'starts with a',
      'ps.title.c': 'problem.',
      'ps.problema': 'Problem',
      'ps.solutia': 'How we solve it',

      'ps.r1.problem': 'You have data nobody can read.',
      'ps.r1.solution': 'Programs that understand what they see',
      'ps.r1.detail': 'We teach computers to read documents, images, video streams and sensors. Data you had but didn\u2019t use becomes decisions you can make.',
      'ps.r2.problem': 'Your operations run on spreadsheets.',
      'ps.r2.solution': 'Custom-built software',
      'ps.r2.detail': 'We build the application you need, shaped for how your company actually works. No more squeezing into off-the-shelf software that almost fits.',
      'ps.r3.problem': 'You need trust without a middleman.',
      'ps.r3.solution': 'Trust without paperwork',
      'ps.r3.detail': 'Transactions and agreements that verify themselves, without anyone manually confirming. A digital notary working 24/7 that anyone can audit.',
      'ps.r4.problem': 'Your team manually processes what an agent could do.',
      'ps.r4.solution': 'AI assistants that get the job done',
      'ps.r4.detail': 'AI programs that take a complex task and solve it on their own — they read, think, decide. We built one that processes thousands of requests a day that people used to handle.',
      'ps.r5.problem': 'You can\u2019t integrate anything new — everything depends on everything.',
      'ps.r5.solution': 'We fix systems that can\u2019t keep up',
      'ps.r5.detail': 'We untangle legacy systems that grew into each other and can no longer be changed. Step by step, without stopping what works. Your system starts breathing again.',
      'ps.r6.problem': 'You have 5 systems that don\u2019t talk to each other.',
      'ps.r6.solution': 'Software that connects',
      'ps.r6.detail': 'We make SAP, your online store, your CRM and the rest of your tools exchange data automatically. No more exporting and copying everything into Excel at end of day.',
      'ps.r7.problem': 'You bought a SaaS and now nobody knows how to set it up.',
      'ps.r7.solution': 'We make software actually work',
      'ps.r7.detail': 'You bought a tool — Salesforce, Microsoft 365, HubSpot — and your team isn\u2019t using it? We configure it to fit how you work and train your people to use it daily.',
      'ps.r8.problem': 'A regulation changes tomorrow and you should already be compliant.',
      'ps.r8.solution': 'Compliant from the first line of code',
      'ps.r8.detail': 'New rules (GDPR, NIS2, eIDAS) stop being audit surprises — we build them into the system from day one. We have European-level experience with the EBSI project.',

      // Projects
      'pr.kicker': 'Projects',
      'pr.title.a': 'Real problems.',
      'pr.title.b': 'Delivered solutions.',
      'pr.subtitle': 'Five projects from our portfolio — from European blockchain infrastructure to AI agents processing thousands of quote requests a day. Each one started from a concrete problem nobody had solved yet.',
      'pr.problema': 'Problem',
      'pr.solutia': 'Our solution',

      'pr.p1.sector': 'Fintech · Public Sector',
      'pr.p1.title': 'Smart platform for EU structural funds',
      'pr.p1.problem': 'Founders and consultants spend weeks searching through hundred-page funding guides to see if they qualify for a program.',
      'pr.p1.solution': 'AI platform with two components: a back-office that automatically processes guides via OCR + LLM and extracts eligibility criteria, and a conversational chatbot that recommends matching programs by industry and region.',

      'pr.p2.sector': 'SaaS · Market Research',
      'pr.p2.title': 'BrainActive — market research reinvented with AI',
      'pr.p2.problem': 'Market studies take weeks: brief, questionnaire writing, distribution, data collection. A process where every step is a bottleneck.',
      'pr.p2.solution': 'SaaS with an AI assistant ("Brainy") that takes the brief, automatically generates a questionnaire optimized for the study\u2019s goals, and distributes it globally to real respondents. Built in Node.js + Next.js, integrated with GPT-4 via Azure and Function Calling for real-time sync.',

      'pr.p3.sector': 'Enterprise · Cloud',
      'pr.p3.title': 'Cloud platform for software license distribution',
      'pr.p3.problem': 'Software distributors manage Microsoft, Bitdefender and other partner license portfolios through spreadsheets and manual systems that don\u2019t scale.',
      'pr.p3.solution': 'Full cloud platform for license distribution and resale management. Architecture ready for AI integration — portfolio recommendation, demand forecasting, procurement automation.',

      'pr.p4.sector': 'Blockchain · Public Sector EU',
      'pr.p4.title': 'EBSI — European blockchain infrastructure',
      'pr.p4.problem': 'Digital public services between EU member states cannot securely exchange documents, identities and credentials without a shared trust layer.',
      'pr.p4.solution': 'Contribution to EBSI (European Blockchain Services Infrastructure) — distributed blockchain infrastructure at the European level, smart contracts for automating administrative processes between institutions, and the European digital wallet + identity system.',

      'pr.p5.sector': 'Retail · Data & AI',
      'pr.p5.title': 'Digital transformation with AI and Data Lake',
      'pr.p5.problem': 'A national distributor handled thousands of email quote requests a day, with unstructured products that had to be manually mapped to SAP codes — slow, error-prone, impossible to scale.',
      'pr.p5.solution': 'Quoting application with an Agentic Framework and OCR (Gemini 2.5 Pro). A smart orchestrator distributes products to specialized AI sub-agents that assign SAP codes by business rules. In parallel, a Data Lake on Google Cloud, fed from SAP, Oracle APEX, TMS and e-commerce, provides context for all AI agents.',

      // AntiPromises
      'ap.kicker': 'How we work differently',
      'ap.title.a': 'What we',
      'ap.title.b': 'don\u2019t',
      'ap.title.c': 'do.',
      'ap.subtitle': 'Everyone tells you what they do. We tell you what we don\u2019t — because that\u2019s where the difference between a partner and a vendor begins.',

      'ap.r1.headline': 'We don\u2019t sell AI when it\u2019s not the answer.',
      'ap.r1.detail': 'Half the projects that come our way don\u2019t need AI. We say so. We build what works, not what sounds good in the boardroom.',
      'ap.r2.headline': 'We don\u2019t hide outsourcing.',
      'ap.r2.detail': 'The team you meet at kickoff is the team that ships. No anonymous freelancers, no sub-contractors in another timezone showing up on Slack.',
      'ap.r3.headline': 'We don\u2019t build systems only we can touch.',
      'ap.r3.detail': 'Repository, infrastructure, credentials — all in your name from day one. Documented code, explained decisions, anyone on your team can take over. If we part ways tomorrow, the system keeps running.',
      'ap.r4.headline': 'We don\u2019t deliver PoCs that die.',
      'ap.r4.detail': 'If we start a demo, we start with production in mind. We don\u2019t build impressions for a single meeting — we build systems still running three years later.',
      'ap.r5.headline': 'We don\u2019t speak in acronyms.',
      'ap.r5.detail': 'If we say something, you understand it. CTO or marketing lead — you get the same clarity. We don\u2019t use technical jargon to justify the billable hour.',

      // Process
      'proc.kicker': 'How we work',
      'proc.title.a': 'From prototype to',
      'proc.title.b': 'production',
      'proc.title.c': '. In short iterations.',
      'proc.s1.title': 'We listen',
      'proc.s1.body': 'Two weeks of discovery. We map your operations, identify the bottleneck and write the brief together.',
      'proc.s2.title': 'We build',
      'proc.s2.body': 'A multidisciplinary team — engineers, designers, ML scientists — ships in short iterations you can see and use immediately.',
      'proc.s3.title': 'We hand off',
      'proc.s3.body': 'We hand over the system, the documentation and the team that built it. Or we stay on. You decide.',

      // Testimonials
      'tm.kicker': 'What our clients say',
      'tm.title.a': 'We let the projects',
      'tm.title.b': '',
      'tm.title.c': 'speak.',
      'tm.q1.quote': 'TVL rebuilt our defect-detection pipeline in eight weeks. Scrap rate dropped by a third in the first month.',
      'tm.q1.role': 'Operations Director',
      'tm.q2.quote': 'They didn\u2019t sell us a buzzword. They asked questions for two weeks, then delivered exactly what we needed.',
      'tm.q2.role': 'CTO',
      'tm.q3.quote': 'The smart-contract audit alone justified the engagement. The platform on top has been running for two years without a single critical incident.',
      'tm.q3.role': 'Founder',
      'tm.q4.quote': 'A team that behaves like part of our team, not like a vendor. Rare combination.',
      'tm.q4.role': 'Head of Product',

      // Blog
      'blog.kicker': 'Recent articles',
      'blog.title.a': 'Notes from',
      'blog.title.b': 'the workshop',
      'blog.title.c': '.',
      'blog.see_all': 'See all articles →',
      'blog.read': 'Read article →',
      'blog.read_time': 'min read',

      // CTA
      'cta.kicker': 'Let\u2019s build it',
      'cta.title.a': 'Tell us',
      'cta.title.b': 'your problem.',
      'cta.subtitle': 'A short message. We reply within one business day with a free 30-minute scoping call.',
      'cta.btn': 'Start a project',

      // Footer
      'ft.studio': 'Studio',
      'ft.cap': 'Capabilities',
      'ft.contact': 'Contact',
      'ft.email': 'Email',
      'ft.phone': 'Phone',
      'ft.office': 'Office',
      'ft.about': 'A software studio building AI, blockchain and immersive systems for companies that need more than off-the-shelf solutions.',
      'ft.copyright': '© 2026 TVL Tech SRL · All rights reserved',
      'ft.l.servicii': 'Services',
      'ft.l.proiecte': 'Projects',
      'ft.l.proces': 'Process',
      'ft.l.cariere': 'Careers',
      'ft.l.ai': 'AI & Vision',
      'ft.l.agentic': 'Agentic AI & Data',
      'ft.l.blockchain': 'Blockchain',
      'ft.l.custom': 'Custom software',
      'ft.address_line1': '27-33 Nerva Traian Street,',
      'ft.address_line2': 'Bucharest 031042, RO',

      // Modal
      'modal.kicker': 'Start a project',
      'modal.title': 'Tell us your problem.',
      'modal.f.name': 'Your name',
      'modal.f.name.ph': 'Alex Dan',
      'modal.f.email': 'Email',
      'modal.f.email.ph': 'alex@your-company.com',
      'modal.f.brief': 'What are you trying to solve?',
      'modal.f.brief.ph': 'A few sentences are enough.',
      'modal.f.submit': 'Send the brief',
      'modal.done.title': 'Got it.',
      'modal.done.body': 'We\u2019ll reply within one business day, {name}.',
      'modal.done.greet': 'there',
    },
  };

  const STORAGE_KEY = 'tvl_lang';
  let listeners = [];

  function getLang() {
    try { return localStorage.getItem(STORAGE_KEY) || 'ro'; } catch (e) { return 'ro'; }
  }
  function setLang(l) {
    try { localStorage.setItem(STORAGE_KEY, l); } catch (e) {}
    listeners.forEach(fn => fn(l));
    document.documentElement.setAttribute('lang', l);
  }
  function t(key, vars) {
    const lang = getLang();
    let s = (DICT[lang] && key in DICT[lang]) ? DICT[lang][key] : (key in DICT.ro ? DICT.ro[key] : key);
    if (vars) Object.keys(vars).forEach(k => { s = s.replace('{' + k + '}', vars[k]); });
    return s;
  }
  function useLang() {
    const [lang, setLangState] = React.useState(getLang());
    React.useEffect(() => {
      const fn = (l) => setLangState(l);
      listeners.push(fn);
      return () => { listeners = listeners.filter(x => x !== fn); };
    }, []);
    return [lang, setLang];
  }
  // Set initial html lang
  document.documentElement.setAttribute('lang', getLang());

  window.i18n = { t, getLang, setLang, useLang };
})();
