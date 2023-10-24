'use client';

import VideoPlayer from '@/components/VideoPlayer';
import { HLS_TYPES, SOURCE_TYPES, VOD_OPTIONS } from '@/utils/constant';
import { Box, Grid, GridItem, Select } from '@chakra-ui/react';
import { useState } from 'react';

export default function Streaming() {
  const [isLowLatency, setIsLowLatency] = useState<boolean>(false);
  const HLS_URL =
    'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8';
  const HLS_LL_URL =
    'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8';
  const handleSetHlsType = (hlsType: string) => {
    setIsLowLatency(hlsType === 'hlsll');
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
            justifySelf={'center'}
            margin={4}
            width={'50%'}
            shadow={'md'}
          >
            <Select
              // placeholder="Select HLS Type"
              onChange={(e: any) => handleSetHlsType(e.target.value)}
              defaultValue={HLS_TYPES[0].key}
            >
              {HLS_TYPES.map((item) => {
                return (
                  <option value={item.key} key={item.key}>
                    {item.value}
                  </option>
                );
              })}
            </Select>
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
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
