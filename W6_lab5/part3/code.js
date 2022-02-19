function calculate_area(){

    console.log(jQuery("#x").val())
    
    r = parseInt(jQuery('#x').val())

    jQuery("#p1").html('result: '+ Math.PI*r**2)
}

function setup(){
    jQuery("#calc").click(calculate_area)

}
jQuery(document).ready(setup);