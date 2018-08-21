(function($) {
  $.get('http://blog.jsdc.tw', function(results){
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var blogContents = $(results).find('.article-list-item');
    var limit = blogContents.length > 5? 5 : blogContents.length;
    var newsEl = document.getElementsByClassName('news-container')[0];

    var addNewsEl = function(currentDate, currentTitle, currentContent, currentLink){
      var newEl = document.createElement('div');
      newEl.className = 'row news';

      var date = document.createElement('div');
      var month = document.createElement('span');
      var day = document.createTextNode(currentDate.getDate());
      var year = document.createElement('span');

      month.className = 'month';
      month.innerHTML = monthNames[currentDate.getMonth()];
      year.className = 'year';
      year.innerHTML = currentDate.getFullYear();

      date.className = 'col-xs-12 col-sm-2 date';
      date.appendChild(month);
      date.appendChild(day);
      date.appendChild(year);

      newEl.appendChild(date);

      var content = document.createElement('div');
      var newsTitle = document.createElement('h5');
      var newsContent = document.createElement('p');
      var newsContentLink = document.createElement('a');

      newsTitle.className = 'news-title';
      newsTitle.innerText = currentTitle;
      newsContent.className = 'news-paragraph';
      newsContent.innerText = currentContent + '       ';
      newsContentLink.style = 'color: #3096b2;';
      newsContentLink.innerText = '(閱讀更多)';
      newsContentLink.href = currentLink;
      newsContentLink.target= '_blank';

      newsContent.appendChild(newsContentLink);

      content.className = 'col-xs-12 col-sm-10 news-content';
      content.appendChild(newsTitle);
      content.appendChild(newsContent);

      newEl.appendChild(content);
      return newEl;
    }

    if (limit === 0)
      return;
    else
      $('.news-container > span').remove();


    for (var i=0 ; i<limit ; i++) {
      var blogContent = $(blogContents[i]);
      var linkEl = blogContent.find('a')[0].href;
      var postDate = new Date(linkEl.match(/[\d]{4}\/[\d]{2}\/[\d]{2}/)[0]);
      var postLink = 'http://blog.jsdc.tw/' + linkEl.match(/[\d]{4}\/[\d]{2}\/[\d]{2}\/\S*/)[0];
      var postTitle = blogContent.find('.article-titile')[0].innerText;
      var postContent = blogContent.find('p')[0].innerText;
      newsEl.appendChild(addNewsEl(postDate, postTitle, postContent, postLink));
    }
  });
})(jQuery);
