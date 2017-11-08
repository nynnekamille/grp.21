/// START ///
$("#startknap").on("click", start_f);

// Intro funktioner

function start_f(){
console.log("Siden er nu loadet.");

// Remove:
$("#startknap").hide();
$("#startknap").off("click", start_f);
}
