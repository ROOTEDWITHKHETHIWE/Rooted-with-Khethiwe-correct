import "./globals.css";

export const metadata = {
  title: "Rooted",
  description: "Scripture for the woman. Formation for the home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
