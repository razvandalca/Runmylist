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
        switch(request.getParameter("login_type")){
            case "default":
        String username = request.getParameter("uname");
        String password = request.getParameter("password");
        if (userDAO.isPasswordCorrect(username, password)) {
            // user exists
            out.print("ok");
        } else {
            String error = "User does not exist or password is incorrect";
            request.setAttribute("LOGIN_ERROR", error);
            RequestDispatcher rd = request.getRequestDispatcher("/LoginView.jsp");
            rd.forward(request, response);
        }
        
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }



}
