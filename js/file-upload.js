$(document).ready(function() {

    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.circle-profile-pic').attr('src', e.target.result);
                var w = $('.circle-profile-pic').css("width");
                // console.log(w);
                $('.circle-profile-pic').css("height", w);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });

    $(".remove-button").on('click', function() {
       $('.circle-profile-pic').attr('src', "images/profile.jpg");
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});