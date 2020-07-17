
    $(function() {
        $('form').submit(function(e) {
      
          //prevent default form submission
          e.preventDefault();
      
         //ajax form submission
            $.ajax({
                type: 'POST',
                url: 'subscribe.php',
                data: $(this).serialize(),
                success: (message) => {
                 // add an action to be carried out when submission is successful
                 document.querySelector('#email').value = '';
                 document.querySelector('#email2').value = '';
                 swal("Thank you for registering fellow Zathuran", "You clicked the button!", {
                  buttons: false,
                  timer: 3000,
                });
                },
                // add an action to be carried out when submission is successful
                error: (error) => {
                  swal("Invaild email/Could not connect to Database", {
                    buttons: false,
                    timer: 3000,
                });
                }
                
            })
        }); 
      })
      $('.pop').magnificPopup({
        type: "image",
        closeBtnInside: true /* No effect in comparison to not setting it when set to true */
    });