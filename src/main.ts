import "./style.css";

type ThemeKey = "nature" | "minimal";

interface Room {
  name: string;
  description: string;
  amenities: string[];
  price: string;
  image: string;
}

interface Facility {
  name: string;
  icon: string;
}

interface LodgingTemplate {
  name: string;
  icon: string;
  badge: string;
  tagline: string;
  about: string;
  heroImage: string;
  heroClasses: string;
  badgeClasses: string;
  btnPrimaryClasses: string;
  tagClasses: string;
  priceColor: string;
  rooms: Room[];
  facilities: Facility[];
  gallery: string[];
  location: {
    address: string;
    directions: string;
    mapsUrl: string;
  };
  contact: {
    phone: string;
    lineId: string;
    lineUrl: string;
  };
}

const localImages = {
  natureHero: new URL("../image/image_1792828833165.jpg", import.meta.url).href,
  gardenRoom: new URL("../image/image_1792828834169.jpg", import.meta.url).href,
  balconySuite: new URL("../image/image_1792828834718.jpg", import.meta.url).href,
  familyCottage: new URL("../image/image_1792828835261.jpg", import.meta.url).href,
  galleryRoom: new URL("../image/image_1792828837134.jpg", import.meta.url).href,
  galleryGarden: new URL("../image/image_1792828838701.jpg", import.meta.url).href,
} as const;

const templatesData: Record<ThemeKey, LodgingTemplate> = {
  nature: {
    name: "Baan Suan Lodge",
    icon: "🌿",
    badge: "ธรรมชาติ & สโลว์ไลฟ์",
    tagline: "พักผ่อนท่ามกลางธรรมชาติ กลับมาพักใจให้สดชื่น",
    about:
      "บ้านสวนลอดจ์ ซ่อนตัวอยู่ท่ามกลางแมกไม้ร่มรื่นของเชียงใหม่ เหมาะสำหรับการพักผ่อนแบบสโลว์ไลฟ์ สูดอากาศบริสุทธิ์ พร้อมเสียงนกร้องยามเช้าและระเบียงชมสวนส่วนตัว",
    heroImage: localImages.natureHero,
    heroClasses: "bg-emerald-950 text-emerald-50",
    badgeClasses: "bg-emerald-900/60 text-emerald-200 border border-emerald-800",
    btnPrimaryClasses: "bg-emerald-700 hover:bg-emerald-800 text-white",
    tagClasses: "badge-nature",
    priceColor: "text-emerald-700",
    rooms: [
      {
        name: "Garden View Room",
        description: "ห้องพักเตียงเดี่ยวขนาดใหญ่ มองเห็นวิวสวนเขียวขจี อากาศถ่ายเทสบาย เงียบสงบ",
        amenities: ["เตียง King Size", "เครื่องปรับอากาศ", "ห้องน้ำส่วนตัว", "Wi-Fi ฟรี", "ระเบียงชมสวน"],
        price: "เริ่มต้น 1,290 บาท/คืน",
        image: localImages.gardenRoom,
      },
      {
        name: "Balcony Suite",
        description: "ห้องสวีทพร้อมระเบียงกว้างพิเศษ วิวยอดไม้ เหมาะสำหรับจิบกาแฟยามเช้าและอ่านหนังสือ",
        amenities: ["เตียง King Size", "โซฟานั่งเล่น", "อ่างอาบน้ำ", "ตู้เย็นขนาดเล็ก", "Wi-Fi ฟรี"],
        price: "เริ่มต้น 1,790 บาท/คืน",
        image: localImages.balconySuite,
      },
      {
        name: "Family Cottage",
        description: "บ้านพักแบบคอทเทจแยกหลัง สำหรับครอบครัวหรือกลุ่มเพื่อน สัมผัสธรรมชาติเต็มอิ่ม",
        amenities: ["2 ห้องนอน", "ห้องนั่งเล่นส่วนกลาง", "ระเบียงส่วนตัว", "สิ่งอำนวยความสะดวกครบครัน"],
        price: "เริ่มต้น 2,490 บาท/คืน",
        image: localImages.familyCottage,
      },
    ],
    facilities: [
      { name: "Wi-Fi ฟรีความเร็วสูง", icon: "📶" },
      { name: "ที่จอดรถสะดวกสบาย", icon: "🚗" },
      { name: "อาหารเช้าท้องถิ่นสดใหม่", icon: "🍳" },
      { name: "สวนและลานพักผ่อน", icon: "🌳" },
      { name: "ระเบียงรับลมธรรมชาติ", icon: "🪑" },
      { name: "ชาและน้ำดื่มบริการฟรี", icon: "🍵" },
    ],
    gallery: [
      localImages.natureHero,
      localImages.galleryRoom,
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=600&q=80",
      localImages.galleryGarden,
    ],
    location: {
      address: "123 หมู่ 5 ต.บ้านสวน อ.เมือง จ.เชียงใหม่ 50000",
      directions:
        "จากตัวเมืองเชียงใหม่ ใช้ทางหลวงหมายเลข 108 มุ่งหน้าทิศใต้ ประมาณ 8 กม. เลี้ยวเข้าซอยบ้านสวนสงบ สังเกตป้ายทางเข้าไม้สักธรรมชาติ",
      mapsUrl: "https://maps.google.com/?q=Chiang+Mai+Thailand",
    },
    contact: {
      phone: "081-234-5678",
      lineId: "baansuannature",
      lineUrl: "https://line.me/ti/p/~baansuannature",
    },
  },
  minimal: {
    name: "City Inn Minimal",
    icon: "🏢",
    badge: "มินิมอล โมเดิร์น ใจกลางเมือง",
    tagline: "เรียบง่าย ใจกลางเมือง ครบทุกความสะดวกสำหรับคนรุ่นใหม่",
    about:
      "ซิตี้อินน์ มินิมอล ที่พักดีไซน์คลีนสไตล์โมเดิร์น ตอบโจทย์นักเดินทางและคนทำงานรุ่นใหม่ เดินทางสะดวกสบาย อยู่ใกล้ระบบขนส่งสาธารณะและย่านสตรีทฟู้ด",
    heroImage:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    heroClasses: "bg-zinc-900 text-zinc-50",
    badgeClasses: "bg-zinc-800 text-zinc-200 border border-zinc-700",
    btnPrimaryClasses: "bg-zinc-900 hover:bg-zinc-800 text-white",
    tagClasses: "badge-minimal",
    priceColor: "text-zinc-900",
    rooms: [
      {
        name: "Standard Studio",
        description: "ห้องพักขนาดกะทัดรัด ตกแต่งโทนสว่างสไตล์มินิมอล ครบทุกฟังก์ชันการใช้งาน",
        amenities: ["เตียง Queen Size", "โต๊ะทำงานพร้อมโคมไฟ", "แอร์", "Smart TV", "Rain Shower"],
        price: "เริ่มต้น 890 บาท/คืน",
        image:
          "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Deluxe City Room",
        description: "ห้องพักหน้าต่างกระจกบานใหญ่ ชมวิวเมืองยามค่ำคืน โปร่งสบาย สำหรับ 2 ท่าน",
        amenities: ["เตียง King Size", "โต๊ะทำงานขนาดกว้าง", "ตู้เย็นขนาดเล็ก", "เซฟในห้อง", "Wi-Fi ฟรี"],
        price: "เริ่มต้น 1,190 บาท/คืน",
        image:
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80",
      },
    ],
    facilities: [
      { name: "Wi-Fi ความเร็วสูงทั่วบริเวณ", icon: "⚡" },
      { name: "ความปลอดภัย Keycard 24 ชม.", icon: "🔑" },
      { name: "พื้นที่ Co-working Space", icon: "💻" },
      { name: "บริการรับฝากสัมภาระ", icon: "🧳" },
      { name: "ที่จอดรถ (จองสิทธิ์ล่วงหน้า)", icon: "🅿️" },
      { name: "จุดบริการเครื่องดื่มร้อน 24 ชม.", icon: "☕" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
    ],
    location: {
      address: "45/2 ถนนสาทร แขวงยานนาวา เขตสาทร กรุงเทพฯ 10120",
      directions: "ห่างจากสถานีรถไฟฟ้า BTS ประมาณ 350 เมตร เดินเข้าซอยเพียง 3 นาที หรือต่อรถแท็กซี่สะดวก",
      mapsUrl: "https://maps.google.com/?q=Sathorn+Bangkok",
    },
    contact: {
      phone: "089-876-5432",
      lineId: "cityinnminimal",
      lineUrl: "https://line.me/ti/p/~cityinnminimal",
    },
  },
};

function element<T extends HTMLElement>(id: string): T {
  const target = document.getElementById(id);
  if (!target) {
    throw new Error(`Required page element was not found: #${id}`);
  }
  return target as T;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

const selectedButtonClasses =
  "rounded-md px-3 py-1 font-medium transition shadow-xs bg-card text-foreground";
const unselectedButtonClasses =
  "rounded-md px-3 py-1 font-medium transition text-muted-foreground hover:text-foreground";

function renderTemplate(theme: ThemeKey): void {
  const data = templatesData[theme];

  element("nav-brand-icon").textContent = data.icon;
  element("nav-brand-name").textContent = data.name;

  const hero = element("hero");
  hero.className = `relative overflow-hidden transition-colors duration-300 py-16 sm:py-24 ${data.heroClasses}`;
  element("hero-title").textContent = data.name;
  element("hero-tagline").textContent = data.tagline;
  element<HTMLImageElement>("hero-image").src = data.heroImage;

  const badge = element("hero-theme-badge");
  badge.textContent = data.badge;
  badge.className = `inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase ${data.badgeClasses}`;
  element("nav-cta-btn").className =
    `rounded-full px-4 py-2 text-xs font-semibold shadow-xs transition ${data.btnPrimaryClasses}`;
  element("hero-cta-primary").className =
    `rounded-lg px-5 py-2.5 text-sm font-medium shadow-sm transition ${data.btnPrimaryClasses}`;
  element("about-text").textContent = data.about;

  element("rooms-grid").innerHTML = data.rooms
    .map(
      (room) => `
        <article class="flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xs transition hover:shadow-md">
          <div>
            <div class="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted">
              <img src="${escapeHtml(room.image)}" alt="${escapeHtml(room.name)}" class="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <h3 class="text-lg font-semibold tracking-tight text-foreground">${escapeHtml(room.name)}</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">${escapeHtml(room.description)}</p>
            <div class="mt-4 flex flex-wrap gap-1.5">
              ${room.amenities.map((amenity) => `<span class="rounded-md px-2 py-0.5 text-xs font-medium ${data.tagClasses}">${escapeHtml(amenity)}</span>`).join("")}
            </div>
          </div>
          <div class="mt-6 border-t border-border pt-4">
            <div class="text-base font-bold ${data.priceColor}">${escapeHtml(room.price)}</div>
            <a href="#contact" class="mt-3 block w-full rounded-lg border border-border py-2 text-center text-xs font-semibold text-foreground transition hover:bg-muted">
              สอบถามห้องนี้
            </a>
          </div>
        </article>
      `,
    )
    .join("");

  element("facilities-grid").innerHTML = data.facilities
    .map(
      (facility) => `
        <div class="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-4 text-center text-xs font-medium shadow-xs">
          <div class="mb-2 text-2xl">${escapeHtml(facility.icon)}</div>
          <span class="text-foreground">${escapeHtml(facility.name)}</span>
        </div>
      `,
    )
    .join("");

  element("gallery-grid").innerHTML = data.gallery
    .map(
      (image, index) => `
        <div class="aspect-square overflow-hidden rounded-xl border border-border bg-muted shadow-xs">
          <img src="${escapeHtml(image)}" alt="ภาพบรรยากาศที่ ${index + 1}" class="h-full w-full object-cover transition duration-300 hover:scale-105" />
        </div>
      `,
    )
    .join("");

  element("location-address").textContent = data.location.address;
  element("location-directions").textContent = data.location.directions;
  element<HTMLAnchorElement>("location-map-btn").href = data.location.mapsUrl;

  const cleanPhone = data.contact.phone.replace(/\D/g, "");
  const callButton = element<HTMLAnchorElement>("btn-call");
  callButton.href = `tel:${cleanPhone}`;
  callButton.className =
    `inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold shadow-xs transition sm:w-auto ${data.btnPrimaryClasses}`;
  element("label-call").textContent = `โทรเลย (${data.contact.phone})`;

  element<HTMLAnchorElement>("btn-line").href = data.contact.lineUrl;
  element("label-line").textContent = `แอด LINE: @${data.contact.lineId}`;

  element<HTMLButtonElement>("btn-nature").className =
    theme === "nature" ? selectedButtonClasses : unselectedButtonClasses;
  element<HTMLButtonElement>("btn-minimal").className =
    theme === "minimal" ? selectedButtonClasses : unselectedButtonClasses;
  element<HTMLButtonElement>("btn-nature").setAttribute("aria-pressed", String(theme === "nature"));
  element<HTMLButtonElement>("btn-minimal").setAttribute("aria-pressed", String(theme === "minimal"));
}

element<HTMLButtonElement>("btn-nature").addEventListener("click", () => renderTemplate("nature"));
element<HTMLButtonElement>("btn-minimal").addEventListener("click", () => renderTemplate("minimal"));
renderTemplate("nature");
