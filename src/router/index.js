import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/LoginView.vue"),
  },
  {
    path: "/",
    name: "homeNavigationLayout",
    component: () => import("../layouts/HomveNavigationLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "navigationLayout",
    component: () => import("../layouts/NavigationLayout.vue"),
    children: [
      {
        path: "/personal-area",
        name: "personalArea",
        component: () => import("../views/PersonalAreaView.vue"),
      },
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
      {
        path: "/statistical-indicators",
        name: "statisticalIndicators",
        component: () => import("../views/StatisticalIndicatorsView.vue"),
      },
      {
        path: "/analytical-reports",
        name: "analyticalReports",
        component: () => import("../views/AnalyticalReportsView.vue"),
      },
      {
        path: "/survey",
        name: "survey",
        component: () => import("../views/SurveyView.vue"),
      },
      {
        path: "/schedule-personal",
        name: "schedulePersonal",
        component: () => import("../views/SchedulePersonalView.vue"),
      },
      {
        path: "/contacts",
        name: "contacts",
        component: () => import("../views/ContactsView.vue"),
      },
      {
        path: "/state-symbols",
        name: "stateSymbols",
        component: () => import("../views/StateSymbolsView.vue"),
      },
      {
        path: "/anti-corruption",
        name: "antiCorruption",
        component: () => import("../views/AntiCorruptionView.vue"),
      },
      {
        path: "/international-relationship",
        name: "internationalRelationship",
        component: () => import("../views/InternationalRelationshipsView.vue"),
      },
      {
        path: "/faq",
        name: "faq",
        component: () => import("../views/FaqView.vue"),
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
