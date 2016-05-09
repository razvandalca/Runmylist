<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
                        <head>
                            <link rel="stylesheet" href="style.css" type="text/css"/>
                            <title>Registration</title>
                            <meta charset= "UTF-8 ">
                            <meta name= "viewport " content= "width=device-width ">
                        </head>
                        <body>
                            <div id= "content ">
                            <div class= "header ">
                                <img src= "./img/companyLogo.jpg " width= "100px "  />
                                <span class= "header-text ">RunMyList</span>
                            </div>
                            <nav>
                                <ul>
                                        <a href="index.jsp">Home</a>
                                        <a href="RegistrationView.jsp">Register</a>
                                        <a href="LoginView.jsp">Login</a>
                                        <a href="ProductView.jsp">View Products</a>
                                        <a href="LogoutController">Logout</a>
                                        <a href="PurchaseView.jsp">History</a>
                                    </ul>
                            </nav>
                                <h1>Registration form</h1>   
                                <form method= "post " action= "RegisterController">
                                    <div class= "form-element ">
                                        <label for= "username">Username</label>
                                        <input type= "text" name= "uname" id= "uname " required>
                                    </div>
                                    <div class= "form-element">
                                        <label for= "password">Password</label>
                                        <input type= "password" name= "password" id= "password " required>
                                    </div>
                                    <div class= "form-element">
                                        <label for= "rPassword">Repeat password</label>
                                        <input type= "password" id= "rPassword " required>
                                    </div>
                                    <div class= "form-element">
                                        <label for= "email">Email</label>
                                        <input type= "email" id= "email " name= "email" required>
                                    </div>
<!--                                    <div class= "form-element">
                                        <label for= "gender">Gender </label>
                                        Male<input type= "radio" name= "gender" value= "male" checked> 
                                        Female<input type="radio" name= "gender" value= "female"> 
                                    </div>
                                    <div class= "form-element">
                                        <label for= "tel ">Telephone</label>
                                        <input type= "tel" name= "tel" id= "tel " required>
                                    </div>
                                    <div class= "form-element">
                                        <label for= "country">Country</label>
                                        <select name="country" id= "country ">
                                            <option>Romania</option>
                                            <option>Italy</option>
                                            <option>France</option>
                                            <option>Germany</option>
                                        </select>
                                    </div>-->
<!--                                    <div class="form-element ">
                                        <label for= "spam">Subscribe to maillist</label>
                                        <input type= "checkbox" name="spam" id= "spam ">
                                    </div> -->
                                      <div class="form-element">
                                          <input type="submit" value="Submit">
                                          <input type="reset" value="Reset ">
                                    </div>  
                                                  
                    </form>
         <% if (request.getAttribute("ERRORS") != null && !request.getAttribute("ERRORS").equals("")) { %>
                <div class="error"><%= request.getAttribute("ERRORS") %></div>
           <% }%>

                    </div>
                  
                   
              
            

            
                    
        
        
    </body>
</html>
