// Configuración de la API para el cliente
export const getApiUrl = (): string => {
  // En el lado del cliente, process.env.NEXT_PUBLIC_API_URL está disponible
  if (typeof window !== 'undefined') {
    const envUrl = (window as any).ENV?.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL;
    console.log('🌐 API URL utilizada (cliente):', envUrl);
    console.log('🔍 Variables de entorno disponibles:', {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NODE_ENV: process.env.NODE_ENV
    });
    return envUrl || 'https://mvasrl.com/api';
  }
  
  // Fallback para SSR
  const serverUrl = process.env.NEXT_PUBLIC_API_URL || 'https://mvasrl.com/api';
  console.log('🖥️ API URL (SSR):', serverUrl);
  return serverUrl;
};

export const API_ENDPOINTS = {
  SATISFACTION_SURVEYS: '/clients_portal/satisfaction_surveys',
  CLAIMS: '/clients_portal/claims',
  ASK_FOR_SERVICE: '/clients_portal/ask_for_service',
} as const;

export const getFullApiUrl = (endpoint: string): string => {
  return `${getApiUrl()}${endpoint}`;
};
