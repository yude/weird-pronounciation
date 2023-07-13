import "./globals.css";

import Link from "next/link";

export const metadata = {
  title: "異常発音",
  description: "Weird pronounciation database",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="max-w-2xl mx-auto mt-2">
        <div className="text-center font-serif bg-pink-200/75 text-4xl tracking-wide decoration-pink-500 decoration-4">
          <p style={{ transform: `scaleX(2.9)` }}>
            <Link href="/">異常発音</Link>
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}
