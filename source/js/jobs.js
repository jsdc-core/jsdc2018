(function($) {
  var botui = new BotUI('jobs');
  var companys = [
    {
      text: '英諾瓦資訊科技 Innova',
      value: 'innova',
      jobs: [
        {
          text: 'Frontend Fullstack Developer',
          value: 'F2E',
          intro: ['條件：2 年 HTML、CSS、JavaScript 與 1 年 React、Node.js、webpack 開發經驗', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/1'
        },{
          text: 'Software QA Engineer',
          value: 'QA',
          intro: ['條件：有 FTP 輸入整合、微服務測試、白箱測試等經驗', '(小編的陌生領域，有興趣者建議點下方的『詳細職缺資訊』了解更多)'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/2'
        },{
          text: 'Data Engineer (IHDP)',
          value: 'Data',
          intro: ['條件：會 Java / C#、Spark 等', '(小編的陌生領域，有興趣者建議點下方的『詳細職缺資訊』了解更多)'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/3'
        },
      ]
    },
    {
      text: '鈦坦科技 Titansoft',
      value: 'titansoft',
      jobs: [
        {
          text: '軟體工程師 Software Engineer / Programmer(台北)',
          value: 'SW',
          intro: ['薪資：50,000 以上或依經驗與能力面議', '條件：有 C# .Net, ECMA Script, AJAX, OO, SQL Server 2012 等經驗者佳', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/10',
          sendCV: 'https://www.104.com.tw/job/?jobno=3ypjf&jobsource=',
        },
      ]
    },
    {
      text: '旋轉拍賣 Carousell',
      value: 'carousell',
      jobs: [
        {
          text: 'Senior Software Engineer, Backend (Taiwan)',
          value: 'SBE',
          intro: ['條件：5 年開發經驗且對下述語言了解一種以上者佳 (Go, Python, Django/Flask, Restful API)', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/4',
          sendCV: 'https://boards.greenhouse.io/carousell/jobs/1263105'
        },
        {
          text: 'Senior Software Engineer, QA (Taiwan)',
          value: 'QA',
          intro: ['條件： 3 至 5 年 SDET/QA 經驗且有撰寫 Web & Mobile 自動化測試者佳', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/5',
          sendCV: 'https://boards.greenhouse.io/carousell/jobs/1389855'
        },
        {
          text: 'Software Engineer, Backend (Taiwan)',
          value: 'BE',
          intro: ['條件：2 年開發經驗且對下述語言了解一種以上者佳 (Go, Python, Django/Flask, Restful API)', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/6',
          sendCV: 'https://boards.greenhouse.io/carousell/jobs/1395683'
        },
        {
          text: 'Software Engineer, Frontend Web (Taiwan)',
          value: 'F2E',
          intro: ['條件：了解 MVC 架構、有撰寫自動化測試經驗且了解現代 JavaScript library 者佳', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
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
          intro: ['條件：有 Python (Pinkoi 使用此), PHP, Ruby, C, C#, C++, Java, Go 任何一種語言、 Web 程式開發、MVC 開發架構和有操作 SQL 或 NoSQL 資料庫經驗者佳', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
          url: 'https://github.com/jsdc-core/jsdc2018/issues/8',
          sendCV: 'https://www.pinkoi.com/about/careers#backend-engineer',
        },
        {
          text: 'Frontend Engineer',
          value: 'F2E',
          intro: ['條件：有 Web 和 Mobile Web 實務經驗、了解現代 JavaScript library 且有解決跨瀏覽器問題等經驗者佳', '想知道更多資訊可以到下方『詳細職缺資訊』觀看！'],
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
