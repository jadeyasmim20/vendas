var dark_mode = 0;
var tamanho_letra = 16;

$(document).ready(function () {
  //Função aumentar e diminuir o tamanho - acessibilidade
  $('#letra_aumenta').click(function () {
    if (tamanho_letra < 25) tamanho_letra += 1;
    $('html').css('font-size', tamanho_letra);
  });
  $('#letra_diminui').click(function () {
    if (tamanho_letra > 16) tamanho_letra -= 1;
    $('html').css('font-size', tamanho_letra);
  });

  //Essas duas funções servem para acionar e desacionar o modo noturno
  $('#darkmode').click(function () {
    if (dark_mode == 0) {
      $('main').css('background-color', 'black');
      $('main').css('color', '#F2F2F2');
      $('aside').css('background-color', 'black');
      $('aside').css('color', '#F2F2F2');
      dark_mode = 1;
    } else {
      $('main').css('background-color', 'inherit');
      $('main').css('color', 'inherit');
      $('aside').css('background-color', 'inherit');
      $('aside').css('color', 'inherit');
      dark_mode = 0;
    }
  });
});

//Essa função é o requisito da seta ao lado direito da pagina
var subir = $('.btn2');

$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    $('#imageFooter').css('display', 'block');
  } else {
    $('#imageFooter').css('display', 'none');
  }
});

// outra forma de resolver:
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 400) {
//     $('#imageFooter').css('opacity', 1);
//   } else {
//     $('#imageFooter').css('opacity', 0);
//   }
// });

//Atualiza data e hora
function atualiza_hora() {
  var d = new Date();

  $('#data').text(d.toLocaleString());
  setTimeout(atualiza_hora, 1000);
}

//Essa função ira validar o email com  uso de regex
function validateEmail() {
  var email = document.getElementById('inputEmail4').value;

  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (reg.test(email)) {
    // alert('E-mail valido');
    $('#validationEmail')
      .text('Informação válida!')
      .css({ color: 'green', 'font-size': '1rem' });

    $('#inputEmail4').css({ border: '3px solid green' });
  } else {
    // alert('E-mail invalido');
    $('#validationEmail')
      .text('Favor preencher o campo de endereço')
      .css({ color: 'orange', 'font-size': '1rem' });
    $('#inputEmail4').css({ border: '3px solid red' });
  }
}

//Essa função ira validar a senha com uso de regex
$(document).ready(function () {
  $('#inputPassword4').focusout(function () {
    var inputtxt = document.getElementById('inputPassword4').value;
    var passw = /^[A-Za-z]\w{8,14}$/;
    if (inputtxt.match(passw)) {
      //$('#validationPassed').val('<i class="fa fa-check-circle"></i>');
      $('#validationPassed')
        .text('Informação válida!')
        .css({ color: 'green', 'font-size': '1rem' });

      $('#inputPassword4').css({ border: '3px solid green' });
    } else {
      $('#validationPassed')
        .text('Favor preencher sua senha corretamente')
        .css({ color: 'red', 'font-size': '1rem' });

      $('#inputPassword4').css({ border: '3px solid red' });
    }
  });

  //Essa função ira validar o endereço
  $('#inputAddress').focusout(function () {
    var inputEndereco = document.getElementById('inputAddress').value;
    if (!inputEndereco) {
      // endereço vazio
      $('#addressValidation')
        .text('Favor preencher o campo de endereço')
        .css({ color: 'orange', 'font-size': '1rem' });
    } else {
      // endereço preenchido
      if (inputEndereco.length < 5) {
        // valida que o tamanho não seja menor que 5 caracteres
        $('#addressValidation')
          .text('Campo com o mínimo de 5 digitos, favor preencher corretamente')
          .css({ color: 'orange', 'font-size': '1rem' });
        $('#inputAddress').css({
          // pinta a borda do campo do endereço de vermelho
          border: '3px solid red'
        });
        // se tudo estiver correto a informação será valida!
      } else
        $('#addressValidation')
          .text('Informação válida!')
          .css({ color: 'green', 'font-size': '1rem' });
    }
  });

  //Essa função ira validar o campo Cidade
  $('#inputCity').focusout(function () {
    var inputCidade = document.getElementById('inputCity').value;

    if (isNaN(inputCidade)) {
      if (inputCidade) {
        if (inputCidade.length > 3) {
          $('#cidadeValidation')
            .text('Informação válida!')
            .css({ color: 'green', 'font-size': '1rem' });

          $('#inputCity').css({ border: '3px solid green' });
        } else {
          $('#cidadeValidation')
            .text('Favor preencher sua cidade corretamente')
            .css({ color: 'red', 'font-size': '1rem' });

          $('#inputCity').css({ border: '3px solid red' });
        }
      } else {
        $('#cidadeValidation')
          .text('Favor preencher sua cidade corretamente')
          .css({ color: 'red', 'font-size': '1rem' });

        $('#inputCity').css({ border: '3px solid red' });
      }
    } else {
      $('#cidadeValidation')
        .text('Favor preencher sua cidade corretamente')
        .css({ color: 'red', 'font-size': '1rem' });

      $('#inputCity').css({ border: '3px solid red' });
    }
  });

  //Essa função ira validar o CEP com regex
  $('#inputCEP').focusout(function () {
    var inputCep = document.getElementById('inputCEP').value;
    var regexCep = /[0-9]{5}-[\d]{3}/g;
    if (regexCep.test(inputCep)) {
      $('#cepValidation')
        .text('Informação válida!')
        .css({ color: 'green', 'font-size': '1rem' });
      $('#inputCEP').css({ border: '3px solid green' });
    } else {
      // alert('CEP invalido');
      $('#cepValidation')
        .text('Favor preencher o CEP corretamente!')
        .css({ color: 'red', 'font-size': '1rem' });
      $('#inputCEP').css({ border: '3px solid red' });
    }
  });
});
