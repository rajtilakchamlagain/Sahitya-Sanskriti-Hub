/**
 * Uploads an image to ImgBB and returns the direct URL.
 * @param {File} file - The image file to upload.
 * @returns {Promise<string>} - The URL of the uploaded image.
 */
export const uploadImageToImgBB = async (file) => {
    // You will need to replace this with your free ImgBB API key
    const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY; 
    
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        
        if (data.success) {
            return data.data.url; // The direct image link
        } else {
            throw new Error(data.error?.message || 'ImgBB upload failed');
        }
    } catch (error) {
        console.error("Error uploading to ImgBB:", error);
        throw error;
    }
};
