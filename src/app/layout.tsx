import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";
import NavbarComp from './NavbarComp';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>  
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <NavbarComp />
        {children}
      </body>
    </html>
  );
}
