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

    public boolean addItem(String title, String th_url, String source_type, String author, String duration, String url) {
        conn = DBConnection.getConnection();
        try {
            PreparedStatement statement = conn.prepareStatement("INSERT INTO `items`( `title`, `thumbnail_url`, `source_type`, `author`, `duration`, `url`) VALUES(?,?,?,?,?,?)");
            statement.setString(1, title);
            statement.setString(2, th_url);
            statement.setString(3, source_type);
            statement.setString(4, author);
            statement.setString(5, duration);
            statement.setString(6, url);
            if (!urlExists(url)) {
                statement.execute();
                conn.commit();
                return true;
            }
        } catch (SQLException ex) {
        }

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

    public ArrayList<MyTrack> getItems() {
        conn = DBConnection.getConnection();
        ArrayList<MyTrack> items = new ArrayList<>();
        try (PreparedStatement prepStmt = conn.prepareStatement("select  * from items")) {
            ResultSet rs = prepStmt.executeQuery();
            while (rs.next()) {
                items.add(new MyTrack(rs.getString("author"), rs.getString("title"), rs.getString("duration"), rs.getString("source_type"), rs.getString("url"), rs.getString("thumbnail_url")));
            }
        } catch (SQLException ex) {
        }
        return items;
    }
    
}
