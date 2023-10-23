'use client';

import VideoPlayer from '@/components/VideoPlayer';
import { HLS_TYPES, SOURCE_TYPES, VOD_OPTIONS } from '@/utils/constant';
import { Box, Grid, GridItem, Select } from '@chakra-ui/react';
import { useState } from 'react';

export default function Vod() {
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
            <Grid templateColumns="repeat(10, 1fr)" gap={4}>
              <GridItem colSpan={3} shadow={'md'}>
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
              <GridItem colSpan={7} shadow={'md'}>
                <Select
                  // placeholder="Select Video"
                  onChange={(e: any) => handleSetUrl(e.target.value)}
                  defaultValue={VOD_OPTIONS[0].hlsUrl}
                >
                  {VOD_OPTIONS.map((item) => {
                    return (
                      <option value={item.key} key={item.key}>
                        {item.name}
                      </option>
                    );
                  })}
                </Select>
              </GridItem>
            </Grid>
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
                videoSource={selectedUrl}
                type={SOURCE_TYPES.MPEGURL}
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
