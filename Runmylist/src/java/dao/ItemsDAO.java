/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import pojo.MyTrack;
import utils.DBConnection;

/**
 *
 * @author tayfu
 */
public class ItemsDAO {

    private Connection conn;
    private static ItemsDAO instance;

    public static ItemsDAO getInstance() {
        if (instance == null) {
            instance = new ItemsDAO();
        }
        return instance;
    }

    public ItemsDAO() {
    }

    public boolean addItem(String title, String th_url, String source_type, String author, String duration, String url, String videoID) {
        conn = DBConnection.getConnection();
        try {
            PreparedStatement statement = conn.prepareStatement("INSERT INTO `items`( `title`, `thumbnail_url`, `source_type`, `author`, `duration`, `url`,`videoID`) VALUES(?,?,?,?,?,?,?)");
            statement.setString(1, title);
            statement.setString(2, th_url);
            statement.setString(3, source_type);
            statement.setString(4, author);
            statement.setString(5, duration);
            statement.setString(6, url);
            statement.setString(7, videoID);
            System.err.println("1");
            if (!urlExists(url)) {
                System.err.println("2");
                statement.execute();
                conn.commit();
                return true;
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            System.err.println("3");
            System.err.println(ex);
        }
        System.err.println("4");
        return false;
    }

    public boolean urlExists(String url) throws SQLException {
        conn = DBConnection.getConnection();
        PreparedStatement statement = conn.prepareStatement("SELECT * FROM items where url = ?");
        statement.setString(1, url);
        ResultSet rs = statement.executeQuery();
        if (rs.next()) {
            rs.close();
            return true;
        }
        return false;
    }

    public int getItemsId(String URL) throws SQLException {
        conn = DBConnection.getConnection();
        PreparedStatement statement = conn.prepareStatement("SELECT * FROM items where url = ?");
        statement.setString(1, URL);
        ResultSet rs = statement.executeQuery();
        if (rs.next()) {
            return rs.getInt("item_id");
        }
        rs.close();
        return -1;
    }

    public MyTrack getItem(String itemID) throws SQLException {
        conn = DBConnection.getConnection();
        MyTrack item = null;

            PreparedStatement prepStmt = conn.prepareStatement("SELECT  `title`, `thumbnail_url`, `source_type`, `author`, `duration`, `url`,`videoID` FROM `items` WHERE item_id = ?");
            prepStmt.setString(1, itemID);
            ResultSet rs = prepStmt.executeQuery();
            if (rs.next()) {
            item = new MyTrack();
            item.setAuthor(rs.getString("author"));
            item.setTitle(rs.getString("title"));
            item.setDuration(rs.getString("duration"));
            item.setSrcType(rs.getString("source_type"));
            item.setUrlContent(rs.getString("url"));
            item.setUrlThumbnail(rs.getString("thumbnail_url"));
            item.setVideoID(rs.getString("videoID"));
            }
        return item;
    }
    

}
