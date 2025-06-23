import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pastelaria do seu Zé",
  description: "Deliciosos pastéis e pizzas",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="container">{children}</div>
      </body>
    </html>
  )
}

