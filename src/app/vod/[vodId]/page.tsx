'use client';

import VideoView from '@/components/VideoOverview';
import VideoPlayer from '@/components/VideoPlayer';
import {
  HLS_TYPES,
  SOURCE_TYPES,
  VOD_OPTIONS,
  VodData,
} from '@/utils/constant';
import {
  Box,
  Center,
  Grid,
  GridItem,
  Select,
  WrapItem,
  Text,
  VStack,
  Switch,
  HStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Vod({
  params: { vodId },
}: {
  params: {
    vodId: number;
  };
}) {
  const selectedVod = VOD_OPTIONS.filter((item) => item.key == vodId)?.[0];
  const [selectedUrl, setSelectedUrl] = useState<string>(selectedVod.hlsUrl);
  const [isLowLatency, setIsLowLatency] = useState<boolean>(false);
  const router = useRouter();

  const handleClickVideo = (key: number) => {
    router.push(`/vod/${key}`);
  };

  const handleSetHlsType = (isLowLatency: boolean) => {
    setIsLowLatency(isLowLatency);
  };

  const handleSetUrl = () => {
    setSelectedUrl(isLowLatency ? selectedVod?.hlsllUrl : selectedVod?.hlsUrl);
  };

  useEffect(() => {
    handleSetUrl();
  }, [isLowLatency]);

  return (
    <>
      <title>{selectedVod.title} - Xplayer</title>
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
          alignContent={'flex-start'}
          flexWrap={'wrap'}
          shadow={'md'}
          margin={4}
        >
          <Grid
            border={'md'}
            templateColumns={'repeat(5, 1fr)'}
            w="full"
            h="100vh"
          >
            <GridItem colSpan={4}>
              <VStack spacing={2} align={'stretch'} h={'full'}>
                <Box
                  maxW={'var(--chakra-sizes-container-xl)'}
                  maxH={'var(--chakra-sizes-container-sm)'}
                  w={'full'}
                  h={'full'}
                >
                  <VideoPlayer
                    videoSource={selectedUrl}
                    type={SOURCE_TYPES.MPEGURL}
                    poster={selectedVod.posterUrl}
                  />
                </Box>
                <Box>
                  <Text fontSize={'lg'} fontWeight={'bold'}>
                    {selectedVod.title}
                  </Text>
                </Box>
              </VStack>
            </GridItem>
            <GridItem
              colSpan={1}
              overflowY={'scroll'}
              h={'full'}
              maxH={'88vh'}
              overflowX={'hidden'}
            >
              {VOD_OPTIONS.filter((video) => video.key != vodId).map(
                (video: VodData, index: number) => {
                  return (
                    <WrapItem key={index} mb={5}>
                      <Center w="20vw" h="25vh">
                        <VideoView
                          videoTitle={video.title}
                          posterImage={video.posterUrl}
                          handleClick={() => handleClickVideo(video.key)}
                        />
                      </Center>
                    </WrapItem>
                  );
                }
              )}
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
}
