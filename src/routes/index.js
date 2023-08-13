import About from "../pages/about/About";
import Login from "../pages/login/Login";
import PostIdPage from "../pages/postIdPage/PostIdPage";
import Posts from "../pages/posts/Posts";

export const privateRoutes = [
   { path: "/posts", component: Posts, exact: true },
   { path: "/posts/:id", component: PostIdPage, exact: true },
   { path: "/about", component: About, exact: true },
   { path: "*", component: Posts, exact: true },
];

export const publicRoutes = [
   { path: "/login", component: Login, exact: true },
   { path: "/about", component: About, exact: true },
   { path: "*", component: Login, exact: true },
];
