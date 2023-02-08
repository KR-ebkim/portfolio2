import { createRouter, createWebHistory } from "vue-router";


const routes = [
  { path: "/", component: () => import("@/views/Home.vue") },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/Login.vue"),
  },

  {

    path: "/analytics",
    name: "Analytics",
    component: () => import("@/views/menu/analytics/Analytics.vue"),
  },


  {
    path: "/ballastTrend",
    name: "Ballast Trend",
    component: () => import("@/views/menu/analytics/BallastTrend.vue"),
  },

  {
    path: "/alarmTrend",
    name: "Alarm Trend",
    component: () => import("@/views/menu/analytics/AlarmTrend.vue"),
  },

  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("@/views/menu/calendar/Calendar.vue"),
  },

  {
    path: "/chatRoom",
    name: "Chat Room Home",
    component: () => import("@/views/menu/chatRoom/ChatRoom.vue"),
  },

  {
    path: "/chatRoomDetail",
    name: "Chat Room",
    component: () => import("@/views/menu/chatRoom/ChatRoomDetail.vue"),
  },

  {
    path: "/helpCenter",
    name: "Help Center",
    component: () => import("@/views/menu/helpCenter/HelpCenter.vue"),
  },

  {
    path: "/aboutECS",
    name: "About ECS",
    component: () => import("@/views/menu/helpCenter/AboutECS.vue"),
  },

  {
    path: "/maintenanceECS",
    name: "Maintenance ECS",
    component: () => import("@/views/menu/helpCenter/MaintenanceECS.vue"),
  },

  {
    path: "/troubleSolution",
    name: "Trouble Solution",
    component: () => import("@/views/menu/helpCenter/TroubleSolution.vue"),
  },

  {
    path: "/vessel",
    name: "Vessel",
    component: () => import("@/views/menu/vessel/Vessel.vue"),
  },

  {
    path: "/dailyReport",
    name: "Daily Report",
    component: () => import("@/views/menu/vessel/DailyReport.vue"),
  },

  {
    path: "/monthlyReport",
    name: "Monthly Report",
    component: () => import("@/views/menu/vessel/MonthlyReport.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
