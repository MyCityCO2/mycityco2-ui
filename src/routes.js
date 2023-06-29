const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/legal',
    name: 'legal',
    component: () => import('@/views/LegalView.vue')
  },
  {
    path: '/methodology',
    name: 'methodology',
    component: () => import('@/views/methodology/MethodologyView.vue'),
    children: [
      {
        path: '',
        name: 'methodologyIndex',
        component: () => import('@/views/methodology/MethodologyViewIndex.vue'),
        meta: {
          previous: null,
          next: 'generalAccounting'
        }
      },
      {
        path: 'general',
        name: 'methodologyGeneral',
        component: () => import('@/views/methodology/MethodologyViewGeneral.vue'),
        children: [
          {
            path: 'accounting',
            name: 'generalAccounting',
            component: () => import('@/views/methodology/general/GeneralAccounting.vue'),
            meta: {
              previous: 'methodologyIndex',
              next: 'generalAccountingPlan'
            }
          },
          {
            path: 'accounting/plan',
            name: 'generalAccountingPlan',
            component: () => import('@/views/methodology/general/accounting/AccountingPlan.vue'),
            meta: {
              previous: 'generalAccounting',
              next: 'generalAccountingInvestment'
            }
          },
          {
            path: 'accounting/investment',
            name: 'generalAccountingInvestment',
            component: () =>
              import('@/views/methodology/general/accounting/AccountingInvestment.vue'),
            meta: {
              previous: 'generalAccountingPlan',
              next: 'generalAccountingFunctionning'
            }
          },
          {
            path: 'accounting/functionning',
            name: 'generalAccountingFunctionning',
            component: () =>
              import('@/views/methodology/general/accounting/AccountingFunctioning.vue'),
            meta: {
              previous: 'generalAccountingInvestment',
              next: 'generalAccountingDepreciations'
            }
          },
          {
            path: 'accounting/depreciations',
            name: 'generalAccountingDepreciations',
            component: () =>
              import('@/views/methodology/general/accounting/AccountingDepreciations.vue'),
            meta: {
              previous: 'generalAccountingFunctionning',
              next: 'generalAccountingAmortizationPeriod'
            }
          },
          {
            path: 'accounting/amortization-period',
            name: 'generalAccountingAmortizationPeriod',
            component: () =>
              import('@/views/methodology/general/accounting/AccountingAmortizationPeriods.vue'),
            meta: {
              previous: 'generalAccountingDepreciations',
              next: 'generalAccountingAccountsConfiguration'
            }
          },
          {
            path: 'accounting/accounts-configuration',
            name: 'generalAccountingAccountsConfiguration',
            component: () =>
              import('@/views/methodology/general/accounting/AccountingAccountsConfiguration.vue'),
            meta: {
              previous: 'generalAccountingAmortizationPeriod',
              next: 'generalEmissionFactor'
            }
          },
          {
            path: 'emission-factor',
            name: 'generalEmissionFactor',
            component: () => import('@/views/methodology/general/GeneralEmissionFactor.vue'),
            meta: {
              previous: 'generalAccountingAccountsConfiguration',
              next: 'generalEmissionPost'
            }
          },
          {
            path: 'emission-post',
            name: 'generalEmissionPost',
            component: () => import('@/views/methodology/general/GeneralEmissionPost.vue'),
            meta: {
              previous: 'generalEmissionFactor',
              next: 'generalLimitations'
            }
          },
          {
            path: 'limitations',
            name: 'generalLimitations',
            component: () => import('@/views/methodology/general/GeneralLimitView.vue'),
            meta: {
              previous: 'generalEmissionPost',
              next: 'methodologyPartners'
            }
          }
        ]
      },
      {
        path: 'partners',
        name: 'methodologyPartners',
        component: () => import('@/views/methodology/MethodologyViewPartners.vue'),
        meta: {
          previous: 'generalLimitations',
          next: 'methodologyDataSources'
        }
      },
      {
        path: 'datasources',
        name: 'methodologyDataSources',
        component: () => import('@/views/methodology/MethodologyViewDatasources.vue'),
        meta: {
          previous: 'methodologyPartners',
          next: 'methodologyLicense'
        }
      },
      {
        path: 'license',
        name: 'methodologyLicense',
        component: () => import('@/views/methodology/MethodologyViewLicense.vue'),
        meta: {
          previous: 'methodologyDataSources',
          next: null
        }
      }
    ]
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('@/views/HelpView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/views/ProjectView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/diagnostic',
    name: 'diagnostic',
    component: () => import('@/views/dashboard/DashboardIndex.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue')
  }
]

export default routes
