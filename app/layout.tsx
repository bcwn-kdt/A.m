import '../styles/globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: any) {
  return (
    <html lang="vi">
      <body>
        <nav className="nav">
          <Link href="/">Mèo Đen Không Ngủ</Link>
          <div>
            <Link href="/about">Giới thiệu</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
