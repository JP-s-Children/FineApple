import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { storage } from './firebase';

const uploadImage = async imageFile => {
  const imagesRef = ref(storage, `images/${imageFile.name}`);

  const snapshot = await uploadBytes(imagesRef, imageFile);

  return getDownloadURL(snapshot.ref);
};

const handleImageUploadState = ({ imageFile, setProgress, setLoading, setError, setImageUrl }) => {
  setLoading(true);

  const imagesRef = ref(storage, `images/${imageFile.name}`);

  const uploadTask = uploadBytesResumable(imagesRef, imageFile);

  uploadTask.on(
    'state_changed',
    snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
    },
    error => setError(error),
    async () => {
      const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);

      setImageUrl(imageUrl);
      setLoading(false);
    }
  );
};

export { uploadImage, handleImageUploadState };
