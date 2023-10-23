'use client';

import VideoPlayer from '@/components/VideoPlayer';
import { HLS_TYPES, SOURCE_TYPES, VOD_OPTIONS } from '@/utils/constant';
import { Box, Grid, GridItem, Select } from '@chakra-ui/react';
import { useState } from 'react';

export default function Streaming() {
  const [selectedUrl, setSelectedUrl] = useState<string>(VOD_OPTIONS[0].hlsUrl);
  const [isLowLatency, setIsLowLatency] = useState<boolean>(false);

  const handleSetHlsType = (hlsType: string) => {
    setIsLowLatency(hlsType === 'hlsll');
  };

  const handleSetUrl = (key: number) => {
    const selectedVod = VOD_OPTIONS.filter((item) => item.key == key)?.[0];
    setSelectedUrl(isLowLatency ? selectedVod?.hlsllUrl : selectedVod?.hlsUrl);
  };

  return (
    <>
      <title>Video-on-demand player</title>
      <Box p="5" h="100vh" w="100%">
        <Grid border={'md'} templateRows={`repeat(20, 1fr)`} w="full" h="100vh">
          <GridItem
            rowSpan={1}
            display={'flex'}
            justifyContent={'center'}
            margin={4}
            width={'50%'}
          >
            This is sample of streaming video
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
                videoSource={
                  'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8'
                }
                type={SOURCE_TYPES.MPEGURL}
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
