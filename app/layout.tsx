import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'M. Stevens Roofing and Remodeling',
  description: `M. Stevens Roofing is a family-owned and operated business, 
    in South Hampton, NY. We are fully licensed and insured, and we strive to 
    provide the best roofing service and quality available on Long Island. At M. Stevens 
    Roofing, we consider good value as exceptional quality at a fair price with a written guarantee. 
    We believe that our high ethical standards will be an example in the roofing industry and that they will resonate 
    with thousands of customers. Our 25-year commitment to the residents of Long Island has not gone unnoticed by the
    communities of Nassau and Suffolk County. Rest assured that with M. Stevens Roofing, you are getting the very best so give us a call today 
    for a quote!`
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
