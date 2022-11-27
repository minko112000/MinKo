const menu_page_show = () => {
  $('.page').css({
    opacity: .4
  })
  $('.line-2').css({
      opacity: 0
    })
    $('.line-1').css({
      transform: 'translate(2px, 8px) rotate(45deg)'
    })
    $('.line-3').css({
      transform: 'translate(2px, -8px) rotate(-45deg)'
    })
    $('#more-page').css({
      transform: 'translateX(0)'
    })
    $('.menu-icon').addClass('menu-icon-close')
}
const menu_page_hide = () => {
  $('.page').css({
    opacity: 1
  })
  $('.line-2').css({
      opacity: 1
    })
    $('.line-1').css({
      transform: 'translate(0, 0) rotate(0)'
    })
    $('.line-3').css({
      transform: 'translate(0, 0) rotate(0deg)'
    })
    $('#more-page').css({
      transform: 'translateX(110%)'
    })
    $('.menu-icon').removeClass('menu-icon-close')
}

const icon_mute = () => {
  $('.icon').css({
    opacity: .4,
    background: 'none'
  })
}
const home_page_show = () => {
  icon_mute()
  $('.home-icon').css({
    opacity: 1,
    background: '#212529'
  })
}
const about_page_show = () => {
  icon_mute()
  $('.about-icon').css({
    opacity: 1,
    background: '#212529'
  })
}
const service_page_show = () => {
  icon_mute()
  $('.service-icon').css({
    opacity: 1,
    background: '#212529'
  })
}
const projects_page_show = () => {
  icon_mute()
  $('.projects-icon').css({
    opacity: 1,
    background: '#212529'
  })
}
const contact_page_show = () => {
  icon_mute()
  $('.contact-icon').css({
    opacity: 1,
    background: '#212529'
  })
}

const topAlert = (msg, bg) => {
  $('.top-alert').text(msg)
  $('.top-alert').css({
    transform: 'translateY(0)',
    background: bg
  })
  setTimeout(function() {
    $('.top-alert').css({
    transform: 'translateY(-110%)'
  })
  }, 3000);
}

home_page_show()

$('.page').on('mouseenter', menu_page_hide)

$('.btn-div').on('click', menu_page_hide)

$('.menu-icon').click( function () {
  if (!$(this).hasClass('menu-icon-close')) {
    menu_page_show()
  } else {
    menu_page_hide()
  }
})

$('.icon').click(function () {
  $('.page').css({
    transform: 'translateX(110%)'
  })
  let text = $(this).text().replace(/\s/g, '')
  switch (text) {
    case 'About':
      $('#about-page').css({
        transform: 'translateX(0%)'
      })
      break;
    
    case 'Service':
      $('#service-page').css({
        transform: 'translateX(0%)'
      })
      break;
      
      case 'Projects':
      $('#projects-page').css({
        transform: 'translateX(0%)'
      })
      break;
      
      case 'Contact':
      $('#contact-page').css({
        transform: 'translateX(0%)'
      })
      break;
    
    default:
      $('#home-page').css({
        transform: 'translateX(0%)'
      })
  }
})

$('.home-icon').click(home_page_show)
$('.about-icon').click(about_page_show)
$('.service-icon').click(service_page_show)
$('.projects-icon').click(projects_page_show)
$('.contact-icon').click(contact_page_show)

$('#about-btn').click(function () {
  $('.about-icon').click()
})
$('#service-btn').click(function () {
  $('.service-icon').click()
})

$('.input-gp input, .msg-gp textarea').keyup(function () {
  if ($(this).val() != '') {
    $(this).parent().children('label').css({
      top: '-4px',
      fontSize: '.5em'
    })
  } else {
    $(this).parent().children('label').css({
      top: '18px',
      fontSize: '1em'
    })
  }
})

const send_email = (name, email, msg) => {
  Email.send({
      SecureToken : "cf135628-83d3-4913-be38-a7ba22f8296f",
      To : 'minkoko.r@gmail.com',
      From : email,
      Subject : name,
      Body : msg
  }).then(
    topAlert('Successful', '#408140')
  );
}

$('#send').click(function () {
  let name = $('#name').val()
  let email = $('#email').val()
  let msg = $('#msg').val()
  if (name == '') {
    topAlert('invalid name', '#dd1d1d')
  } else if (email == '') {
    topAlert('invalid email', '#dd1d1d')
  } else if (msg == '') {
    topAlert('invalid message', '#dd1d1d')
  } else {
    send_email(name, email, msg)
    $('#name').val('')
    $('#email').val('')
    $('#msg').val('')
    $('.input-gp label, .msg-gp label').css({
      top: '18px',
      fontSize: '1em'
    })
  }
})

