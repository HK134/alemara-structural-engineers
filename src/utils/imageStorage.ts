
import { supabase } from "@/integrations/supabase/client";
import { v4 as uuidv4 } from 'uuid';

/**
 * Uploads an image to Supabase storage
 * @param file The file to upload
 * @param folder Optional folder path within the bucket
 * @returns The public URL of the uploaded image
 */
export const uploadProjectImage = async (file: File, folder: string = 'projects') => {
  try {
    // Generate a unique file name to prevent collisions
    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${uuidv4()}.${fileExt}`;
    
    // Upload the file to Supabase
    const { data, error } = await supabase.storage
      .from('website-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });
      
    if (error) {
      throw error;
    }
    
    // Get the public URL for the uploaded file
    const { data: urlData } = supabase.storage
      .from('website-images')
      .getPublicUrl(fileName);
      
    return urlData.publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

/**
 * Uploads a public URL image to Supabase storage
 * @param imageUrl The public URL of the image to upload
 * @param folder Optional folder path within the bucket
 * @returns The new Supabase storage public URL
 */
export const uploadPublicUrlToStorage = async (imageUrl: string, folder: string = 'projects') => {
  try {
    // Fetch the image from the public URL
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
    }
    
    const blob = await response.blob();
    
    // Extract filename from URL or generate a unique one
    let fileName = imageUrl.split('/').pop() || `${uuidv4()}`;
    if (!fileName.includes('.')) {
      // If no file extension, try to get it from the blob type
      const ext = blob.type.split('/').pop();
      fileName = `${fileName}.${ext}`;
    }
    
    // Create a File object from the Blob
    const file = new File([blob], fileName, { type: blob.type });
    
    // Use the existing upload function
    return await uploadProjectImage(file, folder);
  } catch (error) {
    console.error('Error uploading image from URL:', error);
    throw error;
  }
};

/**
 * Retrieves a signed URL for a private file in Supabase storage
 * @param path The path to the file in the bucket
 * @param expiresIn Expiration time in seconds
 * @returns A signed URL with temporary access
 */
export const getSignedImageUrl = async (path: string, expiresIn: number = 60) => {
  try {
    const { data, error } = await supabase.storage
      .from('website-images')
      .createSignedUrl(path, expiresIn);
      
    if (error) {
      throw error;
    }
    
    return data.signedUrl;
  } catch (error) {
    console.error('Error getting signed URL:', error);
    throw error;
  }
};

/**
 * Deletes an image from Supabase storage
 * @param path The path to the file in the bucket
 * @returns Success status
 */
export const deleteProjectImage = async (path: string) => {
  try {
    const { error } = await supabase.storage
      .from('website-images')
      .remove([path]);
      
    if (error) {
      throw error;
    }
    
    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
};
