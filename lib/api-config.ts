// Configuración de la API para el cliente
export const getApiUrl = (): string => {
  // En el lado del cliente, process.env.NEXT_PUBLIC_API_URL está disponible
  if (typeof window !== 'undefined') {
    return (window as any).ENV?.NEXT_PUBLIC_API_URL || 'https://mvasrl.com';
  }
  
  // Fallback para SSR
  return 'https://mvasrl.com';
};

export const API_ENDPOINTS = {
  SATISFACTION_SURVEYS: '/api/clients_portal/satisfaction_surveys',
  CLAIMS: '/api/clients_portal/claims',
  ASK_FOR_SERVICE: '/api/clients_portal/ask_for_service',
} as const;

export const getFullApiUrl = (endpoint: string): string => {
  return `${getApiUrl()}${endpoint}`;
};
