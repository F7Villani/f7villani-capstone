import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Lista de locais suportados
const SUPPORTED_LOCALES = ['en', 'pt-BR'];

export default function middleware(req: NextRequest) {
  // Tenta determinar o locale a partir do cabeçalho Accept-Language
  const acceptLanguage = req.headers.get('accept-language');
  console.log(acceptLanguage);
  let locale = 'pt-BR'; // Locale padrão

  if (acceptLanguage) {
    const preferredLocale = acceptLanguage.split(',')[0]; // Pega o primeiro idioma preferido
    if (SUPPORTED_LOCALES.includes(preferredLocale)) {
      locale = preferredLocale;
    }
  }

  return NextResponse.next({
    headers: {
      'x-locale': locale, // Adiciona o locale aos cabeçalhos para uso posterior
    }
  });
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'], // Aplica o middleware a todas as rotas, exceto as listadas
};
