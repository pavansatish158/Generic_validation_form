  function validateAll()
  {
    var validfields = true;
    var radiocheck = true;
    var validcombo = true;
    var multicheck = true;
    var multicombo = true;
    var txtarea = true;
    var datetime = true;
    var checkbox = true;
    validfields = validatefields();
    if(validfields)
    {
      radiocheck= radio();
      if (radiocheck) 
      {
      validcombo = validatecombo(); 
      if(validcombo)
      {
        multicheck = checkboxgroup();
        if(multicheck)
        {
          multicombo = multicombos();
          if(multicombo)
          {
            txtarea = textarea();
            if(txtarea)
              {
                datetime = datetimeval();
                if(datetime)
                {
                  checkbox=checkbx();
                  return checkbox;
                }
              }
            }
          }
        }
      }
    }

    return false; 
  }

  function validatefields()
    {
      var name = document.getElementById('fname').value;
      var lname = document.getElementById('lname').value;
      var password = document.getElementById('password').value;
      var email = document.getElementById('emailid').value;
      var namereg = new RegExp(/^[A-Za-z]+$/);
      var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
      var passwordreg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
              
              
              // validation of name,email and password
      
      if(name == "")
      {
        document.getElementById('fnerror').innerHTML = "*Please enter your first name";
        document.getElementById('fname').focus();
        document.getElementById('fnerror').style.color = "red ";
        document.getElementById('fname').style.backgroundColor = " #dff99d ";

        return false;
      }
      else if(!namereg.test(name))
      {
        document.getElementById('fnerror').innerHTML = "*Name must be in characters only";
        document.getElementById('fname').focus();
        document.getElementById('fnerror').style.color = "green ";
        document.getElementById('fname').style.backgroundColor = " #dff99d ";
        return false;
      }
      else if(name.length < 6)
      {
        document.getElementById('fnerror').innerHTML = "*Please enter at least 6 characters";
        document.getElementById('fname').focus();
        document.getElementById('fnerror').style.color = "red ";
        document.getElementById('fname').style.backgroundColor = " #dff99d ";
        return false;
      }
      else
      {
        document.getElementById('fname').style.backgroundColor = "white";
        document.getElementById('fnerror').style.display = "none";
      }

      if(lname == "")
      {
        document.getElementById('lnerror').innerHTML = "*Please enter your last name";
        document.getElementById('lname').focus();
        document.getElementById('lnerror').style.color = "red ";
        document.getElementById('lname').style.backgroundColor = " #dff99d ";
        return false;
      }
      else if(!namereg.test(lname))
      {
        document.getElementById('lnerror').innerHTML = "*Name must be in characters only";
        document.getElementById('lname').focus();
        document.getElementById('lnerror').style.color = "green ";
        document.getElementById('lname').style.backgroundColor = " #dff99d ";
        return false;
      }
      else if(lname.length < 6)
      {
        document.getElementById('lnerror').innerHTML = "*Please enter at least 6 characters";
        document.getElementById('lname').focus();
        document.getElementById('lnerror').style.color = "red ";
        document.getElementById('lname').style.backgroundColor = " #dff99d ";
        return false;
      }
      else
      {
        document.getElementById('lname').style.backgroundColor = "white";
        document.getElementById('lnerror').style.display = "none";
      }

      if(email =="")
      {
        document.getElementById('emailerror').innerHTML = "*Please enter your email";
        document.getElementById('emailid').focus();
        document.getElementById('emailerror').style.color = "red ";
        document.getElementById('emailid').style.backgroundColor = " #dff99d ";
        return false;
      }
      else if(!emailreg.test(email))
      {
        document.getElementById('emailerror').innerHTML = "*Please enter valid email";
        document.getElementById('emailid').focus();
        document.getElementById('emailerror').style.color = "green ";
        document.getElementById('emailid').style.backgroundColor = " #dff99d ";
        return false;
      }
      else
      {
        document.getElementById('emailid').style.backgroundColor = "white";
        document.getElementById('emailerror').style.display = "none";
      }
      if(password =="")
      {
        document.getElementById('pwderror').innerHTML = "*Please enter password";
        document.getElementById('password').focus();
        document.getElementById('pwderror').style.color = "red ";
        document.getElementById('password').style.backgroundColor = " #dff99d ";
        return false;
      }
      else if(!passwordreg.test(password))
      {
        document.getElementById('pwderror').innerHTML = "*Please enter a valid password";
        document.getElementById('password').focus();
        document.getElementById('pwderror').style.color = "green ";
        document.getElementById('password').style.backgroundColor = " #dff99d ";
        return false;
      }
      else
      {
        document.getElementById('password').style.backgroundColor = "white";
        document.getElementById('pwderror').style.display = "none"; 
        return true;
      }
      
  }
     // validation of radio
    
   function radio()
   {
          var genM = document.getElementById("mgen");
          var genF = document.getElementById("fgen");
       
        // return true;
          if(genM.checked == false && genF.checked == false)
       
        {
          document.getElementById("gendererror").innerHTML = "*Select Gender";
          document.getElementById("mgen").focus();
          return false;
        }else
        {
          document.getElementById("gendererror").style.visibility = "hidden";
          return true;
        }
    }
         var gen = document.querySelector('input[name=gender]:checked').value

      // validation of  combo

   function validatecombo()
   {
      var dept = document.getElementById('deptid');
      var strDept= dept.options[dept.selectedIndex].value;

      if(strDept == "0")
      {
        document.getElementById('depterror').innerHTML = "*Please select designation";
        document.getElementById('depterror').style.color = "red ";
        document.getElementById('deptid').focus();
        return false;
      }
      else
      {
        document.getElementById('depterror').style.display = "none";
        return true;
      }
      
    }
          // validation of checkboxgroup

    function checkboxgroup()
    {
    
      var trainee = document.getElementById('traineeid');
      var junior = document.getElementById('juniorid');
      var senior = document.getElementById('seniorid');

      if(trainee.checked == false && junior.checked == false && senior.checked == false)
      {
        document.getElementById('experror').innerHTML = "*Please choose experience level";
        document.getElementById('experror').style.color = "red ";
        document.getElementById('traineeid').focus();
        return false;
      }
      else
      {
        document.getElementById('experror').style.display = "none";
        return true;
      }
    }
        var expr = document.querySelector('input[name=exp]').value  
        
           // validation of multicombo

    function multicombos()
    {
      var questions = document.getElementById('questionid').value;
      if(questions == "" && questions<2)
      {
        document.getElementById('questionerror').innerHTML = "*Please choose interests & hobbies";
        document.getElementById('questionerror').style.color = "red ";
        document.getElementById('questionid').focus();
        return false;
      }
      else
      {
        document.getElementById('questionerror').style.display = "none";
        return true;
      }
    }
          // validation of textarea

    function textarea()
    {
      var txtarea = document.getElementById('textareaid').value;
      if(txtarea < 15)
      {
        document.getElementById('txterror').innerHTML = "*Enter atleast 15 characters";
        document.getElementById('txterror').style.color = "red ";
        document.getElementById('textareaid').focus();
        return false;
      }
      else
      {
        document.getElementById('txterror').style.display = "none";
        document.getElementById('textareaid').style.backgroundColor = "white";
        return true;
      }
    }
          // validation of date & time

    function datetimeval()
    {
      var date = document.getElementById('date').value;
      var time=document.getElementById('time').value;
        if(date =="")
          {
              document.getElementById('dateerror').innerHTML = "*Enter valid date";
              document.getElementById('date').focus();
              document.getElementById('dateerror').style.color = "red";
              return false;
          }

          else
          {
              document.getElementById('date').style.backgroundColor = "white";
              document.getElementById('dateerror').style.display = "none";
       
          }
        if(time =="")
          {
              document.getElementById('timeerror').innerHTML = "*Enter valid time";
              document.getElementById('time').focus();
              document.getElementById('timeerror').style.color = "red ";
              return false;
          }
        else
          {
              document.getElementById('time').style.backgroundColor = "white";
              document.getElementById('timeerror').style.display = "none";
              return true;
          }

    }
    
            // validation of checkbox
    function checkbx()     
    {
      var checkbox = document.getElementById('checkboxid');
      if(checkbox.checked == false)
      {
        document.getElementById('checkboxerror').innerHTML = "*Please click to agree";
        document.getElementById('checkboxerror').style.color = "red ";
        document.getElementById('checkboxid').focus();
        return false;
      }
      else
      {
        document.getElementById('checkboxerror').style.display = "none";

        alert("First name :" + fname.value +
          "\nLast name : "+ lname.value +
          "\nemail :" + emailid.value +
         "\npassword :" + password.value +
          "\nGender :" + gen +
         "\nDesignation :" + deptid.value +
         "\nExperience :" + expr +
         "\nHobbies :" + questionid.value +
         "\nAbout you:" + textareaid.value +
         "\ndate:" + date.value+
         "\nTime:" + time.value+
         "\nAgreed to policy :" + checkboxid.checked);
         return true;

    }
  }
     