import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1975565c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _344c9d4f = () => interopDefault(import('..\\pages\\Books.vue' /* webpackChunkName: "pages/Books" */))
const _27e47f21 = () => interopDefault(import('..\\pages\\Consulting.vue' /* webpackChunkName: "pages/Consulting" */))
const _39c03ca5 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _6a3d8072 = () => interopDefault(import('..\\pages\\EducationTraining.vue' /* webpackChunkName: "pages/EducationTraining" */))
const _72f93bfa = () => interopDefault(import('..\\pages\\Exhibition.vue' /* webpackChunkName: "pages/Exhibition" */))
const _917c9f5a = () => interopDefault(import('..\\pages\\joinus.vue' /* webpackChunkName: "pages/joinus" */))
const _4ee4ec6c = () => interopDefault(import('..\\pages\\MediaPromotion.vue' /* webpackChunkName: "pages/MediaPromotion" */))
const _ab0c599e = () => interopDefault(import('..\\pages\\question.vue' /* webpackChunkName: "pages/question" */))
const _3fc5dde9 = () => interopDefault(import('..\\pages\\Suggest.vue' /* webpackChunkName: "pages/Suggest" */))
const _f9d957d4 = () => interopDefault(import('..\\pages\\Translation.vue' /* webpackChunkName: "pages/Translation" */))
const _12fd2f97 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5c902030 = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _3cd8456b = () => interopDefault(import('..\\pages\\_lang\\about.vue' /* webpackChunkName: "pages/_lang/about" */))
const _7ddf8de8 = () => interopDefault(import('..\\pages\\_lang\\Books.vue' /* webpackChunkName: "pages/_lang/Books" */))
const _cc85f3b0 = () => interopDefault(import('..\\pages\\_lang\\Consulting.vue' /* webpackChunkName: "pages/_lang/Consulting" */))
const _6a596afe = () => interopDefault(import('..\\pages\\_lang\\contact.vue' /* webpackChunkName: "pages/_lang/contact" */))
const _a849da40 = () => interopDefault(import('..\\pages\\_lang\\EducationTraining.vue' /* webpackChunkName: "pages/_lang/EducationTraining" */))
const _365c79fe = () => interopDefault(import('..\\pages\\_lang\\Exhibition.vue' /* webpackChunkName: "pages/_lang/Exhibition" */))
const _bfe65a4c = () => interopDefault(import('..\\pages\\_lang\\joinus.vue' /* webpackChunkName: "pages/_lang/joinus" */))
const _0d2d3551 = () => interopDefault(import('..\\pages\\_lang\\MediaPromotion.vue' /* webpackChunkName: "pages/_lang/MediaPromotion" */))
const _e5f32010 = () => interopDefault(import('..\\pages\\_lang\\question.vue' /* webpackChunkName: "pages/_lang/question" */))
const _705f0c42 = () => interopDefault(import('..\\pages\\_lang\\Suggest.vue' /* webpackChunkName: "pages/_lang/Suggest" */))
const _4c4badef = () => interopDefault(import('..\\pages\\_lang\\Translation.vue' /* webpackChunkName: "pages/_lang/Translation" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1975565c,
    name: "about"
  }, {
    path: "/Books",
    component: _344c9d4f,
    name: "Books"
  }, {
    path: "/Consulting",
    component: _27e47f21,
    name: "Consulting"
  }, {
    path: "/contact",
    component: _39c03ca5,
    name: "contact"
  }, {
    path: "/EducationTraining",
    component: _6a3d8072,
    name: "EducationTraining"
  }, {
    path: "/Exhibition",
    component: _72f93bfa,
    name: "Exhibition"
  }, {
    path: "/joinus",
    component: _917c9f5a,
    name: "joinus"
  }, {
    path: "/MediaPromotion",
    component: _4ee4ec6c,
    name: "MediaPromotion"
  }, {
    path: "/question",
    component: _ab0c599e,
    name: "question"
  }, {
    path: "/Suggest",
    component: _3fc5dde9,
    name: "Suggest"
  }, {
    path: "/Translation",
    component: _f9d957d4,
    name: "Translation"
  }, {
    path: "/",
    component: _12fd2f97,
    name: "index"
  }, {
    path: "/:lang",
    component: _5c902030,
    name: "lang"
  }, {
    path: "/:lang/about",
    component: _3cd8456b,
    name: "lang-about"
  }, {
    path: "/:lang/Books",
    component: _7ddf8de8,
    name: "lang-Books"
  }, {
    path: "/:lang/Consulting",
    component: _cc85f3b0,
    name: "lang-Consulting"
  }, {
    path: "/:lang/contact",
    component: _6a596afe,
    name: "lang-contact"
  }, {
    path: "/:lang/EducationTraining",
    component: _a849da40,
    name: "lang-EducationTraining"
  }, {
    path: "/:lang/Exhibition",
    component: _365c79fe,
    name: "lang-Exhibition"
  }, {
    path: "/:lang/joinus",
    component: _bfe65a4c,
    name: "lang-joinus"
  }, {
    path: "/:lang/MediaPromotion",
    component: _0d2d3551,
    name: "lang-MediaPromotion"
  }, {
    path: "/:lang/question",
    component: _e5f32010,
    name: "lang-question"
  }, {
    path: "/:lang/Suggest",
    component: _705f0c42,
    name: "lang-Suggest"
  }, {
    path: "/:lang/Translation",
    component: _4c4badef,
    name: "lang-Translation"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
