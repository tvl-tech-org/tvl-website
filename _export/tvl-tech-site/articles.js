// articles.js — shared article catalog for blog index + single article page
window.TVL_ARTICLES = [
  {
    slug: 'computer-vision-productie',
    title: 'De ce computer vision-ul nu rezolvă singur problemele de producție',
    excerpt: 'Modelele performante sunt doar 20% din proiect. Restul e infrastructură, etichetare, edge cases și buy-in-ul oamenilor de pe linia de producție.',
    category: 'AI & ML',
    author: 'Valentin Bica',
    role: 'CTO',
    date: '2026-04-12',
    readTime: 9,
    featured: true,
    tags: ['Computer Vision', 'MLOps', 'Producție'],
  },
  {
    slug: 'smart-contracts-productie',
    title: 'Smart contracts în producție: 5 lecții după 2 ani live',
    excerpt: 'Despre upgradabilitate, costuri ascunse de gas, audituri care n-au prins ce trebuia, și de ce contul EOA al CEO-ului nu trebuie să fie owner.',
    category: 'Blockchain',
    author: 'Alexandru Dan',
    role: 'CEO',
    date: '2026-03-28',
    readTime: 12,
    tags: ['Solidity', 'Smart Contracts', 'EVM'],
  },
  {
    slug: 'erp-excel-la-sistem-real',
    title: 'Cum migrăm un ERP scris în Excel către un sistem real',
    excerpt: 'Un ghid pragmatic pentru companii care au crescut peste foile de calcul: ce extragi prima dată, cum eviți big bang-ul, și de ce trebuie să păstrezi Excel-ul încă 6 luni.',
    category: 'Software Custom',
    author: 'Liviu Marin',
    role: 'COO',
    date: '2026-03-14',
    readTime: 11,
    tags: ['ERP', 'Migrare', 'Excel'],
  },
  {
    slug: 'agentic-framework-cotare',
    title: 'Agentic framework pentru cotare automată: cum am scalat la mii de cereri pe zi',
    excerpt: 'Studiu de caz: un orchestrator AI care primește cereri de ofertă pe email, le extrage cu OCR, le clasifică și alocă coduri SAP — fără om în mijloc.',
    category: 'Case Study',
    author: 'Valentin Bica',
    role: 'CTO',
    date: '2026-02-26',
    readTime: 14,
    featured: true,
    tags: ['LangGraph', 'Gemini', 'OCR', 'Case Study'],
  },
  {
    slug: 'rag-vs-fine-tuning',
    title: 'RAG vs fine-tuning: cum alegi pentru cazul tău de business',
    excerpt: 'O matrice de decizie pe trei axe: cât de des se schimbă datele, cât de mult trebuie să "învețe" modelul stilul tău, și cât poți permite să cheltuiești pe inferență.',
    category: 'AI & ML',
    author: 'Valentin Bica',
    role: 'CTO',
    date: '2026-02-08',
    readTime: 8,
    tags: ['RAG', 'LLM', 'Architecture'],
  },
  {
    slug: 'ebsi-identitate-europeana',
    title: 'EBSI și identitatea digitală europeană: ce înseamnă pentru aplicațiile tale',
    excerpt: 'Verifiable Credentials, DID-uri și portofelul digital european schimbă cum gestionezi identitatea utilizatorilor. O privire tehnică asupra direcției.',
    category: 'Blockchain',
    author: 'Alexandru Dan',
    role: 'CEO',
    date: '2026-01-22',
    readTime: 10,
    tags: ['EBSI', 'Identity', 'EU'],
  },
  {
    slug: 'data-lake-google-cloud',
    title: 'Construiești un data lake în Google Cloud? Începe cu astea trei',
    excerpt: 'BigQuery, Pub/Sub și Dataflow par evidente. Mai puțin evidente sunt costurile de slot reservation, naming-ul partitions-urilor, și cine deține schema.',
    category: 'Tehnologie',
    author: 'Liviu Marin',
    role: 'COO',
    date: '2026-01-09',
    readTime: 7,
    tags: ['GCP', 'BigQuery', 'Data Engineering'],
  },
  {
    slug: 'function-calling-saas',
    title: 'Function calling în SaaS: cum facem un chatbot să acționeze, nu doar să răspundă',
    excerpt: 'Studiu pe BrainActive: cum integrăm GPT-4 cu Function Calling pentru ca asistentul AI să creeze chestionare reale în backend, nu doar să descrie cum ar arăta.',
    category: 'Case Study',
    author: 'Valentin Bica',
    role: 'CTO',
    date: '2025-12-18',
    readTime: 9,
    tags: ['OpenAI', 'Function Calling', 'SaaS'],
  },
  {
    slug: 'echipa-eMAG-la-tvl',
    title: 'De la eMAG la TVL: ce am luat cu noi când am construit propria echipă',
    excerpt: 'Trei lucruri pe care le-am păstrat și două pe care le-am lăsat în urmă. Despre tempo, ownership, și de ce procesele bune sunt invizibile.',
    category: 'Software Custom',
    author: 'Alexandru Dan',
    role: 'CEO',
    date: '2025-12-04',
    readTime: 6,
    tags: ['Echipă', 'Cultură', 'Leadership'],
  },
];

window.TVL_CATEGORIES = ['Toate', 'AI & ML', 'Blockchain', 'Software Custom', 'Case Study', 'Tehnologie'];

// Helper: format date by language
window.fmtDate = function(iso, lang) {
  const L = lang || (window.i18n && window.i18n.getLang && window.i18n.getLang()) || 'ro';
  const months = L === 'en'
    ? ['January','February','March','April','May','June','July','August','September','October','November','December']
    : ['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'];
  const d = new Date(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};
