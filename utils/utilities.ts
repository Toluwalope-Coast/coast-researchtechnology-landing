import jwt from 'jsonwebtoken';

export function formatTimestampToDate(timestamp: number) {
  /**
   * Formats a given Unix timestamp into a date string in the format YYYY-MM-DD.
   *
   * @param {number} timestamp - The Unix timestamp in milliseconds (e.g., 1694019172000).
   * @returns {string} - The formatted date as 'YYYY-MM-DD' (e.g., '2023-09-28').
   */

  // Create a new Date object from the given timestamp
  const date = new Date(timestamp);

  // Get the year, month, and day
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');

  // Return the formatted date as 'YYYY-MM-DD'
  return `${year}-${month}-${day}`;
}

export function formatTimeStampToLocalDate(timestamp: number) {
  /**
   * Formats a given Unix timestamp into a date string in the format "Month Day, Year".
   *
   * @param {number} timestamp - The Unix timestamp in milliseconds (e.g., 1694019172000).
   * @returns {string} - The formatted date as 'Month Day, Year' (e.g., 'September 28, 2023').
   */

  // Create a new Date object from the given timestamp
  const date = new Date(timestamp);

  // Define options for the desired output format: "Month Day, Year"
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Use toLocaleDateString with the desired format
  return date.toLocaleDateString('en-US', options);
}

/**
 * Generates a JSON Web Token (JWT) for the specified user.
 *
 * @param {string} userId - Unique identifier of the user.
 * @returns {string} - Signed JWT containing the user ID.
 * @throws {Error} - Throws an error if the JWT secret is not set in environment variables.
 */
export const generateToken = (userId: string): string => {
  const secret = process.env.JWT;

  if (!secret) {
    console.error('JWT secret is not set in environment variables.');
    throw new Error('Server configuration error');
  }

  // Setting an expiration time for security
  const options = { expiresIn: '1h' };

  return jwt.sign({ id: userId }, secret, options);
};
