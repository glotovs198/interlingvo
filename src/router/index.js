import { createRouter, createWebHashHistory } from "vue-router";
import {
  HomePage,
  RegistrationPage,
  FeedPage,
  CardDetailedPage,
  PolicyPage,
  SendMessagePage,
} from "../pages";

const routes = [
  { path: "/", component: HomePage },
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
