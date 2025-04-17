
/**
 * Generates a secure random password with specified complexity
 */
export const generateSecurePassword = (
  length = 12,
  includeUppercase = true,
  includeNumbers = true,
  includeSymbols = true
): string => {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_-+=<>?';
  
  let availableChars = lowercaseChars;
  if (includeUppercase) availableChars += uppercaseChars;
  if (includeNumbers) availableChars += numberChars;
  if (includeSymbols) availableChars += symbolChars;
  
  let password = '';
  
  // Ensure at least one character from each required type
  if (includeUppercase) {
    password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
  }
  if (includeNumbers) {
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
  }
  if (includeSymbols) {
    password += symbolChars[Math.floor(Math.random() * symbolChars.length)];
  }
  
  // Fill remaining length with random characters
  while (password.length < length) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }
  
  // Shuffle the password characters
  return password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};
