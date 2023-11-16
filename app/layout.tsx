import { montserrat } from './ui/fonts';
import './ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
      <h1>Esto es parte del layout</h1>
        
        {children}
          <footer className='flex justify-center items-center'>

            hecho con amor por la gente de Vercel
          </footer>
        </body>
    </html>
  );
}
