const baseURL = "demo.once-ui.com";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "slate", // sand | gray | slate
  brand: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "conservative", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  title: "Otello Website",
  description:
    "Otello Website for testing purposes, built in Next.js using once-ui theming.",
};

// default open graph data
const og = {
  title: "Otello Website",
  description: "Free code and design.",
  type: "website",
  image: "/images/cover.jpg"
};

// default schema data
const schema = {
  logo: "",
  type: "Reel",
  name: "My Reel",
  description: "Portfolio - Theming - Styles - Design - Coding - Next.js - once-ui - Otello",
  email: "homero.tw@gmail.com",
};

// social links
const social = {
  website: "otellobm.vercel.app",
  twitter: "https://www.twitter.com/xhomerox",
  linkedin: "https://ar.linkedin.com/in/xhomerox",
  github: "https://github.com/xhomerox",
};

export { baseURL, style, meta, og, schema, social };
