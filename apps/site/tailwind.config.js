/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "688px",
      lg: "1170px",
      xl: "1350px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#ff5722",
        "primary-content": "#ffffff",
        secondary: "#27272a",
        "secondary-content": "#f4f4f5",
        neutral: "#18181b", // "#1F2937"
        "neutral-content": "#e4e4e7",
        "base-100": "#d4d4d8",
        "base-200": "#a1a1aa", // "#71717A"
        "base-300": "#52525b", // "#6B7280", "#64748B", "#5D6D7E"
        "base-content": "#3f3f46", // "#2E4053"
        success: "#059669",
        "success-content": "#d1fae5",
        warning: "#f59e0b",
        "warning-content": "#fef3c7",
        info: "#06b6d4",
        "info-content": "#F4F7FB",
        accent: "#056BF1",
        "accent-content": "#F0F9FF",
        error: "#FF7E85",
        "error-content": "#FEE2E2",
      },
      boxShadow: {
        dropShadowXs: "0px 1px 1px rgba(24, 24, 27, 0.03), 0px 2px 4px rgba(24, 24, 27, 0.06)",
        dropShadowSm: " 0px 2px 3px rgba(24, 24, 27, 0.02), 0px 4px 8px rgba(24, 24, 27, 0.06)",
        dropShadowMd: "0px 2px 4px rgba(24, 24, 27, 0.03), 0px 6px 12px rgba(24, 24, 27, 0.08)",
        dropShadowLg: "0px 8px 16px rgba(24, 24, 27, 0.08)",
        dropShadowXl: "0px 12px 24px rgba(24, 24, 27, 0.08)",
        dropShadow2xl: "0px 24px 48px rgba(24, 24, 27, 0.12)",
        boxShadowXl: "0px -8px 24px rgba(15, 23, 42, 0.15)",
      },
    },
  },
};
