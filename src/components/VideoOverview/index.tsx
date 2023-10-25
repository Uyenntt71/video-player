import React from 'react';
import { Box, Text, Image, Grid, GridItem } from '@chakra-ui/react';

const VideoView = ({
  videoTitle,
  posterImage,
  handleClick,
}: {
  videoTitle: string;
  posterImage: string;
  handleClick: () => void;
}) => {
  return (
    <Grid
      w="full"
      h="full"
      gridTemplateRows={'1fr 0.1fr'}
      onClick={handleClick}
      cursor={'pointer'}
      _hover={{
        opacity: 0.5,
      }}
    >
      <GridItem w="full" h="full">
        <Box w="20vw" h="20vh">
          <Image
            src={posterImage}
            alt="Video Poster"
            style={{
              objectFit: 'fill',
              marginRight: 'auto',
              marginLeft: 'auto',
              display: 'block',
              verticalAlign: 'middle',
              width: '100%',
              height: 'auto',
              maxHeight: '100%',
            }}
          />
        </Box>
      </GridItem>
      <GridItem w="full" h="full">
        <Text
          fontSize="md"
          fontWeight="bold"
          overflow={'hidden'}
          textOverflow={'ellipsis'}
        >
          {videoTitle}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default VideoView;
