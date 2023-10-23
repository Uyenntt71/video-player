export type VodData = {
  key: number;
  name: string;
  hlsUrl: string;
  hlsllUrl: string;
};

export const VOD_OPTIONS: Array<VodData> = [
  {
    key: 1,
    name: 'FDR - CDN packaged, 4s segments, 180p - 1080p',
    hlsUrl: 'https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8',
    hlsllUrl: 'https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8',
  },
  {
    key: 2,
    name: 'CNN special report, with CC',
    hlsUrl:
      'https://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8',
    hlsllUrl:
      'https://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8',
  },
  {
    key: 3,
    name: 'Big Buck Bunny - adaptive qualities',
    hlsUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    hlsllUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
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
