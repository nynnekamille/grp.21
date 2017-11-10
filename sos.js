/// START ///
function vingebask_sound() {


}

$("#startknap").on("click", start_f);

// Intro funktioner

function start_f() {
    console.log("Siden er nu loadet.");
    // Remove:
    $("#startknap").hide();
    $("#fugl").css("animation-play-state", "running");
    $("#vingebask_sound")[0].play();
    $("#fugl").on("animationend", eva_ind);
    $("#startknap").off("click", start_f);
}

function eva_ind() {
    console.log("Eva kommer ind");
    $("#eva").css("animation-play-state", "running");
    $("#eva").on("animationend", sms_lyd);
}

function sms_lyd() {
    $("#sms_sound")[0].play();
}
