/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import static java.lang.System.out;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.NamingException;
import utils.DBConnection;
import utils.Hash;

/**
 *
 * @author Andrei
 */
public class UserDAO {
    private static Connection connection;
    private static UserDAO instance;

    public static UserDAO getInstance() {
        if (instance == null) {
            instance = new UserDAO();
        }
        return instance;
    }

    UserDAO() {}
    
    public boolean userExists(String username){
        try{
        connection=DBConnection.getConnection();
        }catch(Exception e){
            System.err.println("NO CONN");
        }
         try {
             
            PreparedStatement prepStmt = connection.prepareStatement("SELECT * from users u where u.username = ?");
            prepStmt.setString(1, username);
            ResultSet rs = prepStmt.executeQuery();
            
            if (rs.next()) {
                rs.close();
                return true;
            }
            
        } 
         catch (SQLException e) {
             
            e.printStackTrace();
        }
         
        return false;
    }
        public boolean userExistsByGoogleID(String googleID){
        try{
        connection=DBConnection.getConnection();
        }catch(Exception e){
            System.err.println("NO CONN");
        }
         try {
             
            PreparedStatement prepStmt = connection.prepareStatement("SELECT * from users u where u.username = ?");
            prepStmt.setString(1, Hash.getHash(googleID));
            ResultSet rs = prepStmt.executeQuery();
            
            if (rs.next()) {
                rs.close();
                return true;
            }
            
        } 
         catch (SQLException e) {
             
            e.printStackTrace();
        }
         
        return false;
    }
    
    public boolean createUser(String username, String pw ,String creation_date, String fname, String lname ,String email) {
        
        connection=DBConnection.getConnection();
       
        try {
            PreparedStatement stmt = connection.prepareStatement("insert into users values (default,?,?,?,?,?,?)");
            stmt.setString(1, username);
            stmt.setString(2, Hash.getHash(pw));
            stmt.setString(3, creation_date);
            stmt.setString(4, fname);
            stmt.setString(5, lname);
            stmt.setString(6, email);
            
            stmt.executeUpdate();
            connection.commit();
            return true;
            
        } 
        catch (SQLException ex) {
            ex.printStackTrace();
        }
        return false;
    }
    
    
        public boolean createUserFromGoogle(String username, String pw ,String creation_date, String fname, String lname ,String email,String google_id) {
        
        connection=DBConnection.getConnection();
       
        try {
            PreparedStatement stmt = connection.prepareStatement("insert into users values (default,?,?,?,?,?,?,?)");
            stmt.setString(1, username);
            stmt.setString(2, "");
            stmt.setString(3, creation_date);
            stmt.setString(4, fname);
            stmt.setString(5, lname);
            stmt.setString(6, email);
            stmt.setString(7, Hash.getHash(google_id));
            stmt.executeUpdate();
            connection.commit();
            return true;
            
        } 
        catch (SQLException ex) {
            ex.printStackTrace();
        }
        return false;
    }
    
    public boolean isPasswordCorrect(String username, String password) {
        
        connection=DBConnection.getConnection();
        
        try {
            
            PreparedStatement prepStmt = connection.prepareStatement("select * from users u where u.username = ? and u.password = ?");
            prepStmt.setString(1, username);
            prepStmt.setString(2, Hash.getHash(password));
            ResultSet rs = prepStmt.executeQuery();
            
            if (rs.next()) {
                rs.close();
                return true;
            }
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
    
    public  int getUserID(String username) throws SQLException{
        
        connection=DBConnection.getConnection();
        PreparedStatement prepStmt = connection.prepareStatement("select id from users u where u.username = ? ");
        prepStmt.setString(1, username);
        ResultSet rs = prepStmt.executeQuery();
        
        if (rs.next()) {
            
                int b = rs.getInt(1);
                System.out.println(b);
                rs.close();
                return b;
                 
            }
        
        
        
        try {
            
            if(rs.next() == true) return rs.getInt("USER_ID") ;
            
        }
        catch (SQLException ex) {
            
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return -1;
    
    }
    
        public  int getUserIDWithGoogleID(String google_id) throws SQLException{
        
        connection=DBConnection.getConnection();
        PreparedStatement prepStmt = connection.prepareStatement("select id from users u where u.username = ? ");
        prepStmt.setString(1, Hash.getHash(google_id));
        ResultSet rs = prepStmt.executeQuery();
        
        if (rs.next()) {
            
                int b = rs.getInt(1);
                System.out.println(b);
                rs.close();
                return b;
                 
            }
        
        
        
        try {
            
            if(rs.next() == true) return rs.getInt("USER_ID") ;
            
        }
        catch (SQLException ex) {
            
            Logger.getLogger(UserDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return -1;
    
    }
    
    public static void main(String[] args) throws SQLException{
        


       
        
        }
}
