var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
    var  = $("<span/>").text(a[a_idx]);
    var x = e.pageX,
      y = e.pageY;
    .css({
      "z-index": 99,
      "top": y - 28,
      "left": x - a[a_idx].length * 8,
      "position": "absolute",
      "color": "#ff7a45"
    });
    $("body").append();
    .animate({
      "top": y - 180,
      "opacity": 0.5
    }, 1500, function() {
      .remove();
    });
    a_idx = (a_idx + 1) % a.length;
  });
});
