import React from 'react';
import { Footer } from '../footer/footer-page';
import { Header } from '../header/header';

const MainLayout = ({ children }) =>
(
    <>
        <Header />
        {children}
        <Footer />
    </>
)


export default MainLayout