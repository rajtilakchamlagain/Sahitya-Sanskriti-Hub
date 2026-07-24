/**
 * Compresses an image file before uploading to save bandwidth and storage.
 * @param {File} file - The original image file.
 * @param {number} maxWidth - Maximum width (default 800px for profiles).
 * @param {number} quality - JPEG quality from 0 to 1 (default 0.7).
 * @returns {Promise<File>} - A promise that resolves with the compressed file.
 */
export const compressImage = (file, maxWidth = 800, quality = 0.7) => {
    return new Promise((resolve, reject) => {
        if (!file || !file.type.match(/image.*/)) {
            resolve(file); // Not an image, return original
            return;
        }

        const reader = new FileReader();
        reader.onload = (readerEvent) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    if (blob) {
                        const compressedFile = new File([blob], file.name, {
                            type: 'image/jpeg',
                            lastModified: Date.now(),
                        });
                        resolve(compressedFile);
                    } else {
                        resolve(file); // Fallback to original if compression fails
                    }
                }, 'image/jpeg', quality);
            };
            img.onerror = (error) => {
                console.error("Error loading image for compression:", error);
                resolve(file); // Fallback
            };
            img.src = readerEvent.target.result;
        };
        reader.onerror = (error) => {
            console.error("Error reading file:", error);
            resolve(file); // Fallback
        };
        reader.readAsDataURL(file);
    });
};
