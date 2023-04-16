import { Poppins } from "next/font/google";
import './globals.css'
import Header from "./components/Header";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: 'Next 13 Features',
  description: 'This consists of Next 13 features',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
