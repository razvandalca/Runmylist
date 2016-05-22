/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pojo;

/**
 *
 * @author Razvan'S PC
 */
public class MyTrack {

    private String author;
    private String title;
    private String duration;
    private String videoID;
    //YouTbe : yt SoundCloud sc
    private String srcType;
    private String urlContent;
    private String urlThumbnail;

    public MyTrack(String author, String title, String duration, String id, String srcType, String urlContent, String urlThumbnail) {
        this.author = author;
        this.title = title;
        this.duration = duration;
        this.videoID = id;
        this.srcType = srcType;
        this.urlContent = urlContent;
        this.urlThumbnail = urlThumbnail;
    }

    public MyTrack() {
    }

    public MyTrack(String string, String string0, String string1, String string2, String string3, String string4) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getVideoID() {
        return videoID;
    }

    public void setVideoID(String videoID) {
        this.videoID = videoID;
    }

    public String getSrcType() {
        return srcType;
    }

    public void setSrcType(String srcType) {
        this.srcType = srcType;
    }

    public String getUrlContent() {
        return urlContent;
    }

    public void setUrlContent(String urlContent) {
        this.urlContent = urlContent;
    }

    public String getUrlThumbnail() {
        return urlThumbnail;
    }

    public void setUrlThumbnail(String urlThumbnail) {
        this.urlThumbnail = urlThumbnail;
    }

    @Override
    public String toString() {
        return "MyTrack{" + "author=" + author + ", title=" + title + ", duration=" + duration + ", id=" + videoID + ", srcType=" + srcType + ", urlContent=" + urlContent + ", urlThumbnail=" + urlThumbnail + '}';
    }

    
    
    
}
