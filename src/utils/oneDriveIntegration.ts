
/**
 * Utility functions for integrating with Microsoft OneDrive
 * to create project folders and manage files
 */

/**
 * Generates a new folder in OneDrive for a secured project
 * 
 * @param projectReference - The unique project reference code
 * @param customerName - The customer's full name
 * @returns Promise that resolves with the folder ID when created
 */
export const generateOneDriveFolder = async (
  projectReference: string,
  customerName: string
): Promise<string> => {
  console.log(`Creating OneDrive folder for project: ${projectReference} - ${customerName}`);
  
  // This is a placeholder implementation - in a real implementation,
  // you would call the Microsoft Graph API to create a folder
  
  // Example of how this would be implemented with the Microsoft Graph API:
  // const response = await fetch('https://graph.microsoft.com/v1.0/me/drive/root/children', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${accessToken}`,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: `Project-${projectReference} - ${customerName}`,
  //     folder: {},
  //     '@microsoft.graph.conflictBehavior': 'rename'
  //   })
  // });
  // const data = await response.json();
  // return data.id;
  
  // For now, we'll simulate the folder creation with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ OneDrive folder created: Project-${projectReference} - ${customerName}`);
      const mockFolderId = `folder-${projectReference}-${Date.now()}`;
      resolve(mockFolderId);
    }, 1000);
  });
};

/**
 * Uploads a file to a project folder in OneDrive
 * 
 * @param projectReference - The unique project reference code
 * @param fileName - The name of the file
 * @param fileContent - The file content as a Blob or File
 * @returns Promise that resolves with the file metadata
 */
export const uploadFileToProjectFolder = async (
  projectReference: string,
  fileName: string,
  fileContent: Blob | File
): Promise<any> => {
  console.log(`Uploading ${fileName} to OneDrive folder for project: ${projectReference}`);
  
  // This is a placeholder implementation
  // In a real implementation, you would call the Microsoft Graph API to upload a file
  
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ File uploaded to OneDrive: ${fileName}`);
      resolve({ name: fileName, id: `file-${Date.now()}`, projectReference });
    }, 1000);
  });
};

/**
 * Archives a project to OneDrive and marks it for removal from the database
 * This helps manage storage costs by moving completed projects out of Supabase
 * 
 * @param projectReference - The unique project reference code
 * @param projectData - The full project data to archive
 * @returns Promise that resolves when archiving is complete
 */
export const archiveProjectToOneDrive = async (
  projectReference: string,
  projectData: any
): Promise<boolean> => {
  console.log(`Archiving project ${projectReference} to OneDrive`);
  
  try {
    // 1. Create an archive folder if it doesn't exist
    const archiveFolderName = "Completed Projects Archive";
    
    // 2. Convert project data to JSON
    const projectJson = JSON.stringify(projectData, null, 2);
    const projectBlob = new Blob([projectJson], { type: 'application/json' });
    
    // 3. Upload the JSON file to the archive folder
    const archiveDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const archiveFileName = `${projectReference}-archive-${archiveDate}.json`;
    
    // Simulate upload to OneDrive archive
    await new Promise(resolve => setTimeout(resolve, 800));
    
    console.log(`✅ Project ${projectReference} successfully archived to OneDrive`);
    return true;
  } catch (error) {
    console.error(`Failed to archive project ${projectReference}:`, error);
    return false;
  }
};

/**
 * Checks if a project is eligible for archiving based on completion date
 * Projects are typically archived 30 days after completion
 * 
 * @param completionDate - The date the project was completed
 * @returns boolean indicating if the project should be archived
 */
export const isProjectEligibleForArchiving = (completionDate: Date): boolean => {
  if (!completionDate) return false;
  
  const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
  const completionTime = completionDate.getTime();
  const currentTime = new Date().getTime();
  
  return (currentTime - completionTime) >= thirtyDaysInMs;
};
