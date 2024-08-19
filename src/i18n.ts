import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {  

  const locale = cookies().get('NEXT_LOCALE')?.value || 'pt-BR';

  return {
    locale,
    messages: (await import(`../public/locales/${locale}.json`)).default
  };
});
