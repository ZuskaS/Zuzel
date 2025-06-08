import videoFile from '../assets/brain.mp4';

export const VideoComponent = () => {
  return (
    <video width="100%" loop  autoPlay muted >
      <source src={videoFile} type="video/mp4" />
      Váš prohlížeč nepodporuje přehrávání videa.
    </video>
  );
}