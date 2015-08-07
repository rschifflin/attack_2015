$(function (){
  var $seat_selector = $('#choose-seat');
  var sections = ['1','2','3','4','5','6'];
  for (var i in sections) {
    var $div = $('<div class="section">')
    $div.css({
      display: 'inline-block',
      width: '100px',
      height: '100px',
      backgroundColor: 'blue',
      border: '1px yellow solid',
      color: 'yellow'
    });
    $div.text("Section " + sections[i]);
    $div.data('section-number', sections[i]);
    $div.mouseover(highlight);
    $div.mouseout(unhighlight);
    $div.click(selectSeat);
    $seat_selector.append($div);
  }
  var selection = $('<div id="seat-selection">')
  $seat_selector.after(selection);

  function highlight(event) {
    $(this).css({backgroundColor:"red"});
  }

  function unhighlight(event) {
    $(this).css({backgroundColor: "blue"});
  }

  function selectSeat(event) {
    $('#seat-selection').text('Selected section '+$(this).data('section-number'));
  }
});
