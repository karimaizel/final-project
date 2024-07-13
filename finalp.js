// the login form
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('subbutl');
    button.addEventListener('click', function(event) {
  

        const nameInput = document.getElementById('usernamee');
        const mailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const password2Input = document.getElementById('password2');

        const name = nameInput.value.trim();
        const mail = mailInput.value.trim();
        const password = passwordInput.value.trim();
        const password2 = password2Input.value.trim();

        if (name !== '' && mail !== '' && password !== '' && password2==password ) {
          
            if (mail.toLowerCase().endsWith('@gmail.com')) {
                alert("Your userspace has been created successfully.");
                window.location.reload();
                
            } else {
                alert("Please enter a valid Gmail address.");
            }
        } else {
            alert("Please fill in all fields correctly.");
        }
        
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('subbutl');
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        handleFormSubmission();
    });
});
document.addEventListener('DOMContentLoaded',function(){
    var button3 = document.getElementById('3heart')
    button3.addEventListener('click',function(){
          button3.style.backgroundColor = 'green';
    });
    });
    // the heart buttons
    document.addEventListener('DOMContentLoaded', function() {
        var button3 = document.getElementById('favbutt1');
        var originalColor = button3.style.backgroundColor = ''; 
    
        button3.addEventListener('click', function() {
        button3.style.backgroundColor = 'green'; 
            
     });
    });
     
    
        // button3.addEventListener('click', function() {
        // button3.style.backgroundColor = ''; 
            
        // });
    
       

        document.addEventListener('DOMContentLoaded',function(){
            var button3 = document.getElementById('favbutt2')
            button3.addEventListener('click',function(){
                  button3.style.backgroundColor = 'green';
                  
            });
            });

            document.addEventListener('DOMContentLoaded',function(){
                var button3 = document.getElementById('favbutt3')
                button3.addEventListener('click',function(){
                      button3.style.backgroundColor = 'green';
                });
                });

      
                document.addEventListener('DOMContentLoaded',function(){
                    var button3 = document.getElementById('favbutt11')
                    button3.addEventListener('click',function(){
                          button3.style.backgroundColor = 'green';
                    });
                    });    

                    document.addEventListener('DOMContentLoaded',function(){
                        var button3 = document.getElementById('favbutt22')
                        button3.addEventListener('click',function(){
                              button3.style.backgroundColor = 'green';
                        });
                        });

                        document.addEventListener('DOMContentLoaded',function(){
                            var button3 = document.getElementById('favbutt33')
                            button3.addEventListener('click',function(){
                                  button3.style.backgroundColor = 'green';
                            });
                            });

                            document.addEventListener('DOMContentLoaded',function(){
                                var button3 = document.getElementById('favbutt111')
                                button3.addEventListener('click',function(){
                                      button3.style.backgroundColor = 'green';
                                });
                                });

                                document.addEventListener('DOMContentLoaded',function(){
                                    var button3 = document.getElementById('favbutt222')
                                    button3.addEventListener('click',function(){
                                          button3.style.backgroundColor = 'green';
                                    });
                                    });

                                    document.addEventListener('DOMContentLoaded',function(){
                                        var button3 = document.getElementById('favbutt333')
                                        button3.addEventListener('click',function(){
                                              button3.style.backgroundColor = 'green';
                                        });
                                        }); 