const productionMode = process.env.NODE_ENV === 'production';
export const apiUrl = productionMode ? 'https://cooklist.vercel.app/' : 'http://localhost:3000';
