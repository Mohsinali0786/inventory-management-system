// tailwind.config.js
import { withUt } from "uploadthing/tw";

export default withUt({
  // Your existing Tailwind config
  // content: ["./src/**/*.{js,ts,tsx,mdx}"],
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
  content: ["./src/**/*.{ts,tsx,mdx}"],
});

