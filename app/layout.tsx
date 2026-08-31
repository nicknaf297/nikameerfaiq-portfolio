import localFont from 'next/font/local';
import Header from './components/Header';
import './globals.css';

const chakraPetchBold = localFont({ src: './fonts/ChakraPetch-Bold.ttf', variable: '--font-cp-bold' });
const chakraPetchSemiBold = localFont({ src: './fonts/ChakraPetch-SemiBold.ttf', variable: '--font-cp-semibold' });
const chakraPetchRegular = localFont({ src: './fonts/ChakraPetch-Regular.ttf', variable: '--font-cp-reg' });
const sourceCodeReg = localFont({ src: './fonts/SourceCodePro-Regular.ttf', variable: '--font-sc-reg' });
const sourceCodeBold = localFont({ src: './fonts/SourceCodePro-Bold.ttf', variable: '--font-sc-bold' });
const sourceCodeItalic = localFont({ src: './fonts/SourceCodePro-Italic.ttf', variable: '--font-sc-italic' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`
        ${chakraPetchBold.variable} 
        ${chakraPetchSemiBold.variable} 
        ${chakraPetchRegular.variable} 
        ${sourceCodeReg.variable} 
        ${sourceCodeBold.variable} 
        ${sourceCodeItalic.variable}
      `}
    >
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}