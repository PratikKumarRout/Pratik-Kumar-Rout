import "./globals.css";

export const metadata = {
  title: "PKR Portfolio",
  description: "This is my Portfolio with minimal UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
