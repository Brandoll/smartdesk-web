/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "surface-container": "#edeeef",
        "on-surface": "#191c1d",
        "error": "#ba1a1a",
        "secondary-container": "#e2e2e5",
        "on-secondary-container": "#636467",
        "tertiary-fixed-dim": "#c0c7cf",
        "tertiary": "#424950",
        "on-surface-variant": "#5b403d",
        "on-primary-fixed": "#411200",
        "on-tertiary-fixed": "#151c22",
        "on-background": "#191c1d",
        "secondary-fixed-dim": "#c6c6c9",
        "surface-container-low": "#f3f4f5",
        "outline": "#8f6f6c",
        "tertiary-fixed": "#dce3ec",
        "secondary": "#5d5e61",
        "tertiary-container": "#5a6168",
        "inverse-surface": "#2e3132",
        "secondary-fixed": "#e2e2e5",
        "on-primary": "#ffffff",
        "surface-container-highest": "#e1e3e4",
        "primary": "#F05023",
        "background": "#f8f9fa",
        "primary-container": "#D04018",
        "inverse-primary": "#FFBCA6",
        "surface-container-lowest": "#ffffff",
        "on-secondary": "#ffffff",
        "surface-tint": "#F05023",
        "on-tertiary": "#ffffff",
        "inverse-on-surface": "#f0f1f2",
        "surface-dim": "#d9dadb",
        "surface-variant": "#e1e3e4",
        "on-tertiary-container": "#d5dce5",
        "on-secondary-fixed-variant": "#454749",
        "surface-container-high": "#e7e8e9",
        "on-primary-container": "#FFE0D6",
        "on-tertiary-fixed-variant": "#41484e",
        "outline-variant": "#fbd38d",
        "on-secondary-fixed": "#1a1c1e",
        "surface-bright": "#f8f9fa",
        "on-primary-fixed-variant": "#A82F0B",
        "primary-fixed-dim": "#FFBCA6",
        "surface": "#f8f9fa",
        "on-error-container": "#93000a",
        "on-error": "#ffffff",
        "primary-fixed": "#FFDBCE",
        "error-container": "#ffdad6"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "lg": "40px",
        "xl": "64px",
        "sm": "12px",
        "xs": "4px",
        "margin": "32px",
        "gutter": "24px",
        "base": "8px",
        "md": "24px"
      },
      fontFamily: {
        "headline-xl": ["Space Grotesk", "sans-serif"],
        "headline-lg": ["Space Grotesk", "sans-serif"],
        "body-sm": ["Hanken Grotesk", "sans-serif"],
        "headline-lg-mobile": ["Space Grotesk", "sans-serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"],
        "label-md": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Space Grotesk", "sans-serif"]
      },
      fontSize: {
        "headline-xl": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "body-sm": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "headline-lg-mobile": ["24px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-md": ["15px", { "lineHeight": "1.2", "letterSpacing": "0.01em", "fontWeight": "600" }],
        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "500" }]
      }
    }
  },
  plugins: [],
}
