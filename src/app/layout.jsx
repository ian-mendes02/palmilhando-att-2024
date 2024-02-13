import {Poppins} from 'next/font/google';
import '../../public/css/globals.css';
import '../../public/css/carousel.css';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});
export default function RootLayout({children}) {
    return (
        <html lang="pt" className={poppins.className}>
            <head>
                <link rel="shortcut icon" type='image/x-icon' href="/img/ico/palmilhas_palmilhando.ico" />
            </head>
            <body>
                {children}
                <noscript>
                    <iframe height={0} src="https://www.googletagmanager.com/ns.html?id=GTM-5TTGRP4" style={{display:'none',visibility:'hidden', width:0}}></iframe>
                </noscript>
            </body>
        </html>
    );
}