import Home from './components/Home/Home.vue'
import About from './components/About/About.vue'
import Contact from './components/Contact/Contact.vue'
import Support from './components/Support/Support.vue'
import UserMain from './components/User/UserMain.vue'
import UserInbox from './components/User/Inbox.vue'
import UserProfile from './components/User/Profile.vue'
import UserSettings from './components/User/Settings.vue'
import PageNotFound from './components/Errors/PageNotFound.vue';

export default [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/support', component: Support },
    {
      //user routes
      path: '/user/:user',
      component: UserMain,
      children: [
        { path: 'profile', component: UserProfile },
        { path: 'settings', component: UserSettings },
        { path: 'inbox', component: UserInbox }
      ]
    },
    { path: '*', component: PageNotFound }
]
