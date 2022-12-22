function fun_validate()
{var letters = /^[A-Za-z]+$/;

if(document.f.u_name.value == "")
	{
		alert("please enter username");
		document.f.u_name.focus();
		return false;
	}
    else if(document.f.email.value == "")
	{
		alert("please enter email id");
		document.f.email.focus();
		return false;
	}
else if(!(document.f.email.value.match(mailformat)))  
	{  
		alert("You have entered an invalid email address!");  
		document.f.email.focus();  
		return false; 
	}  
    else if(document.f.mob.value == "")
	{
		alert("please enter mobile no");
		document.f.mob.focus();
		return false;
	}

else if(isNaN(document.f.mob.value)
	||document.f.mob.value.indexOf(" ")!=-1)

			{
              alert("mobile number must be numeric")
              return false; 
			}
else if ((document.f.mob.value.length < 10) || (document.f.mob.value.length > 10))
			{
                alert("mobile number must be of 10 digits");
                return false;
			}
else if ((document.f.mob.value.charAt(0)!="9") && (document.f.mob.value.charAt(0)!="8") && (document.f.mob.value.charAt(0)!="7"))

{
    alert("mobile number must start with 9 or 8 or 7");
    return false
} 
else if(document.f.f_msg.value=='')
{
    alert("please enter your message");
    (document.f.f_msg.focus());
    return false;
}

return true;

        }