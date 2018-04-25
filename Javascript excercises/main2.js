$(function() {
    $(".button").click(function(GetValue) {
        var items = $(".numbers");

      var item = Math.floor(Math.random() * items.length);
        $(items[item]).css({backgroundColor: "#6a37b7", color:"white"});
    });
});
