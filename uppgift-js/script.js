const regForm = document.getElementById("regForm")
const firstName = document.getElementById("firstName")
const errorFirstName = document.getElementById("error-firstName")
const lastName = document.getElementById("lastName")
const errorLastName = document.getElementById("error-lastName")
const results = document.getElementById("results")
const adressinformation = document.getElementById("adressinformation")
const postnummerinformation = document.getElementById("postnummerinformation")


 function validateLength(event, name) {
  const error = document.getElementById(`error-${event.target.id}`)

     if(event.target.value === "")
          error.innerText = `Du måste ange ett ${name}`
      else{
         if(event.target.value.length < 2)
            error.innerText = `${name} måste bestå av minst 2 Tecken.`
         else
             error.innerText = ""
        }
    } 
    function comparePassword(password, confirmPassword){
        const error = document.getElementById(`error-${confirmPassword.target.id}`)
        
        if(password !== confirmPassword.target.value)
           error.innerText = `Losenorden matcher inte`
           else
            error.innerText =""
    }
     function validateLengthEmail(element){
         const regEx =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if(!regEx.test(element.value)){
            document.getElementById(`error-${element.id}`).innerText = `Måste vara en giltig e-postadress.`
            return false
        } else{ 
            
            document.getElementById(`error-${element.id}`).innerText = ``
            return true
        }
      
    }
     
         
        function validateLengthPassword(element) {
            const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            if(!regEx.test(element.value)){
                document.getElementById(`error-${element.id}`).innerText = `Lösenordet måste vara ett starkt lösenord.`
                return false
            } else{ 
                
                document.getElementById(`error-${element.id}`).innerText = ``
                return true
            }
          
        }

        function validateLengthGatu(event, name) {
            const error = document.getElementById(`error-${event.target.id}`)
          
               if(event.target.value === "")
                    error.innerText = `Du måste ange ett ${name}`
                else{
                   if(event.target.value.length < 2)
                      error.innerText = `${name} måste bestå av minst 2 Tecken.`
                   else
                       error.innerText = ""
                  }
              } 
         function validateLengthpost(event, name) {
         const error = document.getElementById(`error-${event.target.id}`)
                            
         if(event.target.value === "")
             error.innerText = `Du måste ange ett ${name}`
                else{
              if(event.target.value.length < 5)
              error.innerText = `${name} måste bestå av minst 5 Tecken.`
                 else
               error.innerText = ""
                   }
               }    

      postnummerinformation.addEventListener("keyup", function(event){
      const name = "Postnummer"
      validateLengthpost(event,name)
     })
      
     adressinformation.addEventListener("keyup", function(event){
        const name = "Gatunamn och nummer"
        validateLengthGatu(event,name)
       })

     firstName.addEventListener("keyup", function(event){
        const name = "Förnamn"
        validateLength(event, name)
    })

     lastName.addEventListener("keyup", function(event){
        const name = "Efternamn"
        validateLength(event, name)
    })

    confirmPassword.addEventListener("keyup", function(event){
        const password = document.getElementById("password").value
        comparePassword(password, event)
    })
   
      
    document.getElementById("password").addEventListener("keyup" ,function(e){
        if(validateLengthPassword(e.target, 8))
        validateLengthPassword(e.target)
    })
    document.getElementById("email").addEventListener("keyup", function(e){
        validateLengthEmail(e.target)
    })

    document.getElementById("txtDate").addEventListener("keyup", function(e){
        ValidateDOB(e.target) })

   
    function ValidateDOB() {
        var lblError = document.getElementById("lblError");
 
       
        var dateString = document.getElementById("txtDate").value;
        var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
 
        
        if (regex.test(dateString)) {
            var parts = dateString.split("/");
            var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
            var dtCurrent = new Date();
            lblError.innerHTML = "Åldergräns 18 år."
            if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
                return false;
            }
 
            if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
 
           
                if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                    return false;
                }
                if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                    
                    if (dtCurrent.getDate() < dtDOB.getDate()) {
                        return false;
                    }
                }
            }
            lblError.innerHTML = "";
            return true;
        } else {
            lblError.innerHTML = "Ange ENDAST datum i formatet dd/MM/åååå."
            return false;
        }
    }
     
     


   