
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
