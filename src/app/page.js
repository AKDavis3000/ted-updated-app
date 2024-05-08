// 'use client';

import Image from 'next/image';
import Footer from './Components/Footer';
import Main1 from './Components/Main1';
import Nav from './Components/Nav';
import './scss/styles.scss';

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Main1 />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
