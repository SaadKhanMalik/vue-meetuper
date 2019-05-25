import Vue from 'vue'
import Router from 'vue-router'

import PageHome from '@/pages/PageHome'
import PageMeetupFind from '@/pages/PageMeetupFind'
import PageMeetupDetail from '@/pages/PageMeetupDetail'
import PageNotFound from '@/pages/PageNotFound'


Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'PageHome',
			component: PageHome
		},
		{
			path: '/find',
			name: 'PageMeetupFind',
			component: PageMeetupFind
		},
		{
			path: '/meetup/:id',
			name: 'PageMeetupDetail',
			component: PageMeetupDetail
		},
		{
			path: '*',
			name: 'PageNotFound',
			component: PageNotFound
		}
		
	],
	mode: 'history'
})


export default router
