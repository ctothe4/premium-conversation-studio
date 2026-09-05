import { useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";
import { SITE } from "@/config/site";

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!el) {
    if (selector.startsWith("link")) {
      el = document.createElement("link");
      el.setAttribute("rel", selector.includes("canonical") ? "canonical" : "alternate");
    } else {
      el = document.createElement("meta");
      const nameMatch = selector.match(/\[(name|property)="(.+?)"\]/);
      if (nameMatch) el.setAttribute(nameMatch[1], nameMatch[2]);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

/** Per-page head metadata, including hreflang alternates for EN and FR. */
const Seo = ({ title, description, path }: SeoProps) => {
  const { language } = useLocale();

  useEffect(() => {
    document.title = title;
    const url = `${SITE.domain}${path}`;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:site_name"]', "content", SITE.name);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);

    // hreflang alternates
    (["en", "fr"] as const).forEach((code) => {
      let link = document.head.querySelector<HTMLLinkElement>(
        `link[rel="alternate"][hreflang="${code}"]`
      );
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", code);
        document.head.appendChild(link);
      }
      link.setAttribute("href", `${SITE.domain}/${code}${path === "/" ? "" : path}`);
    });
    let xDefault = document.head.querySelector<HTMLLinkElement>(
      'link[rel="alternate"][hreflang="x-default"]'
    );
    if (!xDefault) {
      xDefault = document.createElement("link");
      xDefault.setAttribute("rel", "alternate");
      xDefault.setAttribute("hreflang", "x-default");
      document.head.appendChild(xDefault);
    }
    xDefault.setAttribute("href", url);
  }, [title, description, path, language]);

  return null;
};

export default Seo;
