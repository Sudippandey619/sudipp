// _app.tsx
// import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';  
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';

function App({ Component, pageProps }: AppProps) {
  return (
    
      <div>
        <Navbar />
        <main className="pt-16"> {/* Padding top to avoid content under fixed navbar */}
          <Component {...pageProps} />
        </main>
      </div>
   
  );
}

export default App;
