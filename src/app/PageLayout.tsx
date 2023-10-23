import Sidebar from '@/components/Sidebar';
import { Box, Flex, useDisclosure, VStack } from '@chakra-ui/react';

import { useEffect, useState } from 'react';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex w="full" maxH="full" overflowY={'hidden'}>
      <Sidebar onOpen={onOpen} isOpen={true} className="sidebar" />
      {children}
    </Flex>
  );
}
