-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2016 at 06:20 PM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `runmylist`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `thumbnail_url` text NOT NULL,
  `source_type` varchar(3) NOT NULL,
  `author` text,
  `duration` text NOT NULL,
  `url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `title`, `thumbnail_url`, `source_type`, `author`, `duration`, `url`) VALUES
(3, 'eminem_song', 'http_url', 'yt', 'vevo', '233', 'http_test');

-- --------------------------------------------------------

--
-- Table structure for table `playlists`
--

CREATE TABLE `playlists` (
  `playlist_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `user_id` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `playlists`
--

INSERT INTO `playlists` (`playlist_id`, `name`, `user_id`) VALUES
(1, 'demoName', '12');

-- --------------------------------------------------------

--
-- Table structure for table `playlists_items`
--

CREATE TABLE `playlists_items` (
  `id` int(11) NOT NULL,
  `playlist_id` varchar(30) NOT NULL,
  `item_id` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `playlists_items`
--

INSERT INTO `playlists_items` (`id`, `playlist_id`, `item_id`) VALUES
(2, '1', '3');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` text NOT NULL,
  `creation_date` date NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `google_id` text,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `creation_date`, `firstname`, `lastname`, `google_id`, `email`) VALUES
(8, '', 'b28e140b49046d7f66ff1e675f9aaed6e0cc76cb', '2016-05-22', 'DalcaR', 'DalcaR', NULL, 'razvan.dacla@gmauil.com'),
(9, '', 'b28e140b49046d7f66ff1e675f9aaed6e0cc76cb', '2016-05-22', 'DalcaR', 'DalcaR', NULL, 'razvan.dacla@gmauil.com'),
(10, '', 'b28e140b49046d7f66ff1e675f9aaed6e0cc76cb', '2016-05-22', 'DalcaR', 'DalcaR', NULL, 'razvan.dacla@gmauil.com'),
(11, '', 'b28e140b49046d7f66ff1e675f9aaed6e0cc76cb', '2016-05-22', 'TEAYFUN', 'TAYFUN', NULL, 'adsgeasdggsg'),
(12, '', '', '2016-05-22', 'Razvan', 'Dalca', 'e0c11d9cf640b8d3697e6044534d11b817db9ad7', 'dalca.razvan@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`),
  ADD UNIQUE KEY `url` (`url`);

--
-- Indexes for table `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`playlist_id`);

--
-- Indexes for table `playlists_items`
--
ALTER TABLE `playlists_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `playlist_id` (`playlist_id`),
  ADD KEY `item_id` (`item_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `playlist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `playlists_items`
--
ALTER TABLE `playlists_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
