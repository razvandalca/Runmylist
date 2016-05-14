/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import dao.UserDAO;
import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Razvan'S PC
 */
public class LoginController extends HttpServlet {

    UserDAO userDAO = UserDAO.getInstance();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        processRequest(request, response);

        // redirect to google for authorization
        String clientID="701669709805-p3l6nr16a7obtl7qappnh0t3i27fl5i6.apps.googleusercontent.com";
        StringBuilder oauthUrl = new StringBuilder().append("https://accounts.google.com/o/oauth2/auth")
                .append("?client_id=").append(clientID) // the client id from the api console registration
                .append("&response_type=code")
                .append("&scope=openid%20email") // scope is the api permissions we are requesting
                .append("&redirect_uri=http://localhost:8080/CallBackController") // the servlet that google redirects to after authorization
                .append("&access_type=offline") // here we are asking to access to user's data while they are not signed in
                .append("&approval_prompt=force"); // this requires them to verify which account to use, if they are already signed in

        response.sendRedirect(oauthUrl.toString());
    }

    private void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("uname");
        String password = request.getParameter("password");
        if (userDAO.isPasswordCorrect(username, password)) {
            // user exists
            request.getSession().setAttribute("user", username);
            RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
            rd.forward(request, response);
        } else {
            // does not exist
            String error = "User does not exist or password is incorrect";
            request.setAttribute("LOGIN_ERROR", error);
            RequestDispatcher rd = request.getRequestDispatcher("/LoginView.jsp");
            rd.forward(request, response);
        }

    }

}
