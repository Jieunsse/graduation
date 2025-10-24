export interface YouTubeThumbnail {
  url: string;
  width?: number;
  height?: number;
}

export interface YouTubeThumbnails {
  default: YouTubeThumbnail;
  medium?: YouTubeThumbnail;
  high?: YouTubeThumbnail;
  standard?: YouTubeThumbnail;
  maxres?: YouTubeThumbnail;
}

export interface YouTubeVideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  channelTitle: string;
  thumbnails: YouTubeThumbnails;
}

export interface YouTubeVideoContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
}

export interface YouTubeVideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: YouTubeVideoSnippet;
  contentDetails: YouTubeVideoContentDetails;
}

export interface YouTubeVideoResponse {
  items: YouTubeVideoItem[];
}

export interface YouTubeChannelSnippet {
  title: string;
  description: string;
  thumbnails: YouTubeThumbnails;
}

export interface YouTubeChannelItem {
  kind: string;
  etag: string;
  id: string;
  snippet: YouTubeChannelSnippet;
}

export interface YouTubeChannelResponse {
  items: YouTubeChannelItem[];
}
