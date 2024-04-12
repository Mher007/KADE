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

    

    // git status
    // git add .
    // git commit -m "1"
    // git push