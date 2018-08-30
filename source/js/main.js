(function($) {
    if (location.pathname === '/')
      function toTwo(num) {
        return num < 10 ? '0' + num : '' + num;
      }
      var countdown = setInterval(function(){
        var specifyDay = null;
        var nightTicketEndDay = new Date('2018/09/16 22:00:00').getTime();
        var confStartDay = new Date('2018/11/17 09:00:00').getTime();
        var confEndtDay = new Date('2018/11/18 17:00:00').getTime();
        // var countdownTitle = document.getElementsByClassName('content')[0];
        var ticketButtonText = document.getElementsByClassName('ticket-booking')[0];

        if (nightTicketEndDay > Date.now()) {
          specifyDay = nightTicketEndDay;
          // countdownTitle.innerHTML = 'countdown ticket';

        } else if (confStartDay > Date.now()) {
          specifyDay = confStartDay;
          // countdownTitle.innerHTML = 'jsdc 2018 countdown';

        } else if (confEndtDay > Date.now()) {
          specifyDay = confEndtDay;
          // countdownTitle.innerHTML = 'countdown to the end of jsdc';

        } else {
          // countdownTitle.innerHTML = 'see you jsdc 2018';
          clearInterval(countdown);
          return;
        }

        if (specifyDay !== nightTicketEndDay) {
          ticketButtonText.text = 'SOLD OUT';
        }

        var now = Date.now();
        var diff = new Date(specifyDay - now).getTime();
        var util = {
          seconds: 1000,
          minutes: 1000*60,
          hours: 1000*60*60,
          day: 1000*60*60*24,
        }

        var day = Math.floor(diff / util.day);
        var hours = Math.floor((diff / util.hours) % 24);
        var minutes = Math.floor((diff / util.minutes) % 60);
        var seconds = Math.floor((diff / util.seconds) % 60);

        var str = toTwo(day) + toTwo(hours) + toTwo(minutes) + toTwo(seconds);
        $('.time-content .num').each(function(i, ele){
          $(ele).html('<img width=100% src="images/number/'+str.charAt(i)+'.png">');
        });

        // $('.date').text(day.toString().length === 1?'0'+ day:day);
        // $('.hours').text(hours.toString().length === 1?'0'+ hours:hours);
        // $('.minutes').text(minutes.toString().length === 1?'0'+ minutes:minutes);
        // $('.seconds').text(seconds.toString().length === 1?'0'+ seconds:seconds);
      }, 1000);

})(jQuery);
