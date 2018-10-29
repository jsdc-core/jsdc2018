(function($) {
  var botui = new BotUI('jobs');
  var companys = [
    {
      text: '英諾瓦資訊科技服務有限公司',
      value: 'Innova Solutions Taiwan, LTD.',
      jobs: [
        {
          text: 'Frontend Fullstack Developer - React.js Node.js JavaScript',
          value: 'F2E',
          intro: ['Required: ', '- 2+ years of experience as a Front End SWE/Developer utilizing skills such as HTML, CSS and JavaScript', '- 1+ years of experience with the following user interface technologies: React.js, Node.js and WebPack', 'Preferred: ', '- Experience building/consuming REST web services.', '- Background in RESTful API development, relational databases, and complex systems integration.', '- Modern CI/CD pipeline tooling including GIT, GitHub/GitLab, JIRA, and Jenkins ', '- Experience configuring/automating/supporting AWS environments. ', '- Demonstrated technical lead experience as user interface software engineer. ', '- Demonstrated design experience for corporate user interfaces.'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/1'
        },{
          text: 'Software QA Engineer （美商，有機會至美國出差）',
          value: 'F2E',
          intro: ['Required: ', '- Experience with scripting FTP file transfer integrations', '- Experience with Microservice testing', '- Experience with white box testing', '- Solid understanding of agile software quality assurance and processes.', '- Strong desire to join and influence an agile development team and build quality software.', '- Participating in the planning, development and testing of key features as a member of an agile team.', '- Investigate and implement new agile testing methodologies for robustness and efficiency.', '- Work with Product Owner to define acceptance criteria.', '- Work with Developers to understand the scope and requirements implied in acceptance criteria.', '- Build automated test to validate story acceptance criteria.'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/2'
        },{
          text: 'Data Engineer (IHDP) 美商',
          value: 'F2E',
          intro: ['Required: ', '- Working knowledge of high-level languages such as Java / C#. ', '- Create custom Spark SQL queries to help support the analytics team. ', '- Experience with SQL queries design and development ', '- Experience with Data warehousing, Data analytics, big data (like Hive, Spark). ', '- Experience with ETL process, implementation, and testing ', '- Experience with Zeppelin Notebook. ', '- Solid understanding of agile software quality assurance and processes. ', '- Strong desire to join and influence an agile development team and build quality software. ', '- Has in-depth software programming ', '- Technical expertise in one or more disciplines or product lines. ', 'Preferred: ',  '- Experience with Cloud experience (AWS, Azure, EMR, HD Insight) preferred ', '- Experience with Web service tools (Postman, SoapUI) preferred ', '- Experience with Unit testing frameworks (junit, nunit) preferred'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/3'
        },
      ]
    },
    // {
    //   text: '104 資訊科技',
    //   value: '104',
    //   jobs: [
    //     {
    //       text: '資深前端工程師 (Sr.Front-End Web Developer)',
    //       value: 'F2E',
    //       intro: ['薪資：具市場競爭性，內部公平性的薪酬制度', '條件：React、Vue、Angular 其中一項且具有 SEO、RWD、前端模組開發經驗', '福利：員工持股信託、年度調薪', '其他：JSDC 2017 活動攤位攜帶履歷可現場快速面試，錄取者提供 20,000 獎金'],
    //       url: 'https://github.com/jsdc-core/jsdc2017/issues/6'
    //     },
    //   ]
    // },
    {
      text: 'Carousell 旋轉拍賣',
      value: 'carousell',
      jobs: [
        {
          text: 'Senior Software Engineer, Backend (Taiwan)',
          value: 'F2E',
          intro: ['Required:', 'Degree in Computer Science, Software Engineering or other equivalent degrees/experience', '5+ years experience in software development', 'Experience in either Go, Python, Django/Flask, RESTful APIs', 'Excellent knowledge of RDBMS and object caches such as PostgreSQL, Memcached, Redis and knowledge of how to design, tune and optimise SQL queries and caching strategies', 'Experience in building large, scalable distributed systems with good understanding of microservices architecture and associated principles', 'Experience with TDD/BDD and agile methodologies', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/4',
          sendCV: 'https://boards.greenhouse.io/carousell/jobs/1263105'
        },
        {
          text: 'Senior Software Engineer, QA (Taiwan)',
          value: 'F2E',
          intro: ['Required:', 'Degree in Computer Science, Software Engineering or other equivalent degrees/experience', 'At least 3-5 years experience in an SDET/QA Engineer role', 'Experience in automated testing of Web & Mobile (iOS and Android) platforms.', 'Strong programming skills in at least one common language such as Python, Go or Java.', 'Strong skills in any of the mobile automation tools like Appium/Calabash/Robotium/Espresso etc.', 'Familiar with or have experience with testing tools such as Selenium WebDriver, JUnit/ TestNG, Ant/Maven/Gradle', 'Experience with continuous integration and continuous deployment systems such as Travis CI or Jenkins', 'Experience using and integrating with standard development tools in your QA workflow such as Git or SVN and Bug tracking tools such as Pivotal Tracker or JIRA.', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/5',
          sendCV: 'https://boards.greenhouse.io/carousell/jobs/1389855'
        },
        {
          text: 'Software Engineer, Backend (Taiwan)',
          value: 'F2E',
          intro: ['Required:', 'Degree in Computer Science, Software Engineering or other equivalent degrees/experience', '2+ years experience in software development', 'Experience in either Go, Python, Django/Flask, RESTful APIs', 'Excellent knowledge of RDBMS and object caches such as PostgreSQL, Memcached, Redis and knowledge of how to design, tune and optimise SQL queries and caching strategies', 'Experience in building large, scalable distributed systems with good understanding of microservices architecture and associated principles', 'Experience with TDD/BDD and agile methodologies', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/6',
          sendCV: 'https://boards.greenhouse.io/carousell/jobs/1395683'
        },
        {
          text: 'Software Engineer, Frontend Web (Taiwan)',
          value: 'F2E',
          intro: ['Required:', 'Commanding grasp of HTML, CSS and JavaScript', 'Experience with modern JavaScript libraries and tooling', 'Familiarity with all aspects of MVC web applications (especially those built on Django/Flask)', 'Proven ability to ship beautiful, stable and high-performance desktop and mobile web applications from start to finish', 'Experience with automated testing framework', 'Strong Computer Science background', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/7',
          sendCV: 'https://boards.greenhouse.io/carousell/jobs/1395676'
        },
      ]
    },
    {
      text: 'Pinkoi',
      value: 'pinkoi',
      jobs: [
        {
          text: 'Backend Engineer',
          value: 'F2E',
          intro: ['Required: ', '熟悉 CS (Computer Science) 相關知識或相關科系畢業','熟悉 Linux 系統，Pinkoi 用 Ubuntu','熟悉 Python, PHP, Ruby, C, C#, C++, Java, Go 任何一種語言，Pinkoi 主要用 Python','熟悉 Web 程式開發','熟悉 SQL 或 NoSQL 資料庫','熟悉 MVC 開發架構，有 web framework (i.e. Django, Flask) 的使用經驗','有串接第三方 API (Facebook, Google, etc) 經驗','有 Git 或其他版本控制系統經驗', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/8',
          sendCV: 'https://www.pinkoi.com/about/careers#backend-engineer',
        },
        {
          text: 'Frontend Engineer',
          value: 'F2E',
          intro: ['Required: ', '熟悉 CS (Computer Science) 相關知識或相關科系畢業', '有開發 web and mobile web 的實務經驗', '熟悉 JavaScript (in its raw form not just using library like jQuery)', '熟悉 modern web technologies (ES2015, HTML5, CSS3, webpack, React, Sass, PostCSS, etc)', '清楚 cross browser compatibility 可能會碰到的問題 (web / mobile web)', '清楚 progressive enhancement / graceful degradation / responsive design 的概念', '有 Git 或其他版本控制系統經驗', '熟悉 TCP/IP, HTTP Protocol，有 API 整合 (自家, Facebook, Google, etc) 的實務經驗', '有 web application security sense (XSS, CORS, CSRF, cookies, etc)', '熟悉 web and mobile web browser performance tuning skills (加分)', '有國際化 (i18n, l10n) 的實務經驗。(加分)', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/9',
          sendCV: 'https://www.pinkoi.com/about/careers#frontend-engineer',
        },
      ]
    },
    // {
    //   text: 'Dcard',
    //   value: 'dcard',
    //   jobs: [
    //     {
    //       text: 'Senior Web Frontend Developer',
    //       value: 'F2E',
    //       intro: ['薪資：60,000 - 100,000，或依經驗與能力面議', '條件：熟 React、Redux、CSS3、 Git，有 SEO 經驗、網頁速度最佳化、據 UI/UX 敏感度、有豐富 Mobile Web 開發經驗等佳', '福利：每周三遠端工作日、彈性工作、各項補助'],
    //       url: 'https://github.com/jsdc-core/jsdc2017/issues/8',
    //     },
    //   ]
    // },
  ];
  var jobCount = 0;
  companys.forEach(function(company){
    jobCount += company.jobs.length;
  });

  var currentData = {
    company: '',
    job: '',
  }

  jobsBot();
  window.jobsBot = jobsBot;

  function jobsBot(){
    botui.message.removeAll();
    botui.message.add({
      content: '哈囉！我是 JSDC 徵才 Bot'
    }).then(function () {

      botui.message.add({
        loading: true,
        delay: 500,
        content: '今年有 '+ companys.length +' 家公司，總計提供 '+ jobCount +' 個職缺！'
      });
      botui.message.add({
        delay: 500,
        content: '想了解有哪些公司呢？'
      });

      return botui.action.button({
        delay: 500,
        action: companys
      });
    }).then(function(result){
      currentData.company = result.value;
      currentData.job = '';

      if (result.jobs.length > 0) {
        botui.message.add({
          content: result.text + ' 有 ' + result.jobs.length + ' 個職缺，你想要了解哪一個職缺？'
        });

        return botui.action.button({
          delay: 500,
          action: result.jobs
        });
      } else {
        currentData.company = '';
        currentData.job = '';

        return botui.message.add({
          content: '查詢職缺發生錯誤，請與我們聯絡 hq@jsdc.tw'
        });
      }
    }).then(function(result){
      if (typeof result === 'number') {
        return botui.message.add({
          delay: 10000,
          content: 'JSDC 徵才 Bot 將在 10 秒後重新載入'
        });
      } else {
        result.intro.forEach(function(data){
          botui.message.add({
            delay: 0,
            content: data
          });
        });
        return botui.message.add({
          // type: 'embed',
          delay: 1000,
          content: '想了解更多就點開下方詳細資訊吧！<br><br>'+(result.sendCV?'<i class="fa fa-hand-o-right" style="marign-bottom:20px;"><a href="'+result.sendCV+'" target="_blank"> 直接投履歷</a><br><br><br>':'')+'<i class="fa fa-hand-o-right" style="marign-bottom:20px;"><a href="'+result.url+'" target="_blank"> 詳細職缺資訊</a><br><br><br><i class="fa fa-hand-o-right" style="marign-bottom:20px;"><a href="javascript:jobsBot();">了解其他職缺</a>'
        });
      }
    });
  }
})(jQuery);
