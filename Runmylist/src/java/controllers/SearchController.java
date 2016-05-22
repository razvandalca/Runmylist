/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.SearchListResponse;
import com.google.api.services.youtube.model.SearchResult;
import javax.servlet.http.HttpServlet;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import de.voidplus.soundcloud.*;
import java.util.ArrayList;
import java.util.Collections;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import pojo.MyTrack;

/**
 *
 * @author Razvan'S PC
 */
public class SearchController extends HttpServlet {

    private static final String PROPERTIES_FILENAME = "youtube.properties";

    private  final long NUMBER_OF_VIDEOS_RETURNED = 50;
    private  YouTube youtube;
    public final JsonFactory JSON_FACTORY = new JacksonFactory();


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try (PrintWriter out = response.getWriter()) {
            ArrayList<MyTrack> resultArray=youtubeQuery(request.getParameter("inputQuery"));
//            request.getParameter("inputQuery")
            resultArray.addAll(soundCloudQuery("Rihana"));
            Collections.shuffle(resultArray);
            JSONObject jSONObject;
            JSONArray jSonArray = new JSONArray();
            for (MyTrack myTrack : resultArray) {
                jSONObject=new JSONObject();
                jSONObject.put("author", myTrack.getAuthor());
                jSONObject.put("duration", myTrack.getDuration());
                jSONObject.put("src_type", myTrack.getSrcType());
                jSONObject.put("title", myTrack.getTitle());
                jSONObject.put("url_content", myTrack.getUrlContent());
                jSONObject.put("url_thumbnail", myTrack.getUrlThumbnail());
                jSONObject.put("videoId", myTrack.getVideoID());
                jSonArray.put(jSONObject); 
            }
            JSONObject mainObj = new JSONObject();
            mainObj.put("results", jSonArray);
            out.print(mainObj.toString());

            


        } catch (JSONException ex) {
            ex.printStackTrace();
            Logger.getLogger(SearchController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    private ArrayList<MyTrack> youtubeQuery(String searchString) throws IOException {
        ArrayList<MyTrack> searchResultsArrayList = new ArrayList<>();
        MyTrack track;
        youtube = new YouTube.Builder(new NetHttpTransport(), JSON_FACTORY, new HttpRequestInitializer() {
            @Override
            public void initialize(HttpRequest request) throws IOException {
            }
        }).setApplicationName("youtube-cmdline-search-sample").build();
        String queryTerm = searchString;
        YouTube.Search.List search = youtube.search().list("id,snippet");
        String apiKey = "AIzaSyByS-IwVEMkiCuX2OXvBKdsywjR7Ls7828";
        search.setKey(apiKey);
        search.setQ(queryTerm);
        search.setType("video");
        search.setFields("items(id/kind,id/videoId,snippet/title,snippet/channelTitle,snippet/thumbnails/default/url)");
        search.setMaxResults(NUMBER_OF_VIDEOS_RETURNED);

        SearchListResponse searchResponse = search.execute();
        List<SearchResult> searchResultList = searchResponse.getItems();
        if (searchResultList == null) {
            System.err.println(searchResponse.toString());
            return null;
        }
        for (SearchResult searchResult : searchResultList) {
            track = new MyTrack();
            track.setAuthor(searchResult.getSnippet().getChannelTitle());
            track.setVideoID(searchResult.getId().getVideoId());
            track.setTitle(searchResult.getSnippet().getTitle());
            track.setUrlContent("https://www.youtube.com/watch?v=" + searchResult.getId().getVideoId());
            track.setSrcType("yt");
            track.setUrlThumbnail(searchResult.getSnippet().getThumbnails().getDefault().getUrl());
            track.setDuration("3:20");
            searchResultsArrayList.add(track);
        }
        return searchResultsArrayList;
    }

    private ArrayList<MyTrack> soundCloudQuery(String searchString) {
        SoundCloud soundcloud = new SoundCloud(
                "9d562a4a500509e91c35eaaff309690c",
                "a3a4f1829161169fdab60072892f82e4"
        );
        ArrayList<MyTrack> searchResultsArrayList = new ArrayList<>();
        ArrayList<Track> tracks = soundcloud.findTrack(searchString);
        MyTrack track;
        if (tracks == null) {
            return null;
        }
        for (Track trackSC : tracks) {
            track=new MyTrack();
            track.setAuthor(trackSC.getUser().getUsername());
            track.setDuration(trackSC.getDuration().toString());
            track.setSrcType("sc");
            track.setTitle(trackSC.getTitle());
            track.setUrlContent(trackSC.getPermalinkUrl());
            track.setUrlThumbnail(trackSC.getArtworkUrl());
            track.setVideoID(trackSC.getId().toString());
            searchResultsArrayList.add(track);
        }
        
        return searchResultsArrayList;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }

}
