export const getVideoImage = video => {
  if (video.youtubeId) return `https://img.youtube.com/vi/${video.youtubeId}/0.jpg`;
  return video.image;
}