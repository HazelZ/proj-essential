// 2017.10.23
;(function($){
  $.fn.extend({
    color: function(value){
      if(value == undefined || ''){
        return this.css('color');
      }else{
        return this.css('color',value);
      }
    }
  });
})(jQuery);