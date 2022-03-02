function calculate_addtion() {

    fisrt = parseInt(jQuery('#x').val())
    second = parseInt(jQuery('#y').val())
    total = fisrt + second

    if (isNaN(total) == true) {
        alert("Invalid value!")
    } else {
        jQuery("#result").html('Result: ' + fisrt + ' + ' + second + ' = ' + total)
        jQuery("#history").append("<div class ='add'>" + fisrt + " + " + second + " = " + total + "<button class='hide_btn'> Hide this </button>" + "</div>")
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

        jQuery("#history").append("<div class ='subtract'>" + fisrt + " - " + second + " = " + total + "<button class='hide_btn'> Hide this </button>" + "</div>")
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

        jQuery("#history").append("<div class ='multiply'>" + fisrt + " * " + second + " = " + total + "<button class='hide_btn'> Hide this </button>" + "</div>")
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

        jQuery("#history").append("<div class ='divide'>" + fisrt + " / " + second + " = " + total + "<button class='hide_btn'> Hide this </button>" + "</div>")
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

        jQuery("#history").append("<div class ='power'>" + fisrt + " ^ " + second + " = " + total + "<button class='hide_btn'> Hide this </button>" + "</div>")
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

        jQuery("#history").append("<div class ='remainer'>" + fisrt + " % " + second + " = " + total + "<button class='hide_btn'> Hide this </button>" + "</div>")
    }
}

function reset() {
    jQuery('#result').html('Result: ')
    jQuery('#history').html('')
    jQuery('#x').val('')
    jQuery('#y').val('')
}

function hide_(){
    // this만 쓰면 버튼만 지워짐. parent()를 적어주면 this(button)이 포함된 바로 상위 parent가 바인딩된다.
    jQuery(this).parent().remove()
}

function setup() {
    jQuery("#add_btn").click(calculate_addtion)
    jQuery("#subtract_btn").click(calculate_subtraction)
    jQuery("#multiply_btn").click(calculate_multiply)
    jQuery("#divide_btn").click(calculate_division)
    jQuery("#power_btn").click(calculate_power)
    jQuery("#remainer_btn").click(calculate_remainer)
    jQuery("#reset_btn").click(reset)
    //이미 DOM이 설정된 후에 생긴 버튼이라 click 기능이 안먹힌다. on은 child를 parent에 binding해주는데, jQuery에는 묶고 싶은 parent를 적고 on 에는 event, child element selector 그리고 function 이름 세 개의 파라미터를 받음
    // parent(body) 엘리먼트에 child(hide_btn) 엘리먼트를 바인딩함 - click을 하면 hide_를 실행시킴
    jQuery("body").on("click",".hide_btn", hide_)
}

jQuery(document).ready(setup); //call back function

//this <- 자기 자신 (btn, div 등...) this.id <- 자기자신 id 가져옴