import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link, usePage, router, Head, createInertiaApp } from "@inertiajs/react";
import * as React from "react";
import React__default, { useContext, useEffect, useState, useRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Globe, Menu, ChevronDown, ArrowUp, MoveRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLocalStorage, useMediaQuery, useIsClient } from "usehooks-ts";
import axios from "axios";
import i18n, { t as t$1 } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import MoonLoader from "react-spinners/MoonLoader.js";
import { convert } from "html-to-text";
import Carousel from "react-multi-carousel";
import Atropos from "atropos";
import { useMotionValue, animate, motion } from "motion/react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
const Logo = "/build/assets/seat-DajjaVaK.png";
const FacebookLogo = "/build/assets/Facebook-RedT_x4M.png";
const LinkedInLogo = "/build/assets/LinkedIn-DeYY8mjI.png";
const TwitterLogo = "/build/assets/TwitterX-Bldsdaub.png";
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "flex p-inline-default py-8 bg-[#913E49] mt-12 justify-between lg:flex-nowrap flex-wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:w-1/3 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center md:justify-normal justify-center", children: [
        /* @__PURE__ */ jsx("img", { src: Logo, alt: "logo", className: "h-8" }),
        /* @__PURE__ */ jsx("p", { className: "lg:w-36 text-start", children: "Lorem ipsum Interiors" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white md:text-start text-center lg:max-w-none max-w-xl mx-auto md:mx-0", children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum non quae modi neque dicta placeat. Quam explicabo nemo, tempore rem laudantium magni accusamus nobis ratione, veritatis iure quaerat sed dolores." }),
      /* @__PURE__ */ jsx("hr", { className: "md:hidden mt-8 border-red-500 opacity-50" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "lg:pl-8 flex gap-8 lg:mt-0 mt-8 md:flex-nowrap flex-wrap justify-center md:justify-normal w-full md:w-auto", children: [
      /* @__PURE__ */ jsxs("ul", { className: "block md:w-auto w-full text-center md:text-start", children: [
        /* @__PURE__ */ jsx("li", { className: "text-white text-lg", children: "Links" }),
        /* @__PURE__ */ jsx("li", { className: "text-white text-sm hover:underline w-fit mx-auto md:mx-0", children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }),
        /* @__PURE__ */ jsx("li", { className: "text-white text-sm hover:underline w-fit mx-auto md:mx-0", children: /* @__PURE__ */ jsx(Link, { href: "/about", children: "About Us" }) }),
        /* @__PURE__ */ jsx("li", { className: "text-white text-sm hover:underline w-fit mx-auto md:mx-0", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: "Services" }) }),
        /* @__PURE__ */ jsx("li", { className: "text-white text-sm hover:underline w-fit mx-auto md:mx-0", children: /* @__PURE__ */ jsx(Link, { href: "/work", children: "Our Work" }) }),
        /* @__PURE__ */ jsx("li", { className: "text-white text-sm hover:underline w-fit mx-auto md:mx-0", children: /* @__PURE__ */ jsx(Link, { href: "/blog", children: "Blog" }) })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "block md:w-auto w-full text-center md:text-start", children: [
        /* @__PURE__ */ jsx("li", { className: "text-white text-lg", children: "Our Companies" }),
        /* @__PURE__ */ jsx("li", { className: "text-white text-sm hover:underline w-fit mx-auto md:mx-0", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Crroctiva financial" }) }),
        /* @__PURE__ */ jsx("li", { className: "text-white text-sm hover:underline w-fit mx-auto md:mx-0", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Crroctiva Software" }) }),
        /* @__PURE__ */ jsx("li", { className: "text-white text-sm hover:underline w-fit mx-auto md:mx-0", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Crroctiva Hardware" }) })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "md:hidden block w-full border-red-500 opacity-50" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 lg:self-auto self-end md:w-auto w-full md:mt-0 mt-8 md:justify-normal justify-center", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: LinkedInLogo, alt: "", className: "lg:w-auto lg:h-auto w-8 h-8" }) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: FacebookLogo, alt: "", className: "lg:w-auto lg:h-auto w-8 h-8" }) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "#", children: /* @__PURE__ */ jsx("img", { src: TwitterLogo, alt: "", className: "lg:w-auto lg:h-auto w-8 h-8" }) }) })
    ] })
  ] });
}
function Button({ className, children, onClick }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: className + ` bg-[#913E49] text-white py-4 px-6 cursor-pointer rounded-md
      hover:bg-white group hover:text-red-900 group-hover:text-red-900 group-hover:bg-white border-2 border-red-900 transition-all

      `,
      children: /* @__PURE__ */ jsx("p", { className: "group-hover:scale-105 transition-transform duration-700 group-hover:-translate-y-0.5", children })
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
const LoadingContext = React__default.createContext({
  isLoading: false
});
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) ({}).hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(null, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738" }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, g = Date.prototype.toISOString, b = o.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: b, formatter: o.formatters[b], indices: false, serializeDate: function(t4) {
  return g.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !b2 ? u2(r2, v.encoder, m2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = b2 ? r2 : u2(r2, v.encoder, m2, "key", y2);
      if ("comma" === n2 && b2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", R2 = 0; R2 < O2.length; ++R2) E2 += (0 === R2 ? "" : ",") + g2(u2(O2[R2], v.encoder, m2, "value", y2));
        return [g2($2) + "=" + E2];
      }
      return [g2($2) + "=" + g2(u2(w2, v.encoder, m2, "value", y2))];
    }
    return [g2(r2) + "=" + g2(String(w2))];
  }
  var S2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) S2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) S2 = a2;
  else {
    var N2 = Object.keys(w2);
    S2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < S2.length; ++T2) {
    var k = S2[T2], C = "object" == typeof k && void 0 !== k.value ? k.value : w2[k];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k) : r2 : r2 + (c2 ? "." + k : "[" + k + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, R = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, S = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = R(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const r2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i3 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, o2] = t4.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${r2}/?$`).exec(n2)) ? e2 : new RegExp(`^${r2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t5 in i2.groups) i2.groups[t5] = "string" == typeof i2.groups[t5] ? decodeURIComponent(i2.groups[t5]) : i2.groups[t5];
      return { params: i2.groups, query: S(o2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return v;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return this.t.routes.hasOwnProperty(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.j(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
function LanguageSelection() {
  const { locale, locales } = usePage().props;
  const { currentURL } = usePage().props;
  const { setLoading } = useContext(LoadingContext);
  const [localeStore, setLocaleValue, removeLocaleValue] = useLocalStorage("locale", locale);
  const handleLanguageChange = (newLocale) => {
    if (setLoading) {
      setLoading(true);
    }
    axios.get(T("setLocale", { locale: newLocale })).then((data) => {
      router.visit(
        window.location.pathname + window.location.search,
        {
          preserveUrl: true,
          replace: false,
          preserveScroll: true,
          onSuccess: () => {
            changeDirection(locale);
            setLocaleValue(newLocale);
            i18n.changeLanguage(newLocale).then(() => {
              if (setLoading) {
                setLoading(false);
              }
            });
          }
        }
      );
    });
  };
  useEffect(() => {
    setLocaleValue(locale);
    i18n.changeLanguage(locale).then(() => {
      changeDirection(locale);
    });
  }, []);
  useEffect(() => {
    changeDirection(locale);
  }, [locale]);
  function changeDirection(locale2) {
    if (locale2 === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-500 cursor-pointer", children: [
    /* @__PURE__ */ jsx(Globe, {}),
    /* @__PURE__ */ jsx(
      "select",
      {
        value: locale,
        onChange: (e2) => handleLanguageChange(e2.target.value),
        className: " bg-transparent outline-none",
        children: locales.map((loc) => /* @__PURE__ */ jsx("option", { value: loc.code, children: loc.name }, loc.code))
      }
    )
  ] });
}
function Header() {
  const { t: t4, i18n: i18n2 } = useTranslation();
  const { url, component } = usePage();
  const { navbar_services } = usePage().props;
  const { generalData } = usePage().props;
  const [headerTop, setHeaderTop] = useState(false);
  const desktopView = useMediaQuery("(min-width: 1024px)");
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState(false);
  useEffect(
    () => {
      window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
          setHeaderTop(true);
        } else {
          setHeaderTop(false);
        }
      });
      return () => {
        window.removeEventListener("scroll", () => {
        });
      };
    },
    []
  );
  const setSidebarFunction = (value) => {
    setSidebarMenuOpen(value);
    if (value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: (headerTop ? "py-4 shadow-md" : "py-8") + " bg-white flex justify-between items-center w-full p-inline-default fixed z-40 transition-all ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "ml-4 mr-8 lg:hidden w-8 h-8 bg-transparent rounded-full hover:bg-[#00000033] cursor-pointer transition-all flex justify-center items-center", children: /* @__PURE__ */ jsx(Menu, { onClick: () => {
          setSidebarFunction(!sidebarMenuOpen);
        } }) }),
        /* @__PURE__ */ jsx("img", { src: generalData.logo, alt: generalData.title + " Logo", className: "h-16 w-32 object-contain rtl:object-right object-left" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: (sidebarMenuOpen ? "left-0" : "-left-full") + " " + (headerTop ? "mt-20" : "mt-28") + " lg:left-0 lg:max-w-none max-w-96 w-full lg:transition-none transition-all lg:translate-y-0 lg:translate-x-0 lg:mt-0 lg:py-0 py-8 lg:px-0 px-8 text-black lg:relative fixed lg:w-auto lg:h-auto h-screen top-0 lg:bg-transparent bg-white", children: [
        /* @__PURE__ */ jsxs("ul", { className: "flex lg:flex-row flex-col", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", onClick: () => {
            setSidebarFunction(false);
          }, className: " cursor-pointer", children: /* @__PURE__ */ jsx("li", { className: "py-2 px-4 bg-transparent hover:bg-[#00000033] mr-8 rounded-md transition-colors", children: t4("Home") }) }),
          /* @__PURE__ */ jsx(Link, { href: "/about", onClick: () => {
            setSidebarFunction(false);
          }, className: " cursor-pointer", children: /* @__PURE__ */ jsx("li", { className: "py-2 px-4 bg-transparent hover:bg-[#00000033] mr-8 rounded-md transition-colors", children: t4("About Us") }) }),
          /* @__PURE__ */ jsx("li", { className: "relative mr-8", children: /* @__PURE__ */ jsxs("button", { tabIndex: -1, className: "group text-left w-full", children: [
            /* @__PURE__ */ jsx(Link, { href: "/services", onClick: () => {
              setSidebarFunction(false);
            }, className: " cursor-pointer lg:pointer-events-auto pointer-events-none", children: /* @__PURE__ */ jsxs("div", { className: "py-2 px-4 bg-transparent flex items-center gap-2 hover:bg-[#00000033] rounded-md transition-colors", children: [
              /* @__PURE__ */ jsx("p", { children: t4("Services") }),
              " ",
              /* @__PURE__ */ jsx(ChevronDown, { size: 15 })
            ] }) }),
            /* @__PURE__ */ jsxs("ul", { className: "lg:absolute top-full group-hover:border-b group-focus:border-b lg:group-hover:border-b-0 lg:group-focus:border-b-0 border-gray-400 overflow-hidden max-h-0 group-hover:max-h-max group-focus:max-h-max transition-all p-0 lg:rounded-md lg:bg-gray-200 lg:shadow-md lg:text-center group-hover:p-4 group-focus:p-4 left-1/2 lg:-translate-x-1/2", children: [
              navbar_services.map((service) => /* @__PURE__ */ jsx(Link, { href: `/service/${service.id}`, onClick: () => {
                setSidebarFunction(false);
              }, className: " cursor-pointer", children: /* @__PURE__ */ jsx("li", { className: "lg:py-2 py-3 px-4 bg-transparent hover:bg-[#00000033] lg:whitespace-nowrap rounded-md transition-colors", children: service.name }) }, service.id)),
              /* @__PURE__ */ jsx(Link, { href: "/services", onClick: () => {
                setSidebarFunction(false);
              }, className: " cursor-pointer lg:hidden", children: /* @__PURE__ */ jsx("li", { className: "lg:py-2 py-3 px-4 bg-transparent hover:bg-[#00000033] lg:whitespace-nowrap rounded-md transition-colors", children: t4("All Services") }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { href: "/work", onClick: () => {
            setSidebarFunction(false);
          }, className: " cursor-pointer", children: /* @__PURE__ */ jsx("li", { className: "py-2 px-4 bg-transparent hover:bg-[#00000033] mr-8 rounded-md transition-colors", children: t4("Our Work") }) }),
          /* @__PURE__ */ jsx(Link, { href: "/blog", onClick: () => {
            setSidebarFunction(false);
          }, className: " cursor-pointer", children: /* @__PURE__ */ jsx("li", { className: "py-2 px-4 bg-transparent hover:bg-[#00000033] mr-8 rounded-md transition-colors", children: t4("Blog") }) })
        ] }),
        !desktopView && /* @__PURE__ */ jsx("div", { className: "mt-8", children: renderContactUs() })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(LanguageSelection, {}),
        desktopView && renderContactUs()
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => {
          setSidebarFunction(false);
        },
        className: (sidebarMenuOpen ? "block backdrop-blur-md" : "hidden backdrop-blur-0") + " w-full h-full fixed bg-[#000000AA]  delay-75 transition-all top-0 left-0 z-30"
      }
    )
  ] });
  function renderContactUs() {
    return /* @__PURE__ */ jsxs(Dialog, { children: [
      /* @__PURE__ */ jsxs(DialogTrigger, { className: "lg:w-auto w-full", children: [
        " ",
        /* @__PURE__ */ jsx("div", { className: "flex items-center w-full", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
            },
            className: ` bg-[#913E49] text-white lg:py-4 lg:px-6 px-6 py-2 text-nowrap cursor-pointer rounded-md w-full
      hover:bg-white group hover:text-red-900 group-hover:text-red-900 group-hover:bg-white border-2 border-red-900 transition-all
      `,
            children: /* @__PURE__ */ jsx("p", { className: "group-hover:scale-105 transition-transform duration-700 group-hover:-translate-y-0.5", children: t4("Contact Us") })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: t4("Contact Us") }),
        /* @__PURE__ */ jsxs(DialogDescription, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full mt-4", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex-grow", children: [
              /* @__PURE__ */ jsx("p", { className: "mb-2", children: t4("First Name") }),
              /* @__PURE__ */ jsx(Input, { placeholder: t4("First Name") })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "flex-grow", children: [
              /* @__PURE__ */ jsx("p", { className: "mb-2", children: t4("Last Name") }),
              /* @__PURE__ */ jsx(Input, { placeholder: t4("Last Name") })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex-grow mt-4 block", children: [
            /* @__PURE__ */ jsx("p", { className: "mb-2", children: t4("Email Address") }),
            /* @__PURE__ */ jsx(Input, { placeholder: t4("Email Address") })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex-grow mt-4 block", children: [
            /* @__PURE__ */ jsx("p", { className: "mb-2", children: t4("Message") }),
            /* @__PURE__ */ jsx(Textarea, { placeholder: t4("Your Message"), rows: 10, cols: 10, className: "resize-none" })
          ] }),
          /* @__PURE__ */ jsx(Button, { className: "mt-4 w-full py-2", children: t4("Submit") })
        ] })
      ] }) })
    ] });
  }
}
function Layout({ children, title }) {
  let mainRef = useRef(null);
  let backToTop = useRef(null);
  const { generalData } = usePage().props;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    var _a;
    router.on("start", () => {
      setIsLoading(true);
    });
    router.on("finish", () => {
      setIsLoading(false);
    });
    (_a = backToTop.current) == null ? void 0 : _a.classList.add("opacity-0", "translate-y-20");
    document.addEventListener("scroll", () => {
      var _a2, _b, _c, _d;
      if (window.scrollY > 100) {
        (_a2 = backToTop.current) == null ? void 0 : _a2.classList.remove("opacity-0", "translate-y-20");
        (_b = backToTop.current) == null ? void 0 : _b.classList.add("opacity-100", "-translate-y-0");
      } else {
        (_c = backToTop.current) == null ? void 0 : _c.classList.remove("opacity-100", "-translate-y-0");
        (_d = backToTop.current) == null ? void 0 : _d.classList.add("opacity-0", "translate-y-20");
      }
    });
  }, []);
  useEffect(() => {
    var _a, _b;
    if (isLoading) {
      (_a = mainRef.current) == null ? void 0 : _a.classList.add("opacity-50");
    } else {
      (_b = mainRef.current) == null ? void 0 : _b.classList.remove("opacity-50");
    }
  }, [isLoading]);
  return /* @__PURE__ */ jsxs(LoadingContext.Provider, { value: { isLoading, setLoading: setIsLoading }, children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: title ? `${title} - ${generalData.title}` : generalData.title }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: generalData.description }),
      /* @__PURE__ */ jsx("link", { rel: "icon", href: "/favicon.ico" })
    ] }),
    /* @__PURE__ */ jsxs("main", { ref: mainRef, className: "transition-all duration-300", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: backToTop,
          onClick: () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          className: "back-to-top fixed bottom-12 right-12 w-16 h-16 bg-[#913E49] text-white cursor-pointer flex items-center justify-center rounded-full shadow-lg z-50 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#913E49]",
          children: /* @__PURE__ */ jsx(ArrowUp, { size: 32 })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "w-full h-full", children: [
        /* @__PURE__ */ jsx(Header, {}),
        children,
        /* @__PURE__ */ jsx(Footer, {})
      ] })
    ] }),
    isLoading && /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center", children: /* @__PURE__ */ jsx(
      MoonLoader,
      {
        color: "#913E49",
        size: 100,
        "aria-label": "Loading Spinner"
      }
    ) })
  ] });
}
function About({ about }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:py-48 py-36 text-white relative p-inline-default bg-black", id: "home", children: [
      /* @__PURE__ */ jsx("img", { src: about == null ? void 0 : about.hero.image, alt: "", className: "absolute w-full h-full top-0 left-0 select-none pointer-events-none object-cover opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 lg:text-start text-center relative", children: [
        /* @__PURE__ */ jsx("h1", { className: "lg:text-5xl text-3xl font-bold", children: about == null ? void 0 : about.hero.title }),
        /* @__PURE__ */ jsx("p", { className: "lg:text-xl mt-6", children: about == null ? void 0 : about.hero.content })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "py-8 p-inline-default flex flex-col gap-12 lg:gap-8", children: about == null ? void 0 : about.sections.map((section, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-2 lg:gap-8 justify-center text-center lg:text-start lg:justify-between lg:odd:flex-row-reverse flex-wrap lg:flex-nowrap", children: [
      /* @__PURE__ */ jsx("div", { className: "w-[100%] lg:w-[500px] xl:w-[600px] 2xl:w-[600px] h-[300px] lg:h-[400px] shrink-0 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: section.image, className: "w-full h-full object-cover object-center", alt: "" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold", children: section.title }),
        /* @__PURE__ */ jsx("p", { className: "text-center lg:text-justify max-w-6xl mt-4", children: section.content })
      ] })
    ] })) })
  ] });
}
About.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page, title: t$1("About Us") });
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const NoImage = "/build/assets/no-image-BEbpzZjJ.jpeg";
function PostPreview({ id, image, text }) {
  if (text && text.length > 200) {
    text = text.slice(0, 200) + "...";
  }
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-xl w-full p-8 relative bg-[#D9F9F3] rounded-md", children: [
    /* @__PURE__ */ jsx(Link, { href: `/post/${id}`, children: /* @__PURE__ */ jsxs("div", { className: "w-full xl:h-96 lg:h-72 h-72 overflow-hidden rounded-md bg-black relative", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full h-full flex justify-center items-center text-2xl absolute top-0 left-0 text-white text-bold", children: /* @__PURE__ */ jsx("p", { children: t$1("Read More") }) }),
      /* @__PURE__ */ jsx("img", { src: image ?? NoImage, className: "object-cover w-full h-full hover:scale-110 transition-all hover:opacity-50 absolute top-0 left-0", alt: "" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: " drop-shadow-md mt-4 text-gray-500", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xl", children: text }),
      /* @__PURE__ */ jsx(Link, { href: `/post/${id}`, children: /* @__PURE__ */ jsx("p", { className: "mt-4 cursor-pointer hover:underline", children: t$1("Discover More") }) })
    ] })
  ] });
}
function Pagination({ pagination }) {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  let params = new URLSearchParams(window.location.search);
  let page = parseInt(params.get("page") ?? "1");
  let url = window.location.pathname;
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-8", children: /* @__PURE__ */ jsxs("ul", { className: "flex", children: [
    page > 1 && /* @__PURE__ */ jsx(Link, { href: `${url}?page=${page - 1}`, className: "mx-1 px-3 py-2 bg-gray-200 text-gray-600 rounded-l-md", children: "Previous" }),
    Array.from({ length: pagination.pageCount }, (_, i2) => {
      if (i2 + 1 === page) {
        return /* @__PURE__ */ jsx("div", { className: "mx-1 px-3 py-2 bg-[#913E49] text-white rounded-md", children: i2 + 1 }, i2);
      } else {
        return /* @__PURE__ */ jsx(Link, { href: `${url}?page=${i2 + 1}`, className: "mx-1 px-3 py-2 bg-gray-200 text-gray-600 rounded-md", children: i2 + 1 }, i2);
      }
    }),
    page < pagination.pageCount && /* @__PURE__ */ jsx(Link, { href: `${url}?page=${page + 1}`, className: "mx-1 px-3 py-2 bg-gray-200 text-gray-600 rounded-r-md", children: "Next" })
  ] }) });
}
function Blog({ blogPageData, blogPosts, pagination }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:py-48 py-36 text-white relative p-inline-default bg-black", id: "home", children: [
      /* @__PURE__ */ jsx("img", { src: blogPageData == null ? void 0 : blogPageData.hero.image, alt: "", className: "absolute w-full h-full top-0 left-0 select-none pointer-events-none object-cover opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 lg:text-start text-center relative", children: [
        /* @__PURE__ */ jsx("h1", { className: "lg:text-5xl text-3xl font-bold", children: blogPageData == null ? void 0 : blogPageData.hero.title }),
        /* @__PURE__ */ jsx("p", { className: "lg:text-xl mt-6", children: blogPageData == null ? void 0 : blogPageData.hero.content })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-inline-default py-8", id: "company", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center", children: t$1("Blog") }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-center w-72 mt-4 mx-auto", children: t$1("Explore our latest blog posts to stay updated with industry trends, insights, and expert opinions.") }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center lg:w-full max-w-xl md:max-w-full mx-auto", children: blogPosts.map((post) => /* @__PURE__ */ jsx(PostPreview, { id: post.id, image: post.previewImage, text: convert(post.body, { selectors: [{ selector: "img", format: "skip" }] }) }, post.id)) })
    ] }),
    /* @__PURE__ */ jsx(Pagination, { pagination })
  ] });
}
Blog.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page, title: "Blog" });
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Blog
}, Symbol.toStringTag, { value: "Module" }));
function ServicePreview({ service, className }) {
  if (service.content && service.content.length > 200) {
    service.content = service.content.slice(0, 200) + "...";
  }
  return /* @__PURE__ */ jsx("div", { className: className + " w-full h-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full bg-[#913E49] p-8 h-full rounded-md flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-white", children: service.name }),
      /* @__PURE__ */ jsx("p", { className: "text-white mt-4", children: service.content })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-between mt-8", children: /* @__PURE__ */ jsx(Link, { href: `/service/${service.id}`, className: "hover:underline text-white", children: t$1("Discover More") }) })
  ] }) }, service.id);
}
function ServiceCarousel({ services }) {
  const responsive = {
    "superLargeDesktop": {
      breakpoint: { max: 4e3, min: 3e3 },
      items: 3
    },
    "desktop": {
      breakpoint: { max: 3e3, min: 1024 },
      items: 2
    },
    "tablet": {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    "mobile": {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const isClient = useIsClient();
  if (!isClient || !services || services.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "mt-8 select-none", children: /* @__PURE__ */ jsx(Carousel, { responsive, showDots: true, infinite: true, className: "py-8 z-20", ssr: true, children: services.map((service) => {
    return /* @__PURE__ */ jsx(ServicePreview, { className: "px-2", service }, service.id);
  }) }) });
}
function WorkPreview({ work }) {
  useEffect(() => {
    document.querySelectorAll(".work-element").forEach((element) => {
      Atropos({
        // pass unique element here
        el: element,
        // rest of parameters
        activeOffset: 40,
        shadowScale: 0.4,
        rotateTouch: false
      });
    });
    console.log("x");
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "atropos work-element", children: /* @__PURE__ */ jsx("div", { className: " mx-auto w-full max-w-xl h-auto aspect-square relative group rounded-md cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "atropos-scale", children: /* @__PURE__ */ jsx("div", { className: "atropos-rotate", children: /* @__PURE__ */ jsx("div", { className: "atropos-inner", children: /* @__PURE__ */ jsxs(Link, { href: `/work/${work.id}`, children: [
    /* @__PURE__ */ jsx("div", { className: "bg-black w-full h-full top-0 left-0 absolute" }),
    /* @__PURE__ */ jsx("img", { src: work.image, className: "object-cover  opacity-50  group-hover:scale-105 group-hover:opacity-75 transition-all rounded-md absolute w-full h-full top-0 right-0", alt: "" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute text-white drop-shadow-md p-8 bottom-0 left-0 z-20", "data-atropos-offset": "5", children: [
      /* @__PURE__ */ jsx("p", { className: "xl:text-xl lg:text-lg", children: work.title }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center mt-4 gap-1 group-hover:gap-3 transition-all", children: [
        /* @__PURE__ */ jsx("p", { children: t$1("Discover More") }),
        /* @__PURE__ */ jsx(MoveRight, { size: 18, className: "-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" })
      ] })
    ] })
  ] }) }) }) }) }) });
}
function AnimatedInsightElement({ number }) {
  const count = useMotionValue(0);
  const [countContent, setCountContent] = React__default.useState(0);
  useEffect(() => {
    const controls = animate(count, number, { duration: 5 });
    count.on("change", (latest) => {
      setCountContent(Math.floor(latest));
    });
    return () => controls.stop();
  }, []);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "text-3xl font-bold mt-2",
      children: [
        countContent,
        "+"
      ]
    }
  );
}
function Home({ blogs, partners, services, work, homeData }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:py-48 py-36 text-white relative p-inline-default bg-black", id: "home", children: [
      /* @__PURE__ */ jsx("img", { src: homeData == null ? void 0 : homeData.hero.image, alt: "", className: "absolute w-full h-full top-0 left-0 select-none pointer-events-none object-cover opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 lg:text-start text-center relative", children: [
        /* @__PURE__ */ jsx(
          motion.h1,
          {
            variants: { hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0, transition: { delay: 0.5 } } },
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            className: "lg:text-5xl text-3xl font-bold",
            children: homeData == null ? void 0 : homeData.hero.title
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            variants: { hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0, transition: { delay: 0.8 } } },
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            className: "lg:text-xl mt-6",
            children: homeData == null ? void 0 : homeData.hero.content
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full mb-8 bg-[#913E49] text-white p-inline-default lg:py-8 py-4 flex lg:flex-nowrap flex-wrap justify-between items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold lg:py-8 py-4 lg:w-auto w-full lg:text-start text-center", id: "about", children: t$1("Insights") }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 1.5 } }
          },
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className: "flex lg:justify-normal justify-center lg:w-auto w-full sm:flex-nowrap flex-wrap",
          children: homeData == null ? void 0 : homeData.insights.map((insight) => /* @__PURE__ */ jsxs(motion.div, { variants: { hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0 } }, className: "border-r-1 border-r-white p-4 text-center sm:w-auto w-full", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: insight.title }),
            /* @__PURE__ */ jsx(AnimatedInsightElement, { number: insight.number })
          ] }, insight.id))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: " w-full p-inline-default py-8 items-stretch", id: "about", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          variants: { hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0 } },
          initial: "hidden",
          viewport: { once: true, margin: "-50px" },
          whileInView: "visible",
          className: "text-3xl font-bold text-center",
          children: t$1("Our Services")
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          variants: { hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0 } },
          initial: "hidden",
          viewport: { once: true, margin: "-50px" },
          whileInView: "visible",
          className: "text-gray-600 text-center w-72 mt-4 mx-auto",
          children: t$1("Discover our suite of software solutions")
        }
      ),
      /* @__PURE__ */ jsx(ServiceCarousel, { services })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "items-center bg-[#D9F9F3] flex p-inline-default py-8 lg:justify-between justify-center flex-wrap lg:flex-nowrap ", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-gray-500 md:text-4xl text-3xl font-bold lg:w-1/3", children: t$1("Our Partners") }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-8 lg:justify-normal justify-center", children: partners.map((partner) => /* @__PURE__ */ jsx("div", { className: "md:w-36 md:h-24 w-24 h-16 ", children: /* @__PURE__ */ jsx("img", { src: partner.image, alt: "Crroctiva Partner " + partner.name, className: "w-full h-full" }) }, partner.id)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-inline-default py-8", id: "company", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          variants: { hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0 } },
          initial: "hidden",
          viewport: { once: true, margin: "-50px" },
          whileInView: "visible",
          className: "text-3xl font-bold text-center",
          children: t$1("Our Work")
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          variants: { hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0 } },
          initial: "hidden",
          viewport: { once: true, margin: "-50px" },
          whileInView: "visible",
          className: "text-gray-600 text-center w-72 mt-4 mx-auto",
          children: t$1("Discover our portfolio of successful projects that showcase our expertise and innovation.")
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 1.5 } }
          },
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-100px" },
          className: (work.length >= 3 ? "lg:grid-cols-3" : work.length == 2 ? "lg:grid-cols-2" : "") + " grid grid-cols-1 gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center",
          children: work.map((work2) => /* @__PURE__ */ jsx(
            motion.div,
            {
              variants: {
                hidden: { opacity: 0, y: "100%" },
                visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
              },
              children: /* @__PURE__ */ jsx(WorkPreview, { work: work2 })
            },
            work2.id
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Link, { href: "/work", children: /* @__PURE__ */ jsx(Button, { className: "mx-auto block", children: t$1("Discover More") }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-inline-default py-8", id: "company", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          variants: { hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0 } },
          initial: "hidden",
          viewport: { once: true, margin: "-50px" },
          whileInView: "visible",
          className: "text-3xl font-bold text-center",
          children: t$1("Blog")
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          variants: { hidden: { opacity: 0, y: "100%" }, visible: { opacity: 1, y: 0 } },
          initial: "hidden",
          viewport: { once: true, margin: "-50px" },
          whileInView: "visible",
          className: "text-gray-600 text-center w-72 mt-4 mx-auto",
          children: t$1("Explore our latest blog posts to stay updated with industry trends, insights, and expert opinions.")
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 1.5 } }
          },
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-100px" },
          className: (blogs.length >= 3 ? "lg:grid-cols-3" : blogs.length == 2 ? "lg:grid-cols-2" : "") + " grid grid-cols-1 gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center lg:w-full max-w-xl lg:max-w-full mx-auto",
          children: blogs.map(
            (blog) => /* @__PURE__ */ jsx(
              motion.div,
              {
                variants: {
                  hidden: { opacity: 0, y: "100%" },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
                },
                children: /* @__PURE__ */ jsx(
                  PostPreview,
                  {
                    id: blog.id,
                    image: blog.previewImage,
                    text: convert(blog.body, { selectors: [{ selector: "img", format: "skip" }] })
                  }
                )
              },
              blog.id
            )
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Link, { href: "/blog", children: /* @__PURE__ */ jsx(Button, { className: "mx-auto block", children: t$1("Discover More Blog Posts") }) })
  ] });
}
Home.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page, title: t$1("Home") });
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const HeroImage = "/build/assets/Hero%20section2-B62Kybrb.png";
function Post$1({ post }) {
  const { generalData } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: post.title + " - " + t$1("Blog") + " | " + generalData.title }),
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:py-48 py-36 text-white relative p-inline-default", id: "home", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 lg:text-start text-center", children: [
        /* @__PURE__ */ jsxs("h1", { className: "lg:text-5xl text-3xl font-bold", children: [
          '"Innovative Software',
          /* @__PURE__ */ jsx("br", {}),
          ' Solutions for a Digital World"'
        ] }),
        /* @__PURE__ */ jsx("p", { className: "lg:text-xl mt-6", children: '"Empowering businesses with cutting-edge technologies that streamline operations, enhance user experiences, and drive growth. From bespoke software development to scalable cloud solutions, we transform ideas into impactful digital realities."' })
      ] }),
      /* @__PURE__ */ jsx("img", { src: HeroImage, alt: "", className: "absolute w-full h-full top-0 left-0 object-cover -z-10" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-inline-default py-8 text-gray-500 text-center", id: "blogPost", children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: post.body }, className: "text-center" }) })
  ] });
}
Post$1.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Post$1
}, Symbol.toStringTag, { value: "Module" }));
function Post({ service }) {
  var _a;
  const { generalData } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: service.name + " - " + t$1("Services") + " | " + generalData.title }),
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:py-48 py-36 text-white relative p-inline-default", id: "home", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 lg:text-start text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "lg:text-5xl text-3xl font-bold", children: service.name }),
        /* @__PURE__ */ jsx("p", { className: "lg:text-xl mt-6", children: '"Empowering businesses with cutting-edge technologies that streamline operations, enhance user experiences, and drive growth. From bespoke software development to scalable cloud solutions, we transform ideas into impactful digital realities."' })
      ] }),
      /* @__PURE__ */ jsx("img", { src: HeroImage, alt: "", className: "absolute w-full h-full top-0 left-0 object-cover -z-10" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "py-8 p-inline-default flex flex-col gap-12 lg:gap-8", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 lg:gap-8 justify-center text-center lg:text-start lg:justify-between lg:odd:flex-row-reverse flex-wrap lg:flex-nowrap", children: [
      /* @__PURE__ */ jsx("div", { className: "w-[100%] lg:w-[500px] xl:w-[600px] 2xl:w-[600px] h-[300px] lg:h-[400px] shrink-0 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: service.image ?? NoImage, className: "w-full h-full object-cover object-center", alt: "" }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-center lg:text-justify max-w-6xl", children: service.content }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full grid p-inline-default gap-4", children: (_a = service.features) == null ? void 0 : _a.map((feature, index) => /* @__PURE__ */ jsx("div", { className: "col-span-1 row-span-1 p-8 rounded-md bg-[#913E49] text-white", children: /* @__PURE__ */ jsxs("div", { className: " drop-shadow-md ", children: [
      /* @__PURE__ */ jsx("img", { width: 50, height: 50, className: "object-contain object-left", src: feature.icon, alt: feature.name + " icon" }),
      /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold mb-4", children: feature.name }),
      /* @__PURE__ */ jsx("p", { className: "text-xl", children: feature.content })
    ] }) }, feature.id)) })
  ] });
}
Post.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Post
}, Symbol.toStringTag, { value: "Module" }));
function Services({ servicesPageData, services }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:py-48 py-36 text-white relative p-inline-default bg-black", id: "home", children: [
      /* @__PURE__ */ jsx("img", { src: servicesPageData == null ? void 0 : servicesPageData.hero.image, alt: "", className: "absolute w-full h-full top-0 left-0 select-none pointer-events-none object-cover opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 lg:text-start text-center relative", children: [
        /* @__PURE__ */ jsx("h1", { className: "lg:text-5xl text-3xl font-bold", children: servicesPageData == null ? void 0 : servicesPageData.hero.title }),
        /* @__PURE__ */ jsx("p", { className: "lg:text-xl mt-6", children: servicesPageData == null ? void 0 : servicesPageData.hero.content })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-inline-default py-8", id: "company", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center", children: t$1("Our Services") }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-center w-72 mt-4 mx-auto", children: t$1("Discover our suite of software solutions") }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center lg:w-full max-w-xl md:max-w-full mx-auto", children: services.map((item) => /* @__PURE__ */ jsx(ServicePreview, { service: item }, item.id)) })
    ] })
  ] });
}
Services.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page, title: t$1("Services") });
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Services
}, Symbol.toStringTag, { value: "Module" }));
const Test = () => {
  const [state, setState] = useState(0);
  return /* @__PURE__ */ jsxs("h1", { children: [
    "This is test component",
    state,
    /* @__PURE__ */ jsx("button", { onClick: () => setState(state + 1), children: "Click me" })
  ] });
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Test
}, Symbol.toStringTag, { value: "Module" }));
function Work({ workPageData, workItems, pagination }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:py-48 py-36 text-white relative p-inline-default bg-black", id: "home", children: [
      /* @__PURE__ */ jsx("img", { src: workPageData == null ? void 0 : workPageData.hero.image, alt: "", className: "absolute w-full h-full top-0 left-0 select-none pointer-events-none object-cover opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 lg:text-start text-center relative", children: [
        /* @__PURE__ */ jsx("h1", { className: "lg:text-5xl text-3xl font-bold", children: workPageData == null ? void 0 : workPageData.hero.title }),
        /* @__PURE__ */ jsx("p", { className: "lg:text-xl mt-6", children: workPageData == null ? void 0 : workPageData.hero.content })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-inline-default py-8", id: "company", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center", children: t$1("Our Work") }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-center w-72 mt-4 mx-auto", children: t$1("Discover our portfolio of successful projects that showcase our expertise and innovation.") }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 lg:flex-nowrap flex-wrap justify-center lg:w-full max-w-xl md:max-w-full mx-auto", children: workItems.map((item) => /* @__PURE__ */ jsx(WorkPreview, { work: item }, item.id)) })
    ] }),
    /* @__PURE__ */ jsx(Pagination, { pagination })
  ] });
}
Work.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page, title: t$1("Our Work") });
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Work
}, Symbol.toStringTag, { value: "Module" }));
function WorkPost({ work }) {
  const { generalData } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: work.title + " - " + t$1("Our Work") + " | " + generalData.title }),
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:py-48 py-36 text-white relative p-inline-default bg-black", id: "home", children: [
      /* @__PURE__ */ jsx("img", { src: work.image, alt: "", className: "absolute w-full h-full top-0 left-0 object-cover opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 lg:text-start text-center relative", children: [
        /* @__PURE__ */ jsx("h1", { className: "lg:text-5xl text-3xl font-bold", children: work.title }),
        /* @__PURE__ */ jsx("p", { className: "lg:text-xl mt-6", children: '"Empowering businesses with cutting-edge technologies that streamline operations, enhance user experiences, and drive growth. From bespoke software development to scalable cloud solutions, we transform ideas into impactful digital realities."' })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-inline-default py-8 text-gray-500 text-center", id: "blogPost", children: /* @__PURE__ */ jsx(BlocksRenderer, { content: work.content }) })
  ] });
}
WorkPost.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page });
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WorkPost
}, Symbol.toStringTag, { value: "Module" }));
const common = {
  en: {
    translation: {
      "Home": "Home",
      "About": "About",
      "About Us": "About Us",
      "Services": "Services",
      "Contact": "Contact",
      "Privacy Policy": "Privacy Policy",
      "Terms of Service": "Terms of Service",
      "Language": "Language",
      "Search": "Search",
      "Login": "Login",
      "Register": "Register",
      "Logout": "Logout",
      "Profile": "Profile",
      "Dashboard": "Dashboard",
      "Settings": "Settings",
      "Help": "Help",
      "Feedback": "Feedback",
      "Support": "Support",
      "FAQ": "FAQ",
      "Welcome": "Welcome",
      "Loading": "Loading...",
      "Error": "Error",
      "All Services": "All Services",
      "Our Work": "Our Work",
      "Blog": "Blog",
      "First Name": "First Name",
      "Last Name": "Last Name",
      "Email": "Email",
      "Message": "Message",
      "Send Message": "Send Message",
      "Email Address": "Email Address",
      "Your Message": "Your message...",
      "Submit": "Submit",
      "Contact Us": "Contact Us",
      "Insights": "Insights",
      "Our Services": "Our Services",
      "Discover More": "Discover More",
      "Discover More Blog Posts": "Discover More Blog Posts",
      "Our Partners": "Partners",
      "Discover our suite of software solutions": "Discover our suite of software solutions designed to transform your business.",
      "Discover our portfolio of successful projects that showcase our expertise and innovation.": "Discover our portfolio of successful projects that showcase our expertise and innovation.",
      "Explore our latest blog posts to stay updated with industry trends, insights, and expert opinions.": "Explore our latest blog posts to stay updated with industry trends, insights, and expert opinions.",
      "Read More": "Read More",
      "Learn More": "Learn More"
    }
  },
  ar: {
    translation: {
      "Home": "الرئيسية",
      "About": "من نحن",
      "About Us": "عن الشركة",
      "Services": "خدماتنا",
      "Contact": "اتصل بنا",
      "Privacy Policy": "سياسة الخصوصية",
      "Terms of Service": "شروط الخدمة",
      "Language": "اللغة",
      "Search": "بحث",
      "Login": "تسجيل الدخول",
      "Register": "تسجيل",
      "Logout": "تسجيل الخروج",
      "Profile": "الملف الشخصي",
      "Dashboard": "لوحة التحكم",
      "Settings": "الإعدادات",
      "Help": "مساعدة",
      "Feedback": "ملاحظات",
      "Support": "الدعم",
      "FAQ": "الأسئلة الشائعة",
      "Welcome": "مرحبًا بك",
      "Loading": "جار التحميل...",
      "Error": "خطأ",
      "All Services": "جميع الخدمات",
      "Our Work": "أعمالنا",
      "Blog": "المقالات",
      "First Name": "الاسم الأول",
      "Last Name": "الاسم الأخير",
      "Email": "البريد الإلكتروني",
      "Message": "الرسالة",
      "Send Message": "إرسال الرسالة",
      "Email Address": "البريد الإلكتروني",
      "Your Message": "رسالتك...",
      "Submit": "إرسال",
      "Contact Us": "اتصل بنا",
      "Insights": "احصائيات",
      "Our Services": "خدماتنا",
      "Discover More": "اكتشف المزيد",
      "Discover More Blog Posts": "اكتشف المزيد من المقالات",
      "Our Partners": "شركاؤنا",
      "Discover our suite of software solutions": "اكتشف مجموعة حلول البرمجيات لدينا المصممة لتحويل عملك.",
      "Discover our portfolio of successful projects that showcase our expertise and innovation.": "اكتشف محفظتنا من المشاريع الناجحة التي تعرض خبرتنا وابتكارنا.",
      "Explore our latest blog posts to stay updated with industry trends, insights, and expert opinions.": "استكشف أحدث مقالاتنا للبقاء على اطلاع باتجاهات الصناعة والأفكار وآراء الخبراء.",
      "Read More": "اقرأ المزيد",
      "Learn More": "تعرف على المزيد"
    }
  }
};
const resources = {
  en: {
    translation: {
      ...common.en.translation
    }
  },
  ar: {
    translation: {
      ...common.ar.translation
    }
  }
};
let savedLocale = "en";
if (typeof window !== "undefined") {
  savedLocale = window.localStorage.getItem("locale") || "en";
}
i18n.use(initReactI18next).init({
  resources,
  lng: savedLocale,
  // set the initial language
  fallbackLng: "en",
  // use en if detected lng is not available
  interpolation: {
    escapeValue: false
    // react already safes from xss
  }
});
const Ziggy$1 = { "routes": { "sanctum.csrf-cookie": { "uri": "sanctum/csrf-cookie", "methods": ["GET", "HEAD"] }, "cache.clear": { "uri": "api/cache-clear", "methods": ["POST"] }, "setLocale": { "uri": "locale/{locale}", "methods": ["GET", "HEAD"], "wheres": { "locale": "[a-zA-Z]+" }, "parameters": ["locale"] }, "home": { "uri": "/", "methods": ["GET", "HEAD"] }, "about": { "uri": "about", "methods": ["GET", "HEAD"] }, "blog": { "uri": "blog", "methods": ["GET", "HEAD"] }, "work": { "uri": "work", "methods": ["GET", "HEAD"] }, "services": { "uri": "services", "methods": ["GET", "HEAD"] }, "storage.local": { "uri": "storage/{path}", "methods": ["GET", "HEAD"], "wheres": { "path": ".*" }, "parameters": ["path"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy$1.routes, window.Ziggy.routes);
}
{
  typeof window === "undefined" && console.log("SSR is enabled");
}
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.tsx": __vite_glob_0_0, "./Pages/Blog.tsx": __vite_glob_0_1, "./Pages/Home.tsx": __vite_glob_0_2, "./Pages/Post.tsx": __vite_glob_0_3, "./Pages/Service.tsx": __vite_glob_0_4, "./Pages/Services.tsx": __vite_glob_0_5, "./Pages/Test.tsx": __vite_glob_0_6, "./Pages/Work.tsx": __vite_glob_0_7, "./Pages/WorkPost.tsx": __vite_glob_0_8 });
      return pages[`./Pages/${name}.tsx`];
    },
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
