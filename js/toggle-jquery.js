$(function() {
    $(".section").each(function(indx, el) {
        var li = $("li", el),
            box = $(".toggle__content-box", el),
            btn = $(".btn-arrow", el),
            len = li.length - 1,
            i = 0;
        $(el).on("click", "li", function() {
            i = li.index(this);
            li.removeClass("current").eq(i).addClass("current");
            box.removeClass("visible").eq(i).addClass("visible")
        });
        $(el).on("click", ".btn-arrow", function(event) {
            event.preventDefault();
            i += $(this).is(".btn-arrow_prev") ? -1 : 1;
            i < 0 && (i = len);
            i > len && (i = 0);
            li.eq(i).click()
        })
    })
});