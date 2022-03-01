function calculate_addtion() {

    fisrt = parseInt(jQuery('#x').val())
    second = parseInt(jQuery('#y').val())
    total = fisrt + second

    if (isNaN(total) == true) {
        alert("Invalid value!")
    } else {
        jQuery("#result").html('Result: ' + fisrt + ' + ' + second + ' = ' + total)
        jQuery("#history").append("<div class ='add'>" + fisrt + " + " + second + " = " + total + "</div>")
    }
}

function calculate_subtraction() {

    fisrt = parseInt(jQuery('#x').val())
    second = parseInt(jQuery('#y').val())
    total = fisrt - second

    if (isNaN(total) == true) {
        alert("Invalid value!")
    } else {
        jQuery("#result").html('Result: ' + fisrt + ' - ' + second + ' = ' + total)

        jQuery("#history").append("<div class ='subtract'>" + fisrt + " - " + second + " = " + total + "</div>")
    }
}

function calculate_multiply() {

    fisrt = parseInt(jQuery('#x').val())
    second = parseInt(jQuery('#y').val())
    total = fisrt * second

    if (isNaN(total) == true) {
        alert("Invalid value!")
    } else {
        jQuery("#result").html('Result: ' + fisrt + ' * ' + second + ' = ' + total)

        jQuery("#history").append("<div class ='multiply'>" + fisrt + " * " + second + " = " + total + "</div>")
    }
}

function calculate_division() {

    fisrt = parseInt(jQuery('#x').val())
    second = parseInt(jQuery('#y').val())
    total = Math.round(fisrt / second * 100) / 100

    if (isNaN(total) == true) {
        alert("Invalid value!")
    } else {
        jQuery("#result").html('Result: ' + fisrt + ' / ' + second + ' = ' + total)

        jQuery("#history").append("<div class ='divide'>" + fisrt + " / " + second + " = " + total + "</div>")
    }
}

function calculate_power() {
    fisrt = parseInt(jQuery('#x').val())
    second = parseInt(jQuery('#y').val())
    total = fisrt ** second

    if (isNaN(total) == true) {
        alert("Invalid value!")
    } else {
        jQuery("#result").html('Result: ' + fisrt + ' ^ ' + second + ' = ' + total)

        jQuery("#history").append("<div class ='power'>" + fisrt + " ^ " + second + " = " + total + "</div>")
    }
}

function calculate_remainer() {
    fisrt = parseInt(jQuery('#x').val())
    second = parseInt(jQuery('#y').val())
    total = fisrt % second

    if (isNaN(total) == true) {
        alert("Invalid value!")
    } else {
        jQuery("#result").html('Result: ' + fisrt + ' % ' + second + ' = ' + total)

        jQuery("#history").append("<div class ='remainer'>" + fisrt + " % " + second + " = " + total + "</div>")
    }
}

function reset() {
    jQuery('#result').html('Result: ')
    jQuery('#history').html('')
    jQuery('#x').val('')
    jQuery('#y').val('')
}

function setup() {
    jQuery("#add_btn").click(calculate_addtion)
    jQuery("#subtract_btn").click(calculate_subtraction)
    jQuery("#multiply_btn").click(calculate_multiply)
    jQuery("#divide_btn").click(calculate_division)
    jQuery("#power_btn").click(calculate_power)
    jQuery("#remainer_btn").click(calculate_remainer)
    jQuery("#reset_btn").click(reset)
}
jQuery(document).ready(setup);