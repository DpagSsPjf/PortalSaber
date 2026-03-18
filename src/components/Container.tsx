"use client";
import Image, { StaticImageData } from 'next/image';
import { LinkButton } from '@/components/LinkButton';
import { Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Props = {
    img: string | StaticImageData;
    buttonText: string;
    href: string;
    courseId?: string; // ID do curso para edição
}

export const Container = ({ img, buttonText, href, courseId }: Props) => {
    const router = useRouter();


    const handleCardClick = () => {
        router.push(href);
    };
    
    return (
        <div 
            onClick={handleCardClick}
            className="relative bg-gradient-to-br from-blue-400 w-64 h-64 rounded-lg shadow-md p-4 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:scale-[1.02] transition-transform duration-200"
        >   
            <Image 
                src={img}
                alt="Container image"
                width={100}
                height={100}
            />
            <LinkButton 
                href={href}
                label={buttonText}
            />
        </div>
    );
};
