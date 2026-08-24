import "./globals.css";

export const metadata = {
  title: "Rooted",
  description: "Scripture for the woman. Formation for the home.",
  icons: {
    icon: [
      {
        url: "/icon-192.png",
        type: "image/png",
      },
      {
        url: "/icon-512.png",
        type: "image/png",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F1E8",
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
