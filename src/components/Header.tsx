"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  children?: ReactNode;
};

export function Header({ children }: Props) {
  return (
    <header className="fixed top-0 left-0 w-full bg-custom-blue py-7 px-4 sm:px-6 lg:px-8 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo e Nome do Portal */}
        <Link href="/" className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
          {/* Logo Prefeitura - Menor em mobile */}
          <div className="w-40 md:w-auto">
            <Image
              src="/assets/images/logoBranco.png"
              alt="Logo Prefeitura"
              width={300}
              height={100}
              layout="responsive"
            />
          </div>

          {/* Separador - Visível apenas em telas maiores */}
          <div className="hidden md:block text-white text-4xl font-light">|</div>

          {/* Logo Portal Saber - Menor em mobile */}
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 md:w-10 md:h-10 fill-white" viewBox="0 0 24 24">
              <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
            </svg>
            <div className="font-black text-xl md:text-3xl tracking-wider text-white">PORTAL SABER</div>
          </div>
        </Link>

        {/* Custom Navigation Links passed as children */}
        {children && (
          <nav className="hidden md:flex gap-6 items-center">
            {children}
          </nav>
        )}
      </div>
    </header>
  );
};