import { createRouter, createWebHashHistory } from "vue-router";
import {
  HomePage,
  RegistrationPage,
  FeedPage,
  CardDetailedPage,
  PolicyPage,
  SendMessagePage,
  HomePagev2,
} from "../pages";

const routes = [
  { path: "/", component: HomePage },
  { path: "/v2", component: HomePagev2 },
  { path: "/feed", component: FeedPage },
  { path: "/card/:id", component: CardDetailedPage },
  { path: "/policy", component: PolicyPage },
  { path: "/registration", component: RegistrationPage },
  { path: "/send-message", component: SendMessagePage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
