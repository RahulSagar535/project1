export const ASSET_BASE = "https://leftcoast.refractweb.com";

export function asset(path: string) {
  if (path.startsWith("http")) return path;
  return `${ASSET_BASE}${path}`;
}

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/consulting", label: "Consulting" },
];

export const brand = {
  logoBlack: "/logos/trettau_logo_black.png",
  logoWhite: "/logos/trettau_logo_white.png",
  icon: "/logos/trettau_logo_black.png",
  name: "Trettau Studio",
  email: "hello@trettaustudio.com",
};

export const stats = [
  {
    value: 1,
    prefix: "$",
    suffix: "B",
    label: "in Global Assets Directed",
    description:
      "Creative and fiduciary oversight across more than one billion dollars in capital expenditure, where brand ambition meets disciplined, high-value execution.",
  },
  {
    value: 200,
    suffix: "+",
    label: "Global Flagships Launched",
    description:
      "Market entry and creative rollouts across six continents, translating brand DNA into high-traffic retail environments that establish immediate authority in new markets.",
  },
  {
    value: 25,
    suffix: "+",
    label: "Prototype Concepts",
    description:
      "From market gap to physical prototype, defining the visual and operational DNA for new-to-market retail concepts built to last.",
  },
  {
    value: 3,
    label: "Michelin Stars Housed",
    description:
      "Designing the theatre of dining for demanding hospitality brands, where every aesthetic decision supports operational excellence and guest experience.",
  },
];

export const logoCloud = [
  { name: "Athleta", src: asset("/_next/static/media/atleta2.0ce21mahcakk_.svg") },
  { name: "Old Navy", src: asset("/_next/static/media/old-navy.12kf72sdno8gn.svg") },
  { name: "Louie", src: asset("/_next/static/media/louie.0x2487c0r_147.svg") },
  { name: "Gap", src: asset("/_next/static/media/gap.08_df.vmz2sk6.svg") },
  { name: "Banana Republic", src: asset("/_next/static/media/br.06i9l05t-9p98.svg") },
  {
    name: "San Francisco Giants",
    src: asset("/_next/static/media/san-francisco-giants.0~8oye_qzkero.svg"),
  },
  {
    name: "Client logo",
    src: asset("/_next/static/media/Group%201000004036.17.6xso0ulkev.svg"),
  },
  {
    name: "Client logo",
    src: asset("/_next/static/media/Group%201000004042.023kn0gj1v-2f.svg"),
  },
  {
    name: "Jos A Bank",
    src: asset("/_next/static/media/Jos_A_Bank%201.09649m86cjy1g.svg"),
  },
  {
    name: "Client logo",
    src: asset("/_next/static/media/Group%201000004033.10y3gy2xucahb.svg"),
  },
];

export const homeHero = [
  {
    title: "Gap Flagship",
    location: "Times Square, NY",
    href: "/works/gap-times-square",
    image: asset("/_next/static/media/gap.15gf8jw.aaw0i.webp"),
  },
  {
    title: "La Connessa",
    location: "San Francisco, CA",
    href: "/works/la-connessa",
    image: asset("/_next/static/media/1.08qrums6y4wbk.webp"),
  },
  {
    title: "Banana Republic",
    location: "Milan, Italy",
    href: "/works/banana-republic-milan",
    image: asset("/_next/static/media/2.0~h_fkt0m7lt3.webp"),
  },
  {
    title: "Selby's",
    location: "Redwood City, CA",
    href: "/works/selbys",
    image: asset("/_next/static/media/3.0mpuqk2fqz7zo.webp"),
  },
  {
    title: "Gap",
    location: "Milan, Italy",
    href: "/works/gap-flagship-rome",
    image: asset("/_next/static/media/4.03ty91g98-_ai.webp"),
  },
  {
    title: "Louie's",
    location: "San Francisco, CA",
    href: "/works/louies-original",
    image: asset("/_next/static/media/5.0lhun7wpqio7g.webp"),
  },
  {
    title: "Banana Republic",
    location: "Milan, Italy",
    href: "/works/banana-republic-milan",
    image: asset("/_next/static/media/6.11hth112~x7jn.webp"),
  },
  {
    title: "Old Navy",
    location: "Times Square, NY",
    href: "/works/old-navy-times-square",
    image: asset("/_next/static/media/7.0gmcp83g93z-s.webp"),
  },
  {
    title: "See's Candies",
    location: "Sacramento, CA",
    href: "/works",
    image: asset("/_next/static/media/8.0b39ud2hv7p8t.webp"),
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  type: "Hospitality" | "Retail";
  location: string;
  shortLocation: string;
  year: string;
  scale: string;
  overview: string;
  collaborators: string;
  outcome: string;
  featureCaption: string;
  featureText: string;
  image: string;
  gallery: { alt: string; src: string }[];
};

export const projects: Project[] = [
  {
    slug: "selbys",
    title: "Selby's",
    client: "Bacchus Management Group",
    type: "Hospitality",
    location: "Redwood City, California, United States",
    shortLocation: "Redwood City, California, United States",
    year: "2019",
    scale: "8,000 sq ft",
    overview:
      "Evoking 1930s Hollywood glamour, Selby's is a masterclass in mood. This 8,000-square-foot tuxedo-inspired retreat is sharp, tailored, and unapologetically prestigious.",
    collaborators:
      "Bacchus Management Group, SBB Design, Steven Hall Architect Inc., Greenwood Advisory, Rose Gold Society, Alpha Design Studio, OMR Commercial Seating and Hospitality Inc.",
    outcome:
      "The restaurant's spine is a dramatic, sweeping grand staircase that connects the intimate, low-lit lounge to the more expansive dining levels.",
    featureCaption: "Selby's View From Dining Into Bar",
    featureText:
      "A multi-level fine dining destination on the Peninsula, designed to feel like a private residence rather than a restaurant. Obsidian lacquer, cognac leather, mohair, and a curated gallery of over 100 vintage pieces give the space permanence.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/bcb1205ac4e564b1d5fe2861a9d6c2c755daf22d-2098x1404.webp?rect=0,178,2098,1049&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Selby's View From Dining Into Bar",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/144893fe5af668c06f753d589f41b7ff590379aa-1400x933.jpg?w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "Selby's Dining Area",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/39034c7f17b979b1f15e4c38cbfba197bbf30287-4544x3032.png?rect=0,70,4544,2892&w=2200&h=1400&fm=webp&fit=crop",
      },
      {
        alt: "Selby's Bar Area",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/0d8322021af2a4286808a9d3b28fceac9d6babaa-1400x933.jpg?rect=0,7,1400,920&w=1400&h=920&fm=webp&fit=crop",
      },
      {
        alt: "Bar at Selby's",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/456663f9c97dec254e330d18eb55acd5e4d75369-4548x3036.png?rect=0,24,4548,2989&w=1400&h=920&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "la-connessa",
    title: "La Connessa",
    client: "Bacchus Management Group",
    type: "Hospitality",
    location: "San Francisco, California, United States",
    shortLocation: "San Francisco, California, United States",
    year: "2023",
    scale: "5,000 sq ft",
    overview:
      "The name La Connessa means connected, and the design acts as a social bridge in San Francisco's Potrero Hill, blending Milanese cafe energy with contemporary San Francisco scale.",
    collaborators:
      "Bacchus Management Group, SBB Design, Steven Hall Architect Inc., Greenwood Advisory, Rose Gold Society, OMR Commercial Seating and Hospitality Inc.",
    outcome:
      "Named among San Francisco's most beautiful restaurants by the SF Chronicle and covered by Forbes and LUXE Interiors + Design. The L-shaped layout is anchored by a long faceted bar and arched back bar.",
    featureCaption: "La Connessa Dining Room",
    featureText:
      "The design challenge was scale: 20-foot ceilings that could have read cold. The solution was a stratified lighting plan, a dramatic L-shaped bar, and heritage materials that brought the room down to human scale.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/9597a56cddbff07f7d44c55a2f09e8f46b3fd075-1500x1000.webp?rect=0,125,1500,750&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "La Connessa Dining Room",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/7a903c96738138c3c2cfe09a0f5387a0d5c14f58-2560x1707.webp?w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "La Connessa Appetizer",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/c898006a077e3fc66a60c6198a6245b794754fb2-2500x1667.webp?rect=0,39,2500,1591&w=2200&h=1400&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "augustine",
    title: "Augustine",
    client: "Bacchus Management Group",
    type: "Hospitality",
    location: "San Jose, California, United States",
    shortLocation: "San Jose, California, United States",
    year: "2025",
    scale: "8,000 sq ft",
    overview:
      "Augustine was designed as a sophisticated refuge, a see-and-be-seen destination that feels like a permanent escape to the French Riviera.",
    collaborators:
      "Bacchus Management Group, SBB Design, Steven Hall Architect Inc., Greenwood Advisory, Rose Gold Society, Darkhorse Lightworks, OMR Commercial Seating and Hospitality Inc.",
    outcome:
      "The design prioritizes a resort-style experience, blurring the lines between the interior and a sprawling, verdant patio through layered lighting, walnut, French oak, and curated art.",
    featureCaption: "Augustine Bar",
    featureText:
      "Designed at Santana Row in San Jose, the wide, high-traffic footprint was solved through a central anchor bar, layered lighting, and a 25-foot facade setback that created a covered outdoor dining area.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/0f9fc305b110aec65a1727fbe52a9f3ea514d431-2520x1680.png?rect=0,210,2520,1260&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Augustine Bar",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/a16059b7b3b6c4ea11d558bc65f090a81c2bfb1b-716x716.webp?w=1400&h=1400&fm=webp&fit=crop",
      },
      {
        alt: "Augustine Dining Room",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/f6ddde0f974a0b2a3dced335ab3422f1659cefb3-2520x1680.webp?rect=0,38,2520,1604&w=2200&h=1400&fm=webp&fit=crop",
      },
      {
        alt: "Augustine Patio",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/fa8a90e2cc755f844a4517bfaba3cdc98716b6cb-2520x1680.png?rect=0,12,2520,1656&w=1400&h=920&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "magic-donuts",
    title: "Magic Donuts",
    client: "Bacchus Management Group",
    type: "Hospitality",
    location: "San Francisco, California, United States",
    shortLocation: "San Francisco, California, United States",
    year: "2023",
    scale: "1,000 sq ft",
    overview:
      "A high-impact destination that feels like a portal out of the everyday, pairing an industrial shell with iridescent tile, neon, and a playful candy-colored palette.",
    collaborators:
      "Bacchus Management Group, SBB Design, Steven Hall Architect Inc., Greenwood Advisory, Rose Gold Society, OMR Commercial Seating and Hospitality Inc.",
    outcome:
      "The centerpiece is a massive, light-filled service counter wrapped in textured mint-green paneling, using jewelry-box display logic to make the product the hero.",
    featureCaption: "Magic Donuts Stacked Donuts",
    featureText:
      "A concrete-and-glass transit corner becomes a distinct destination through iridescent texture, globe pendant lighting, and character-driven signage.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/5ae4c148b8beeadd4ceda949bd99e922fff29e27-2560x1707.png?rect=0,214,2560,1280&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Magic Donuts Stacked Donuts",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/7495bb3fb695063b703783d149c9a54bcdd3d92c-2500x3750.webp?rect=0,104,2500,3542&w=1200&h=1700&fm=webp&fit=crop",
      },
      {
        alt: "Magic Donuts Logo Signage",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/59a300cb8c4c25ad99c5c2814413e9c75d9f5a76-856x1020.png?rect=57,0,742,1020&w=1600&h=2200&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "louies-original",
    title: "Louie's Original",
    client: "Bacchus Management Group",
    type: "Hospitality",
    location: "San Francisco, California, United States",
    shortLocation: "San Francisco, California, United States",
    year: "2023",
    scale: "2,000 sq ft",
    overview:
      "A space that feels both established and contemporary, using reclaimed wood siding and deep-set leather booths to ground a high-energy, open-kitchen concept.",
    collaborators:
      "Bacchus Management Group, SBB Design, Steven Hall Architect Inc., Greenwood Advisory, Rose Gold Society, OMR Commercial Seating and Hospitality Inc.",
    outcome:
      "A massive wrap-around stainless steel bar creates a long cinematic horizon line and places culinary craft at the center of the guest experience.",
    featureCaption: "Louie's Burger",
    featureText:
      "A shotgun floor plan solved through linear architecture, material contrast, and branding treated as a structural element.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/881c5e13e214a12084dd0437931232098af0e490-2560x1707.webp?rect=0,214,2560,1280&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Louie's Burger",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/638dc4967b0159505311131664c0e61240d85c45-2500x1667.webp?w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "Louie's Original Storefront Signage",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/4d052f88bb91565f40b85d885ca32504e8b3dc71-800x1062.jpg?rect=14,0,772,1062&w=1600&h=2200&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "old-navy-times-square",
    title: "Old Navy Flagship - Times Square",
    client: "Gap Inc.",
    type: "Retail",
    location: "New York, NY, United States",
    shortLocation: "New York, NY, United States",
    year: "2018",
    scale: "31,000 sq ft",
    overview:
      "A multi-level immersive environment built to match the energy of Times Square while maintaining the brand's approachable, family-friendly soul.",
    collaborators: "Gap Inc.",
    outcome:
      "A dramatic escalator well with a custom multi-color LED light canopy draws guests through the floors and creates a signature architectural moment.",
    featureCaption: "Elevated Entrance Stage",
    featureText:
      "Part of a coordinated Gap Inc. flagship strategy that simultaneously opened Gap and Old Navy in the former Toys R Us space at Times Square.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/4d68837cfd6c85695cd4334d42bd1ea0c0043afa-3616x2034.png?rect=0,113,3616,1808&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Elevated Entrance Stage",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/5c27cac28d4e0a226b0da543104bc853d059e723-2000x1526.jpg?rect=0,97,2000,1333&w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "Escalators",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/7b3a4e619c8a42cbfe492c9b7e291acc1d124510-2000x1333.jpg?rect=0,31,2000,1273&w=2200&h=1400&fm=webp&fit=crop",
      },
      {
        alt: "Cashwrap",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/4f5494eaf59a3bd1e145c96d4672f694ba758d99-2000x1333.jpg?rect=0,10,2000,1314&w=1400&h=920&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "gap-times-square",
    title: "Gap Flagship - Times Square",
    client: "Gap Inc.",
    type: "Retail",
    location: "New York, NY, United States",
    shortLocation: "New York, NY, United States",
    year: "2018",
    scale: "31,000 sq ft",
    overview:
      "A calm architectural anchor in the most energetic intersection in the world, centered on a multi-story blue glass facade that glows from within.",
    collaborators: "Gap Inc.",
    outcome:
      "Inside, a white-box gallery feel, French oak flooring, gloss surfaces, digital displays, and a central escalator canyon create a cinematic journey.",
    featureCaption: "Times Square Logo Feature Shop",
    featureText:
      "Craig led global retail format design at VP level across both Times Square flagships, directing the creative strategy that established Gap Inc.'s largest retail presence.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/f4186ef5531c7d66e09b904dd645cdcc26fdc6a0-2140x1204.png?rect=0,67,2140,1070&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Times Square Logo Feature Shop",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/e51da74f60a684ec277d60ccaa554035e6353150-2000x1403.jpg?rect=0,36,2000,1333&w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "Ground Floor",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/3d034fddea812e4a003fdafd509fcfdc5fc91c3b-2000x1333.jpg?rect=0,31,2000,1273&w=2200&h=1400&fm=webp&fit=crop",
      },
      {
        alt: "Denim",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/5ec335997c11ffc97388daf875c8168379c659d1-2000x1333.jpg?rect=0,10,2000,1314&w=1400&h=920&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "athleta-flagship-san-francisco",
    title: "Athleta Flagship - Fillmore",
    client: "Gap Inc.",
    type: "Retail",
    location: "San Francisco, California, United States",
    shortLocation: "San Francisco, California, United States",
    year: "2011",
    scale: "5,000 sq ft",
    overview:
      "Athleta's San Francisco flagship embodies its mission of empowering women and girls through movement, merging performance design with California ease.",
    collaborators: "Gap Inc.",
    outcome:
      "A sculptural Movement Spine organizes zones of Run, Train, Yoga, Commute, and Recovery, translating the body in motion into retail navigation.",
    featureCaption: "Cashwrap",
    featureText:
      "The Fillmore flagship established Athleta's physical retail DNA in San Francisco and translated performance and wellness into a community-anchored store format.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/b3d6156736e6e093af08b6fba1802a0b9f4fec29-4320x3216.png?rect=0,528,4320,2160&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Cashwrap",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/db430bdf010d16b2228bde7bb7893920da38211d-1080x712.jpg?rect=6,0,1068,712&w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "Sales Floor",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/7563322b173307659ba2049fd97a4e684d85455d-1080x720.jpg?rect=0,17,1080,687&w=2200&h=1400&fm=webp&fit=crop",
      },
      {
        alt: "Display Window",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/35151acf0b2ee7b62eb76f3ce7d3fa8686f674ca-1080x708.jpg?rect=2,0,1077,708&w=1400&h=920&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "gap-flagship-ginza-tokyo",
    title: "Gap Flagship - Ginza",
    client: "Gap Inc.",
    type: "Retail",
    location: "Ginza, Tokyo, Japan",
    shortLocation: "Ginza, Tokyo, Japan",
    year: "2011",
    scale: "15,440 sq ft",
    overview:
      "A brand beacon at the Sukiyabashi crossroad in Ginza, using laminated blue glass and etched clear panels to create a glowing architectural statement.",
    collaborators: "Gap Inc.",
    outcome:
      "Deep-blue glowing escalators guide customers through four floors, bridging American heritage with Japanese precision through limestone, oak, and industrial steel.",
    featureCaption: "Ground Entrance",
    featureText:
      "Part of Gap Inc.'s global flagship strategy in 2011, translating the Gap brand into one of the world's most design-literate retail markets.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/388fd94ebfdb007eac04eec677227ce30a2bffc4-4342x2442.png?rect=0,136,4342,2171&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Ground Entrance",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/02fc8c9cf007edd32a23c06805b5bc3bcdb061f5-3200x1936.png?rect=148,0,2904,1936&w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "Storefront",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/ec0cdd9ac572598500fb41e797964cf001832b17-640x858.jpg?rect=0,29,640,800&w=1200&h=1500&fm=webp&fit=crop",
      },
      {
        alt: "Mens Denim",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/58bea89f9bbce934c0c8cddbd8008e6651e1f9d4-800x534.jpg?rect=0,4,800,526&w=1400&h=920&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "old-navy-prototype",
    title: "Old Navy Prototype",
    client: "Gap Inc.",
    type: "Retail",
    location: "Walnut Creek, California, United States",
    shortLocation: "Walnut Creek, California, United States",
    year: "2017",
    scale: "20,000 sq ft",
    overview:
      "A ground-up evolution of the Old Navy store format, integrating real-time inventory tracking and immersive marketing displays.",
    collaborators: "Gap Inc.",
    outcome:
      "The Discovery Core became a central social hub with movable platforms, fit guides, gaming zones, and shop-in-shops designed to increase dwell time.",
    featureCaption: "Womens Feature Shop",
    featureText:
      "The Walnut Creek prototype tested warm, biomorphic, digitally integrated store DNA and moved Old Navy away from industrial finishes.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/da7c0fa70e77d9e628f0dfc82f9c4fdd7878f461-3103x1627.jpg?rect=0,38,3103,1552&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Womens Feature Shop",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/fe1d2c1310ba9090de7bcfe109488cac79007074-3808x2267.jpg?rect=204,0,3401,2267&w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "Entrance Stage",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/a5c1fc6b3ff436daa60178b83de598a3dc24c477-3612x1907.jpg?rect=308,0,2997,1907&w=2200&h=1400&fm=webp&fit=crop",
      },
      {
        alt: "Kids and Baby",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/e5ea8ad21ffe1d553d11f54d3178508716990bb6-3082x2504.jpg?rect=0,240,3082,2025&w=1400&h=920&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "janie-and-jack-prototype",
    title: "Janie and Jack Prototype",
    client: "Gap Inc.",
    type: "Retail",
    location: "Sherman Oaks, CA, United States",
    shortLocation: "Sherman Oaks, CA, United States",
    year: "2019",
    scale: "2,000 sq ft",
    overview:
      "A reimagining of children's retail through sophistication and storytelling, bringing tailored silhouettes and polished details into a welcoming boutique.",
    collaborators: "Gap Inc.",
    outcome:
      "The Storybook Promenade organizes Baby, Girl, Boy, Occasion, and Seasonal Collections with soft arches and curated vignettes.",
    featureCaption: "Sales Floor",
    featureText:
      "The prototype established a new physical retail DNA for Janie and Jack, translating a tailored aesthetic into a scalable store format.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/8c288efe4c9d815d899704e17e3fe98d52cb3e39-5135x2889.png?rect=0,161,5135,2568&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Sales Floor",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/d99a34ee6b32549378003f9bd65f0961e6b73ced-6720x4480.webp?w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "Display Window",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/44877e11a64d2aa9dedbe69fea0f76add750f0df-4480x6720.webp?rect=0,560,4480,5600&w=1200&h=1500&fm=webp&fit=crop",
      },
      {
        alt: "Dressing Room Seating",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/e23142769a4999302a9af0d7618fe52ce6839310-4480x6720.webp?rect=0,560,4480,5600&w=1200&h=1500&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "piperlime",
    title: "Piperlime - Soho",
    client: "Gap Inc.",
    type: "Retail",
    location: "SoHo, New York, NY, United States",
    shortLocation: "SoHo, New York, NY, United States",
    year: "2013",
    scale: "4,000 sq ft",
    overview:
      "The Piperlime Soho flagship brought a beloved online brand to life as a high-touch destination, bridging screen and street through curated stories and edits.",
    collaborators: "Gap Inc.",
    outcome:
      "Soaring white sculptural shelving units mimic a modern shoe tree, breaking up the loft and turning inventory into architecture.",
    featureCaption: "Storefront",
    featureText:
      "Piperlime was Gap Inc.'s online-only footwear and apparel brand. The SoHo flagship was its first and only physical retail location.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/667b61746c8d462c9f2abf577fa929b947b6f54c-3404x2280.png?rect=0,289,3404,1702&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Storefront",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/10a13eb7dc6e0b01d49d080645a4cdc1c209e031-1702x1142.png?rect=0,4,1702,1135&w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "Sales Floor",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/b626ef87ebec5cacbd5de99cbc6d29ece0049b5e-4288x2848.jpg?rect=0,60,4288,2729&w=2200&h=1400&fm=webp&fit=crop",
      },
      {
        alt: "Fitting Rooms",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/61be32b6bcbc082d10d3f2da8ce42a1434e720dc-3408x2300.png?rect=0,30,3408,2240&w=1400&h=920&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "banana-republic-milan",
    title: "Banana Republic Flagship - Corso Vittorio Emanuele II",
    client: "Gap Inc.",
    type: "Retail",
    location: "Milan, Italy",
    shortLocation: "Milan, Italy",
    year: "2010",
    scale: "8,000 sq ft",
    overview:
      "A modern atelier in one of the world's fashion capitals, where craftsmanship, materiality, and quiet luxury take center stage.",
    collaborators: "Gap Inc.",
    outcome:
      "The Tailor's Promenade organizes Heritage, Tailoring, Travel, and Occasion with warm stone thresholds, brass rails, marble plinths, and gallery lighting.",
    featureCaption: "Elevator",
    featureText:
      "One of several European flagships in a coordinated global market entry strategy across six continents, directed by Craig Trettau at VP level.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/d809162f841a221830ba91aa8b22402431c40eb6-1800x1200.jpg?rect=0,150,1800,900&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Elevator",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/906409f5655ae77f595f47286d7ca338d04138de-1800x1200.jpg?w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "Staircase",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/54f8d48e954f62784e22c25abed877ef779b4507-1800x1200.jpg?rect=0,28,1800,1145&w=2200&h=1400&fm=webp&fit=crop",
      },
      {
        alt: "Banana Republic Entry",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/776b407761109c8da207f8e03e58a91ddf37fc1a-1800x1200.jpg?rect=0,9,1800,1183&w=1400&h=920&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "gap-flagship-rome",
    title: "Gap Flagship - Via del Corso",
    client: "Gap Inc.",
    type: "Retail",
    location: "Via del Corso, Rome, Italy",
    shortLocation: "Via del Corso, Rome, Italy",
    year: "2011",
    scale: "14,000 sq ft",
    overview:
      "A cultural exchange between clean American modernism and Rome's architectural richness, housed in a historic structure with original patina.",
    collaborators: "Gap Inc.",
    outcome:
      "The existing historic staircase became the anchor of the design, connecting Gap's modern identity to Rome's architectural legacy.",
    featureCaption: "Staircase",
    featureText:
      "The Rome store established Gap's presence on one of the city's highest-traffic corridors while navigating strict historic preservation requirements.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/9496287f3fee0e0378b4db645cf176d717426bd4-5380x3027.png?rect=0,169,5380,2690&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Staircase",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/0dda7b21c53416387d69c996b686b35872568313-4992x3328.webp?w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "Staircase Atrium",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/2bfd43d165bab92cffc9b3e2a332b75f50f0d041-4264x2988.webp?rect=0,138,4264,2713&w=2200&h=1400&fm=webp&fit=crop",
      },
      {
        alt: "Book Shop",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/888b6a93b404597d5c35dfa171e7fcb2ab242c1c-4992x3328.webp?rect=0,24,4992,3280&w=1400&h=920&fm=webp&fit=crop",
      },
    ],
  },
  {
    slug: "hill-city-mobile-popup",
    title: "Hill City Mobile Popup",
    client: "Gap Inc.",
    type: "Retail",
    location: "San Francisco, California, United States",
    shortLocation: "San Francisco, California, United States",
    year: "2019",
    scale: "30 ft truck",
    overview:
      "A flexible retail environment built around mobility, versatility, and understated technical design, bringing Hill City directly to parks, waterfronts, festivals, and urban hubs.",
    collaborators: "Gap Inc.",
    outcome:
      "The Mobile Gear Lab unfolds from the vehicle itself, transforming a compact transport mode into an open gallery-like retail environment within minutes.",
    featureCaption: "Side and Back View",
    featureText:
      "The mobile popup extended Hill City's reach beyond fixed retail, testing a format built for speed, flexibility, and direct community engagement.",
    image:
      "https://cdn.sanity.io/images/hd48dqf3/production/8e41438f09be280395d2f07033b9d158172191c4-4032x3024.jpg?rect=0,504,4032,2016&w=2200&h=1100&fm=webp&fit=crop",
    gallery: [
      {
        alt: "Side and Back View",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/bd3e8834c724fdf1d00dfd726b8b249539bb7678-4032x3024.jpg?rect=0,168,4032,2688&w=1800&h=1200&fm=webp&fit=crop",
      },
      {
        alt: "Back View",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/a96bb8be9dca47cafcb45cb33096d2faba72b17c-3024x4032.jpg?rect=46,0,2932,4032&w=1600&h=2200&fm=webp&fit=crop",
      },
      {
        alt: "Hang Display",
        src: "https://cdn.sanity.io/images/hd48dqf3/production/c8ed9283ea578e73297afe94dfa8f1ca6ffa03a9-3024x4032.jpg?rect=0,126,3024,3780&w=1200&h=1500&fm=webp&fit=crop",
      },
    ],
  },
];

export const timeline = [
  {
    year: "1994",
    title: "Domestic & Global Expansion",
    text: "Joined Gap Inc. to lead domestic expansion strategy, architecting enterprise design standards and prototypical frameworks that powered rapid-scale rollout across the United States before global market entry.",
    image: asset("/_next/static/media/1.0mmjnjdg~41pd.webp"),
  },
  {
    year: "2008",
    title: "Executive Oversight",
    text: "Appointed VP of Corporate Creative Services and directed $1B in global capital expenditure across New York, London, Paris, Milan, Hong Kong, Dubai, and beyond.",
    image: asset("/_next/static/media/2.0njywk.8y3~o~.avif"),
  },
  {
    year: "2015",
    title: "Hospitality Practice Launch",
    text: "While driving retail innovation at Gap Inc., launched a specialized practice for elite hospitality and dining environments for Michelin-starred venues.",
    image: asset("/_next/static/media/1.12j60.r2xk5y..webp"),
  },
  {
    year: "2020",
    title: "Founded Trettau Studio",
    text: "Launched a strategy-led firm delivering brand turnarounds and market entry for retail and hospitality brands that value operational depth and authentic storytelling.",
    image: asset("/_next/static/media/2.0kwqr3xsn6j7v.webp"),
  },
  {
    year: "Today",
    title: "Executive Oversight & Strategic Design",
    text: "Advising global brands and leading high-performance environments for hospitality and retail, bridging corporate governance and creative execution.",
    image: asset("/_next/static/media/craig.0hecvw4dpwx_i.webp"),
  },
];

export const press = [
  {
    title: "2025 Inducted for Expertise in Retail and Hospitality Design",
    source: "Marquis Who's Who",
    href: "https://www.24-7pressrelease.com/",
  },
  {
    title: "2023 Named Among San Francisco's Most Beautiful Restaurants",
    source: "SF Chronicle",
    href: "https://www.sfchronicle.com/",
  },
  {
    title: "2023 Editorial Coverage of Craig's Hospitality Design Work",
    source: "Forbes",
    href: "https://www.forbes.com/",
  },
  {
    title: "2023 Full Editorial Feature on Interior Design and Concept",
    source: "LUXE Interiors + Design",
    href: "https://luxesource.com/",
  },
  {
    title: "2023 Mention for Standout Restaurant Interior Design",
    source: "Tablehopper",
    href: "https://www.tablehopper.com/",
  },
  {
    title: "2018 Coverage of Old Navy Global Retail Format Strategy",
    source: "Forbes",
    href: "https://www.forbes.com/",
  },
];

export const consultingServices = [
  {
    title: "Brand Identity & Asset Refresh",
    image: asset("/_next/static/media/1.0ksq_6wtydh0f.webp"),
  },
  {
    title: "Rapid Concepting & Prototyping",
    image: asset("/_next/static/media/2.0k1jc6zecljgq.webp"),
  },
  {
    title: "Global Design Systems",
    image: asset("/_next/static/media/3.0562~piyo02.x.webp"),
  },
  {
    title: "Strategic Design Leadership",
    image: asset("/_next/static/media/4.04hj.i_jo9enq.webp"),
  },
];

export const consultingSteps = [
  {
    number: "01.",
    title: "DNA",
    text: "Every brand has a design logic. We find yours before anything gets touched.",
    image: asset("/_next/static/media/01.0e-9.lvqp8pm8.webp"),
  },
  {
    number: "02.",
    title: "Audit",
    text: "A clinical review of physical and digital assets against global standards: where the brand is drifting, and where value is being lost.",
    image: asset("/_next/static/media/02.0_lw6o0hk-qpt.webp"),
  },
  {
    number: "03.",
    title: "Roadmap",
    text: "Vision to execution, without the lag. A phased plan built around rapid validation and a clear path to market.",
    image: asset("/_next/static/media/03.0q1gcn-7a_or5.webp"),
  },
  {
    number: "04.",
    title: "Impact",
    text: "A design ecosystem that performs. Built to scale, built to last, and built to make the case for design leadership at the board level.",
    image: asset("/_next/static/media/04.07s2x9pamyw_m.webp"),
  },
];

export const audiences = [
  "Hospitality Owners",
  "Retail Executives",
  "Real Estate Developers",
  "Boards & Leadership",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
