import React from 'react';
import { handleImageUploadState } from '../services/image';

const useImageUpload = () => {
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState('');

  const uploadImage = imageFile => {
    handleImageUploadState({ imageFile, setProgress, setError, setImageUrl, setLoading });
  };

  return { uploadImage, progress: Math.floor(progress), loading, error, imageUrl };
};

export default useImageUpload;
