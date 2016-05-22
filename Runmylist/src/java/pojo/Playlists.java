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
public class Playlists implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer playlistId;
    private String name;
    private PlaylistsItems playlistsItems;

    public Playlists() {
    }

    public Playlists(Integer playlistId) {
        this.playlistId = playlistId;
    }

    public Playlists(Integer playlistId, String name) {
        this.playlistId = playlistId;
        this.name = name;
    }

    public Integer getPlaylistId() {
        return playlistId;
    }

    public void setPlaylistId(Integer playlistId) {
        this.playlistId = playlistId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public PlaylistsItems getPlaylistsItems() {
        return playlistsItems;
    }

    public void setPlaylistsItems(PlaylistsItems playlistsItems) {
        this.playlistsItems = playlistsItems;
    }


    @Override
    public String toString() {
        return "test.Playlists[ playlistId=" + playlistId + " ]";
    }
    
}
