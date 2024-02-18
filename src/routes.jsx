import Home from "./Pages/Home/index";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile/index"

const routes = [
  {
    exact: true,
    route:"common",
    path: '/',
    component: Home,
  },
  {
    exact: true,
    route:"common",
    path: '/profile/:username',
    component: Profile,
  },
  {
    exact: true,
    route:"login",
    path: '/login',
    component: Login,
  }
]

export default routes