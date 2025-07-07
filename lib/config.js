// Configuración centralizada para la aplicación
export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://mvasrl.com',
  environment: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production'
};

export default config;
