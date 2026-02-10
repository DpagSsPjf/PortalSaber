import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/assets/images/Icone_Brasao_PJF.png';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Ícone mais recente para X/Twitter

export default function Footer() {
  return (
    <footer className="bg-custom-blue py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Informações da Prefeitura */}
        <div className="text-sm mb-6 sm:mb-0 text-center sm:text-left">
          <h1 className="font-semibold text-blue-300 ">Prefeitura de Juiz de Fora</h1>
          <p className="text-gray-200">Av. Brasil, 2001 | Centro - Juiz de Fora/MG - CEP: 36060-010</p>
          <p className="text-gray-200 mt-1">
            © {new Date().getFullYear()} Todos os direitos reservados. {/* Site versão X.X (se aplicável) */}
          </p>
        </div>

        {/* Ícones de Acesso da Prefeitura */}
        <div className="flex items-center space-x-4">
          <Link href="https://www.pjf.mg.gov.br/" target='_blank' rel="noopener noreferrer" aria-label="Site oficial da Prefeitura de Juiz de Fora">
            <Image
              src={Logo}
              alt="Logo da Prefeitura de Juiz de Fora"
              className="h-6 w-6 hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link href="https://www.facebook.com/JuizdeForaPJF/" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Prefeitura de Juiz de Fora">
            <FaFacebookF className="text-blue-500 hover:text-blue-400 h-5 w-5 transition-colors" />
          </Link>
          <Link href="https://x.com/prefeiturajf" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) da Prefeitura de Juiz de Fora">
            <FaXTwitter className="text-black hover:text-blue-800 h-5 w-5 transition-colors" />
          </Link>
          <Link href="https://www.youtube.com/JuizdeForaPJF" target="_blank" rel="noopener noreferrer" aria-label="YouTube da Prefeitura de Juiz de Fora">
            <FaYoutube className="text-red-500 hover:text-blue-800 h-5 w-5 transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/prefeiturajuizdefora/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Prefeitura de Juiz de Fora">
            <FaInstagram className="text-orange-700 hover:text-blue-800 h-5 w-5 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}