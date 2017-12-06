import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BookReader from '@/components/BookReader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/book/:bookId/:chapterId',
      name: 'book',
      component: BookReader
    },
    {
      path: '/',
      redirect: '/book/3516230/84649702'
    }
  ]
})
