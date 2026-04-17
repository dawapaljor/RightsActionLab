import { c as createComponent } from './astro-component_C_avc4Le.mjs';
import 'piccolore';
import { l as createRenderInstruction, m as maybeRenderHead, h as addAttribute, n as renderComponent, r as renderTemplate, o as renderHead, p as renderSlot } from './entrypoint_CIfD_-8k.mjs';
import { ChevronDown, Menu, X, Globe, MessageSquare, ShieldAlert, Search } from 'lucide-react';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Current Projects",
      href: "#",
      children: [
        { name: "Tibet Action Institute", href: "/projects/tibet-action-institute" },
        { name: "Guardian Project", href: "/projects/guardian-project" },
        { name: "TIBCERT", href: "/projects/tibcert" }
      ]
    },
    {
      name: "About Us",
      href: "#",
      children: [
        { name: "Our Mission", href: "/about" },
        { name: "Executive Team & Board", href: "/about/executive-team" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="w-full z-50 bg-[#f5f2ed]"> <!-- Top Bar --> <div class="bg-[#002147] text-white py-2 px-6 flex justify-between items-center text-xs tracking-widest uppercase font-medium"> <span>Rights Action Lab</span> <div class="flex gap-6"> <a href="/donate" class="hover:text-[#c5a059] transition-colors">Support Our Work</a> <a href="/contact" class="hover:text-[#c5a059] transition-colors">Contact</a> </div> </div> <!-- Main Nav --> <nav class="border-b border-[#002147]/10 px-6 py-6 lg:py-8"> <div class="max-w-7xl mx-auto flex justify-between items-center"> <a href="/" class="flex flex-col"> <span class="text-2xl lg:text-3xl font-serif font-bold tracking-tight text-[#002147]">RIGHTS ACTION LAB</span> <span class="text-[10px] uppercase tracking-[0.2em] text-[#002147]/60 font-semibold mt-1">Advancing Human Rights & Digital Security</span> </a> <!-- Desktop Nav --> <div class="hidden lg:flex items-center gap-10"> ${navItems.map((item) => renderTemplate`<div class="relative group"> <a${addAttribute(item.href, "href")} class="text-sm font-semibold uppercase tracking-wider text-[#002147] hover:text-[#c5a059] transition-colors flex items-center gap-1"> ${item.name} ${item.children && renderTemplate`${renderComponent($$result, "ChevronDown", ChevronDown, { "size": 14, "className": "group-hover:rotate-180 transition-transform duration-300" })}`} </a> ${item.children && renderTemplate`<div class="absolute top-full left-0 mt-4 w-64 bg-white shadow-xl border border-[#002147]/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-2"> ${item.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")} class="block px-6 py-3 text-sm text-[#002147] hover:bg-[#f5f2ed] hover:text-[#c5a059] transition-colors font-medium"> ${child.href.includes("/projects/") ? "Project: " : ""}${child.name} </a>`)} </div>`} </div>`)} <a href="/donate" class="bg-[#002147] text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#c5a059] transition-all duration-300 shadow-lg">
Donate
</a> </div> <!-- Mobile Menu Button --> <button class="lg:hidden text-[#002147]" id="menu-toggle"> ${renderComponent($$result, "Menu", Menu, { "size": 28 })} </button> </div> </nav> <!-- Mobile Menu (Hidden by default) --> <div id="mobile-menu" class="hidden fixed inset-0 bg-[#f5f2ed] z-[60] flex flex-col p-8"> <div class="flex justify-between items-center mb-12"> <span class="text-xl font-serif font-bold text-[#002147]">RIGHTS ACTION LAB</span> <button id="menu-close" class="text-[#002147]"> ${renderComponent($$result, "X", X, { "size": 32 })} </button> </div> <div class="flex flex-col gap-8"> ${navItems.map((item) => renderTemplate`<div class="flex flex-col gap-4"> <a${addAttribute(item.href, "href")} class="text-2xl font-serif font-bold text-[#002147]">${item.name}</a> ${item.children && renderTemplate`<div class="flex flex-col gap-3 pl-4 border-l-2 border-[#002147]/10"> ${item.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")} class="text-lg text-[#002147]/70 font-medium">${child.name}</a>`)} </div>`} </div>`)} <a href="/donate" class="mt-4 bg-[#002147] text-white py-4 text-center font-bold uppercase tracking-widest">Donate Now</a> </div> </div> </header> ${renderScript($$result, "E:/Github Pages/RAL/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/Github Pages/RAL/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#002147] text-white pt-20 pb-10 px-6"> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"> <div class="space-y-6"> <h3 class="text-2xl font-serif font-bold tracking-tight">RIGHTS ACTION LAB</h3> <p class="text-white/60 text-sm leading-relaxed max-w-xs">
Training, research and technology to advance human rights and digital security in repressive environments.
</p> <div class="pt-4"> <p class="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Tax ID 46-4078393</p> <p class="text-xs text-white/40 mt-1">Nonprofit 501(c)(3) charitable organization</p> </div> </div> <div> <h4 class="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-[#c5a059]">Current Projects</h4> <ul class="space-y-4 text-sm font-medium"> <li><a href="/projects/tibet-action-institute" class="hover:text-[#c5a059] transition-colors">Tibet Action Institute</a></li> <li><a href="/projects/guardian-project" class="hover:text-[#c5a059] transition-colors">Guardian Project</a></li> <li><a href="/projects/tibcert" class="hover:text-[#c5a059] transition-colors">TIBCERT</a></li> </ul> </div> <div> <h4 class="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-[#c5a059]">About Us</h4> <ul class="space-y-4 text-sm font-medium"> <li><a href="/about" class="hover:text-[#c5a059] transition-colors">Our Mission</a></li> <li><a href="/about/executive-team" class="hover:text-[#c5a059] transition-colors">Executive Team & Board</a></li> </ul> </div> <div> <h4 class="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-[#c5a059]">Newsletter</h4> <p class="text-sm text-white/60 mb-6">Stay informed about our latest research and technology developments.</p> <form class="flex flex-col gap-3"> <input type="email" placeholder="Email Address" class="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#c5a059] transition-colors"> <button class="bg-[#c5a059] text-[#002147] py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
Subscribe
</button> </form> </div> </div> <div class="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/40 font-bold"> <p>&copy; ${currentYear} Rights Action Lab Inc. All Rights Reserved.</p> <div class="flex gap-8"> <a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a> <a href="/terms" class="hover:text-white transition-colors">Terms of Service</a> </div> </div> </footer>`;
}, "E:/Github Pages/RAL/src/components/Footer.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Rights Action Lab - Training, research and technology to advance human rights." } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Rights Action Lab</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-[#f5f2ed] text-[#1a1a1a] font-sans selection:bg-[#002147] selection:text-white"> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "E:/Github Pages/RAL/src/layouts/Layout.astro", void 0);

const prerender = false;
const $$Tibcert = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Tibcert;
  const initiatives = [
    {
      title: "China Index",
      description: "The first cross-regional project to objectively measure and visualize the People‘s Republic of China (PRC)‘s overseas influence through comparable data.",
      icon: Globe
    },
    {
      title: "Tibet's Voice in Cyber Security",
      description: "Positioning Tibet on the global cybersecurity stage, highlighting China's censorship and surveillance in Tibet and transnational digital repression.",
      icon: MessageSquare
    },
    {
      title: "TibCERT Response Hub",
      description: "A volunteer-based community platform built on the structure of Learn, Share, Network and Support to counter cyber attacks.",
      icon: ShieldAlert
    }
  ];
  const rssUrl = "https://blog.tibcert.org/rss.xml";
  const blogBaseUrl = "https://blog.tibcert.org";
  Astro2.response.headers.set(
    "Cache-Control",
    "public, max-age=0, s-maxage=900, stale-while-revalidate=3600"
  );
  const decodeEntities = (value = "") => value.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  const stripCdata = (value = "") => value.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();
  const getTagValue = (item, tag) => {
    const match = item.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, "i"));
    return match ? decodeEntities(stripCdata(match[1])) : "";
  };
  const blogPosts = await fetch(rssUrl).then((res) => {
    if (!res.ok) throw new Error(`Failed to fetch RSS: ${res.status}`);
    return res.text();
  }).then((xml) => {
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];
    return items.slice(0, 3).map((entry) => {
      const item = entry[1];
      const rawCover = getTagValue(item, "cover");
      return {
        title: getTagValue(item, "title"),
        link: getTagValue(item, "link"),
        description: getTagValue(item, "description"),
        pubDate: getTagValue(item, "pubDate"),
        category: getTagValue(item, "category"),
        cover: rawCover ? new URL(rawCover, blogBaseUrl).toString() : ""
      };
    });
  }).catch(() => []);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TIBCERT", "description": "Supporting and strengthening community platforms for digital security." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-[#002147] text-white py-32 px-6"> <div class="max-w-7xl mx-auto"> <div class="flex flex-col md:flex-row md:items-center gap-8 md:gap-10 justify-between"> <div class="max-w-3xl"> <span class="text-[#c5a059] text-sm font-bold uppercase tracking-[0.3em] mb-6 block">Current Project</span> <h1 class="text-5xl md:text-7xl font-serif font-bold mb-8">TIBCERT</h1> <p class="text-xl text-white/70 leading-relaxed font-medium">
The Tibetan Computer Emergency Response Team (TibCERT) counters cyber attacks from powerful threat actors, serving as a model for impacted communities worldwide.
</p> </div> <div class="w-[190px] h-[80px] flex items-center"> <img src="/logo/tibcert-logo.svg" alt="TIBCERT logo" class="w-full h-full object-contain" referrerpolicy="no-referrer"> </div> </div> </div> </section>  <section class="py-24 px-6 bg-white"> <div class="max-w-7xl mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12"> ${initiatives.map((item) => renderTemplate`<div class="flex flex-col gap-8 p-10 bg-[#f5f2ed] classic-shadow border-t-4 border-[#002147]"> <div class="text-[#002147]"> ${renderComponent($$result2, "item.icon", item.icon, { "size": 48, "strokeWidth": 1.5 })} </div> <h3 class="text-3xl font-serif font-bold text-[#002147]">${item.title}</h3> <p class="text-[#002147]/70 leading-relaxed font-medium"> ${item.description} </p> </div>`)} </div> </div> </section>  <section class="py-24 px-6 bg-[#002147] text-white overflow-hidden"> <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"> <div class="relative"> <div class="absolute inset-0 bg-[#c5a059] opacity-10 blur-3xl rounded-full"></div> <img src="https://res.cloudinary.com/daarpik83/image/upload/v1724040530/China-repression_geepcz.png" alt="Cyber Security" class="relative z-10 w-full h-auto classic-shadow grayscale hover:grayscale-0 transition-all duration-700" referrerpolicy="no-referrer"> </div> <div class="space-y-8"> <h2 class="text-4xl md:text-5xl font-serif font-bold">Countering Transnational Repression</h2> <p class="text-lg text-white/70 leading-relaxed font-medium">
TibCERT effectively counters sophisticated cyber attacks, providing ground-breaking models for digital defense. Our work highlights the regime’s digital repression of the diaspora and strengthens community resilience.
</p> <div class="pt-6"> <div class="flex items-center gap-4 p-6 bg-white/5 border border-white/10"> ${renderComponent($$result2, "Search", Search, { "className": "text-[#c5a059]" })} <div> <p class="text-sm font-bold uppercase tracking-widest text-[#c5a059]">Wired UK Innovators</p> <p class="text-xs text-white/50">Recognized among 32 innovators building a better future.</p> </div> </div> </div> </div> </div> </section> <section class="py-24 px-6 bg-white"> <div class="max-w-7xl mx-auto"> <div class="flex items-end justify-between gap-6 mb-12"> <div> <span class="text-[#c5a059] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Live Feed</span> <h2 class="text-4xl md:text-5xl font-serif font-bold text-[#002147]">From the TIBCERT Blog</h2> </div> <a href="https://blog.tibcert.org/" target="_blank" rel="noopener noreferrer" class="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#002147] hover:text-[#c5a059] transition-colors">
Visit Blog
</a> </div> ${blogPosts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${blogPosts.map((post) => renderTemplate`<a${addAttribute(post.link, "href")} target="_blank" rel="noopener noreferrer" class="group block border border-[#002147]/10 hover:border-[#c5a059]/50 hover:-translate-y-1 transition-all duration-300 bg-[#fdfdfd] overflow-hidden"> ${post.cover && renderTemplate`<div class="aspect-[16/9] overflow-hidden border-b border-[#002147]/10"> <img${addAttribute(post.cover, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerpolicy="no-referrer"> </div>`} <div class="p-8"> <div class="flex items-center gap-3 mb-5"> <span class="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]"> ${post.category || "Report"} </span> </div> <h3 class="text-2xl font-serif font-bold text-[#002147] mb-4 group-hover:text-[#c5a059] transition-colors"> ${post.title} </h3> <p class="text-sm text-[#002147]/65 leading-relaxed font-medium mb-6 line-clamp-4"> ${post.description} </p> <p class="text-[11px] uppercase tracking-widest font-bold text-[#002147]/50"> ${post.pubDate ? new Date(post.pubDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "Recent"} </p> </div> </a>`)} </div>` : renderTemplate`<div class="p-8 border border-[#002147]/10 bg-[#f5f2ed]"> <p class="text-[#002147]/70 font-medium">
Live feed is temporarily unavailable. Please check the
<a href="https://blog.tibcert.org/" target="_blank" rel="noopener noreferrer" class="ml-1 font-bold text-[#002147] hover:text-[#c5a059] transition-colors">
TIBCERT Blog
</a>
for the latest updates.
</p> </div>`} </div> </section> ` })}`;
}, "E:/Github Pages/RAL/src/pages/projects/tibcert.astro", void 0);

const $$file = "E:/Github Pages/RAL/src/pages/projects/tibcert.astro";
const $$url = "/projects/tibcert";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tibcert,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
