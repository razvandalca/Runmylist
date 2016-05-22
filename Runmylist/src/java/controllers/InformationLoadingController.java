/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import dao.ItemsDAO;
import dao.PlaylistDAO;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import pojo.MyTrack;

/**
 *
 * @author Razvan'S PC
 */
public class InformationLoadingController extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            ArrayList allPlaylistsForUser = PlaylistDAO.getInstance().getAllPlaylistsForUser(request.getSession().getAttribute("user_session").toString());
            for (Object object : allPlaylistsForUser) {
                System.out.println("0   "+object.toString());
                ArrayList allItemsForPlayList=PlaylistDAO.getInstance().getAllItemsForAPlayList(object.toString());
                for (Object object1 : allItemsForPlayList) {
                                        System.out.println("1  "+object1.toString());

                    MyTrack track = ItemsDAO.getInstance().getItem(object1.toString());
                    System.out.println(track.toString());
                    
                }
                
            }
        } catch (SQLException ex) {
            Logger.getLogger(InformationLoadingController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }



}
