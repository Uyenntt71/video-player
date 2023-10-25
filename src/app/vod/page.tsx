'use client';

import VideoView from '@/components/VideoOverview';
import {
  VOD_OPTIONS,
  VodData,
} from '@/utils/constant';
import {
  Box,
  Center,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function Vod() {
  const router = useRouter();

  const handleClickVideo = (key: number) => {
    router.push(`/vod/${key}`);
  };

  return (
    <>
      <title>Video-on-demand player</title>
      <Box p="5" h="100vh" w="100%" overflowY={'auto'}>
        <Wrap>
          {VOD_OPTIONS.map((video: VodData, index: number) => {
            return (
              <WrapItem key={index}>
                <Center w="20vw" h="25vh">
                  <VideoView
                    videoTitle={video.title}
                    posterImage={video.posterUrl}
                    handleClick={() => handleClickVideo(video.key)}
                  />
                </Center>
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>
    </>
  );
}
