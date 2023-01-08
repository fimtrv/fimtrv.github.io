$(document).ready(function() {
	$("#myform").formchecker({onValid:submitmyForm});
	$("#mycform").formchecker({onValid:submitmycForm});
	$("#mypform").formchecker({onValid:submitmypForm});
	$("#myform").submit(function(e) {
		e.preventDefault();
	});
	$("#mycform").submit(function(e) {
		e.preventDefault();
	});
	$("#mypform").submit(function(e) {
		e.preventDefault();
	});
	function submitmyForm() {
		var bhtml = $("#popformBtn").html();
		$("#popformBtn").html('<i class="fa fa-spinner fa-spin"></i>');
        $.post("ajax/site/contact/", $("#myform").serializeArray());
        // .done(function(data) {
        // 	$("#popformAlert").html(data);
        // 	$("#myform").trigger('reset');
        // 	$("#popformBtn").html(bhtml);
        // 	$("#thankYouLink")[0].click();
        // });
        redirectThanks();
	}
	function submitmycForm() {
		var bhtml = $("#contactBtn").html();
		$("#contactBtn").html('<i class="fa fa-spinner fa-spin"></i>');
		$.post("ajax/site/contact/?c", $("#mycform").serializeArray());
        // .done(function(data) {
        // 	$("#contactAlert").html(data);
        // 	$("#mycform").trigger('reset');
        // 	$("#contactBtn").html(bhtml);
        // 	$("#thankYouLink")[0].click();
        // });
        redirectThanks();
	}
	function submitmypForm() {
		var bhtml = $("#contactpBtn").html();
		$("#contactpBtn").html('<i class="fa fa-spinner fa-spin"></i>');
		$.post("ajax/site/contact/?p", $("#mypform").serializeArray());
        // .done(function(data) {
        // 	$("#contactpAlert").html(data);
        // 	$("#mypform").trigger('reset');
        // 	$("#contactpBtn").html(bhtml);
        // 	enqsent = 1;
        // 	$("#thankYouLink")[0].click();
        // });
        redirectThanks();
	}

	$("#edatepicker").datepicker({
		format: 'dd-mm-yyyy',
		// minDate: $("#minDate").val(),
	    uiLibrary: "bootstrap4",
    	keyboardNavigation: false,
	    ignoreReadonly: true,
    	allowInputToggle: true,
    	icons: {
             rightIcon: '<span class="fa fa-calendar calendar-jicon"></span>'
         }
	})
	.on('change', function() {
	    $('#earrival').val($(this).val());
	});
});

function redirectThanks() {
	// setTimeout(function() {
		$("#thankYouLink")[0].click();
	// }, 1000);
}

$("#dura").change(function() {
	$("#duration1").val($(this).find(':selected').data('value'));
});

$('#enqPackage').on('show.bs.modal', function (event) {
	isEpopOpen = 1;
	var button = $(event.relatedTarget); // Button that triggered the modal
	var pack = button.data('pack'); // Extract info from data-* attributes
	var packcode = button.data('packcode'); // Extract info from data-* attributes
	if(pack!='') {
        $("#packSelected").val(packcode+" - "+pack);
        $("#packSelected-title").html(pack);
        // $("#packSelected-div").show();
        $("#packSelected-div").css({"height" : "auto", "width" : "auto", "opacity" : 1, "padding" : 20, "margin-bottom" : 20});
    }
    else {
        $("#packSelected-title").html('');
        $("#packSelected").val('NA');
        // $("#packSelected-div").hide();
        $("#packSelected-div").css({"height" : 0, "width" : 0, "opacity" : 0, "padding" : 0, "margin-bottom" : 0});
    }
});

$('#enqPackage').on('hide.bs.modal', function (event) {
	isEpopOpen = 0;
});

$("#welcomePopup1").on('hide.bs.modal', function(){
    // $.post("ajax/site/contact/?clear",{clear:"clear"})
    // .done(function(data) {});
    setTimeout(function() {
        if (isEpopOpen == 0&&enqsent == 0) {
            $('#welcomePopup1').modal('show');
        }
    }, 15000);
});