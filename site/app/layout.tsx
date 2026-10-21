import "./globals.css";

export const metadata = { title: "My Site", description: "Starter built with R3F, GSAP, shaders and glass." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
