(function () {
    $(document).ready(function () {
        $("#start").click(function () {
            $(".boundary").removeClass("youlose");
            $("#status").text("started.....");

            $(".boundary").on("mouseenter", function () {
                $(".boundary").addClass("youlose");
                $("#status").text("You Lose :(");
            });

            $("#maze").on("mouseleave", function () {
                $(".boundary").addClass("youlose");
                $("#status").text("You Lose :(");
                $("#end").off("mouseover");
            });
            $("#end").on("mouseover", function () {
                $("#status").text("You Win :)");
                $(".boundary").off("mouseenter");
                $("#maze").off("mouseleave");
            });

        });

    });

})();