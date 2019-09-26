// $("#email").on("click", function() {
//     $("#sendMessageButton").attr("disabled", true);
// });

var txtBriefing = document.getElementById("email");
var btnEnvia = document.getElementById("sendMessageButton");

var onBriefingInput = function (event) {
  btnEnvia.disabled = !event.target.value;
}

txtBriefing.addEventListener("input", onBriefingInput);
txtBriefing.dispatchEvent(new Event('input'));