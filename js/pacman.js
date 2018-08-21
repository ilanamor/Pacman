var users = {};
users["a"] = "a";
var usersInd=1;
var numOfMonster, food;
var user;



function welcomeDiv(){
    $("#Login").hide();
    $("#Register").hide();
    $("#About").hide();
    $("#Game").hide();
    $("#userSettings").hide();
    $("#Welcome").show();
    
}

function regDiv(){
    $("#Welcome").hide();
    $("#Login").hide();
    $("#About").hide();
    $("#Game").hide();
    $("#userSettings").hide();
    $("#Register").show();
}


function logDiv(){
    $("#Welcome").hide();
    $("#Register").hide();
    $("#Game").hide();
    $("#About").hide();
    $("#userSettings").hide();
    $("#Login").show();
}

function gameDiv(){
    $("#Welcome").hide();
    $("#About").hide();
    $("#Register").hide();
    $("#Game").show();
    $("#userSettings").hide();
    $("#Login").hide();
}

function login(){
    var id=document.getElementById("uname").value;
    var pass=document.getElementById("psw").value;

    if(!(id in users)){
        $("#errorUser").text("User does not exist in the system");
            return;
        }
    else{
        if (users[id] == pass) {
            user=id;
            $("#Login").hide();
            $("#userSettings").show();
        }
        else{
            $("#errorUser").text("User does not exist in the system");
            return;
        }
    }
}

function aboutDialogDown() {
    $("#About").show();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById('About');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/************************************************************************************************************* */
function registerDown() {
    document.getElementById("Dialogreg").close();
    $('#Register').hide();
    $("#userSettings").show();
}

function gameOverdown() {
    document.getElementById("GameOver").close();
}

function playTheGame(){
    var checkCoins,checkTime;
    document.getElementById("errorCoins").innerHTML ="";
    document.getElementById("errorTime").innerHTML ="";
    checkCoins = document.getElementById("selectCoins").value;
    checkTime = document.getElementById("selectTime").value;
    if (isNaN(checkCoins) || checkCoins < 50 || checkCoins > 90) {
        document.getElementById("errorCoins").innerHTML = "The number of coins should be between 50 and 90";
    }
    else if (isNaN( checkTime) ||  checkTime < 60 ) {
        document.getElementById("errorTime").innerHTML = "Game time should be at least 60 seconds";
    }
    else{
    numOfMonster = $("#selectMonsters").val();
    food = $("#selectCoins").val();
    $("#userSettings").hide();
    $("#Game").show();
    $("#welcome_user").text("WELCOME" +"\u00A0" + user);
    Start();
    }
}

$(document).ready(function () {
    //first
    $("#Register").hide();
    $("#About").hide();
    $("#Game").hide();
    $("#Login").hide();
    $("#userSettings").hide();
    $("#Welcome").show();

    //logout
    $('#logout').click(function () {
        GameOver(4);
        $("#errorUser").text("");
        user="";
        $("#Game").hide();
        $("#Login").show();
        document.getElementById("uname").value = "";
        document.getElementById("psw").value = "";
    })

    //validation-form
    $(function() {

        $("form[name='registerForm']").validate({

            // Specify validation rules
            rules: {
                user_name: {
                    required : true,
                    isUserFree : true,
                },
                password: {
                    required : true,
                    oneLetterDigit: true,
                    onlyLetterDigit: true,
                    minlength: 8,
                },
                fr_name: {
                    required: true,
                    notNumber: true
                },
                ls_name: {
                    required: true,
                    notNumber: true
                },
                email: {
                    required: true,
                    email: true
                },
                birthday: {
                    required: true
                }
            },

            // Specify validation error messages
            messages: {
                user_name: {
                    required: "Please enter a User Name",
                },
                password: {
                    required: "Please enter a Password",
                    minlength: "Password must contain at least 8 characters",
                },
                fr_name: {
                    required: "Please enter a First name",
                },
                ls_name: {
                    required: "Please enter a Last name",
                },
                email: {
                    required: "Please enter a Email"
                },
                birthday:{
                    required: "Please enter a Birthday"
                }
            },
            errorElement: 'div',
            errorPlacement: function(error, element) {
                switch (element.attr("name")) {
                    case 'user_name':
                        error.insertAfter($("#errorreg1"));
                        break;
                    case 'password':
                        error.insertAfter($("#errorreg2"));
                        break;
                    case 'fr_name':
                        error.insertAfter($("#errorreg3"));
                        break;
                    case 'ls_name':
                        error.insertAfter($("#errorreg4"));
                        break;
                    case 'email':
                        error.insertAfter($("#errorreg5"));
                        break;
                    case 'birthday':
                        error.insertAfter($("#errorreg6"));
                        break;
                    default:
                        error.insertAfter(element);
                }
            },
            submitHandler: function(form) {
                form.submit();
                users[form[0].value] = form[1].value;
                 document.getElementById("Dialogreg").showModal();
            }
        });

        jQuery.validator.addMethod("isUserFree", function(user, element) {
              if ((user in users) == false){
               return true;
               } else {
                     return false;
               }
         }, "User Name already exsists");

        jQuery.validator.addMethod("oneLetterDigit", function (value, element) {
               return this.optional(element) ||  /^(?=.*[a-zA-Z])(?=.*\d).*$/.test(value);
         }, "Password should contain at least 1 letter and 1 digit");

        jQuery.validator.addMethod("notNumber", function (value, element) {
               return this.optional(element) ||/^[^0-9]+$/.test(value);
         }, "Name shouldn't contain numbers");

        jQuery.validator.addMethod("onlyLetterDigit", function (value, element) {
               return this.optional(element) ||/^[0-9a-zA-Z]+$/.test(value);
        }, "Password should contain only letters and digits");

    });

    /*#endregion Validation*/

    $(function() {

        //populate our years select box
        for (i = 2014; i > 1917; i--){
            $('#years').append($('<option />').val(i).html(i));
        }
        //populate our months select box
        for (i = 1; i < 13; i++){
            $('#months').append($('<option />').val(i).html(i));
        }
        //populate our Days select box
        updateNumberOfDays();

        //"listen" for change events
        $('#years, #months').change(function(){
            updateNumberOfDays();
        });

    });

    //function to update the days based on the current values of month and year
    function updateNumberOfDays(){
        $('#days').html('');
        month = $('#months').val();
        year = $('#years').val();
        days = new Date(year, month, 0).getDate();

        for(i=1; i < days+1 ; i++){
                $('#days').append($('<option />').val(i).html(i));
        }
    }

    });