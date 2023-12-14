import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/",
    name: "navigationLayout",
    component: () => import("../layouts/NavigationLayout.vue"),
    children: [
      {
        path: "/calendar",
        name: "calendar",
        component: () => import("../views/CalendarandResultsView.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/structure",
        name: "organizationalStructure",
        component: () => import("../views/StructureView.vue"),
      },
      {
        path: "/budget",
        name: "budget",
        component: () => import("../views/BudgetView.vue"),
      },
      {
        path: "/about-manual",
        name: "aboutManual",
        component: () => import("../views/AboutManualView.vue"),
      },
      {
        path: "/development-plan",
        name: "developmentPlan",
        component: () => import("../views/DevelopmentPlanView.vue"),
      },
      {
        path: "/vacancies",
        name: "vacancies",
        component: () => import("../views/VacanciesView.vue"),
      },
      {
        path: "/press-releases",
        name: "pressReleases",
        component: () => import("../views/PressReleasesView.vue"),
      },
      {
        path: "/financial-statements",
        name: "FinancialStatements",
        component: () => import("../views/FinancialStatementsView.vue"),
      },
      {
        path: "/regulatory",
        name: "Regulatory",
        component: () => import("../views/RegulatoryView.vue"),
      },
      {
        path: "/information-about",
        name: "InformationAbout",
        component: () => import("../views/InformationAboutView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
