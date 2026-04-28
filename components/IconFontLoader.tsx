"use client";

import { useEffect } from "react";

// Material Symbols stylesheet is render-blocking when added in <head>. Inject it
// client-side after first paint so the initial HTML response stays light.
export default function IconFontLoader() {
  useEffect(() => {
    const id = "material-symbols-stylesheet";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}
