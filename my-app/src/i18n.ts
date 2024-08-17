import { getRequestConfig } from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  
  const localeToUse = locale || 'pt-BR';

  return {
    locale,
    messages: (await import(`../public/locales/${localeToUse}.json`)).default
  };
});