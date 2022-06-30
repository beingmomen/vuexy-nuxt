export default async function ({ app, redirect, store, $i18n }) {
    const cookieRes = await app.$cookies.get('i18n_redirected')

    if (cookieRes == "ar") {
        app.head.htmlAttrs.class = 'arabic-dir'
        app.head.htmlAttrs.dir = 'rtl'
        app.head.htmlAttrs.lang = 'ar'
        store.dispatch("changeDashDir", "ar")
    } else {
        app.head.htmlAttrs.class = 'english-dir'
        app.head.htmlAttrs.dir = 'ltr'
        app.head.htmlAttrs.lang = 'en'
        store.dispatch("changeDashDir", "en")
    }
}
