let resultUnicorn = [];

function resetFilter() {
    $('#unicornNameFilter').prop('checked', false);
    $('#unicornWeightFilter').prop('checked', false);
}

function process_resp(data) {
    $('#filters').show()
    resetFilter()

    // console.log('This is process_resp' + data)
    result = JSON.stringify(data, null, 2)
    $("#result").html("<pre>" + result + "</pre>");

    resultUnicorn = data;
    // console.log(resultUnicorn)
}

function findUnicornByName() {
    // console.log('findUnicornbyName got called')
    $.ajax({
        url: "https://warm-atoll-55346.herokuapp.com/findUnicornByName",
        type: "POST",
        data: {
            "unicornName": $('#unicornName').val()
        },
        success: process_resp
    })
}

function findUnicornByWeight() {
    // console.log('findUnicornbyWeight got called')
    $.ajax({
        url: "https://warm-atoll-55346.herokuapp.com/findUnicornbyWeight",
        type: "POST",
        data: {
            "lowerWeight": $('#lowerWeight').val(),
            "higherWeight": $('#higherWeight').val()
        },
        success: process_resp
    })
}

function findUnicornByFood() {
    // console.log('findUnicornByFood got called')
    // find checked value
    let query = 'input[name="loves"]:checked';
    let selectedLoves = document.querySelectorAll(query);

    // store checked value's value in result
    let result = [];
    selectedLoves.forEach((querylove) => {
        result.push(querylove.value);
    });
    // console.log(result)
    
    $.ajax({
        url: "https://warm-atoll-55346.herokuapp.com/findUnicornByFood",
        type: "POST",
        data: {
            "loves": result
        },
        success: process_resp
    })
}

function filtering() {
    // console.log('Inside filter function')
    // find checked value

    nameFilter = "unchecked"
    weightFilter = "unchecked"

    if ($('#unicornNameFilter').is(":checked")) {
        nameFilter = "checked"
    }
    if ($('#unicornWeightFilter').is(":checked")) {
        weightFilter = "checked"
    }

    if (nameFilter == "checked" || weightFilter == "checked") {

        filtered = resultUnicorn.map(
            (ob) => {
                let result = []
                if (nameFilter == "checked")
                    result.push(ob["name"])

                if (weightFilter == "checked")
                    result.push(ob["weight"])

                return result
            }
        )

        $("#result").html("<pre>" + filtered + "</pre>");

    } else {
        let result = JSON.stringify(resultUnicorn, null, 2)
        $("#result").html("<pre>" + result + "</pre>");
    }
}

function setup() {
    $('#filters').hide()
    $('#findUnicornByName').click(findUnicornByName)
    $('#findUnicornByWeight').click(findUnicornByWeight)
    $('#findUnicornByFood').click(findUnicornByFood)
    $('#filter').click(filtering)
}

$(document).ready(setup)