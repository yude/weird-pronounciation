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
      <body className="max-w-2xl mx-auto mb-3">
        <div className="text-center font-serif bg-pink-200/75 tracking-wide decoration-pink-500 decoration-4">
          <Link href="/">
            <p
              className="text-6xl"
              style={{
                transform: `scale(1, 0.4)`,
                marginTop: "-12px",
                marginBottom: "-16px",
              }}
            >
              異常発音
            </p>
            <p className="text-md">Weird pronounciation</p>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
