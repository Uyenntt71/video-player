'use client';

import VideoPlayer from '@/components/VideoPlayer';
import { HLS_TYPES, SOURCE_TYPES, VOD_OPTIONS } from '@/utils/constant';
import { Box, Grid, GridItem, Input, Select, Textarea } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Vod() {
  const [selectedUrl, setSelectedUrl] = useState<string>('');
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
        <Grid border={'md'} templateRows={`repeat(20, 1fr)`} w="full" h="full">
          <GridItem
            rowSpan={1}
            display={'flex'}
            justifyContent={'space-between'}
            shadow={'md'}
          >
            <Select
              placeholder="Select HLS Type"
              onChange={(e: any) => handleSetHlsType(e.target.value)}
              defaultValue={HLS_TYPES[0].key}
            >
              {HLS_TYPES.map((item) => {
                return <option value={item.key}>{item.value}</option>;
              })}
            </Select>
            <Select
              placeholder="Select Video"
              onChange={(e: any) => handleSetUrl(e.target.value)}
              defaultValue={VOD_OPTIONS[0].hlsUrl}
            >
              {VOD_OPTIONS.map((item) => {
                return <option value={item.key}>{item.name}</option>;
              })}
            </Select>
          </GridItem>
          <GridItem
            rowSpan={19}
            display={'flex'}
            justifyContent={'space-between'}
            shadow={'md'}
          >
            <Box w={'1280px'} h={'720px'}>
              {selectedUrl && (
                <VideoPlayer
                  videoSource={selectedUrl}
                  type={SOURCE_TYPES.MPEGURL}
                />
              )}
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
