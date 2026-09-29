import "./globals.css";

export const metadata = {
  title: "Welcome Itz Fizz — Scroll-driven Hero",
  description:
    "A smooth, scroll-driven car animation with an animated welcome headline and impact statistics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
