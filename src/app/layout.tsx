'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Flex, useDisclosure } from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Flex w="full" maxH="full" overflowY={'hidden'}>
            <Sidebar onOpen={onOpen} isOpen={true} className="sidebar" />
            {children}
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
