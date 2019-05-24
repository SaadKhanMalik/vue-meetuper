import Vue from 'vue'
import Router from 'vue-router'

import PageHome from '@/pages/PageHome'
import PageMeetupDetail from '@/pages/PageMeetupDetail'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'PageHome',
			component: PageHome
		},
		{
			path: '/meetup/:id',
			name: 'PageMeetupDeatil',
			component: PageMeetupDetail
		},
	],
	mode: 'history'
})


export default router