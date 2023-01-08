var i, j, formchecker = {

	result:null, objects:[], object:null, nodeEl:null, errorMessage:"", foundError:false, fieldName:"", formValid:false,

	init:function(form, args){

		args = args==undefined?{}:args;

		form.submit(function(){

			formchecker.result = formchecker.test(this, args.scroll!=undefined?args.scroll:true);

			if(args.onError!=undefined){

				args.onError(this);

			}

			this.formValid = formchecker.result

			if(args.onValid!=undefined && this.formValid){

				this.formValid = args.onValid();

				this.formValid = this.formValid==true||this.formValid==false?this.formValid:true;

			}

			return this.formValid;

		});

	},

	test:function(form, scroll){

		var error;

		this.objects = $(form).find("input,select,textarea");

		this.foundError = false;

		for(i=0; i<this.objects.length; i++){

			this.object = this.objects[i];

			this.object.onfocus = function(){

				formchecker.hideError(this);

			};

			error = !this.checkInput(this.object);

			if(this.foundError==false && error){

				this.foundError = true;

			}

		}

		if(this.foundError){

			var errorItem = $(".formchecker-error");

			if(errorItem.length>0 && scroll){

				errorItem = errorItem[0];

				$("html,body").animate({scrollTop:$(errorItem.parentNode).find("input, textarea, select").offset().top - 100});

			}

		}

		return this.foundError==false;

	},

	filters:{

		length:function(data, len){

			return data.trim().length>=len;

		},

		number:function(num){

			return !isNaN(Number(num)) && num!="";

		},

		e_mail:function(addr){	

			return (/^([A-Za-z0-9_+\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/).test(addr.trim());

		},

		evalFunction:function(func, object){

			return eval(func + "(object);") == true;

		},

		checkFormat:function(name, list){

			return list!="" && new RegExp("\\.("+list.replace(/\,/g, "|")+")$").test(name);

		}

	},

	hideError:function(obj){

		this.nodeEl = obj.parentNode.getElementsByClassName("error")[0];

		if(this.nodeEl!=undefined){

			this.nodeEl.parentNode.removeChild(this.nodeEl);

		}

	},

	showError:function(obj, message){

		this.nodeEl = obj.parentNode.getElementsByClassName("error")[0];

		if(message==""){

			if(this.nodeEl!=undefined){

				this.nodeEl.parentNode.removeChild(this.nodeEl);

			}

		}else{

			if(this.nodeEl==undefined){

				this.nodeEl = document.createElement("div");

				this.nodeEl.className = "error formchecker-error";

				this.nodeEl.innerHTML = message;

				this.nodeEl.style.color = "#f00";

				this.nodeEl.style.textAlign = "left";

				this.nodeEl.style.marginTop = "5px";

				obj.parentNode.appendChild(this.nodeEl);

			}

			this.nodeEl.innerHTML = '<span class="arrow"></span>'+message;

		}

	},

	checkInput:function(element){

		var errorMessage = "";

		if($(element).data().type!=undefined && element.disabled==false){

			this.fieldName = $(element).data().label!=undefined?$(element).data().label:(element.name!=""?element.name.replace(/[^0-9A-Za-z]/gi, " "):"this");

			errorMessage = "";

			if($(element).data().type=="string"){

				j = $(element).data().minlen!=undefined?$(element).data().minlen:1;

				if(this.filters.length(element.value, j)==false){

					errorMessage = j<=1?"Invalid "+this.fieldName+".":this.fieldName+" requires minimum "+j+" letters !";

					this.foundError = true;

				}

			}else if($(element).data().type=="number"){

				if($(element).data().allowed!=undefined && $(element).data().allowed!=""){

					element.value = element.value.replace(new RegExp($(element).data().allowed, "gi"), "");

				}

				if($(element).data().required==undefined){

					if(this.filters.number(element.value)==false){

						errorMessage = "Invalid " + this.fieldName + ".";

					}else{

						var amtmin = $(element).data().min, amtmax = $(element).data().max, amterr="";

						amterr = !isNaN(Number($(element).data().min)) && Number(element.value)<Number($(element).data().min)?"minimum "+$(element).data().min:amterr;

						amterr += !isNaN(Number($(element).data().max)) && Number(element.value)>Number($(element).data().max)?(amterr!=""?" and ":"")+"maximum "+$(element).data().max:"";

						errorMessage = (amterr!=""?this.fieldName+" should be ":"")+amterr;

					}	

				}

			}else if($(element).data().type=="email") {

				if(this.filters.e_mail(element.value)==false){

					errorMessage = "Invalid " + this.fieldName + ".";

				}

			}else if($(element).data().type=="func" && $(element).data().func!=undefined) {

				if(this.filters.evalFunction($(element).data().func, element)==false){

					errorMessage = $(element).data("error")==undefined?"Invalid " + this.fieldName + ".":$(element).data("error");

				}

			}else if($(element).data().type=="files" && $(element).data().extensions!=undefined) {

				if(this.filters.checkFormat(element.value, $(element).data().extensions)==false){

					errorMessage = "Invalid " + this.fieldName + ".";

				}

			}
			else if($(element).data().type=="checkbox"){

				if(element.checked==false){
					errorMessage = $(element).data("error")==undefined?"Invalid "+this.fieldName+".":$(element).data("error");
				}

			}

			errorMessage = errorMessage!="" && $(element).data().errormsg!=undefined?$(element).data().errormsg:errorMessage;

			this.showError(element, errorMessage);

		}

		return errorMessage=="";

	}

};

$.fn.formchecker = function(attrs){

	attrs = attrs==undefined?{}:attrs;

	formchecker.init(this, attrs);

	return $(this);

};