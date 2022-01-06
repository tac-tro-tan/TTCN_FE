$(document).ready(function() {
    $('.nav-link.active .sub-menu').slideDown();
    // $("p").slideUp();

    $('#sidebar-menu .arrow').click(function() {
        $(this).parents('li').children('.sub-menu').slideToggle();
        $(this).toggleClass('fa-angle-right fa-angle-down');
    });

    $("input[name='checkall']").click(function() {
        var checked = $(this).is(':checked');
        $('.table-checkall tbody tr td input:checkbox').prop('checked', checked);
    });
});
//
$(document).ready(function(){
    $("input[name='list_check[]']").on('change',function(){
        var id = $(this).attr('id');
        return id;
    });
    $("input[name='btn_action']").on('click',function(){;
        var action = $("select[name='action']").val();
        var checkbox = document.getElementById('checkall');
        var user_checked = checkbox.checked;
        if (user_checked==true && action=='deleteForever') {         
            return  confirm('Dữ liệu của những user này sẽ mất nếu bạn thực hiện thao tác này !');
        }                       
    });
});
//
$(document).ready(function(){
    var val = $(".switch input[name='fea']").val();
    if (val == 1) {
        $(".switch .slider").toggleClass('active');
    }
    $(".switch").click(function(){
        $(".switch input[name='fea']").attr('value',function(index, attr){
                return attr == 1 ? 0 : 1;
            });
            $(".switch .slider").toggleClass('active');
    });
});
//Phần Color
$(document).ready(function () {
    $('#color').change(function(){
        var data = $(this).val(); 
        $('p.color').html(data);
    });
   
});
//phần thumbnail
$(document).ready(function(){
    $("#file").change(function(){
        var data = $(this).val();
        if(data != ''){
            $('#thumbnail').css('display', "block");
        }else{
            $('#thumbnail').css('display', "none");
        }
    });
});
function showThumbNail(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#thumbnail').css('width', "150px");
            $('#thumbnail').css('height', "150px");
            $('#thumbnail').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
//tooll tip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
//show hide chọn color
$(document).ready(function(){
    $('.choose-color').click(function(){
        $('.list-color').stop().slideToggle();
        return false;
    });
});

