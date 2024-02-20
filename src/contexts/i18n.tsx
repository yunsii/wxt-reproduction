import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { useState } from "react";

export async function loadCatalog(locale = "en") {
  const { messages } = await import(`../locales/${locale}.po`);
  i18n.loadAndActivate({ locale, messages });
}

export interface II18nContextProviderProps {
  children?: React.ReactNode;
}

export function I18nContextProvider(props: II18nContextProviderProps) {
  const { children } = props;

  const [i18nLoaded, setI18nLoaded] = useState(false);

  useState(() => {
    loadCatalog().finally(() => {
      setI18nLoaded(true);
    });
  });

  if (!i18nLoaded) {
    return null;
  }

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
