
//newsletter Sign UP
function ValidateForm(frm) {
		if (frm.Name.value == "") {
			alert('Name is required.');
			frm.Name.focus(); return false;
	}
		if (frm.FromEmailAddress.value == "") {
			alert('Email address is required.');
			frm.FromEmailAddress.focus(); return false;
	 }
	 	if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) {
		 	alert('Please enter a valid email address.');
		 	frm.FromEmailAddress.focus(); return false;
	 }
return true; }
