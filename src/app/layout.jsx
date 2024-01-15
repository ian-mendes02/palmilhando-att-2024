import { Poppins } from 'next/font/google';
import '../../public/css/globals.css'
import '../../public/css/carousel.css'
const poppins = Poppins({
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin'],
})
export default function RootLayout({children}) {
    return (
        <html lang="pt" className={poppins.className}>
            <body>{children}</body>
        </html>
    );
}