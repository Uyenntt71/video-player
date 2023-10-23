'use client';

import { SOURCE_TYPES } from '@/utils/constant';
import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({
  videoSource,
  type,
}: {
  videoSource: string;
  type: SOURCE_TYPES;
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current || '', {
      controls: true,
      autoplay: false,
      preload: 'auto',
      fluid: true,
      html5: {
        // vhs: {
        //   withCredentials: true,
        // },
        // nativeAudioTracks: false,
        // nativeVideoTracks: false,
      },
    });

    player.src({
      src: videoSource,
      type: type,
    });

    // player.hlsQualitySelector({
    //   displayCurrentQuality: true,
    // });

    // player.load();
    // player.play();

    // Clean up the player when the component unmounts
    // return () => {
    //   if (player) {
    //     player.dispose();
    //   }
    // };
  }, [videoSource, videoRef]);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        controls={true}
        style={{ width: '100%', height: '100%' }}
        className="video-js vjs-default-skin"
      />
    </div>
  );
};

export default VideoPlayer;
