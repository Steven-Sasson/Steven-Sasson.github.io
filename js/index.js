
console.log("document loaded")

$('.drivedrop').hide();

$('.driven').click(onDrivenClick);
$('.drivedrop').click(onDriveReClick);

// function onDrivenClick() {
//   $('.drivedrop').slideToggle();
// }

// function hide() {
//   $(".drivedrop").css("display", "none");
// }

function onDrivenClick() {
  $('.drivedrop').show();
  console.log("this is being clicked")
}

function onDriveReClick() {
  $('.drivedrop').hide();
}

