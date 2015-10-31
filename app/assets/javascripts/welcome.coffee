$(document).ready ->
  $('.dropdown').hover (->
    $('.dropdown-menu', this).stop(true, true).slideDown 'fast'
    $(this).toggleClass 'open'
    return
  ), ->
    $('.dropdown-menu', this).stop(true, true).slideUp 'fast'
    $(this).toggleClass 'open'
    return
  return