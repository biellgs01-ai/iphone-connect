import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// META PIXEL
declare global {
  interface Window {
    fbq: any;
  }
}

(function(f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod
      ? n.callMethod.apply(n, arguments)
      : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = true;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode!.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "https://connect.facebook.net/en_US/fbevents.js"
);

window.fbq("init", "1461324482107230");
window.fbq("track", "PageView");

// RENDER APP
createRoot(document.getElementById("root")!).render(<App />);