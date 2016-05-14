<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <link rel="stylesheet" href="style.css" type="text/css"/>
        <title>Login</title>

    </head>


    <%
        String error = "";
        if (request.getAttribute("LOGIN_ERROR") != null) {
            error = (String) request.getAttribute("LOGIN_ERROR");
        }

    %>
    <body>
        <div id="content">
            <div class="header">
                <img src="./img/companyLogo.jpg" width="100px"  />
                <span class="header-text">RunMyList</span>
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
            <h1>Login form</h1>
            <form method="post" action="LoginController">
                <div class="form-element">
                    <label for="username">Username</label>
                    <input type="text" name="uname" id="uname" required>
                </div>
                <div class="form-element">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required>
                </div>
                Don't have an account yet? <a href="RegistrationView">Register</a>
                <%                     if (!"".equals(error)) {
                %>

                <div class="error"> error </div>
                <%}
                %>
                <div class="form-element">
                    <input type="submit" value="Submit">
                    <input type="reset" value="Reset">
                </div>
            </form>
            <!--            <form action= "https://accounts.google.com/o/oauth2/auth?scope=email&
                                        redirect_uri=http://localhost:8080/CallBackController&
                                        response_type=code=&
                                        client_id=701669709805-p3l6nr16a7obtl7qappnh0t3i27fl5i6.apps.googleusercontent.com&
                                        approval_prompt=force">-->
            <!--            <form action="https://accounts.google.com/o/oauth2/auth?&
                                            redirect_uri=http://localhost:8080/CallBackController&
                                            response_type=code&
                                            client_id=701669709805-p3l6nr16a7obtl7qappnh0t3i27fl5i6.apps.googleusercontent.com&
                                            access_type=offline&
                                            approval_prompt=force">-->
            <form method="get" action="LoginController">
                <input type="submit" value="Google Sign In">
            </form>
        </div>
    </body>
</html>
</body>
</html>