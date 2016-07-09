$(document).ready(function() {
  $(".product-comparison-trigger").each(function() {
    $(this).click(function() {
      var tableFort = $("table tbody tr td");
      tableFort.each(function() {
        if ($(this).text().match('Food')) {
          var indexInt = $(this).parent().index();
          alert(indexInt);

        }
      });
    });
  });
});
