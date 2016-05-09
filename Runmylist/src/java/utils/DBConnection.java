/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

/**
 *
 * @author Razvan'S PC
 */
public class DBConnection {
    private static Connection connection;

    public static Connection getConnection() {
        if (connection == null) {
            try {
            String url = "jdbc:mysql://localhost:3306/runmylist";
            String user = "root";
            String password = "";
            String driver="com.mysql.jdbc.Driver";
            Class.forName(driver);
            connection = DriverManager.getConnection(url, user, password);
            connection.setAutoCommit(false);


        } catch (Exception e) {
            System.err.println("Could not open db connction");
            e.printStackTrace();
        }
        }
        return connection;
    }
}
