/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Razvan'S PC
 */
public class UserManagemantController extends HttpServlet {
//0 bad 1 good
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try (PrintWriter out = response.getWriter()) {
        switch (request.getParameter("session")){
            case "verify":{
               if(request.getSession().getAttribute("user_session")==null||request.getSession().getAttribute("user_session").equals("")){
                   out.print(0);
                   break;
               }else{
                   out.print(1);
                   break;
               }
            }
            case "logout":{
//                request.getSession().removeAttribute("user_session");
                  request.getSession().invalidate();
                out.print(1);
            }
        }
    }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }


}
