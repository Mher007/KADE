{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
}); */}

/* Переключение между добавлением и удалением класса "responsive" в topnav, когда пользователь нажимает на значок */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

document.getElementById('contact-form').addEventListener ('submit', function(event));
 {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  // Код для обработки отправки формы
  console.log('name' + name);
  console.log('Email:' + email);
  console.log('Сообщение: ' + message);
  alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        document.getElementById('contact-form').reset();
    };
    // плавающую кнопку
    document.getElementById('boton-call').addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    

    // git status
    // git add .
    // git commit -m "1"
    // git push