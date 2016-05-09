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
    
    public boolean createUser(String user, String pw, String mail) {
        
        connection=DBConnection.getConnection();
       
        try {
            PreparedStatement stmt = connection.prepareStatement("insert into users values (default, ?, ?, ?)");
            stmt.setString(1, user);
            stmt.setString(2, Hash.getHash(pw));
            stmt.setString(3, mail);
            
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
    
    public  static int getUserID(String username) throws SQLException{
        
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
    
    public static void main(String[] args) throws SQLException{
        
        out.println("The ID for user : Irina, is " + getUserID("Irina")+".");
        out.println("The ID for user : Angelina06, is " + getUserID("Angelina06"));
//        getUserID("Angelina06");

       
        
        }
}
