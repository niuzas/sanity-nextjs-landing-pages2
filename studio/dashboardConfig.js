export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611134e74b304948324b7293',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-3apxoroe',
                  apiId: 'c7d9d41a-41a1-4c21-a6d0-1ed1f6d857a1'
                },
                {
                  buildHookId: '611134e7217563608a6a014e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-qvkf75cs',
                  apiId: '8b23e4c6-a940-491e-8845-0d044ce2261a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/niuzas/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-qvkf75cs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
