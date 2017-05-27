export default ({
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
          {
            href: 'tab-radio1',
            text: 'Sidebar'
          },
          {
            href: 'tab-radio2',
            text: 'Forms'
          },
          {
            href: 'tab-radio3',
            text: 'Kids Calculator'
          },
          {
            href: 'tab-radio4',
            text: 'Shopping Cart'
          },
          {
            href: 'tab-radio5',
            text: 'UI Components'
          }
        ]
      },
      {
        href: '#skills',
        text: 'Skills'
      },
      {
        href: '#Articles',
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
        href: '#Articles',
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
      'This portfolio tries to avoid the use of JavaScript (except for the embedded projects) by using some small HTML and CSS hacks. Just for academic purposes.',
    ]
  },
  projects: {
    title: 'Projects',
    paragraphs: [
      'Some demo projects to show what I do.'
    ],
    tabs: [
      {
        label: 'Sidebar',
        tab: {
          carousel: [
            {
              img: 'assets/images/sidebar.png'
            },
            {
              img: 'assets/images/sidebar-2.png'
            },
            {
              content: `<div class="sidebar">
              <div class="name-header">
              <h1 class="sidebar__heading sidebar__heading--name">Carlos</h1>
              <h1 class="sidebar__heading">Coves Prieto</h1>
            </div>
            <div class="sidebar__photo-container sidebar__photo-container--main">
              <img class="sidebar__img sidebar__img--border" src="assets/images/me-sidebar.png">
              </div>
              <div class="sidebar__photo-container">
              <img class="sidebar__img sidebar__img--border" src="assets/images/desktop.png">
              </div>
              <div class="sidebar__photo-container">
              <img class="sidebar__img" src="assets/images/arch_sh.png">
              </div>
              <div class="clear-both"></div>
              <hr class="sidebar__hr">
              <div>
              <h3>The only way to go fast is to go well</h3>
            <p class="sidebar__paragraph">In my last years as a supply chain engineer, I became interested in
            programming and open source collaboration. After a casual meeting with an Agile developer, I
          discovered TDD, Clean Code and SOLID principles. Now I am a test-first coding believer.</p>
      <p class="sidebar__paragraph">The heading is a quote from Robert C. "Uncle Bob" Martin. The photo
      shows my desktop, which runs i3 window manager under Arch Linux, my favourite distro.</p>
      <button class="sidebar__button">Back to Full Profile</button>
      </div>
      </div>`
            }
          ],
          static: {
            title: '<strong>TECHNOLOGIES:</strong> HTML5, CSS3',
            paragraphs: [
              'This is a sidebar built for Modern Developer social media'
            ],
            links: [
              {
                href: 'https://escorponox.github.io/learning-web-components/components/sidebar/index.html',
                text: 'Live Demo',
                blue: true
              },
              {
                href: 'https://github.com/escorponox/learning-web-components/tree/master/components/sidebar',
                text: '<span class="fa fa-github fa-lg" aria-hidden="true"></span> Source Code'
              }
            ]
          }
        },
      },
      {
        label: 'Forms',
        tab: {
          carousel: [
            {
              content: `<form id="signup-form" class="coves-form" method="post" action="#" novalidate>
                    <label for="username" class="coves-form__label">Username</label>
                    <div class="coves-form__input-container--column">
                      <div class="icon icon-user"></div>
                      <span class="coves-form-ok fa fa-thumbs-o-up fa-lg" aria-hidden="true"></span>
                      <input id="username" class="coves-form__input coves-form__input--required"
                             type="text" name="username" placeholder="Your username">
                      <div id="username__error" class="coves-form__error--attached"></div>
                    </div>
                    <label for="first-name" class="coves-form__label">First Name</label>
                    <div class="coves-form__input-container--column">
                      <span class="icon icon-name"></span>
                      <span class="coves-form-ok fa fa-thumbs-o-up fa-lg" aria-hidden="true"></span>
                      <input id="first-name" class="coves-form__input coves-form__input--required"
                             type="text" name="firstname" maxlength="50" placeholder="Your first name">
                      <div id="first-name__error" class="coves-form__error--attached"></div>
                    </div>
                    <label for="last-name" class="coves-form__label">Last Name</label>
                    <div class="coves-form__input-container--column">
                      <span class="icon icon-name"></span>
                      <span class="coves-form-ok fa fa-thumbs-o-up fa-lg" aria-hidden="true"></span>
                      <input id="last-name" class="coves-form__input coves-form__input--required"
                             type="text" name="lastname" maxlength="50" placeholder="Your last name">
                      <div id="last-name__error" class="coves-form__error--attached"></div>
                    </div>
                    <label for="email" class="coves-form__label">Email Address</label>
                    <div class="coves-form__input-container--column">
                      <span class="icon icon-email"></span>
                      <span class="coves-form-ok fa fa-thumbs-o-up fa-lg" aria-hidden="true"></span>
                      <input id="email" class="coves-form__input coves-form__input--required"
                             type="text" name="email" placeholder="Your e-mail address">
                      <div id="email__error" class="coves-form__error--attached"></div>
                    </div>
                    <label for="birth" class="coves-form__label">Date of Birth</label>
                    <div class="coves-form__input-container--column">
                      <span class="icon icon-date"></span>
                      <span class="coves-form-ok fa fa-thumbs-o-up fa-lg" aria-hidden="true"></span>
                      <input id="birth" class="coves-form__input coves-form__input--required"
                             type="text" name="birth" placeholder="Your date of birth">
                      <div id="birth__error" class="coves-form__error--attached"></div>
                    </div>
                    <label for="pass" class="coves-form__label">Password</label>
                    <div class="coves-form__input-container--column">
                      <span class="icon icon-pass"></span>
                      <span class="coves-form-ok fa fa-thumbs-o-up fa-lg" aria-hidden="true"></span>
                      <input id="pass" class="coves-form__input coves-form__input--required"
                             type="password" name="pass">
                      <div id="pass__error" class="coves-form__error--attached"></div>
                    </div>
                    <label for="pass-repeat" class="coves-form__label">Repeat Password</label>
                    <div class="coves-form__input-container--column">
                      <span class="icon icon-pass"></span>
                      <span class="coves-form-ok fa fa-thumbs-o-up fa-lg" aria-hidden="true"></span>
                      <input id="pass-repeat" class="coves-form__input coves-form__input--required"
                             type="password" name="pass-repeat">
                      <div id="pass-repeat__error" class="coves-form__error--attached"></div>
                    </div>
                    <div class="coves-form__input-container--row t-center-main">
                      <input type="submit" class="button" value="Submit">
                    </div>
                    <div class="coves-form__input-container--row t-center-main">
                      <div id="signup__error-box" class="coves-form__error-box">All inputs are required</div>
                    </div>
                  </form>`
            },
            {
              content: `<form id="questionnaire-form" class="coves-form" method="post" action="#" novalidate>
                  <label class="coves-form__label">How did you find this page?</label>
                  <div class="coves-form__radio-set">
                    <div class="coves-form__radio-container">
                      <input id="magazine" class="coves-form__radio-container__input" type="radio" name="find" value="magazine"
                             tabindex="1">
                      <label for="magazine" class="coves-form__radio-container__label o-cursor-pointer">Magazine</label>
                    </div>
                    <div class="coves-form__radio-container">
                      <input id="tv" class="coves-form__radio-container__input" type="radio" name="find" value="tv">
                      <label for="tv" class="coves-form__radio-container__label o-cursor-pointer">TV</label>
                    </div>
                    <div class="coves-form__radio-container">
                      <input id="google" class="coves-form__radio-container__input" type="radio" name="find" value="google">
                      <label for="google" class="coves-form__radio-container__label o-cursor-pointer">Google Ad</label>
                    </div>
                    <div class="coves-form__radio-container">
                      <input id="friend" class="coves-form__radio-container__input" type="radio" name="find" value="friend">
                      <label for="friend" class="coves-form__radio-container__label o-cursor-pointer">Friend</label>
                    </div>
                    <div class="coves-form__radio-container">
                      <input id="other" class="coves-form__radio-container__input" type="radio" name="find" value="other">
                      <label for="other" class="coves-form__radio-container__label o-cursor-pointer">Other</label>
                    </div>
                    <div class="coves-form__input-container--column">
                      <input id="other-text" class="coves-form__input coves-form__radio-container__text" type="text"
                             name="other-text" disabled placeholder="Other media" tabindex="2">
                      <div id="other-text__error" class="coves-form__error--attached coves-form__radio-container__text"></div>
                    </div>
                  </div>
                  <div class="coves-form__input-container--row t-center-main">
                    <input type="submit" class="button" value="Submit" tabindex="3">
                  </div>
                  <div class="coves-form__input-container--row t-center-main">
                    <div id="questionnaire__error-box" class="coves-form__error-box"></div>
                  </div>
                </form>`
            },
            {
              content: `<form class="coves-form--center" method="post" action="#" novalidate>
                  <div class="coves-form__input-container--row">
                    <label for="red" class="coves-form__label label-range">Red</label>
                    <input id="red" type="range" class="input-range-coves" min="0" max="255" step="5" value="130">
                    <label for="red" class="coves-form__label label-range"></label>
                  </div>
                  <div class="coves-form__input-container--row">
                    <label for="green" class="coves-form__label label-range">Green</label>
                    <input id="green" type="range" class="input-range-coves" min="0" max="255" step="5" value="130">
                    <label for="green" class="coves-form__label label-range"></label>
                  </div>
                  <div class="coves-form__input-container--row">
                    <label for="blue" class="coves-form__label label-range">Blue</label>
                    <input id="blue" type="range" class="input-range-coves" min="0" max="255" step="5" value="130">
                    <label for="blue" class="coves-form__label label-range"></label>
                  </div>
                  <div class="coves-form__input-container--row">
                    <label for="alpha" class="coves-form__label label-range">Alpha</label>
                    <input id="alpha" type="range" class="input-range-coves" min="0" max="1" step="0.01" value="0.5">
                    <label for="alpha" class="coves-form__label label-range"></label>
                  </div>
                  <div class="coves-form__input-container--row">
                    <textarea id="color" name="color" class="coves-form__input coves-form__textarea--no-resize"
                              rows="1" cols="21" placeholder="Output" readonly></textarea>
                  </div>
                </form>`
            }
          ],
          static: {
            title: '<strong>Technologies:</strong> HTML5, CSS3, and Vanilla JavaScript',
            paragraphs: [
              'Several forms built with custom design and using the modern validators API'
            ],
            links: [
              {
                href: 'https://escorponox.github.io/learning-web-components/components/forms/index.html',
                text: 'Live Demo',
                blue: true
              },
              {
                href: 'https://github.com/escorponox/learning-web-components/tree/master/components/forms',
                text: '<span class="fa fa-github fa-lg" aria-hidden="true"></span> Source Code'
              }
            ]
          }
        }
      },
      {
        label: 'Kids Calculator',
        tab: {
          carousel: [
            {
              img: 'assets/images/calc-1.png'
            },
            {
              img: 'assets/images/calc-2.png'
            },
            {
              img: 'assets/images/calc-3.png'
            },
            {
              content: `<div id="calculator" class="calculator">
                  <div class="screen">
                    <input id="screen" class="calculator__screen" readonly value="0">
                  </div>
                  <div class="button-row">
                    <div id="number7" class="calculator__button calculator__button--20 calculator__button--number">7
                    </div>
                    <div id="number8" class="calculator__button calculator__button--20 calculator__button--number">8
                    </div>
                    <div id="number9" class="calculator__button calculator__button--20 calculator__button--number">9
                    </div>
                    <div id="divide" class="calculator__button calculator__button--20 calculator__button--sign">/</div>
                    <div id="del" class="calculator__button calculator__button--20 calculator__button--clear-del">DEL
                    </div>
                  </div>
                  <div class="button-row">
                    <div id="number4" class="calculator__button calculator__button--20 calculator__button--number">4
                    </div>
                    <div id="number5" class="calculator__button calculator__button--20 calculator__button--number">5
                    </div>
                    <div id="number6" class="calculator__button calculator__button--20 calculator__button--number">6
                    </div>
                    <div id="multiply" class="calculator__button calculator__button--20 calculator__button--sign">*
                    </div>
                    <div id="clear" class="calculator__button calculator__button--20 calculator__button--clear-del">C
                    </div>
                  </div>
                  <div class="button-row">
                    <div id="number1" class="calculator__button calculator__button--20 calculator__button--number">1
                    </div>
                    <div id="number2" class="calculator__button calculator__button--20 calculator__button--number">2
                    </div>
                    <div id="number3" class="calculator__button calculator__button--20 calculator__button--number">3
                    </div>
                    <div id="minus" class="calculator__button calculator__button--20 calculator__button--sign">-</div>
                  </div>
                  <div id="equal" class="calculator__button calculator__button--20 calculator__button--equal">=</div>
                  <div class="button-row">
                    <div id="number0" class="calculator__button calculator__button--40 calculator__button--number">0
                    </div>
                    <div id="number-point" class="calculator__button calculator__button--20 calculator__button--number">
                      .
                    </div>
                    <div id="plus" class="calculator__button calculator__button--20 calculator__button--sign">+</div>
                  </div>
                </div>`
            }
          ],
          static: {
            title: '<strong>Technologies:</strong> HTML5, CSS3, and Vanilla JavaScript',
            paragraphs: [
              'Basic calculator with a flashy color palette to attract kids attention'
            ],
            links: [
              {
                href: 'https://escorponox.github.io/learning-web-components/components/calculator/index.html',
                text: 'Live Demo',
                blue: true
              },
              {
                href: 'https://github.com/escorponox/learning-web-components/tree/master/components/calculator',
                text: '<span class="fa fa-github fa-lg" aria-hidden="true"></span> Source Code'
              }
            ]
          }
        }
      },
      {
        label: 'Shopping Cart',
        tab: {
          carousel: [
            {
              img: 'assets/images/cart-1.gif'
            },
            {
              img: 'assets/images/cart-2.gif'
            },
            {
              img: 'assets/images/cart-3.gif'
            },
            {
              img: 'assets/images/cart-4.gif'
            }
          ],
          static: {
            title: '<strong>Technologies:</strong> HTML5, CSS3, and Vanilla JavaScript',
            paragraphs: [
              'Simple shopping cart. Now more elegant and responsive'
            ],
            links: [
              {
                href: 'https://escorponox.github.io/learning-web-components/components/listing/index.html',
                text: 'Live Demo',
                blue: true
              },
              {
                href: 'https://github.com/escorponox/learning-web-components/tree/master/components/listing',
                text: '<span class="fa fa-github fa-lg" aria-hidden="true"></span> Source Code'
              }
            ]
          }
        }
      },
      {
        label: 'UI Components',
        tab: {
          carousel: [
            {
              content: `<div class="tabComponent">
                  <input type="radio" checked name="fake-tab" id="homeDecor">
                  <label for="homeDecor">Decor</label>

                  <input type="radio" name="fake-tab" id="furniture">
                  <label for="furniture">Furniture</label>

                  <input type="radio" name="fake-tab" id="kitchen">
                  <label for="kitchen">Kitchen</label>

                  <div class="tab">Browse through our list of Home Decor Items</div>
                  <div class="tab">Flash Sale on Living Room and Bedroom Furniture</div>
                  <div class="tab">Bring the best out of the masterchef in you!!</div>
                </div>`
            },
            {
              content: `<div class="accordion vertical">
                  <ul>
                    <li>
                      <input type="radio" id="radio-1" name="radio-accordion" checked="checked"/>
                      <label for="radio-1">Appetizers</label>
                      <div class="content">
                        <h3>Check our our tasty apps!</h3>
                        <p><strong>Happy hour menu - half off!!</strong></p>
                        <ul>
                          <li>Chicken Wings (6) - 5.99$</li>
                          <li>Calamari - 7.99$</li>
                          <li>Garlic breaded pickles - 4.59$</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <input type="radio" id="radio-2" name="radio-accordion"/>
                      <label for="radio-2">Entrees</label>
                      <div class="content">
                        <h3>Choose from a wide range of pastas</h3>
                        <p><strong>Pastas</strong></p>
                        <ul>
                          <li>Chicken Picatta - 14.99$</li>
                          <li>Chicken Pollo - 12.99$</li>
                          <li>Lasagna (Chicken/beef) - 10.99$</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <input type="radio" id="radio-3" name="radio-accordion"/>
                      <label for="radio-3">Desserts</label>
                      <div class="content">
                        <h3>New Summer specials!!</h3>
                        <p><strong>Shakes and Ice Creams</strong></p>
                        <ul>
                          <li>Turtle Caramel Shake - 6.99$</li>
                          <li> Chocolate Brownie Bite- 4.99$</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <input type="radio" id="radio-4" name="radio-accordion"/>
                      <label for="radio-4">Soups & Salads</label>
                      <div class="content">
                        <h3>Healthy starters</h3>
                        <p><strong>Soups</strong></p>
                        <ul>
                          <li>Vegetable Soup - 6.99$</li>
                          <li>Gazpacho Andaluz - 4.99$</li>
                        </ul>
                        <p><strong>Salads</strong></p>
                        <ul>
                          <li>Caesar Salad - 6.99$</li>
                          <li>Green Salad - 4.99$</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>`
            },
            {
              content: `<div class="embed-buttons">
                  <div class="button">Buy Now</div>
                  <button class="button">Send Mail</button>
                  <a href="#" class="button">Search</a>
                  <div class="button button--sm">A Small Button</div>
                  <div class="button">A Button</div>
                  <div class="button button--md">A Medium Button</div>
                  <div class="button button--lg">A Large Button</div>
                </div>`
            }
          ],
          static: {
            title: '<strong>Technologies:</strong> HTML5, CSS3',
            paragraphs: [
              'Pure CSS re-usable components'
            ],
            links: [
              {
                href: 'http://jsbin.com/nikoxaj/3/edit?output',
                text: 'Tabs',
                blue: true
              },
              {
                href: 'http://jsbin.com/sifoda/1/edit?output',
                text: 'Accordion',
                blue: true
              },
              {
                href: 'https://escorponox.github.io/learning-web-components/components/buttons/index.html',
                text: 'Buttons',
                blue: true
              }
            ]
          }
        }
      }
    ]
  },
  skills: {
    title: 'Skills',
    paragraphs: 'My frontend skills are improving quickly due to <em>Modern Developer Program</em>, just like the backend skills will do when the time comes.',
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
      labels: [
        'Expert',
        'Proficient',
        'Compentent',
        'Learning'
      ],
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
              level: 'expert',
              tooltip: 'Years of experience'
            },
            {
              label: 'React',
              level: 'learning',
              tooltip: 'L.MD will improve this'
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
              tooltip: 'L.MD will improve this'
            },
            {
              label: 'Java/Spring',
              level: 'expert',
              tooltip: 'Years of experience'
            },
            {
              label: 'SQL DB',
              level: 'expert',
              tooltip: 'Years of experience'
            },
            {
              label: 'NoSQL DB',
              level: 'learning',
              tooltip: 'L.MD will improve this'
            },
            {
              label: 'Web Services',
              level: 'proficient',
              tooltip: 'SOAP and REST'
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
              tooltip: 'L.MD will improve this'
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
    paragraphs: [
      'Clear and concise articles written as end-of-chapter tasks for the <em>Modern Frontend Developer</em> program. They are oriented to all kind of people, even the non-technical ones.'
    ],
    list: [
      {
        href: '#articles',
        text: 'CSS Borders'
      },
      {
        href: '#articles',
        text: 'Element\'s width'
      },
      {
        href: '#articles',
        text: 'Comparison Operators'
      },
      {
        href: '#articles',
        text: 'CSS Sibling Selectors'
      },
      {
        href: '#articles',
        text: 'JavaScript DOM'
      },
      {
        href: '#articles',
        text: 'Domain Name System (DNS)'
      },
      {
        href: '#articles',
        text: 'Style Guides Disadvantages'
      },
      {
        href: '#articles',
        text: 'SVG Graphics'
      },
      {
        href: '#articles',
        text: 'HTML5 Numbers'
      }
    ]
  },
  contact: {
    title: 'Contact',
    paragraphs: [
      'Don\'t hesitate to contact me if you feel I can fit in your team. You can find me in the social media in the card below.'
    ],
    card: {
      name: 'Carlos Coves<span class="c-card__front__name__second-surname"> Prieto</span>',
      position: 'Freelance Frontend Developer',
      intro: 'Passionated web developer and Software Craftmanship enthusiast.',
      location: 'Location: Spain, World',
      email: 'escorponox@gmail.com',
      media: {
        encyclopedia: {
          imgSrc: 'assets/icons/enc2.png',
          name: 'Carlos Coves Prieto',
          on: 'on <a href="#" class="t-color-indigo">Encyclopedia.MD</a>'
        },
        social: [
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
        ]
      },
      flipSvg: `<svg width="38" height="34">
            <clipPath id="rect-clip-path">
              <rect x="0" y="0" width="38" height="10"></rect>
              <rect x="0" y="24" width="38" height="10"></rect>
              <rect x="19" y="10" width="19" height="8"></rect>
              <rect x="0" y="16" width="19" height="8"></rect>
            </clipPath>
            <filter id="blur-filter" x="-2" y="-2" width="50" height="50">
              <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2"></feGaussianBlur>
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
            </filter>
            <rect class="flip-line" x="7" y="4" width="24" height="26" rx="5" ry="5"
                  style="fill:transparent;stroke:white;stroke-width:2;"
                  clip-path="url(#rect-clip-path)"></rect>
            <polyline class="flip-line" points="3,17 7,15 11,17"
                      style="fill:none;stroke:white;stroke-width:2"/>
            <polyline class="flip-line" points="27,17 31,19 35,17"
                      style="fill:none;stroke:white;stroke-width:2"/>
          </svg>`
    }
  },
  footer: '2016 - Carlos Coves Prieto'
})