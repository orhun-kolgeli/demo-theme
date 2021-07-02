import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", api => {
  
  $( document ).ready(function() {
    const user = api.getCurrentUser();
    $('h1.hello-world').html("Hello " + user.name + "!");
    console.log(user)
  });

});


