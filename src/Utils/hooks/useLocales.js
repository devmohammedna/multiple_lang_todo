import { useTranslation } from 'react-i18next';



// ----------------------------------------------------------------------
const changeLanguage = (language, i18n) => {
  const currentLanguage = localStorage.getItem("i18nextLng");
  if (currentLanguage) {
    localStorage.setItem("i18nextLng", language);
    i18n.changeLanguage(language);
  } else {
    localStorage.setItem("i18nextLng", language);
    i18n.changeLanguage(language);
  }
};
const LANGS = [
  {
    label: 'English',
    value: 'en',
  
  },
  {
    label: 'Arabic',
    value: 'ar',
  }
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = () => {
    changeLanguage(i18n.language === "ar" ? "en" : "ar", i18n);
  };
  return {
    i18n,
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS
  };
}
