const deg = 6;
      const hr = document.querySelector('#hr');
      const mn = document.querySelector('#mn');
      const sc = document.querySelector('#sc');
    
      setInterval(() => {
        let day = new Date();
        let hh = day.getHours()*30;
        let mm = day.getMinutes()*deg;
        let ss = day.getSeconds()*deg;
    
        hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
      })
    
      let timerId;
    
      function update() {
        let clock = document.getElementById('clock_2'); //привязываю к "clock"
        let date = new Date();
    
        let hours = date.getHours(); //здесь часы
        if (hours < 10) hours = '0' + hours;
        clock.children[0].innerHTML = hours;
    
        let minutes = date.getMinutes(); //здесь минуты
        if (minutes < 10) minutes = '0' + minutes;
        clock.children[1].innerHTML = minutes;
    
        let seconds = date.getSeconds(); //здесь секунды
        if (seconds < 10) seconds = '0' + seconds;
        clock.children[2].innerHTML = seconds;
      }
    
      function clockStart() { //запуск часов
        timerId = setInterval(update, 1000);
        update(); // начать тут же, не ждать 1 секунду пока setInterval сработает
      }
    
      function clockStop() { //остановка часов
        clearInterval(timerId);
      }
    
      clockStart(); 
    