/*
 * VERNE ENGINEERING
 * Service icons — SVG line edition
 */

(function () {
    "use strict";

    const icons = [
        // 01 - Ingeniería: engranaje técnico
        `<circle cx="24" cy="24" r="9"/>
         <circle cx="24" cy="24" r="3"/>
         <path d="M21 5h6l1.2 5.5 4 1.7 4.7-3 4.2 4.2-3 4.7 1.7 4L45 21v6l-5.5 1.2-1.7 4 3 4.7-4.2 4.2-4.7-3-4 1.7L27 45h-6l-1.2-5.5-4-1.7-4.7 3-4.2-4.2 3-4.7-1.7-4L3 27v-6l5.5-1.2 1.7-4-3-4.7 4.2-4.2 4.7 3 4-1.7z"/>`,

        // 02 - Licencias de actividad: nave industrial
        `<path d="M6 43V19l13-8v8l13-8v32"/>
         <path d="M32 23h10v20H6"/>
         <path d="M11 27h5v6h-5zM21 27h5v6h-5z"/>
         <path d="M36 29h3M36 35h3"/>
         <path d="M17 43v-6h9v6"/>`,

        // 03 - Certificación: documento verificado
        `<path d="M11 5h18l9 9v29H11z"/>
         <path d="M29 5v9h9"/>
         <path d="M17 22h14M17 27h8"/>
         <circle cx="27" cy="35" r="8"/>
         <path d="m23 35 3 3 5-6"/>`,

        // 04 - Diseño y desarrollo: cubo 3D
        `<path d="m24 5 17 10v19L24 44 7 34V15z"/>
         <path d="m7 15 17 10 17-10"/>
         <path d="M24 25v19"/>
         <path d="m16 10 17 10"/>`,

        // 05 - Diseño mecánico: engranajes
        `<circle cx="19" cy="28" r="8"/>
         <circle cx="19" cy="28" r="3"/>
         <path d="M16 16h6l1 4 3 1 3-2 4 4-2 3 1 3-2 3-4 1-1 4h-6l-1-4-4-1-3 2-4-4 2-3-1-4 2-3 4-1z"/>
         <circle cx="35" cy="13" r="5"/>
         <path d="M35 5v3M35 18v3M27 13h3M40 13h3M29.5 7.5l2 2M38.5 16.5l2 2M40.5 7.5l-2 2"/>`,

        // 06 - Diseño industrial: producto y trazado
        `<path d="M8 37 31 14l7 7-23 23H8z"/>
         <path d="m27 18 7 7M8 37l7 7"/>
         <path d="M8 9h17M8 9v17"/>
         <path d="M8 15h6M15 9v6"/>
         <circle cx="37" cy="11" r="5"/>
         <path d="M37 6V3M42 11h3"/>`,

        // 07 - Análisis computacional: malla FEA
        `<path d="m24 5 19 11-4 23-23 4L5 24z"/>
         <path d="M24 5 20 22 5 24M20 22l19 17M20 22l23-6M20 22l-4 21M5 24l34 15"/>
         <circle cx="24" cy="5" r="2"/>
         <circle cx="43" cy="16" r="2"/>
         <circle cx="39" cy="39" r="2"/>
         <circle cx="16" cy="43" r="2"/>
         <circle cx="5" cy="24" r="2"/>
         <circle cx="20" cy="22" r="2"/>`,

        // 08 - Automatización y software: código y flujo
        `<rect x="5" y="8" width="38" height="29" rx="3"/>
         <path d="M5 16h38"/>
         <circle cx="10" cy="12" r="1"/>
         <circle cx="15" cy="12" r="1"/>
         <path d="m18 22-5 5 5 5M30 22l5 5-5 5M27 20l-6 14"/>
         <path d="M18 43h12M24 37v6"/>`
    ];

    const cards = document.querySelectorAll(".service-grid .service");

    cards.forEach((card, index) => {
        if (index >= icons.length) return;

        const container = card.querySelector(".service-icon");
        if (!container) return;

        container.innerHTML = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                focusable="false"
            >
                ${icons[index]}
            </svg>
        `;
    });
})();
