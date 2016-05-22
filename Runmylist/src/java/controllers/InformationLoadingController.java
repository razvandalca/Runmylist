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
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
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
            PrintWriter out = response.getWriter();
            JSONObject mainObj = new JSONObject();
            JSONArray jSonArrayPlayLists = new JSONArray();

            JSONObject jSONObjectItem, jSONObjectPlayList;
            if (request.getSession().getAttribute("user_session") != null && !request.getSession().getAttribute("user_session").equals("")) {

                ArrayList allPlaylistsForUser = PlaylistDAO.getInstance().getAllPlaylistsForUser(request.getSession().getAttribute("user_session").toString());
                for (Object object : allPlaylistsForUser) {
                    JSONArray jSONArrayItems = new JSONArray();
                    ArrayList allItemsForPlayList = PlaylistDAO.getInstance().getAllItemsForAPlayList(object.toString());
                    jSONObjectPlayList = new JSONObject();
                    

                    for (Object object1 : allItemsForPlayList) {
                        MyTrack myTrack = ItemsDAO.getInstance().getItem(object1.toString());
                        jSONObjectItem = new JSONObject();
                        jSONObjectItem.put("author", myTrack.getAuthor());
                        jSONObjectItem.put("duration", myTrack.getDuration());
                        jSONObjectItem.put("src_type", myTrack.getSrcType());
                        jSONObjectItem.put("title", myTrack.getTitle());
                        jSONObjectItem.put("url_content", myTrack.getUrlContent());
                        jSONObjectItem.put("url_thumbnail", myTrack.getUrlThumbnail());
                        jSONObjectItem.put("videoId", myTrack.getVideoID());

                        jSONArrayItems.put(jSONObjectItem);
                        
                    }
                    jSONObjectPlayList.put("name", PlaylistDAO.getInstance().getName(object.toString()));
                    jSONObjectPlayList.put("items", jSONArrayItems);
                    jSonArrayPlayLists.put(jSONObjectPlayList);
                }
                mainObj.put("result", jSonArrayPlayLists);
                out.print(mainObj);
                
            } else {
                out.print(0);
            }
        } catch (SQLException ex) {
            Logger.getLogger(InformationLoadingController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (JSONException ex) {
            Logger.getLogger(InformationLoadingController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }

}
