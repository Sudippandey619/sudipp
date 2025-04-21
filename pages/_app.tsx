// _app.tsx
// import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';  
import { AppProps } from 'next/app';
import '@fortawesome/fontawesome-free/css/all.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />


// import Navbar from '../components/Navbar';

function App({ Component, pageProps }: AppProps) {
  return (
    
      <div>
        {/* <Navbar /> */}
        <main className="pt-16"> {/* Padding top to avoid content under fixed navbar */}
          <Component {...pageProps} />
          

        </main>
      </div>
   
  );
}

export default App;

