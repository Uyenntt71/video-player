export type VodData = {
  key: number;
  title: string;
  hlsUrl: string;
  hlsllUrl: string;
  posterUrl: string;
};

export const VOD_OPTIONS: Array<VodData> = [
  {
    key: 1,
    title: 'FDR - CDN packaged, 4s segments, 180p - 1080p',
    hlsUrl: 'https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8#t=0.1',
    hlsllUrl: 'https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8',
    posterUrl: '/poster/FDR.png',
  },
  {
    key: 2,
    title: 'CNN special report, with CC',
    hlsUrl:
      'https://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8',
    hlsllUrl:
      'https://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8',
    posterUrl: '/poster/CNN.png',
  },
  {
    key: 3,
    title: 'Big Buck Bunny - adaptive qualities',
    hlsUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    hlsllUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    posterUrl: '/poster/big_buck_bunny.jpg',
  },
  {
    key: 4,
    title: 'FDR - CDN packaged, 4s segments, 180p - 1080p',
    hlsUrl: 'https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8#t=0.1',
    hlsllUrl: 'https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8',
    posterUrl: '/poster/FDR.png',
  },
  {
    key: 5,
    title: 'CNN special report, with CC',
    hlsUrl:
      'https://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8',
    hlsllUrl:
      'https://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8',
    posterUrl: '/poster/CNN.png',
  },
  {
    key: 6,
    title: 'Big Buck Bunny - adaptive qualities',
    hlsUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    hlsllUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    posterUrl: '/poster/big_buck_bunny.jpg',
  },
];

export enum SOURCE_TYPES {
  MPEGURL = 'application/x-mpegURL',
  MP4 = 'video/mp4',
}

export type HlsType = {
  key: string;
  value: string;
};

export const HLS_TYPES: Array<HlsType> = [
  {
    key: 'hls',
    value: 'HLS',
  },
  {
    key: 'hlsll',
    value: 'HLS Low Latency',
  },
];
