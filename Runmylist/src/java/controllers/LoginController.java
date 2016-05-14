/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import dao.UserDAO;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;
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
        try (PrintWriter out = response.getWriter()) {
            switch (request.getParameter("login_type")) {
                case "default":
                    String username = request.getParameter("username").trim();
                    String password = request.getParameter("password").trim();

                    if (userDAO.isPasswordCorrect(username, password)) {
                        // user exists
                        out.print(1);
                        request.getSession().setAttribute("user_session", userDAO.getUserID(username));
                    } else {
                        out.print(0);
                    }
                case "google":
                    String fname = request.getParameter("firstname").trim();
                    String lname = request.getParameter("lastname").trim();
                    String email = request.getParameter("email").trim();
                    String googleid = request.getParameter("google_id").trim();

                    if (!userDAO.userExistsByGoogleID(googleid)) {
                        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                        Calendar cal = Calendar.getInstance();
                        userDAO.createUserFromGoogle("", "", dateFormat.format(cal.getTime()), fname, lname, email, googleid);
                    }
                    out.print(1);
                    request.getSession().setAttribute("user_session", userDAO.getUserID(googleid));

            }
        } catch (SQLException ex) {
            Logger.getLogger(LoginController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

}
