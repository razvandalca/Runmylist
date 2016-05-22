/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pojo;

import java.io.Serializable;

/**
 *
 * @author tayfu
 */

public class PlaylistsItems implements Serializable {

    private static final long serialVersionUID = 1L;
    private Integer id;
    private int playlistId;
    private int ordering;
    private int itemId;
    private Playlists playlists;

    public PlaylistsItems() {
    }

    public PlaylistsItems(Integer id) {
        this.id = id;
    }

    public PlaylistsItems(Integer id, int playlistId, int ordering) {
        this.id = id;
        this.playlistId = playlistId;
        this.ordering = ordering;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getPlaylistId() {
        return playlistId;
    }

    public void setPlaylistId(int playlistId) {
        this.playlistId = playlistId;
    }

    public int getOrdering() {
        return ordering;
    }

    public void setOrdering(int ordering) {
        this.ordering = ordering;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public Playlists getPlaylists() {
        return playlists;
    }

    public void setPlaylists(Playlists playlists) {
        this.playlists = playlists;
    }

    @Override
    public String toString() {
        return "test.PlaylistsItems[ id=" + id + " ]";
    }
    
}
