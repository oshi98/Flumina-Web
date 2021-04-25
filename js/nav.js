//move through nav bar
var li_elements = document.querySelectorAll(".menu ul li");

var item_elements = document.querySelectorAll(".item");

for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function(item) {
      item.style.display = "none";
    });
    if (li_value == "products") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "solutions") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "company") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "careers") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "partners") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}

//function at close button
var closebtns = document.getElementsByClassName("is-closeBtn");
	var i;
	for(i=0; i<closebtns.length; i++){
		closebtns[i].addEventListener("click", function(){
			this.parentElement.style.display='none';
      $( '.menu .showing' ).find( 'li.active' ).removeClass( 'active' ); 
		});
	}

// function burgerFunction() {
//   var x = document.getElementsByClassName("showing");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }


//menu toggle-button
$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
});


// $(document).on('click', 'ul li', function(){
//   $(this).addClass('active').siblings().removeClass()
// })

function openModal(){
  document.getElementById('div1').style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal(){
  document.getElementById('div1').style.display = "none";
  document.body.style.overflow = "auto";
}

$(function(){
  $("#div1").dialog({
    autoOpen: false,
    close: function(event, ui){
      $('body').css('overflow','scroll');
    }
  });
  $("#btn").click(function(){
    $("#div1").dialog("open");
    $('body').css('overflow','hidden');
  });
});

if($('#div1').is(':visible')){
  $('body').addClass("fixed-position");
} else{
  $('body').removeClass("fixed-position");
}


var body = document.body;
var overlay = document.querySelector('.overlay');
var overlayBtts = document.querySelectorAll('button[class$="overlay"]');
        
    [].forEach.call(overlayBtts, function(btt) {

      btt.addEventListener('click', function() { 
         
         /* Detect the button class name */
         var overlayOpen = this.className === 'open-overlay';
         
         /* Toggle the aria-hidden state on the overlay and the 
            no-scroll class on the body */
         overlay.setAttribute('aria-hidden', !overlayOpen);
         body.classList.toggle('noscroll', overlayOpen);
         
         /* On some mobile browser when the overlay was previously
            opened and scrolled, if you open it again it doesn't 
            reset its scrollTop property */
         overlay.scrollTop = 0;

      }, false);

    });
