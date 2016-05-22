/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import dao.ItemsDAO;
import dao.PlaylistDAO;
import dao.UserDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import pojo.MyTrack;

/**
 *
 * @author Razvan'S PC
 */
public class PlayListController extends HttpServlet {
//1 good ,0 bad

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try (PrintWriter out = response.getWriter()) {
            switch (request.getParameter("type")) {
                case "addPlaylist": {
                    if (request.getSession().getAttribute("user_session") != null) {
                        if (addPlaylist(request.getParameter("playlistName"), request.getSession().getAttribute("user_session").toString())) {
                            out.println(UserDAO.getInstance().getUserIDWithGoogleID(request.getSession().getAttribute("user_session").toString()));
                            out.print(1);
                            break;
                        } else {
                            out.print(0);
                            break;
                        }
                    } else {
                        out.print(0);
                        break;
                    }
                }
                case "addItem": {
                    ItemsDAO itemsDAO = ItemsDAO.getInstance();
                    if (!itemsDAO.urlExists(request.getParameter("url_content"))) {
                        if (itemsDAO.addItem(request.getParameter("title"), request.getParameter("url_thumbnail"), request.getParameter("src_type"), request.getParameter("author"), request.getParameter("duration"), request.getParameter("url_content"),request.getParameter("videoID"))) {
                            if (addItemToPlaylist(itemsDAO.getItemsId(request.getParameter("url_content")), PlaylistDAO.getInstance().getId(request.getParameter("playlistName")))) {
                                out.print(1);
                            } else {
                                out.print(0);
                            }
                        } else {
                            out.print(0);
                        }
                    } else if (addItemToPlaylist(itemsDAO.getItemsId(request.getParameter("url_content")), PlaylistDAO.getInstance().getId(request.getParameter("playlistName")))) {
                        out.print(1);
                    } else {
                        out.print(0);

                    }

                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    private boolean addItem(int idPlaylist, MyTrack track) {

        if (idPlaylist >= 1 && track != null) {
            return ItemsDAO.getInstance().addItem(track.getTitle(), track.getUrlThumbnail(), track.getSrcType(), track.getAuthor(), track.getDuration(), track.getUrlContent(),track.getVideoID());
        }
        return false;
    }

    private boolean addPlaylist(String name, String userId) {
        if (name != null && !name.trim().equals("")) {
            return PlaylistDAO.getInstance().createPlaylist(name, userId);
        }
        return false;
    }

    ;
    
    private boolean addItemToPlaylist(int idItem, int idPlayList) {
        if (idItem >= 1 && idPlayList >= 1) {
            return PlaylistDAO.getInstance().addItemToPlayList(String.valueOf(idItem), String.valueOf(idPlayList));
        }
        return false;
    }

}
