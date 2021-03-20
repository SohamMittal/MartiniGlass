

CREATE TABLE `tbl_beer_mugs` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_beer_mugs`
--

INSERT INTO `tbl_beer_mugs` (`id`, `name`, `price`) VALUES
(1, 'Kingsley Davie', 8.99),
(2, 'Fox Mendoza glass', 20.99),
(3, 'Tierney Philip', 2.99),
(4, 'Virgil Meza', 10.99),
(5, 'Georgie Ratliff', 15.99),
(6, 'Joshua Lam', 6.99),
(7, 'Woodrow Holder', 8.99),
(8, 'Meerab Mckay Macculm', 12.99),
(9, 'Muneeb Cullen', 5.99);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_brandy_balloon`
--

CREATE TABLE `tbl_brandy_balloon` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_brandy_balloon`
--

INSERT INTO `tbl_brandy_balloon` (`id`, `name`, `price`) VALUES
(1, 'Mae Barton', 8.99),
(2, 'Keith Allen', 20.99),
(3, 'Courteney Price', 2.99),
(4, 'Conal Macias', 10.99),
(5, 'Gethin Mackenzie', 15.99),
(6, 'Oliwia Carty', 6.99),
(7, 'Krish Smith', 8.99),
(8, 'Roscoe Travers', 12.99),
(9, 'Horace Huang', 5.99);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_champagne_glasses`
--

CREATE TABLE `tbl_champagne_glasses` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_champagne_glasses`
--

INSERT INTO `tbl_champagne_glasses` (`id`, `name`, `price`) VALUES
(1, 'Zidane Andrews', 8.99),
(2, 'Margaux Poole', 20.99),
(3, 'Colin Sharma', 2.99),
(4, 'Kendra Wickens', 10.99),
(5, 'Alexie Cassidy', 15.99),
(6, 'Domonic Hudson', 6.99),
(7, 'Darrell Hartman', 8.99),
(8, 'Lyla-Rose Santos', 12.99),
(9, 'Zena Hogan', 5.99);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cocktail_glasses`
--

CREATE TABLE `tbl_cocktail_glasses` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_cocktail_glasses`
--

INSERT INTO `tbl_cocktail_glasses` (`id`, `name`, `price`) VALUES
(1, 'Margaux Poole', 8.99),
(2, 'Louis Leach', 20.99),
(3, 'Manpreet Carey', 2.99),
(4, 'Juan Berg', 10.99),
(5, 'Hattie Peel', 15.99),
(6, 'Mateo Craft', 6.99),
(7, 'Masuma Miller', 8.99),
(8, 'Marcos Mendez', 12.99),
(9, 'Martha Gentry', 5.99);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_collins`
--

CREATE TABLE `tbl_collins` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_collins`
--

INSERT INTO `tbl_collins` (`id`, `name`, `price`) VALUES
(1, 'Cracker Collin', 9.99),
(2, 'Crazy Collin', 4.99),
(3, 'Justin Pierce', 1.99),
(4, 'Emre Werner', 49.99),
(5, 'Bodhi Harding', 60.99),
(6, 'Summer-Louise Decker', 5.99),
(7, 'Matteo Moses', 16.99),
(8, 'Soraya Pruitt', 12.99),
(9, 'Garin Robles', 7.99);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_high_ball`
--

CREATE TABLE `tbl_high_ball` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_high_ball`
--

INSERT INTO `tbl_high_ball` (`id`, `name`, `price`) VALUES
(1, 'Prince Edward glass', 20.99),
(2, 'John Molson', 25.99),
(3, 'Klaus Nicholson', 15.99),
(4, 'Bella Ciao', 49.99),
(5, 'Prince Harry', 60.99),
(6, 'Luna woldorf', 5.99),
(7, 'Shawn Macculm', 16.99),
(8, 'Curvy Curry', 12.99),
(9, 'Ice splice', 7.99);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_juice_glasses`
--

CREATE TABLE `tbl_juice_glasses` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_juice_glasses`
--

INSERT INTO `tbl_juice_glasses` (`id`, `name`, `price`) VALUES
(1, 'Keith Allen', 8.99),
(2, 'Shakira Boyer', 20.99),
(3, 'Lexi-Mai Kaiser', 2.99),
(4, 'Hadiqa Mackay', 10.99),
(5, 'Sullivan Schaefer', 15.99),
(6, 'Aamir French', 6.99),
(7, 'Macey O Sullivan', 8.99),
(8, 'Tobi Carrillo', 12.99),
(9, 'Rami Mullins', 5.99);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_martini_glasses`
--

CREATE TABLE `tbl_martini_glasses` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_martini_glasses`
--

INSERT INTO `tbl_martini_glasses` (`id`, `name`, `price`) VALUES
(1, 'Malak Peacock', 8.99),
(2, 'Jennifer Alvarado', 20.99),
(3, 'Kiya Patterson', 2.99),
(4, 'Tyreese Flowers', 10.99),
(5, 'Franklyn York', 15.99),
(6, 'Prince Harry', 6.99),
(7, 'Lloyd Shields', 8.99),
(8, 'Emily-Rose Benitez', 12.99),
(9, 'Shanon Gates', 5.99);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_old_fashioned`
--

CREATE TABLE `tbl_old_fashioned` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_old_fashioned`
--

INSERT INTO `tbl_old_fashioned` (`id`, `name`, `price`) VALUES
(1, 'Bob Rivas', 9.99),
(2, 'Eben Field', 4.99),
(3, 'Shayla Hahn', 1.99),
(4, 'Imani Suarez', 49.99),
(5, 'Shaunie Stein', 60.99),
(6, 'Uwais Talley', 5.99),
(7, 'Paula Horner', 16.99),
(8, 'Montana Bowes', 12.99),
(9, 'Haydon Mcpherson', 7.99);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_test`
--

CREATE TABLE `tbl_test` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_test`
--

INSERT INTO `tbl_test` (`id`, `name`) VALUES
(1, 'lol'),
(2, 'heheheh'),
(3, '+a+'),
(4, '+a+'),
(5, '+a+'),
(6, '+b+'),
(7, '+b+'),
(8, '+a+'),
(9, '+a+'),
(10, '+a+'),
(11, '+a+'),
(12, '+a+'),
(13, '+a+'),
(14, '+a+'),
(15, '+a+'),
(16, '+a+'),
(17, '+a+'),
(18, '+a+'),
(19, '+a+'),
(20, '+a+'),
(21, '+a+'),
(22, '+a+'),
(23, '+a+'),
(24, '+a+'),
(25, '+a+');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_userinfo`
--

CREATE TABLE `tbl_userinfo` (
  `id` int(11) NOT NULL,
  `fName` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `lName` varchar(50) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `zip` varchar(50) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `phoneNumber` varchar(100) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_userinfo`
--

INSERT INTO `tbl_userinfo` (`id`, `fName`, `username`, `pass`, `lName`, `address`, `zip`, `city`, `phoneNumber`, `state`) VALUES
(1, 'Soham', 'soham123', '900150983cd24fb0d6963f7d28e17f72', 'Mittal', '#1- 3665 rue Adam', 'h1h1h3', 'Montreal', '1234567890', 'Quebec'),
(2, 'Rajbir', 'Raj123', '900150983cd24fb0d6963f7d28e17f72', 'Singh', 'abc@gmail.com', 'h1h1h3', 'Montreal', '1234567890', 'Quebec');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_wine_glasses`
--

CREATE TABLE `tbl_wine_glasses` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_wine_glasses`
--

INSERT INTO `tbl_wine_glasses` (`id`, `name`, `price`) VALUES
(1, 'Margaux Poole', 8.99),
(2, 'Barbara Ramos', 20.99),
(3, 'Courteney Price', 2.99),
(4, 'Dave Carson', 10.99),
(5, 'Ricardo Broughton', 15.99),
(6, 'Jameson Piper', 6.99),
(7, 'Ravi Rigby', 8.99),
(8, 'Eloisa Freeman', 12.99),
(9, 'Filip Serrano', 5.99);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_beer_mugs`
--
ALTER TABLE `tbl_beer_mugs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_brandy_balloon`
--
ALTER TABLE `tbl_brandy_balloon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_champagne_glasses`
--
ALTER TABLE `tbl_champagne_glasses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_cocktail_glasses`
--
ALTER TABLE `tbl_cocktail_glasses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_collins`
--
ALTER TABLE `tbl_collins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_high_ball`
--
ALTER TABLE `tbl_high_ball`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_juice_glasses`
--
ALTER TABLE `tbl_juice_glasses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_martini_glasses`
--
ALTER TABLE `tbl_martini_glasses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_old_fashioned`
--
ALTER TABLE `tbl_old_fashioned`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_test`
--
ALTER TABLE `tbl_test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_userinfo`
--
ALTER TABLE `tbl_userinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_wine_glasses`
--
ALTER TABLE `tbl_wine_glasses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_beer_mugs`
--
ALTER TABLE `tbl_beer_mugs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_brandy_balloon`
--
ALTER TABLE `tbl_brandy_balloon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_champagne_glasses`
--
ALTER TABLE `tbl_champagne_glasses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_cocktail_glasses`
--
ALTER TABLE `tbl_cocktail_glasses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_juice_glasses`
--
ALTER TABLE `tbl_juice_glasses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_martini_glasses`
--
ALTER TABLE `tbl_martini_glasses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_old_fashioned`
--
ALTER TABLE `tbl_old_fashioned`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_test`
--
ALTER TABLE `tbl_test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `tbl_wine_glasses`
--
ALTER TABLE `tbl_wine_glasses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
