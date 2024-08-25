class GAG_btn {

    constructor(){

        this.DOM = {};
        this.DOM.btn = document.querySelector('.btn');
        this.DOM.body = document.querySelector('body');
        this.eventType = this._getEventType();
        this._addEvent();
        this._GAG();
    }


 _getEventType() {
        const isTouchCapable =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch) ||
          navigator.maxTouchPoints > 0 ||
          window.navigator.msMaxTouchPoints > 0;
    
        return isTouchCapable ? "touchstart" : "click";
      }

_toggle(){
    this.DOM.body.classList.toggle('menu-open');
 } 

 _addEvent() {
    this.DOM.btn.addEventListener('click', this._toggle.bind(this));
 }

 _GAG() {
        btn.addEventListener('click',function() {
          

            obj.classList.toggle('animation');
            gagMessage.textContent = say[S];
            sendFlag = true;
         });
         
      }           
  }


    

    
    let say = ['歯ーみがけよ(笑）','お母さんの言うこと聞けよ（笑）','宿題しろよ（笑）','お風呂入れよ（笑）',
              'ご飯たべろよ（笑）','ちゃんと寝ろよ（笑）','ちゃんと勉強しろよ（笑）','"Thank You" !',
              '今日は良い日だ（笑）','Please listen to my songs !','酒、飲みすぎるなよ（笑）',
              "Let's dance !",'I Love You !','ありがとう！','"ガハハハ"','"大吉" !',
              '風邪ひくなよ (笑）','風がいいね !','元気ですか？(笑）'];
    
    let S = Math.floor(Math.random(say) * 19);

    // let M_number = Math.floor(Math.random() * 4);

    let gagMessage = document.querySelector('.gag');

    const btn = document.querySelector('.btn');

    const obj = document.querySelector('.message');

    let sendFlag = false;

    
const LOL = new GAG_btn;

   
