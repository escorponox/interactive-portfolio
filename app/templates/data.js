export default {
  title: 'Carlos Coves - Interactive Portfolio',
  menu: {
    header: 'Carlos Coves',
    navigationLinks: [
      {
        href: '#about',
        text: 'About'
      },
      {
        href: '#projects',
        text: 'Projects',
        subMenu: [
          '3D Layers',
          'Encyclopedia',
          'Puzzle',
          'XML JSON',
          'Forms',
          'Kids Calculator',
          'Shopping Cart',
          'UI Components',
        ]
      },
      {
        href: '#skills',
        text: 'Skills'
      },
      {
        href: '#articles',
        text: 'Articles'
      },
      {
        href: '#contact',
        text: 'Contact'
      }
    ],
    footer: '2016 - Carlos Coves Prieto'
  },
  header: {
    name: 'Carlos Coves',
    navigationLinks: [
      {
        href: '#about',
        text: 'About'
      },
      {
        href: '#projects',
        text: 'Projects'
      },
      {
        href: '#skills',
        text: 'Skills'
      },
      {
        href: '#articles',
        text: 'Articles'
      },
      {
        href: '#contact',
        text: 'Contact'
      }
    ],
    searchPlaceholder: 'SEARCH'
  },
  searchModal: {
    title: 'Search Temporarily Disabled',
    footers: [
      'Mobile: <em>width</em> &lt; 450px',
      'Tablet: 450px &lt; <em>width</em> &lt; 700px',
      'Landscape: 700px &lt; <em>width</em> &lt; 1000px',
      'Desktop: <em>width</em> &gt; 1000px'
    ]
  },
  about: {
    title: 'About Me',
    welcome: 'Welcome to my portfolio!',
    paragraphs: [
      'I am a former engineer and frontend developer from Spain.',
      'I like to enjoy with my family, cooking for them, taking a walk or watching our favorite TV series. I also enjoy playing old-school vintage arcade.',
      'This portfolio tries to avoid the use of JavaScript (except for the embedded projects) by using some small HTML and CSS hacks. Just for academic purposes.'
    ]
  },
  projects: {
    title: 'Projects',
    paragraphs: ['Some demo projects to show what I do.'],
    tabs: [
      {
        label: '3D Layers',
        tab: {
          carousel: [
            {
              img: 'assets/images/layers-1.jpeg'
            },
            {
              img: 'assets/images/layers-2.jpeg'
            },
            {
              img: 'assets/images/layers-3.jpg'
            }
          ],
          static: {
            title:
              '<strong>Technologies:</strong> HTML5, CSS3, Promises, jQuery',
            paragraphs: [
              '3D Layers component with drag and drop features. Still under development. jQuery version available.'
            ],
            links: [
              {
                href:
                  'https://escorponox.github.io/layers/',
                text: 'Live Demo',
                blue: true
              },
              {
                href:
                  'https://github.com/escorponox/layers',
                text:
                  '<span class="fa fa-github fa-lg" aria-hidden="true"></span> Source Code'
              }
            ]
          }
        }
      },
      {
        label: 'Encyclopedia',
      },
      {
        label: 'Puzzle',
      },
      {
        label: 'XML JSON',
      },
      {
        label: 'Forms',
      },
      {
        label: 'Kids Calculator',
      },
      {
        label: 'Shopping Cart',
      },
      {
        label: 'UI Components',
      }
    ]
  },
  skills: {
    title: 'Skills',
    paragraphs: ['Constantly improving'],
    bar: [
      {
        label: 'Frontend',
        percentage: '60%'
      },
      {
        label: 'Backend',
        percentage: '40%'
      }
    ],
    barGraphs: {
      labels: ['Expert', 'Proficient', 'Compentent', 'Learning'],
      graphs: [
        {
          title: 'Frontend',
          skills: [
            {
              label: 'HTML5/CSS3',
              level: 'proficient',
              tooltip: 'Reaching the expert level'
            },
            {
              label: 'JavaScript',
              level: 'proficient',
              tooltip: 'Reaching the expert level'
            },
            {
              label: 'jQuery',
              level: 'proficient',
              tooltip: 'Reaching the expert level'
            },
            {
              label: 'React',
              level: 'learning',
              tooltip: 'Imminent'
            },
            {
              label: 'Redux',
              level: 'learning',
              tooltip: 'Revising Abramov lessons'
            }
          ]
        },
        {
          title: 'Backend',
          skills: [
            {
              label: 'NodeJS',
              level: 'competent',
              tooltip: 'Improving soon'
            },
            {
              label: 'NoSQL DB',
              level: 'learning',
              tooltip: 'Improving soon'
            },
            {
              label: 'SQL DB',
              level: 'expert',
              tooltip: 'Years of experience'
            },
            {
              label: 'Java',
              level: 'expert',
              tooltip: 'Years of experience'
            },
            {
              label: 'Spring',
              level: 'expert',
              tooltip: 'Years of experience'
            }
          ]
        },
        {
          title: 'Other',
          alternateColor: true,
          skills: [
            {
              label: 'Communication',
              level: 'learning',
              tooltip: 'Improving soon'
            },
            {
              label: 'TDD',
              level: 'proficient',
              tooltip: '"Uncle Bob" disciple'
            },
            {
              label: 'Problem Solving',
              level: 'expert',
              tooltip: 'Former Industrial Engineer'
            },
            {
              label: 'Project Management',
              level: 'expert',
              tooltip: 'Former Industrial Engineer'
            },
            {
              label: 'Logistics',
              level: 'expert',
              tooltip: 'Former Industrial Engineer'
            }
          ]
        }
      ]
    }
  },
  articles: {
    title: 'Articles',
    paragraphs: ['Some academic articles on web development'],
    list: [
      {
        href:
          'https://github.com/escorponox/articles/blob/master/Chapter-02-Introduction-to-CSS/answer-3.md',
        text: 'CSS Borders'
      },
      {
        href:
          'https://github.com/escorponox/articles/blob/master/Chapter-03-Getting-Started-with-JavaScript/answer-2.md',
        text: "Element's width"
      },
      {
        href:
          'https://github.com/escorponox/articles/blob/master/Chapter-03-Getting-Started-with-JavaScript/answer-3.md',
        text: 'Comparison Operators'
      },
      {
        href:
          'https://github.com/escorponox/articles/blob/master/Chapter-04-Introduction-to-JavaScript-Core/answer-2.md',
        text: 'CSS Sibling Selectors'
      },
      {
        href:
          'https://github.com/escorponox/articles/blob/master/Chapter-05-Introduction-to-the-DOM/answer-4.md',
        text: 'JavaScript DOM'
      },
      {
        href:
          'https://github.com/escorponox/articles/blob/master/Chapter-01-Architecture-of-the-Internet-the-Web-and-the-Browser/answer-2.md',
        text: 'Domain Name System (DNS)'
      },
      {
        href:
          'https://github.com/escorponox/articles/blob/master/Chapter-02-Style-Guide-Driven-Development/answer-4.md',
        text: 'Style Guides Disadvantages'
      },
      {
        href:
          'https://github.com/escorponox/articles/blob/master/Chapter-03-Mastering-HTML/answer-5.md',
        text: 'SVG Graphics'
      },
      {
        href:
          'https://github.com/escorponox/articles/blob/master/Chapter-04-Mastering-CSS/answer-3.md',
        text: 'HTML5 Numbers'
      }
    ]
  },
  contact: {
    title: 'Contact',
    paragraphs: [
      "Don't hesitate to contact me if you feel I can fit in your team."
    ],
    card: {
      name:
        'Carlos Coves<span class="c-card__front__name__second-surname"> Prieto</span>',
      position: 'Freelance Frontend Developer',
      intro:
        'Impassioned frontend engineer and Software Craftmanship enthusiast.',
      location: 'Location: Spain, World',
      email: 'escorponox@gmail.com',
      media: [
        {
          href: 'https://twitter.com/escorponox',
          imgSrc: 'assets/icons/twitter.png'
        },
        {
          href: 'https://github.com/escorponox',
          imgSrc: 'assets/icons/github2.png'
        },
        {
          href: 'https://es.linkedin.com/in/carlos-coves-prieto-a3128b49',
          imgSrc: 'assets/icons/linkedin.png'
        }
      ],
      back: 'Carlos Coves Prieto'
    }
  },
  footer: '2016 - Carlos Coves Prieto'
}
