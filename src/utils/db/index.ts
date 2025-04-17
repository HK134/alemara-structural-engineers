
// Export all database utility functions
export * from './engineers';
export * from './clients';
export * from './projects';
// Rename the conflicting export from submissions
export { 
  getAllSubmissions as getSubmissions,
  updateSubmission,
  getSubmissionById,
  updateSubmission as createSubmission,
  getEngineerProjects as getEngineerProjectsFromSubmissions
} from './submissions';
