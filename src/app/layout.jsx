import {Poppins} from 'next/font/google';
import '$/css/globals.css';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});
export default function RootLayout({children}) {
    return (
        <html lang="pt" className={poppins.className}>
            <head>
                <link rel="shortcut icon" type='image/x-icon' href="https://palmilhando.com.br/assinatura/img/ico/palmilhas_palmilhando.ico" />
                <script src="https://kit.fontawesome.com/39a4d158e8.js" crossOrigin="anonymous"></script>
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