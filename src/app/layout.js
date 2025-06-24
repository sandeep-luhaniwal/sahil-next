import "./globals.css";

export const metadata = {
  title: "Sahil",
  description: "Explore iconic landmarks, hidden gems, and local flavors—all in one app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
