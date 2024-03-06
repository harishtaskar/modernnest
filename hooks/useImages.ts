import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useCallback } from "react";
// import { storage } from "./../firebase";

const useImages = () => {
  const toBase64 = useCallback(async (image: any) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onloadend = () => {
        const base64String = reader.result;
        resolve(base64String);
      };
      reader.readAsDataURL(image);
    });
  }, []);

  const getImageViaUrl = useCallback((url: string) => {
    const storage = getStorage();
    return new Promise((resolve: any) => {
      getDownloadURL(ref(storage, url))
        .then((url) => {
          const xhr = new XMLHttpRequest();
          xhr.responseType = "blob";
          xhr.onload = (event) => {
            const blob = xhr.response;
          };
          xhr.open("GET", url);
          xhr.send();
          resolve(url);
        })
        .catch((error) => {
          return new Response(error);
        });
    });
  }, []);
  return { toBase64, getImageViaUrl };
};

export default useImages;
