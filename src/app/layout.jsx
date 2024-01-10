import './globals_copy.css'
import { Poppins } from 'next/font/google';
const poppins = Poppins({
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin'],
})
export const metadata = {
    title: 'Palmilhando'
}
export default function RootLayout({children}) {
    return (
        <html lang="pt" className={poppins.className}>
            <body>{children}</body>
        </html>
    );
}