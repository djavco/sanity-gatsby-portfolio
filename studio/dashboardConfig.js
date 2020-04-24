export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ea29ef83c49d4c538e61441',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-r3z5jutd',
                  apiId: 'da9c34f0-7df1-446b-95fb-8e9a75f8953b'
                },
                {
                  buildHookId: '5ea29ef83c49d4c538e61442',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2j9wvyah',
                  apiId: 'ae8581da-9408-478e-8320-7694a290b41f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/djavco/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2j9wvyah.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
