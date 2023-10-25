'use client';

import VideoPlayer from '@/components/VideoPlayer';
import { SOURCE_TYPES } from '@/utils/constant';
import { Box, Grid, GridItem, HStack, Switch } from '@chakra-ui/react';
import { useState } from 'react';

export default function Streaming() {
  const [isLowLatency, setIsLowLatency] = useState<boolean>(false);
  const HLS_URL =
    'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8';
  const HLS_LL_URL =
    'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8';
  const handleSetHlsType = (hlsType: boolean) => {
    setIsLowLatency(hlsType);
  };

  return (
    <>
      <title>Video-on-demand player</title>
      <Box p="5" h="100vh" w="100%">
        <Grid border={'md'} templateRows={`repeat(20, 1fr)`} w="full" h="100vh">
          <GridItem
            rowSpan={1}
            display={'block'}
            justifyContent={'center'}
            justifySelf={'flex-start'}
            margin={4}
            width={'50%'}
          >
            <HStack>
              <Box>HLS Low Latency</Box>
              <Switch
                id="isHLSLL"
                onChange={(e) => handleSetHlsType(e.target.checked)}
              />
            </HStack>
          </GridItem>
          <GridItem
            rowSpan={19}
            display={'flex'}
            justifyContent={'center'}
            alignContent={'center'}
            flexWrap={'wrap'}
            shadow={'md'}
            margin={4}
          >
            <Box
              maxW={'var(--chakra-sizes-container-lg)'}
              maxH={'var(--chakra-sizes-container-sm)'}
              w={'full'}
              h={'full'}
            >
              <VideoPlayer
                videoSource={isLowLatency ? HLS_LL_URL : HLS_URL}
                type={SOURCE_TYPES.MPEGURL}
                poster={'/poster/big_buck_bunny.jpg'}
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
