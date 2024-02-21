import { getCookie } from "cookies-next";
import { Fragment } from "react";
import { i18n, Locale } from "../../../../i18n-config";

const LangOptions = () => {
  const lang = getCookie("lang") || "en";

  return (
    <Fragment>
      {i18n.locales.map((locale: Locale) => (
        <option key={locale} value={locale} selected={locale === lang ? true : false}>
          {locale}
        </option>
      ))}
    </Fragment>
  );
};
export default LangOptions;
