'use client';

import { SOURCE_TYPES } from '@/utils/constant';
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-quality-levels';
import 'videojs-hls-quality-selector';
import './styles.css';

const VideoPlayer = ({
  videoSource,
  type,
  poster,
}: {
  videoSource: string;
  type: SOURCE_TYPES;
  poster: string;
}) => {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (!playerRef.current) {
      const videoElement = document.createElement('video-js');
      videoElement.classList.add('vjs-default-skin');
      videoRef.current.appendChild(videoElement);

      const player = videojs(
        videoElement,
        {
          fluid: true,
          controls: true,
          playbackRates: [0.5, 1, 1.5, 2],
          controlBar: {
            playToggle: true,
            volumePanel: {
              inline: false,
            },
            fullscreenToggle: true,
          },
          plugins: {
            hlsQualitySelector: {
              displayCurrentQuality: true,
            },
          },
          sources: [
            {
              type: type,
              src: videoSource,
            },
          ],
        },
        () => {
          videojs.log('player is ready');
        }
      );
      playerRef.current = player;
    } else {
      const videoElement = document.getElementsByClassName('video-js')?.[0];
      const player = videojs(videoElement);
      player.poster(poster);
      player.src({
        src: videoSource,
        type: type,
      });
    }
  }, [videoSource, videoRef]);

  return (
    <div className="vjs-wrapper" data-vjs-player>
      <div className="vjs-wrapper" ref={videoRef} />
    </div>
  );
};
export default VideoPlayer;
