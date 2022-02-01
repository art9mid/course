import React from 'react';
import ModalVideo from 'react-modal-video';
import { useVideoState, useVideoDispatch } from 'contexts/video/video.provider';

function Modal() {
  const url = useVideoState('url');
  const isOpen = useVideoState('isOpen');

  const dispatch = useVideoDispatch();
  const handleVideoClose = () => {
    dispatch({ type: 'SET_CLOSE' });
  };

  if (typeof window !== 'undefined') {
    return (
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={url}
        onClose={handleVideoClose}
      />
    );
  }
  return <></>;
}

export default Modal;
