export function pageSetup(pageName: string) {
  const { t, locale } = useI18n();

  const currentContent = computed(() => {
    const language = locale.value;
    return defineAsyncComponent(() =>
      import(`@/content/${pageName}${language.toUpperCase()}.vue`).catch(
        () => import(`@/content/${pageName}EN.vue`),
      ),
    );
  });

  useSeoMeta({
    title: t(pageName),
    ogTitle: `${t(pageName)} - ${t("siteName")}`,
    twitterTitle: `${t(pageName)} - ${t("siteName")}`,
    description: t(`${pageName}Description`) + " - " + t("globalDescription"),
    ogDescription: t(`${pageName}Description`) + " - " + t("globalDescription"),
    twitterDescription:
      t(`${pageName}Description`) + " - " + t("globalDescription"),
  });

  return {
    currentContent,
  };
}
