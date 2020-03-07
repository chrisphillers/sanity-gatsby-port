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
                  buildHookId: '5e6382ed115ce0779343242f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-port-studio',
                  apiId: '5bc8121b-7ee3-4348-ba48-fc7d0075670e'
                },
                {
                  buildHookId: '5e6382ed7e06001518e0311d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-port',
                  apiId: 'a8ae5695-3024-4845-bd66-0224e5e5e032'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisphillers/sanity-gatsby-port',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-port.netlify.com',
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
