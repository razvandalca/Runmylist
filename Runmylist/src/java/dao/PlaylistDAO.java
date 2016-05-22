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
import pojo.PlaylistsItems;
import utils.DBConnection;

/**
 *
 * @author tayfu
 */
public class PlaylistDAO {

    private static Connection connection;

    private static PlaylistDAO instance;

    public static PlaylistDAO getInstance() {
        if (instance == null) {
            instance = new PlaylistDAO();
        }
        return instance;
    }

    public boolean playlistNameExists(String name) {
        try {
            connection = DBConnection.getConnection();
        } catch (Exception e) {
            System.err.println("Connection could not open");
        }
        try {

            PreparedStatement prepStmt = connection.prepareStatement("SELECT * from playlists p where p.name = ?");
            prepStmt.setString(1, name);
            ResultSet rs = prepStmt.executeQuery();

            if (rs.next()) {
                rs.close();
                return true;
            }

        } catch (SQLException e) {
        }

        return false;
    }

    public boolean createPlaylist(String name, String userID) {
        connection = DBConnection.getConnection();
        try {
            PreparedStatement statement = connection.prepareStatement("INSERT INTO `playlists`(`name`, `user_id`) VALUES (?,?)");
            statement.setString(1, name);
            statement.setString(2, userID);
            if (!listExists(name)) {
                statement.execute();
                connection.commit();
                return true;
            }
        } catch (SQLException ex) {
        }

        return false;
    }

    public boolean listExists(String name) throws SQLException {
        connection = DBConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement("SELECT * FROM playlists where name = ?");
        statement.setString(1, name);
        ResultSet rs = statement.executeQuery();
        if (rs.next()) {
            rs.close();
            return true;
        }
        return false;
    }

    //    public ArrayList<PlaylistsItems> getPlItems(int item_id) throws SQLException {
    //
    //        connection = DBConnection.getConnection();
    //        ArrayList<PlaylistsItems> plitems = new ArrayList<>();
    //        ArrayList<Integer> ids = new ArrayList<>();
    //        PreparedStatement statement = connection.prepareStatement("SELECT id FROM items WHERE playlist_id = " + item_id + ";");
    //        try (ResultSet rs = statement.executeQuery()) {
    //            while (rs.next()) {
    //                ids.add(rs.getInt("id"));
    //            }
    //        }
    //        return plitems;
    //    }
    public void delPl(String name) throws SQLException {
        connection = DBConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement("DELETE FROM playlists WHERE id = ?");
        statement.setString(1, name);
        statement.executeUpdate();
        connection.commit();
    }

    public boolean addItemToPlayList(String idItem, String idPlayList) {
        connection = DBConnection.getConnection();
        try {
            PreparedStatement statement = connection.prepareStatement("INSERT INTO `playlists_items`( `playlist_id`, `item_id`) values (?,?)");
            statement.setString(1, idPlayList);
            statement.setString(2, idItem);
            statement.execute();
            connection.commit();
            return true;

        } catch (SQLException ex) {
            return false;
        }
    }

    public int getId(String name) throws SQLException {
        connection = DBConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement("SELECT * FROM playlists where name = ?");
        statement.setString(1, name);
        ResultSet rs = statement.executeQuery();
        if (rs.next()) {
            return rs.getInt("playlist_id");
        }
        rs.close();
        return -1;
    }

    public ArrayList<Integer> getAllPlaylistsForUser(String userID) throws SQLException {
        connection = DBConnection.getConnection();
        ArrayList playListIDs = new ArrayList();
        PreparedStatement statement = connection.prepareStatement("SELECT `playlist_id` FROM `playlists` WHERE user_id = ?");
        statement.setString(1, userID);
        ResultSet rs = statement.executeQuery();
        while (rs.next()) {
            playListIDs.add(rs.getInt("playlist_id"));
        }
        return playListIDs;
    }

    public ArrayList getAllItemsForAPlayList(String playListID) throws SQLException {
        connection = DBConnection.getConnection();
        ArrayList itemsIDFromPlayList = new ArrayList();
        PreparedStatement statement = connection.prepareStatement("SELECT `item_id` FROM `playlists_items` WHERE playlist_id = ?");
        statement.setString(1, playListID);
        ResultSet rs = statement.executeQuery();
        while (rs.next()) {
            itemsIDFromPlayList.add(rs.getInt("item_id"));
        }
        return itemsIDFromPlayList;
    }

    public String getName(String id) throws SQLException {
        connection = DBConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement("SELECT name FROM playlists where playlist_id = ?");
        statement.setString(1,id);
        ResultSet rs = statement.executeQuery();
        if (rs.next()) {
            return rs.getString("name");
        }
        rs.close();
        return"Error";
    }

}
