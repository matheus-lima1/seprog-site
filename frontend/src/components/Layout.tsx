import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface Iprops{
    children: React.ReactNode;
}

const Layout = ({children} : Iprops) => {
  return (
    <>
        <Header/>
            <main>
                {children}
            </main>
        <Footer/>
    </>
  )
}

export default Layout