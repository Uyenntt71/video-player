import {
  Box,
  BoxProps,
  Flex,
  IconButton,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  List,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './styles.css';
import { usePathname } from 'next/navigation';

const SPACE_2 = 'var(--chakra-space-2)';
const SPACE_6 = 'var(--chakra-space-6)';
const SPACE_9 = 'var(--chakra-space-9)';
const SPACE_12 = 'var(--chakra-space-12)';
const SIZE_10 = 'var(--chakra-sizes-10)';

interface LinkItemProps {
  key: number;
  name: string;
  icon?: string;
  link?: string;
  subItems?: Array<LinkItemProps>;
  paddingLeft: number | string;
  opacity?: number;
}

interface SidebarProps extends BoxProps {
  onOpen: () => void;
  isOpen: boolean;
}

interface SubMenuProps {
  menuItem: LinkItemProps;
  selectedItems: Array<number> | undefined;
}

const SubMenu = ({ menuItem, selectedItems }: SubMenuProps) => {
  const { name, link, subItems, paddingLeft, key, opacity, icon } = menuItem;

  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const backgroundColor = selectedItems?.includes(key)
    ? `rgba(51, 60, 74, ${opacity})`
    : '';

  return (
    <>
      <VStack spacing={2} align="stretch" width="100%">
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            paddingLeft: paddingLeft,
            paddingBottom: SPACE_2,
            paddingTop: SPACE_2,
            height: SIZE_10,
            backgroundColor: backgroundColor,
          }}
        >
          <Box marginRight={'0.1rem'} display={{ base: 'none', md: 'block' }}>
            {icon && (
              <Image src={icon} alt="Logo" width={20} height={20} priority />
            )}
          </Box>
          {link ? (
            <Link href={link} key={name}>
              <Text className="menu-item" id={key.toString()}>
                {name}
              </Text>
            </Link>
          ) : (
            <Text className="menu-item">{name}</Text>
          )}
          {subItems && subItems.length > 0 && (
            <IconButton
              icon={isSubMenuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              variant="ghost"
              onClick={toggleSubMenu}
              aria-label={
                isSubMenuOpen ? 'Collapse sub-menu' : 'Expand sub-menu'
              }
              style={{ lineHeight: '1' }}
            />
          )}
        </Box>
        {subItems && subItems.length > 0 && (
          <List
            display={isSubMenuOpen ? 'block' : 'none'}
            style={{ margin: '0px !important' }}
          >
            {subItems.map((item: LinkItemProps, index: number) => (
              <SubMenu
                key={index}
                menuItem={item}
                selectedItems={selectedItems}
              />
            ))}
          </List>
        )}
      </VStack>
    </>
  );
};

export default function Sidebar({ onOpen, isOpen, ...rest }: SidebarProps) {
  const pathname = usePathname();
  const [selectedItems, setSelectedItems] = useState<Array<number>>();

  const menuItems: Array<LinkItemProps> = [
    {
      key: 1,
      name: 'Video on demand',
      icon: '/vod_ic.png',
      subItems: [],
      link: `/vod`,
      paddingLeft: SPACE_6,
      opacity: 1,
    },
    {
      key: 2,
      name: 'Streaming',
      icon: '/streaming_ic.png',
      paddingLeft: SPACE_6,
      opacity: 1,
      subItems: [],
      link: `/streaming`,
    },
  ];

  const findMenuItemAndAncestors = (
    pathname: string,
    items: Array<LinkItemProps>
  ): Array<number> => {
    let res: Array<number> = [];
    for (const item of items) {
      if (item.link) {
        if (
          item.link.substring(3) === pathname.substring(3) ||
          pathname.substring(3).startsWith(item.link.substring(3))
        ) {
          return [item.key];
        }
      }
      if (item.subItems && item.subItems.length > 0) {
        const result = findMenuItemAndAncestors(pathname, item.subItems);
        if (result && result.length > 0) {
          return [...res, ...result, item.key];
        }
      }
    }
    return res;
  };

  useEffect(() => {
    const selectedItemAndAncestors = findMenuItemAndAncestors(
      pathname,
      menuItems
    );
    setSelectedItems(selectedItemAndAncestors);
  }, [pathname]);

  return (
    <Box
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bg={useColorModeValue('#111825', 'white')}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      h="auto"
      maxH={'100vh'}
      minH={'100vh'}
      w={'56'}
      {...rest}
    >
      <VStack
        spacing={4}
        alignItems="flex-start"
        color={'white'}
        width={'100%'}
      >
        <Flex
          h="20"
          alignItems={'center'}
          mx="8"
          justifyContent="space-between"
          display={'flex'}
          flexDirection={'row'}
        >
          <Image
            src="/logo2.svg"
            alt="Video player Logo"
            width={180}
            height={50}
            priority
          />
        </Flex>
        <Box className="menuBox">
          {menuItems.map((item: LinkItemProps, index: number) => {
            return (
              <SubMenu
                key={index}
                menuItem={item}
                selectedItems={selectedItems}
              />
            );
          })}
        </Box>
      </VStack>
    </Box>
  );
}
