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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
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