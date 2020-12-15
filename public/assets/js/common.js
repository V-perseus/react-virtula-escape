$( document ).ready(function() {

    //change background when scrolling
    let navbar = document.getElementsByClassName("navbar");
    // let dropdownMenu = document.getElementsByClassName("dropdown-menu");
    
    let last_known_scroll_position = 0;

    window.addEventListener('scroll', function(e) {
		last_known_scroll_position = window.scrollY;
		if (last_known_scroll_position <= 370) {
			navbar[0].classList.remove('bg-transparent');
			navbar[0].classList.add('bg-dark-theme');
		}
		else{
			navbar[0].classList.remove('bg-dark-theme');
			navbar[0].classList.add('bg-transparent');
		}
    });


    //ripple button
    $('.ripple').on('click', function(event) {
      event.preventDefault();
      var $btn = $(this),
        $div = $('<div/>'),
        btnOffset = $btn.offset(),
        xPos = event.pageX - btnOffset.left,
        yPos = event.pageY - btnOffset.top;

      $div.addClass('ripple-effect');
      $div
        .css({
          height: $btn.height(),
          width: $btn.height(),
          top: yPos - ($div.height() / 2),
          left: xPos - ($div.width() / 2),
          background: $btn.data("ripple-color") || "#fff"
        });
      $btn.append($div);

      window.setTimeout(function() {
        $div.remove();
      }, 2000);
    });
})