export default ({ app }) => {
  const { $moment } = app;
  $moment.locale(app.i18n.locale);

  app.i18n.onLanguageSwitched = (_oldLocale, newLocale) => {
    $moment.locale(newLocale);
  };
};
