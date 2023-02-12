"use client" // needed for ThemeProvider to work
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import '../../styles/globals.css'
import { ThemeProvider } from 'next-themes'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html >
      <head />
      <body className="dark:bg-gray-800">
      <ThemeProvider attribute="class" >
      {/* <Header /> */}
      <Navbar />
      {/* <Banner /> */}

        {children}
      <Footer />
      </ThemeProvider>
        </body>

    </html>
  )
}
