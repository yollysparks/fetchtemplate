
const URL = "http://api.icndb.com/jokes/random";
class JokeFacade {
    getJokeViaCallback = (cb) => {
        fetch(URL)
          .then(function (res) {
            return res.json();
          }).then(function(data){
             let joke = data.value.joke
             if (cb) {
              cb(data.value.joke);
            }
          });  
        } 
      getJokeAndNotify = () => {
        fetch(URL)
          .then(function (res) {
            return res.json();
          }).then((data) => {
            let joke = data.value.joke
            if (this.handler) {
              this.handler(joke);
            };
          });
        }
      setObserver(handler) {
        this.handler = handler;
      }
    

      getJokeContiniuesly =(time) =>{
        this.timerId = setInterval(this.getJokeAndNotify,time);
    }
    stopIntervalFetching =()=>{
      if(this.timerId){
        clearInterval(this.timerId);
      }
    }
     
         
    }

export default new JokeFacade();
