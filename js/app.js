
$(function(){
  var a = $('<a>',{
    href:'http://mtv.com',
    target:'_blank',
    html:'ir a MTV'
  })

  $('#app-body').append(a);

  // console.log(a.attr('href')) // acceder al atributo

    a
      .attr('href', 'http://la.com') // nos modifica el html u el
      .attr('html', 'http://la.com') // href inerno, en la consola

})


    // VALORES SETTERS SON A LOS QUE LES PASAMOS VALORES
    // VALORES GETTERS SON LOS QUE QUEREMOS OBTENER VALORES



  // $('#app-header').find('h1')
  // $('p').filter('.text')
  // $('#app-header').has('h1') //todos significa has
  // $('#app-header').not('h1') //todos significa has

  // $('p')
  // .filter('.text')
  // .has('a')
  // .first() // si quiero más del segundo es con eq con subindice
  // .eq(1)


  //rmoveClass
  //toggleClas (si tiene esta clase quitasela, si no la tiene ponsela)


  $(function(){
    var $h1 = $('h1');
    $h1.addClass('danger');

    setTimeout(function(){
      $h1.removeClass('danger');
    },3000)
  })

  $(function(){
    $('h1').css({
      'font-size': '50px',
      'font-family': 'arial',
      'margin-top': '20px'
    })
  })

  //SE PUEDE CREAR DE ESTA MANERA Ó

  // $(function(){
  //   $('header#app-header')
  //   .append($('<p>', { html: 'me acaban de crear'}))
  // })

  //SE PUEDE CREAR DE ESTA OTRA MANERA
    // 
    // $(function(){
    //   $('<p>', {html: 'me acaban de crear'})
    //     .appendTo($('header#app-header'))
    // })
