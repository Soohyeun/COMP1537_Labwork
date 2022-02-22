function calculate_addtion(){
    
    fisrt = parseInt(jQuery('#x').val())
    second = parseInt(jQuery('#y').val())
    total = fisrt + second

    jQuery("#result").html('Result: '+ fisrt + ' + ' + second + ' = ' + total)
    jQuery("#history").append("<div class ='add'>" + fisrt + " + " + second + " = " + total + "</div>" )
}

function calculate_subtraction(){
    
    fisrt = parseInt(jQuery('#x').val())
    second = parseInt(jQuery('#y').val())
    total = fisrt - second

    jQuery("#result").html('Result: '+ fisrt + ' - ' + second + ' = ' + total)

    jQuery("#history").append("<div class ='minus'>" + fisrt + " - " + second + " = " + total + "</div>" )
}

function calculate_multiply(){
    
    fisrt = parseInt(jQuery('#x').val())
    second = parseInt(jQuery('#y').val())
    total = fisrt * second

    jQuery("#result").html('Result: '+ fisrt + ' * ' + second + ' = ' + total)

    jQuery("#history").append("<div class ='multi'>" + fisrt + " * " + second + " = " + total + "</div>" )
}

function calculate_division(){
    
    fisrt = parseInt(jQuery('#x').val())
    second = parseInt(jQuery('#y').val())
    total = fisrt / second

    jQuery("#result").html('Result: '+ fisrt + ' / ' + second + ' = ' + total)

    jQuery("#history").append("<div class ='divide'>" + fisrt + " / " + second + " = " + total + "</div>" )
}

function setup(){
    jQuery("#addition").click(calculate_addtion)
    jQuery("#subtraction").click(calculate_subtraction)
    jQuery("#multiply").click(calculate_multiply)
    jQuery("#division").click(calculate_division)

}
jQuery(document).ready(setup);