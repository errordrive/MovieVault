(function () {
  'use strict';

  /* ---------- built-in catalog ---------- */
  var CATALOG = [
    { id: 'jw4', title: 'John Wick: Chapter 4', short: 'John Wick 4', year: 2023, runtime: '2h 49m', cert: 'R', type: 'movie', genres: ['Action', 'Thriller'], imdb: 7.7, director: 'Chad Stahelski',
      cast: [['Keanu Reeves', 'John Wick'], ['Donnie Yen', 'Caine'], ['Bill Skarsgård', 'Marquis'], ['Hiroyuki Sanada', 'Shimazu']],
      overview: 'John Wick takes on the High Table and its new enforcers in a fight for his freedom that runs from Osaka to Paris.', hue: 355, hue2: 250, motif: 'grid', featured: true },
    { id: 'dune2', title: 'Dune: Part Two', short: 'Dune Part Two', year: 2024, runtime: '2h 46m', cert: 'PG-13', type: 'movie', genres: ['Sci-Fi', 'Adventure', 'Drama'], imdb: 8.5, director: 'Denis Villeneuve',
      cast: [['Timothée Chalamet', 'Paul Atreides'], ['Zendaya', 'Chani'], ['Rebecca Ferguson', 'Lady Jessica'], ['Austin Butler', 'Feyd-Rautha']],
      overview: 'Paul Atreides joins the Fremen on Arrakis and sets out to avenge his family as the fight for the desert planet escalates.', hue: 28, hue2: 12, motif: 'sun', featured: true },
    { id: 'batman', title: 'The Batman', short: 'The Batman', year: 2022, runtime: '2h 56m', cert: 'PG-13', type: 'movie', genres: ['Action', 'Crime', 'Drama'], imdb: 7.8, director: 'Matt Reeves',
      cast: [['Robert Pattinson', 'Bruce Wayne'], ['Zoë Kravitz', 'Selina Kyle'], ['Paul Dano', 'Riddler'], ['Colin Farrell', 'Penguin']],
      overview: 'In his second year as Gotham\'s vigilante, Bruce Wayne tracks a killer who leaves riddles for the city\'s elite.', hue: 2, hue2: 232, motif: 'beam', featured: true },
    { id: 'oppenheimer', title: 'Oppenheimer', short: 'Oppenheimer', year: 2023, runtime: '3h 0m', cert: 'R', type: 'movie', genres: ['Drama', 'Biography'], imdb: 8.3, director: 'Christopher Nolan',
      cast: [['Cillian Murphy', 'J. Robert Oppenheimer'], ['Emily Blunt', 'Kitty Oppenheimer'], ['Matt Damon', 'Leslie Groves'], ['Robert Downey Jr.', 'Lewis Strauss']],
      overview: 'The story of J. Robert Oppenheimer, who led the Manhattan Project, and the political fallout that followed.', hue: 22, hue2: 8, motif: 'rings', featured: true },
    { id: 'gladiator2', title: 'Gladiator II', short: 'Gladiator II', year: 2024, runtime: '2h 28m', cert: 'R', type: 'movie', genres: ['Action', 'Adventure', 'Drama'], imdb: 6.6, director: 'Ridley Scott',
      cast: [['Paul Mescal', 'Lucius'], ['Pedro Pascal', 'Acacius'], ['Denzel Washington', 'Macrinus'], ['Connie Nielsen', 'Lucilla']],
      overview: 'Years after Maximus, Lucius is dragged into the arena and has to decide what Rome is worth to him.', hue: 38, hue2: 18, motif: 'sun', featured: true },
    { id: 'interstellar', title: 'Interstellar', short: 'Interstellar', year: 2014, runtime: '2h 49m', cert: 'PG-13', type: 'movie', genres: ['Sci-Fi', 'Adventure', 'Drama'], imdb: 8.7, director: 'Christopher Nolan',
      cast: [['Matthew McConaughey', 'Cooper'], ['Anne Hathaway', 'Brand'], ['Jessica Chastain', 'Murph'], ['Michael Caine', 'Professor Brand']],
      overview: 'A former pilot joins a mission through a wormhole to find a new home for humanity as Earth\'s crops fail.', hue: 200, hue2: 222, motif: 'rings' },
    { id: 'inception', title: 'Inception', short: 'Inception', year: 2010, runtime: '2h 28m', cert: 'PG-13', type: 'movie', genres: ['Sci-Fi', 'Action', 'Thriller'], imdb: 8.8, director: 'Christopher Nolan',
      cast: [['Leonardo DiCaprio', 'Cobb'], ['Joseph Gordon-Levitt', 'Arthur'], ['Elliot Page', 'Ariadne'], ['Tom Hardy', 'Eames']],
      overview: 'A thief who steals secrets from dreams is offered one last job: planting an idea inside a target\'s mind.', hue: 205, hue2: 232, motif: 'horizon' },
    { id: 'darkknight', title: 'The Dark Knight', short: 'The Dark Knight', year: 2008, runtime: '2h 32m', cert: 'PG-13', type: 'movie', genres: ['Action', 'Crime', 'Drama'], imdb: 9.0, director: 'Christopher Nolan',
      cast: [['Christian Bale', 'Bruce Wayne'], ['Heath Ledger', 'Joker'], ['Aaron Eckhart', 'Harvey Dent'], ['Michael Caine', 'Alfred']],
      overview: 'Batman faces the Joker, a chaotic criminal who pushes Gotham toward a breaking point.', hue: 215, hue2: 240, motif: 'beam' },
    { id: 'jw3', title: 'John Wick: Chapter 3 – Parabellum', short: 'John Wick 3', year: 2019, runtime: '2h 10m', cert: 'R', type: 'movie', genres: ['Action', 'Crime', 'Thriller'], imdb: 7.4, director: 'Chad Stahelski',
      cast: [['Keanu Reeves', 'John Wick'], ['Halle Berry', 'Sofia'], ['Ian McShane', 'Winston'], ['Laurence Fishburne', 'Bowery King']],
      overview: 'On the run with a bounty on his head, John Wick seeks help from old allies across the world.', hue: 14, hue2: 255, motif: 'grid' },
    { id: 'jw1', title: 'John Wick', short: 'John Wick', year: 2014, runtime: '1h 41m', cert: 'R', type: 'movie', genres: ['Action', 'Thriller', 'Crime'], imdb: 7.4, director: 'Chad Stahelski',
      cast: [['Keanu Reeves', 'John Wick'], ['Michael Nyqvist', 'Viggo Tarasov'], ['Alfie Allen', 'Iosef'], ['Willem Dafoe', 'Marcus']],
      overview: 'A retired hitman is pulled back into the underworld after thugs wrong him.', hue: 350, hue2: 228, motif: 'grid' },
    { id: 'venom3', title: 'Venom: The Last Dance', short: 'Venom: The Last Dance', year: 2024, runtime: '1h 49m', cert: 'PG-13', type: 'movie', genres: ['Action', 'Sci-Fi', 'Thriller'], imdb: 6.0, director: 'Kelly Marcel',
      cast: [['Tom Hardy', 'Eddie Brock'], ['Chiwetel Ejiofor', 'Strickland'], ['Juno Temple', 'Dr. Teddy Payne'], ['Rhys Ifans', 'Martin']],
      overview: 'Eddie Brock and Venom run from enemies on two worlds as the symbiote\'s origins catch up with them.', hue: 272, hue2: 300, motif: 'stripes' },
    { id: 'deadpool3', title: 'Deadpool & Wolverine', short: 'Deadpool & Wolverine', year: 2024, runtime: '2h 7m', cert: 'R', type: 'movie', genres: ['Action', 'Comedy', 'Sci-Fi'], imdb: 7.6, director: 'Shawn Levy',
      cast: [['Ryan Reynolds', 'Deadpool'], ['Hugh Jackman', 'Wolverine'], ['Emma Corrin', 'Cassandra Nova'], ['Matthew Macfadyen', 'Mr. Paradox']],
      overview: 'Deadpool is pulled into a multiverse mission and teams up with a reluctant Wolverine.', hue: 356, hue2: 8, motif: 'stripes' },
    { id: 'beetlejuice2', title: 'Beetlejuice Beetlejuice', short: 'Beetlejuice Beetlejuice', year: 2024, runtime: '1h 45m', cert: 'PG-13', type: 'movie', genres: ['Comedy', 'Fantasy'], imdb: 6.7, director: 'Tim Burton',
      cast: [['Michael Keaton', 'Beetlejuice'], ['Winona Ryder', 'Lydia Deetz'], ['Catherine O\'Hara', 'Delia Deetz'], ['Jenna Ortega', 'Astrid Deetz']],
      overview: 'The Deetz family returns to Winter River, and an old ghost with a talent for chaos is summoned again.', hue: 140, hue2: 282, motif: 'stripes' },
    { id: 'insideout2', title: 'Inside Out 2', short: 'Inside Out 2', year: 2024, runtime: '1h 36m', cert: 'PG', type: 'movie', genres: ['Animation', 'Comedy', 'Family'], imdb: 7.6, director: 'Kelsey Mann',
      cast: [['Amy Poehler', 'Joy'], ['Maya Hawke', 'Anxiety'], ['Kensington Tallman', 'Riley'], ['Liza Lapira', 'Disgust']],
      overview: 'Riley turns thirteen, and a new set of emotions led by Anxiety crashes into headquarters.', hue: 285, hue2: 205, motif: 'sun' },
    { id: 'quietplace', title: 'A Quiet Place: Day One', short: 'A Quiet Place: Day One', year: 2024, runtime: '1h 39m', cert: 'PG-13', type: 'movie', genres: ['Horror', 'Sci-Fi', 'Thriller'], imdb: 6.4, director: 'Michael Sarnoski',
      cast: [['Lupita Nyong\'o', 'Samira'], ['Joseph Quinn', 'Eric'], ['Alex Wolff', 'Reuben'], ['Djimon Hounsou', 'Henri']],
      overview: 'A woman in New York faces the sudden arrival of sound-hunting creatures and tries to get through one terrible day.', hue: 210, hue2: 200, motif: 'horizon' },
    { id: 'endgame', title: 'Avengers: Endgame', short: 'Avengers: Endgame', year: 2019, runtime: '3h 1m', cert: 'PG-13', type: 'movie', genres: ['Action', 'Sci-Fi', 'Drama'], imdb: 8.4, director: 'Anthony Russo, Joe Russo',
      cast: [['Robert Downey Jr.', 'Tony Stark'], ['Chris Evans', 'Steve Rogers'], ['Mark Ruffalo', 'Bruce Banner'], ['Scarlett Johansson', 'Natasha Romanoff']],
      overview: 'The Avengers regroup after a devastating loss and attempt one bold plan to undo it.', hue: 268, hue2: 232, motif: 'rings' },
    { id: 'martian', title: 'The Martian', short: 'The Martian', year: 2015, runtime: '2h 24m', cert: 'PG-13', type: 'movie', genres: ['Sci-Fi', 'Adventure', 'Drama'], imdb: 8.0, director: 'Ridley Scott',
      cast: [['Matt Damon', 'Mark Watney'], ['Jessica Chastain', 'Melissa Lewis'], ['Kristen Wiig', 'Annie Montrose'], ['Jeff Daniels', 'Teddy Sanders']],
      overview: 'An astronaut stranded on Mars must stay alive on limited supplies while Earth works out how to bring him home.', hue: 18, hue2: 30, motif: 'sun' },
    { id: 'parasite', title: 'Parasite', short: 'Parasite', year: 2019, runtime: '2h 12m', cert: 'R', type: 'movie', genres: ['Drama', 'Thriller'], imdb: 8.5, director: 'Bong Joon Ho',
      cast: [['Song Kang-ho', 'Ki-taek'], ['Lee Sun-kyun', 'Mr. Park'], ['Cho Yeo-jeong', 'Yeon-kyo'], ['Choi Woo-shik', 'Ki-woo']],
      overview: 'A struggling family works its way into a wealthy household, and the arrangement slowly unravels.', hue: 122, hue2: 160, motif: 'horizon' },
    { id: 'spirited', title: 'Spirited Away', short: 'Spirited Away', year: 2001, runtime: '2h 5m', cert: 'PG', type: 'movie', genres: ['Animation', 'Fantasy', 'Adventure'], imdb: 8.6, director: 'Hayao Miyazaki',
      cast: [['Rumi Hiiragi', 'Chihiro (voice)'], ['Miyu Irino', 'Haku (voice)'], ['Mari Natsuki', 'Yubaba (voice)'], ['Takashi Naito', 'Chihiro\'s father (voice)']],
      overview: 'A girl who wanders into a spirit world has to work in a bathhouse to free her parents.', hue: 190, hue2: 152, motif: 'sun' },
    { id: 'breakingbad', title: 'Breaking Bad', short: 'Breaking Bad', year: 2008, runtime: '5 seasons', cert: 'TV-MA', type: 'series', genres: ['Crime', 'Drama', 'Thriller'], imdb: 9.5, director: 'Vince Gilligan',
      cast: [['Bryan Cranston', 'Walter White'], ['Aaron Paul', 'Jesse Pinkman'], ['Anna Gunn', 'Skyler White'], ['Dean Norris', 'Hank Schrader']],
      overview: 'A high-school chemistry teacher turns to making methamphetamine after a cancer diagnosis.', hue: 96, hue2: 132, motif: 'stripes' },
    { id: 'thebear', title: 'The Bear', short: 'The Bear', year: 2022, runtime: 'Series', cert: 'TV-MA', type: 'series', genres: ['Comedy', 'Drama'], imdb: 8.6, director: 'Christopher Storer',
      cast: [['Jeremy Allen White', 'Carmy'], ['Ayo Edebiri', 'Sydney'], ['Ebon Moss-Bachrach', 'Richie'], ['Lionel Boyce', 'Marcus']],
      overview: 'A fine-dining chef returns to Chicago to run his family\'s chaotic sandwich shop.', hue: 25, hue2: 8, motif: 'beam' },
    { id: 'dark', title: 'Dark', short: 'Dark', year: 2017, runtime: '3 seasons', cert: 'TV-MA', type: 'series', genres: ['Sci-Fi', 'Mystery', 'Thriller'], imdb: 8.7, director: 'Baran bo Odar, Jantje Friese',
      cast: [['Louis Hofmann', 'Jonas'], ['Lisa Vicari', 'Martha'], ['Oliver Masucci', 'Ulrich'], ['Jördis Triebel', 'Katharina']],
      overview: 'The disappearance of children in a German town exposes secrets that stretch across generations and time.', hue: 215, hue2: 190, motif: 'rings' }
  ];

  var INDUSTRIES = ['Bollywood', 'Tollywood', 'Kollywood', 'Mollywood', 'Sandalwood', 'Regional', 'Hollywood', 'Dhallywood', 'Other'];
  var IN_IND = ['Bollywood', 'Tollywood', 'Kollywood', 'Mollywood', 'Sandalwood', 'Regional'];
  var IND = { parasite: 'Other', spirited: 'Other', dark: 'Other' };
  var SEASONS = { breakingbad: [7, 13, 13, 13, 16], thebear: [8, 10, 10], dark: [10, 8, 8], panchayat: [8, 8, 8, 8], mirzapur: [9, 10, 10],
    sacredgames: [8, 8], scam1992: [10], familyman: [10, 9], delhicrime: [7, 5], taqdeer: [8] };
  CATALOG.push.apply(CATALOG, [
    /* Bollywood */
    { id: '3idiots', title: '3 Idiots', short: '3 Idiots', year: 2009, runtime: '2h 50m', cert: '', type: 'movie', genres: ['Comedy', 'Drama'], imdb: 8.4, director: 'Rajkumar Hirani',
      cast: [['Aamir Khan', 'Rancho'], ['R. Madhavan', 'Farhan'], ['Sharman Joshi', 'Raju'], ['Kareena Kapoor', 'Pia']],
      overview: 'Three engineering students form a friendship that challenges how their college and families define success.', hue: 45, hue2: 20, motif: 'sun', industry: 'Bollywood' },
    { id: 'dangal', title: 'Dangal', short: 'Dangal', year: 2016, runtime: '2h 41m', cert: '', type: 'movie', genres: ['Drama', 'Biography'], imdb: 8.3, director: 'Nitesh Tiwari',
      cast: [['Aamir Khan', 'Mahavir Singh Phogat'], ['Fatima Sana Shaikh', 'Geeta Phogat'], ['Sanya Malhotra', 'Babita Kumari'], ['Sakshi Tanwar', 'Daya Kaur']],
      overview: 'A former wrestler trains his daughters to compete at the highest level against the expectations around them.', hue: 25, hue2: 350, motif: 'stripes', industry: 'Bollywood' },
    { id: 'lagaan', title: 'Lagaan', short: 'Lagaan', year: 2001, runtime: '3h 44m', cert: '', type: 'movie', genres: ['Drama', 'Musical'], imdb: 8.1, director: 'Ashutosh Gowariker',
      cast: [['Aamir Khan', 'Bhuvan'], ['Gracy Singh', 'Gauri'], ['Rachel Shelley', 'Elizabeth Russell'], ['Paul Blackthorne', 'Captain Russell']],
      overview: 'Villagers in colonial India take on British officers in a cricket match to win relief from a crushing tax.', hue: 40, hue2: 30, motif: 'horizon', industry: 'Bollywood' },
    { id: 'gangs', title: 'Gangs of Wasseypur', short: 'Gangs of Wasseypur', year: 2012, runtime: '2h 40m', cert: '', type: 'movie', genres: ['Action', 'Crime', 'Drama'], imdb: 8.2, director: 'Anurag Kashyap',
      cast: [['Manoj Bajpayee', 'Sardar Khan'], ['Nawazuddin Siddiqui', 'Faizal Khan'], ['Richa Chadha', 'Nagma'], ['Huma Qureshi', 'Mohsina']],
      overview: 'Decades of revenge between rival families in the coal-mining town of Wasseypur.', hue: 8, hue2: 0, motif: 'grid', industry: 'Bollywood' },
    { id: '12thfail', title: '12th Fail', short: '12th Fail', year: 2023, runtime: '2h 27m', cert: '', type: 'movie', genres: ['Drama', 'Biography'], imdb: 8.8, director: 'Vidhu Vinod Chopra',
      cast: [['Vikrant Massey', 'Manoj Kumar Sharma'], ['Medha Shankar', 'Shraddha Joshi'], ['Anant V Joshi', 'Pritam Pandey'], ['Anshumaan Pushkar', 'Gauri Bhaiya']],
      overview: 'Manoj Kumar Sharma fails his twelfth-grade exams and sets out to become an IPS officer against the odds.', hue: 215, hue2: 190, motif: 'beam', industry: 'Bollywood' },
    { id: 'stree2', title: 'Stree 2', short: 'Stree 2', year: 2024, runtime: '2h 27m', cert: '', type: 'movie', genres: ['Comedy', 'Horror'], imdb: 7.5, director: 'Amar Kaushik',
      cast: [['Rajkummar Rao', 'Vicky'], ['Shraddha Kapoor', 'Stree'], ['Pankaj Tripathi', 'Rudra'], ['Aparshakti Khurana', 'Bittu']],
      overview: 'The town of Chanderi faces a new supernatural threat, and the old group of friends has to deal with it.', hue: 330, hue2: 290, motif: 'stripes', industry: 'Bollywood' },
    { id: 'jawan', title: 'Jawan', short: 'Jawan', year: 2023, runtime: '2h 49m', cert: '', type: 'movie', genres: ['Action', 'Thriller'], imdb: 7.0, director: 'Atlee',
      cast: [['Shah Rukh Khan', 'Vikram Rathore / Azad'], ['Nayanthara', 'Narmada'], ['Vijay Sethupathi', 'Kaali'], ['Deepika Padukone', 'Aishwarya']],
      overview: 'A man with a personal mission gathers a group of women to take on corruption and a powerful arms dealer.', hue: 350, hue2: 15, motif: 'beam', industry: 'Bollywood' },
    { id: 'laapataa', title: 'Laapataa Ladies', short: 'Laapataa Ladies', year: 2023, runtime: '2h 2m', cert: '', type: 'movie', genres: ['Comedy', 'Drama'], imdb: 8.0, director: 'Kiran Rao',
      cast: [['Nitanshi Goel', 'Phool Kumari'], ['Pratibha Ranta', 'Jaya'], ['Sparsh Shrivastava', 'Deepak'], ['Ravi Kishan', 'Shyam Manohar']],
      overview: 'Two brides get swapped on a train, and their husbands search for them in rural India.', hue: 150, hue2: 40, motif: 'sun', industry: 'Bollywood' },
    { id: 'dilchahtahai', title: 'Dil Chahta Hai', short: 'Dil Chahta Hai', year: 2001, runtime: '3h 3m', cert: '', type: 'movie', genres: ['Comedy', 'Drama'], imdb: 8.1, director: 'Farhan Akhtar',
      cast: [['Aamir Khan', 'Akash'], ['Saif Ali Khan', 'Sameer'], ['Akshaye Khanna', 'Siddharth'], ['Preity Zinta', 'Shalini']],
      overview: 'Three close friends drift and come back together as love and ambition pull them in different directions.', hue: 195, hue2: 230, motif: 'horizon', industry: 'Bollywood' },
    { id: 'ddlj', title: 'Dilwale Dulhania Le Jayenge', short: 'DDLJ', year: 1995, runtime: '3h 9m', cert: '', type: 'movie', genres: ['Romance', 'Drama'], imdb: 8.0, director: 'Aditya Chopra',
      cast: [['Shah Rukh Khan', 'Raj'], ['Kajol', 'Simran'], ['Amrish Puri', 'Chaudhry Baldev Singh'], ['Farida Jalal', 'Lajwanti']],
      overview: 'Raj and Simran fall in love on a trip across Europe, then face her father\'s plans for an arranged marriage.', hue: 345, hue2: 310, motif: 'sun', industry: 'Bollywood' },
    { id: 'sholay', title: 'Sholay', short: 'Sholay', year: 1975, runtime: '3h 24m', cert: '', type: 'movie', genres: ['Action', 'Adventure', 'Drama'], imdb: 8.1, director: 'Ramesh Sippy',
      cast: [['Dharmendra', 'Veeru'], ['Amitabh Bachchan', 'Jai'], ['Sanjeev Kumar', 'Thakur Baldev Singh'], ['Amjad Khan', 'Gabbar Singh']],
      overview: 'Two petty crooks are hired by a retired police officer to capture a ruthless bandit.', hue: 30, hue2: 12, motif: 'horizon', industry: 'Bollywood' },
    /* Bollywood web series */
    { id: 'panchayat', title: 'Panchayat', short: 'Panchayat', year: 2020, runtime: '', cert: '', type: 'series', genres: ['Comedy', 'Drama'], imdb: 8.9, director: 'Chandan Kumar',
      cast: [['Jitendra Kumar', 'Abhishek Tripathi'], ['Neena Gupta', 'Manju Devi'], ['Raghubir Yadav', 'Brij Bhushan Dubey'], ['Faisal Malik', 'Prahlad Pandey']],
      overview: 'An engineering graduate takes a job as secretary of a village panchayat and adjusts to rural life.', hue: 130, hue2: 90, motif: 'sun', industry: 'Bollywood' },
    { id: 'mirzapur', title: 'Mirzapur', short: 'Mirzapur', year: 2018, runtime: '', cert: '', type: 'series', genres: ['Action', 'Crime', 'Thriller'], imdb: 8.4, director: 'Karan Anshuman, Puneet Krishna',
      cast: [['Pankaj Tripathi', 'Kaleen Bhaiya'], ['Ali Fazal', 'Guddu Pandit'], ['Divyenndu', 'Munna Tripathi'], ['Shweta Tripathi', 'Golu Gupta']],
      overview: 'Two brothers are drawn into the violent business of a powerful kingpin in Mirzapur.', hue: 15, hue2: 5, motif: 'grid', industry: 'Bollywood' },
    { id: 'sacredgames', title: 'Sacred Games', short: 'Sacred Games', year: 2018, runtime: '', cert: '', type: 'series', genres: ['Crime', 'Drama', 'Thriller'], imdb: 8.5, director: 'Vikramaditya Motwane, Anurag Kashyap',
      cast: [['Saif Ali Khan', 'Sartaj Singh'], ['Nawazuddin Siddiqui', 'Ganesh Gaitonde'], ['Radhika Apte', 'Anjali Mathur'], ['Kubbra Sait', 'Kukoo']],
      overview: 'A Mumbai police officer has 25 days to stop a catastrophe, guided by a gangster\'s cryptic calls.', hue: 20, hue2: 260, motif: 'rings', industry: 'Bollywood' },
    { id: 'scam1992', title: 'Scam 1992', short: 'Scam 1992', year: 2020, runtime: '', cert: '', type: 'series', genres: ['Biography', 'Crime', 'Drama'], imdb: 9.2, director: 'Hansal Mehta',
      cast: [['Pratik Gandhi', 'Harshad Mehta'], ['Shreya Dhanwanthary', 'Sucheta Dalal'], ['Hemant Kher', 'Ashwin Mehta'], ['Anjali Barot', 'Jyoti Mehta']],
      overview: 'The rise and fall of stockbroker Harshad Mehta during the 1992 Indian securities scam.', hue: 210, hue2: 190, motif: 'beam', industry: 'Bollywood' },
    { id: 'familyman', title: 'The Family Man', short: 'The Family Man', year: 2019, runtime: '', cert: '', type: 'series', genres: ['Action', 'Drama', 'Thriller'], imdb: 8.7, director: 'Raj Nidimoru, Krishna D.K.',
      cast: [['Manoj Bajpayee', 'Srikant Tiwari'], ['Priyamani', 'Suchitra'], ['Sharib Hashmi', 'JK Talpade'], ['Shreya Dhanwanthary', 'Zoya']],
      overview: 'A middle-class man working as an intelligence officer juggles family life and secret missions.', hue: 200, hue2: 230, motif: 'stripes', industry: 'Bollywood' },
    { id: 'delhicrime', title: 'Delhi Crime', short: 'Delhi Crime', year: 2019, runtime: '', cert: '', type: 'series', genres: ['Crime', 'Drama'], imdb: 8.5, director: 'Richie Mehta',
      cast: [['Shefali Shah', 'Vartika Chaturvedi'], ['Rasika Dugal', 'Neeti Singh'], ['Rajesh Tailang', 'Bhupendra Singh'], ['Adil Hussain', 'Vijay']],
      overview: 'Delhi police work to track down those behind a brutal 2012 crime that shocked the city.', hue: 220, hue2: 240, motif: 'horizon', industry: 'Bollywood' },
    /* Tollywood */
    { id: 'baahubali1', title: 'Baahubali: The Beginning', short: 'Baahubali', year: 2015, runtime: '2h 39m', cert: '', type: 'movie', genres: ['Action', 'Drama'], imdb: 8.0, director: 'S. S. Rajamouli',
      cast: [['Prabhas', 'Baahubali / Shivudu'], ['Rana Daggubati', 'Bhallaladeva'], ['Anushka Shetty', 'Devasena'], ['Tamannaah Bhatia', 'Avanthika']],
      overview: 'A young man raised in a village discovers his royal lineage and a kingdom\'s fight for its throne.', hue: 38, hue2: 10, motif: 'rings', industry: 'Tollywood' },
    { id: 'baahubali2', title: 'Baahubali 2: The Conclusion', short: 'Baahubali 2', year: 2017, runtime: '2h 47m', cert: '', type: 'movie', genres: ['Action', 'Drama'], imdb: 8.2, director: 'S. S. Rajamouli',
      cast: [['Prabhas', 'Baahubali / Shivudu'], ['Rana Daggubati', 'Bhallaladeva'], ['Anushka Shetty', 'Devasena'], ['Ramya Krishnan', 'Sivagami']],
      overview: 'The saga continues and answers why Baahubali was betrayed and who will rule Mahishmati.', hue: 28, hue2: 350, motif: 'rings', industry: 'Tollywood' },
    { id: 'rrr', title: 'RRR', short: 'RRR', year: 2022, runtime: '3h 7m', cert: '', type: 'movie', genres: ['Action', 'Drama'], imdb: 7.8, director: 'S. S. Rajamouli',
      cast: [['N. T. Rama Rao Jr.', 'Komaram Bheem'], ['Ram Charan', 'Alluri Sitarama Raju'], ['Alia Bhatt', 'Sita'], ['Ajay Devgn', 'Venkata Rama Raju']],
      overview: 'Two Indian revolutionaries in the 1920s form a bond and are then pulled apart by their causes.', hue: 12, hue2: 30, motif: 'beam', industry: 'Tollywood' },
    { id: 'pushpa1', title: 'Pushpa: The Rise', short: 'Pushpa', year: 2021, runtime: '2h 59m', cert: '', type: 'movie', genres: ['Action', 'Crime', 'Drama'], imdb: 7.6, director: 'Sukumar',
      cast: [['Allu Arjun', 'Pushpa Raj'], ['Rashmika Mandanna', 'Srivalli'], ['Fahadh Faasil', 'Bhanwar Singh Shekhawat'], ['Sunil', 'Mangalam Srinu']],
      overview: 'A laborer rises through the red sandalwood smuggling trade in Andhra Pradesh.', hue: 140, hue2: 110, motif: 'stripes', industry: 'Tollywood' },
    { id: 'kalki', title: 'Kalki 2898 AD', short: 'Kalki 2898 AD', year: 2024, runtime: '3h 1m', cert: '', type: 'movie', genres: ['Sci-Fi', 'Action'], imdb: 7.0, director: 'Nag Ashwin',
      cast: [['Prabhas', 'Bhairava'], ['Amitabh Bachchan', 'Ashwatthama'], ['Kamal Haasan', 'Supreme Yaskin'], ['Deepika Padukone', 'SUM-80']],
      overview: 'Set in a far future inspired by Hindu mythology, a bounty hunter is drawn into a fight over a child expected to change the world.', hue: 270, hue2: 30, motif: 'sun', industry: 'Tollywood' },
    { id: 'eega', title: 'Eega', short: 'Eega', year: 2012, runtime: '2h 14m', cert: '', type: 'movie', genres: ['Fantasy', 'Action', 'Comedy'], imdb: 7.7, director: 'S. S. Rajamouli',
      cast: [['Nani', 'Nani'], ['Samantha Ruth Prabhu', 'Bindu'], ['Sudeep', 'Sudeep']],
      overview: 'A murdered man is reborn as a housefly and sets out to take revenge.', hue: 150, hue2: 60, motif: 'beam', industry: 'Tollywood' },
    /* Dhallywood */
    { id: 'hawa', title: 'Hawa', short: 'Hawa', year: 2022, runtime: '2h 10m', cert: '', type: 'movie', genres: ['Drama'], imdb: null, director: 'Mejbaur Rahman Sumon',
      cast: [['Chanchal Chowdhury', 'Chaan Majhi'], ['Nazifa Tushi', 'Gulti'], ['Sariful Razz', 'Iba']],
      overview: '', hue: 195, hue2: 215, motif: 'horizon', industry: 'Dhallywood' },
    { id: 'priyotoma', title: 'Priyotoma', short: 'Priyotoma', year: 2023, runtime: '2h 20m', cert: '', type: 'movie', genres: ['Romance', 'Drama'], imdb: null, director: 'Himel Ashraf',
      cast: [['Shakib Khan', 'Sumon'], ['Idhika Paul', 'Iti'], ['Shahiduzzaman Selim', 'Usman'], ['Lutfur Rahman George', 'Khalek']],
      overview: '', hue: 340, hue2: 320, motif: 'sun', industry: 'Dhallywood' },
    { id: 'surongo', title: 'Surongo', short: 'Surongo', year: 2023, runtime: '2h 30m', cert: '', type: 'movie', genres: ['Thriller', 'Crime'], imdb: null, director: 'Raihan Rafi',
      cast: [['Afran Nisho', 'Masud'], ['Toma Mirza', 'Moyna'], ['Mostafa Monwar', 'Jahir'], ['Shahiduzzaman Selim', 'Apel Khan']],
      overview: 'A tunnel heist planned by a small gang pulls a determined investigating officer into the chase.', hue: 28, hue2: 10, motif: 'grid', industry: 'Dhallywood' },
    { id: 'poran', title: 'Poran', short: 'Poran', year: 2022, runtime: '2h 19m', cert: '', type: 'movie', genres: ['Romance', 'Drama'], imdb: null, director: 'Raihan Rafi',
      cast: [['Bidya Sinha Saha Mim', 'Ananya'], ['Sariful Razz', 'Roman'], ['Yash Rohan', 'Sifat']],
      overview: '', hue: 320, hue2: 280, motif: 'sun', industry: 'Dhallywood' },
    { id: 'matirmoina', title: 'Matir Moina', short: 'Matir Moina', year: 2002, runtime: '1h 38m', cert: '', type: 'movie', genres: ['Drama'], imdb: null, director: 'Tareque Masud',
      cast: [['Nurul Islam Bablu', 'Anu'], ['Russell Farazi', 'Rokon'], ['Jayanta Chattopadhyay', 'Kazi'], ['Rokeya Prachy', 'Ayesha Bibi']],
      overview: 'In 1960s East Pakistan, a boy sent to a madrasa watches his family and country pulled apart by faith and politics.', hue: 90, hue2: 60, motif: 'horizon', industry: 'Dhallywood' },
    { id: 'daruchini', title: 'Daruchini Dwip', short: 'Daruchini Dwip', year: 2007, runtime: '2h 6m', cert: '', type: 'movie', genres: ['Romance', 'Drama'], imdb: null, director: 'Tauquir Ahmed',
      cast: [['Riaz', 'Shuvro'], ['Zakia Bari Momo', 'Jori'], ['Mosharraf Karim', 'Ayon / Boltu'], ['Emon', 'Shonju']],
      overview: '', hue: 175, hue2: 200, motif: 'sun', industry: 'Dhallywood' },
    { id: 'taqdeer', title: 'Taqdeer', short: 'Taqdeer', year: 2020, runtime: '', cert: '', type: 'series', genres: ['Drama'], imdb: null, director: 'Syed Ahmed Shawki',
      cast: [['Chanchal Chowdhury', 'Lead'], ['Sohel Mondal', 'Montu'], ['Manoj Kumar Pramanik', ''], ['Partha Barua', '']],
      overview: 'Chanchal Chowdhury plays a freezer-van driver who transports the dead.', hue: 210, hue2: 230, motif: 'beam', industry: 'Dhallywood' }
  ]);

  var IC = {
    lock: '<rect x="5" y="10" width="14" height="10" rx="2.5"/><path d="M8 10V8a4 4 0 0 1 8 0v2M12 14v2"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    calendar: '<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M8 3v4M16 3v4M4 10h16"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    share: '<circle cx="6" cy="12" r="2.5"/><circle cx="17" cy="6" r="2.5"/><circle cx="17" cy="18" r="2.5"/><path d="m8.2 10.8 6.6-3.6M8.2 13.2l6.6 3.6"/>',
    more: '<circle cx="12" cy="5" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="19" r="1.4"/>',
    chevd: '<path d="m6 9 6 6 6-6"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    sliders: '<path d="M4 7h9M19 7h1M4 17h1M11 17h9"/><circle cx="16" cy="7" r="2.5"/><circle cx="8" cy="17" r="2.5"/>',
    back: '<path d="m15 18-6-6 6-6"/>',
    chev: '<path d="m9 18 6-6-6-6"/>',
    bookmark: '<path d="M6 3.5h12v17l-6-4-6 4z"/>',
    checkc: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 3 3 5-6"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
    heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    home: '<path d="M4 11 12 4l8 7v9H4z"/><path d="M10 20v-6h4v6"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c1-4 4-6 8-6s7 2 8 6"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    trash: '<path d="M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13"/>',
    telegram: '<path fill="currentColor" stroke="none" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>',
    edit: '<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    tv: '<rect x="3" y="6" width="18" height="14" rx="3"/><path d="m8 2 4 4 4-4"/><path d="m10.5 10.5 4 2.5-4 2.5z"/>',
    github: '<path fill="currentColor" stroke="none" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.500 11.500 0 0 1 6 0c2.300-1.500 3.300-1.200 3.300-1.200.7 1.700.2 2.900.1 3.200.8.800 1.200 1.900 1.200 3.200 0 4.600-2.800 5.600-5.500 5.900.4.400.8 1.100.8 2.200v3.300c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/>',
    film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m10 9 5 3-5 3z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
    reset: '<path d="M4 12a8 8 0 1 0 3-6.2M4 4v4h4"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    play: '<path d="M8 5v14l11-7z"/>',
    ticket: '<path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 1 0-6V6H3z"/><path d="M14 6v12" stroke-dasharray="2 2.2"/>',
    spark: '<path d="M11 3l1.9 5.6L18.5 10.5 12.9 12.4 11 18l-1.9-5.6L3.5 10.5 9.1 8.6z"/><path d="M19 15v4M17 17h4"/>',
    flame: '<path d="M12 3c.8 3.2 5 5 5 10a5 5 0 0 1-10 0c0-2 .8-3.3 2-4.3 0 1.8.8 2.8 2 3C10.5 8.5 11 5.5 12 3z"/>',
    clap: '<rect x="4" y="10" width="16" height="9" rx="1.5"/><path d="m4 10 1.6-5 4.2 1.3L8.2 10M10.2 6.3l4.2 1.3L12.8 10M15.2 7.6l4 1.2L18 10"/>',
    gear: '<circle cx="12" cy="12" r="3.2"/><path d="M19.4 13.2a7.5 7.5 0 0 0 0-2.4l2-1.5-2-3.4-2.4.9a7.5 7.5 0 0 0-2-1.2L14.7 3h-4l-.3 2.6a7.5 7.5 0 0 0-2 1.2l-2.4-.9-2 3.4 2 1.5a7.5 7.5 0 0 0 0 2.4l-2 1.5 2 3.4 2.4-.9a7.5 7.5 0 0 0 2 1.2l.3 2.6h4l.3-2.6a7.5 7.5 0 0 0 2-1.2l2.4.9 2-3.4z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.500v2M12 19.500v2M2.5 12h2M19.5 12h2M5.3 5.300l1.4 1.4M17.3 17.300l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
    phone: '<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2-.6-1.2.2-2.5 1.6-2.500H17a4 4 0 0 0 4-4C21 6.5 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="14.5" cy="7.5" r="1"/>',
    cloud: '<path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 9.5 4 4 0 0 1 17.5 18z"/>',
    upcloud: '<path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 9.5 4 4 0 0 1 17.5 18"/><path d="M12 18v-6M9.5 14.5 12 12l2.5 2.5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3.2 3 3.2 15 0 18M12 3c-3.2 3-3.2 15 0 18"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>',
    logout: '<path d="M10 4H5v16h5M15 8l4 4-4 4M19 12H9"/>',
    history: '<path d="M4 12a8 8 0 1 0 3-6.2M4 4v4h4"/><path d="M12 8v4l3 2"/>',
    playc: '<circle cx="12" cy="12" r="9"/><path d="m10 8.5 5 3.5-5 3.500z"/>',
    eyeoff: '<path d="M3 3l18 18"/><path d="M10.6 6.1A10 10 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3.2 3.9M6.6 6.7A17 17 0 0 0 2 12s3.5 6 10 6a9.7 9.7 0 0 0 3.4-.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>'
  };
  function ic(n, cls, fill) {
    return '<svg class="ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" fill="' + (fill ? 'currentColor' : 'none') +
      '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC[n] + '</svg>';
  }

  /* ---------- state ---------- */
  var LS = 'reelvault.v1', LS_SYNC = 'reelvault.synced', LS_WELCOME = 'reelvault.welcomed', LS_THEME = 'reelvault.theme';
  var $ = function (id) { return document.getElementById(id); };
  var screen = $('screen'), nav = $('nav'), toastEl = $('toast'), fileEl = $('posterFile');
  var docs = new Map();
  var backend = { col: null, ready: false, failed: false };
  var dirty = new Set(), deleting = new Set(), timers = new Map(), chains = new Map();
  var firstSnap = true, settled = false, toastTimer = 0;
  var ui = { stack: [{ v: 'home' }], me: { name: '', avatar: '' }, draft: { poster: null }, confirm: '', about: false, posterTarget: null, sel: {}, canFill: false };

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('on'); }, 2400);
  }
  function newId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function hueOf(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h % 360; }
  function initials(n) { var p = String(n).trim().split(/\s+/); return ((p[0] || '')[0] || '') + ((p.length > 1 ? p[p.length - 1][0] : '') || ''); }
  function safeImg(u) { return typeof u === 'string' && (/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(u) || /^https:\/\/image\.tmdb\.org\/t\/p\/[A-Za-z0-9_\/.-]+$/.test(u)) ? u : ''; }
  function cur() { return ui.stack[ui.stack.length - 1]; }

  /* ---------- storage ---------- */
  function saveLocal() {
    var o = {};
    docs.forEach(function (v, k) { o[k] = v; });
    lsSet(LS, JSON.stringify(o));
    if (CL && clGet()) { clearTimeout(CL.timer); CL.timer = setTimeout(function () { clPush(true); }, 20000); }
  }
  function loadLocal() {
    try {
      var o = JSON.parse(lsGet(LS) || '{}');
      Object.keys(o).forEach(function (k) { if (o[k] && typeof o[k] === 'object') docs.set(k, o[k]); });
    } catch (e) { /* start empty */ }
  }
  function persist(id) {
    saveLocal();
    if (!backend.col) return;
    dirty.add(id);
    clearTimeout(timers.get(id));
    timers.set(id, setTimeout(function () { flush(id); }, 350));
  }
  function flush(id) {
    timers.delete(id);
    var col = backend.col, body = docs.get(id);
    if (!col || !body) { dirty.delete(id); return; }
    var prev = chains.get(id) || Promise.resolve();
    chains.set(id, prev.then(function () { return col.doc(id).set(body); })
      .catch(writeFailed)
      .then(function () { if (!timers.has(id)) dirty.delete(id); }));
  }
  function removeDoc(id) {
    docs.delete(id);
    saveLocal();
    var col = backend.col;
    if (!col) return;
    clearTimeout(timers.get(id));
    timers.delete(id);
    dirty.delete(id);
    deleting.add(id);
    var prev = chains.get(id) || Promise.resolve();
    chains.set(id, prev.then(function () { return col.doc(id).delete(); })
      .catch(writeFailed)
      .then(function () { deleting.delete(id); }));
  }
  function writeFailed(e) {
    var code = e && e.code;
    if (code === 'invalid_argument' || code === 'revoked' || code === 'not_granted') {
      backend.col = null; backend.failed = true;
      toast('Could not save to your account. Changes stay in this browser.');
    } else if (code === 'quota_exceeded') {
      toast('Storage is full. Remove a custom poster or title and try again.');
    } else {
      toast('Could not save just now. Changes stay in this browser.');
    }
  }
  function onSnap(snap) {
    var remote = new Map();
    snap.docs.forEach(function (d) {
      if (!d.exists || deleting.has(d.id)) return;
      if (!/^(c_|u_)/.test(d.id) && d.id !== 'profile') return;
      var v = d.data();
      if (v && typeof v === 'object') remote.set(d.id, v);
    });
    docs.forEach(function (v, id) { if (dirty.has(id)) remote.set(id, v); });
    var push = [];
    if (firstSnap) {
      firstSnap = false;
      if (lsGet(LS_SYNC) !== '1') {
        docs.forEach(function (v, id) { if (!remote.has(id)) { remote.set(id, v); push.push(id); } });
        lsSet(LS_SYNC, '1');
      }
    }
    docs = remote;
    saveLocal();
    settled = true;
    var p = docs.get('profile');
    if (p && p.welcomed) lsSet(LS_WELCOME, '1');
    /* theme follows this device; it is not synced between phones */
    softRender();
    push.forEach(persist);
  }
  function connect() {
    if (!window.claude || !window.claude.use) { settle(); return; }
    var guard = setTimeout(settle, 5000);
    window.claude.use('sample').then(function (s) { ui.canFill = !!s; }).catch(function () { /* no auto-fill */ });
    Promise.all([window.claude.use('db'), window.claude.use('user')]).then(function (r) {
      var db = r[0], user = r[1];
      if (!user) return null;
      return user.me().then(function (m) {
        ui.me = { name: m.name || '', avatar: m.avatarUrl || '' };
        if (!db || !m.id) return null;
        backend.col = db.collection('data/users/' + m.id);
        backend.col.onSnapshot(onSnap, function () { backend.col = null; backend.failed = true; settle(); });
      });
    }).catch(function () { /* stay local */ }).then(function () {
      clearTimeout(guard);
      backend.ready = true;
      if (!backend.col) settle(); else softRender();
    });
  }
  function settle() { backend.ready = true; settled = true; softRender(); }

  /* ---------- items ---------- */
  function fromCatalog(c) {
    var key = 'c_' + c.id, d = docs.get(key) || {};
    return { key: key, builtin: true, title: c.title, short: c.short || c.title, year: c.year, runtime: c.runtime, cert: c.cert, type: c.type, genres: c.genres,
      imdb: c.imdb, director: c.director, cast: c.cast, overview: c.overview, hue: c.hue, hue2: c.hue2, motif: c.motif, featured: !!c.featured,
      poster: safeImg(d.poster), want: !!d.want, watched: !!d.watched, loved: !!d.loved, ts: d.ts || 0 };
  }
  function fromCustom(key, d) {
    var h = hueOf(d.title || key);
    var motifs = ['beam', 'sun', 'rings', 'stripes', 'grid', 'horizon'];
    return { key: key, builtin: false, title: String(d.title || 'Untitled'), short: String(d.title || 'Untitled'), year: Number(d.year) || 0, runtime: d.runtime || '', cert: d.cert || '',
      type: d.type === 'series' ? 'series' : 'movie', genres: Array.isArray(d.genres) ? d.genres.map(String) : [], imdb: Number(d.imdb) > 0 ? Number(d.imdb) : null,
      director: String(d.director || ''), cast: Array.isArray(d.cast) ? d.cast.map(function (c) { return [String(c[0] || c), String(c[1] || ''), Number(c[2]) || 0, String(c[3] || '')]; }) : [], dirs: Array.isArray(d.dirs) ? d.dirs : [],
      overview: String(d.overview || ''), hue: h, hue2: (h + 40) % 360, motif: motifs[h % motifs.length], featured: false,
      poster: safeImg(d.poster), tm: d.tm || null, rel: String(d.rel || ''), auto: !!d.auto, want: !!d.want, watched: !!d.watched, loved: !!d.loved, ts: d.ts || 0 };
  }
  function parseSeasons(s) {
    return String(s || '').split(/[,\s]+/).map(function (x) { return parseInt(x, 10); }).filter(function (n) { return n >= 1 && n <= 200; }).slice(0, 40);
  }
  function countOnes(s) { return (String(s).match(/1/g) || []).length; }
  function decorate(it, d, c) {
    it.industry = c ? (IND[c.id] || c.industry || 'Hollywood') : (INDUSTRIES.indexOf(d.industry) !== -1 ? d.industry : 'Other');
    var raw = Array.isArray(d.seasons) ? d.seasons : ((c && SEASONS[c.id]) || []);
    it.seasons = it.type === 'series' ? raw.map(Number).filter(function (n) { return n >= 1 && n <= 200; }).slice(0, 40) : [];
    it.hasEps = false; it.watching = false; it.next = null; it.wm = [];
    if (it.seasons.length) {
      var legacyAll = !d.w && !!d.watched;
      it.wm = it.seasons.map(function (n, i) {
        var s = legacyAll ? '1'.repeat(n) : String((d.w && d.w[String(i + 1)]) || '');
        s = s.replace(/[^01]/g, '0');
        return (s + '0'.repeat(n)).slice(0, n);
      });
      var total = 0, got = 0, done = 0;
      it.seasons.forEach(function (n, i) { var g = countOnes(it.wm[i]); total += n; got += g; if (g === n) done++; });
      it.hasEps = true; it.epsTotal = total; it.epsWatched = got; it.seasonsDone = done;
      it.watched = got === total; it.watching = got > 0 && got < total; it.want = !!d.want;
      it.runtime = it.seasons.length + (it.seasons.length === 1 ? ' season' : ' seasons');
      for (var si = 0; si < it.seasons.length && !it.next; si++) {
        var ei = it.wm[si].indexOf('0');
        if (ei !== -1) it.next = [si + 1, ei + 1];
      }
    }
    /* Watchlist stands alone; Watched and Loved can go together (older saves that mix Watchlist with them are shown safely) */
    if (it.loved || it.watched) it.want = false;
    return it;
  }
  var CAT = (function () { try { var c = JSON.parse(lsGet('reelvault.cat') || '{}'); return { th: c.th || [], ott: c.ott || [], pv: c.pv || {}, inn: c.inn || [], wtm: c.wtm || [], wts: c.wts || [] }; } catch (e) { return { th: [], ott: [], pv: {}, inn: [], wtm: [], wts: [] }; } })();
  function catIdx() { var o = { th: {}, ott: {}, inn: {}, wtm: {}, wts: {} }; CAT.th.forEach(function (k, n) { o.th[k] = n; }); CAT.ott.forEach(function (k, n) { o.ott[k] = n; }); (CAT.inn || []).forEach(function (k, n) { o.inn[k] = n; }); (CAT.wtm || []).forEach(function (k, n) { o.wtm[k] = n; }); (CAT.wts || []).forEach(function (k, n) { o.wts[k] = n; }); return o; }
  function allItems() {
    var out = CATALOG.map(function (c) { return decorate(fromCatalog(c), docs.get('c_' + c.id) || {}, c); });
    docs.forEach(function (d, id) { if (id.indexOf('u_') === 0 && d && d.title) out.push(decorate(fromCustom(id, d), d, null)); });
    var ix = catIdx();
    out.forEach(function (i) {
      var k = i.tm ? i.tm.mt + i.tm.id : '';
      i.th = k && ix.th[k] != null ? ix.th[k] : -1;
      i.ott = k && ix.ott[k] != null ? ix.ott[k] : -1;
      i.ottp = (i.ott >= 0 && CAT.pv && CAT.pv[k]) || '';
      i.inn = k && ix.inn[k] != null ? ix.inn[k] : -1;
      i.wtm = k && ix.wtm[k] != null ? ix.wtm[k] : -1;
      i.wts = k && ix.wts[k] != null ? ix.wts[k] : -1;
    });
    return out;
  }
  function byTh(a, b) { return a.th - b.th; }
  function byOtt(a, b) { return a.ott - b.ott; }
  function crank(i) { return i.th >= 0 ? 0 : i.ott >= 0 ? 1 : 2; }

  /* ---------- seasons and episodes ---------- */
  function docFor(key) { var d = docs.get(key); return d ? Object.assign({}, d) : { kind: 'c', want: false, watched: false, loved: false, ts: 0 }; }
  function commit(key, d) { d.ts = Date.now(); docs.set(key, d); persist(key); render(); }
  function materialize(it, d) {
    d.seasons = it.seasons.slice();
    d.w = {};
    it.wm.forEach(function (s, i) { d.w[String(i + 1)] = s; });
  }
  function syncFlags(d) {
    var tot = 0, got = 0;
    d.seasons.forEach(function (n, i) { tot += n; got += countOnes(d.w[String(i + 1)]); });
    d.watched = tot > 0 && got === tot;
  }
  function seriesItem(key) { var it = getItem(key); return it && it.type === 'series' ? it : null; }
  function toggleEp(key, si, ei) {
    var it = seriesItem(key);
    if (!it || !it.hasEps || !it.seasons[si]) return;
    var d = docFor(key), k = String(si + 1);
    materialize(it, d);
    var s = d.w[k].split('');
    s[ei] = s[ei] === '1' ? '0' : '1';
    d.w[k] = s.join('');
    syncFlags(d);
    commit(key, d);
  }
  function toggleSeason(key, si) {
    var it = seriesItem(key);
    if (!it || !it.hasEps || !it.seasons[si]) return;
    var d = docFor(key), n = it.seasons[si];
    materialize(it, d);
    d.w[String(si + 1)] = (countOnes(d.w[String(si + 1)]) === n ? '0' : '1').repeat(n);
    syncFlags(d);
    commit(key, d);
  }
  function setAllEps(key, on) {
    var it = seriesItem(key);
    if (!it || !it.hasEps) return;
    var d = docFor(key);
    materialize(it, d);
    d.seasons.forEach(function (n, i) { d.w[String(i + 1)] = (on ? '1' : '0').repeat(n); });
    syncFlags(d);
    commit(key, d);
    toast(on ? 'Marked every episode as watched.' : 'Cleared all episode marks.');
  }
  function addSeason(key, n) {
    var it = seriesItem(key);
    if (!it) return;
    var d = docFor(key);
    materialize(it, d);
    d.seasons.push(n);
    d.w[String(d.seasons.length)] = '0'.repeat(n);
    ui.sel[key] = d.seasons.length - 1;
    syncFlags(d);
    commit(key, d);
    toast('Season ' + d.seasons.length + ' added.');
  }
  function editSeason(key, si, n) {
    var it = seriesItem(key);
    if (!it || !it.seasons[si]) return;
    var d = docFor(key), k = String(si + 1);
    materialize(it, d);
    d.seasons[si] = n;
    d.w[k] = (d.w[k] + '0'.repeat(n)).slice(0, n);
    syncFlags(d);
    commit(key, d);
    toast('Season ' + (si + 1) + ' now has ' + n + ' episodes.');
  }
  function removeLastSeason(key) {
    var it = seriesItem(key);
    if (!it || !it.seasons.length) return;
    var d = docFor(key);
    materialize(it, d);
    delete d.w[String(d.seasons.length)];
    d.seasons.pop();
    ui.sel[key] = Math.max(0, d.seasons.length - 1);
    syncFlags(d);
    commit(key, d);
    toast('Last season removed.');
  }
  var SSYNC = {};
  function seasonSync(key) {
    var it = getItem(key);
    if (!it || it.type !== 'series' || !tmKey() || SSYNC[key]) return;
    SSYNC[key] = 1;
    var start = it.tm ? Promise.resolve(it.tm.id) : tmGet('/search/multi', 'include_adult=false&query=' + encodeURIComponent(it.title)).then(function (r) {
      var c = (r.results || []).filter(function (x) { var y = parseInt(String(x.first_air_date || '').slice(0, 4), 10) || 0; return x.media_type === 'tv' && (!it.year || !y || Math.abs(y - it.year) <= 1); })[0];
      if (!c) throw { code: 'none' };
      return c.id;
    });
    start.then(function (id) { return tmGet('/tv/' + id, ''); }).then(function (r) {
      var counts = (r.seasons || []).filter(function (x) { return x.season_number > 0 && x.episode_count > 0; }).map(function (x) { return x.episode_count; });
      var cv0 = getItem(key);
      if (!counts.length || !cv0) return;
      var same = counts.length === cv0.seasons.length && counts.every(function (n, i) { return n === cv0.seasons[i]; });
      if (same) return;
      var d = docFor(key); materialize(cv0, d);
      var w = {};
      counts.forEach(function (n, i) { w[String(i + 1)] = (String(d.w[String(i + 1)] || '') + '0'.repeat(n)).slice(0, n); });
      d.seasons = counts; d.w = w; syncFlags(d);
      docs.set(key, d); persist(key);
      var cv = cur(); if (cv.v === 'details' && cv.key === key) render();
    }).catch(function () { delete SSYNC[key]; });
  }
  function selSeason(it) {
    var s = ui.sel[it.key];
    if (typeof s !== 'number' || s < 0 || s >= it.seasons.length) {
      s = it.seasons.length - 1;
      for (var i = 0; i < it.seasons.length; i++) { if (countOnes(it.wm[i]) < it.seasons[i]) { s = i; break; } }
      ui.sel[it.key] = s;
    }
    return s;
  }
  function seriesPanel(it) {
    if (it.type !== 'series') return '';
    var k = it.key, si = 0, n = 0;
    var h = '<section class="card sp"><div class="sp-h"><h2>Seasons &amp; episodes</h2>';
    if (it.hasEps) h += '<span class="sp-sum">' + it.seasonsDone + ' of ' + it.seasons.length + ' seasons · ' + it.epsWatched + ' of ' + it.epsTotal + ' episodes</span>';
    h += '</div>';
    if (it.hasEps) {
      si = selSeason(it);
      n = it.seasons[si];
      var got = countOnes(it.wm[si]);
      h += '<div class="bar2" aria-hidden="true"><i style="width:' + Math.round(it.epsWatched / it.epsTotal * 100) + '%"></i></div>';
      h += '<div class="chips" role="group" aria-label="Season">';
      it.seasons.forEach(function (c, i) {
        h += '<button type="button" class="chip" data-act="sel-season" data-s="' + i + '" data-key="' + k + '" aria-pressed="' + (i === si) + '">' + (countOnes(it.wm[i]) === c ? '✓ ' : '') + 'S' + (i + 1) + '</button>';
      });
      h += '</div>';
      h += '<div class="sp-row"><b>Season ' + (si + 1) + '</b><span>' + got + ' of ' + n + ' episodes</span><button type="button" class="smallbtn" data-act="season-all" data-s="' + si + '" data-key="' + k + '">' + (got === n ? 'Clear season' : 'Mark season watched') + '</button></div>';
      h += '<div class="eps" role="group" aria-label="Episodes of season ' + (si + 1) + '">';
      for (var e = 0; e < n; e++) {
        h += '<button type="button" class="ep" data-act="ep" data-s="' + si + '" data-e="' + e + '" data-key="' + k + '" aria-pressed="' + (it.wm[si][e] === '1') + '" aria-label="Season ' + (si + 1) + ' episode ' + (e + 1) + '">' + (e + 1) + '</button>';
      }
      h += '</div>';
      h += it.next ? '<p class="meta">Next up: season ' + it.next[0] + ', episode ' + it.next[1] + '</p>' : '<p class="meta">You have finished every episode.</p>';
    } else {
      h += '<p class="meta">' + (tmKey() ? 'Loading seasons from TMDB...' : 'Season details are not available for this title.') + '</p>';
    }
    h += '<p class="note" style="font-size:.72rem">Seasons and episode counts come from TMDB.</p>';
    return h + '</div></section>';
  }
  function pbar(it) {
    return it.watching ? '<span class="pbar" aria-label="Progress"><i style="width:' + Math.round(it.epsWatched / it.epsTotal * 100) + '%"></i></span>' : '';
  }
  function continueRow(its) {
    var l = its.filter(function (i) { return i.watching; }).sort(function (a, b) { return b.ts - a.ts; }).slice(0, 8);
    if (!l.length) return '';
    return '<section class="sec"><div class="sec-h"><h2>Continue Watching</h2></div><div class="row-h">' + l.map(function (i) {
      return '<button type="button" class="tile" data-act="open" data-key="' + i.key + '"><div class="poster-wrap">' + poster(i) + pbar(i) + '</div>' +
        '<span class="tile-t">' + esc(i.short) + '</span><span class="tile-y">' + (i.next ? 'Next: S' + i.next[0] + ' E' + i.next[1] : '') + '</span></button>';
    }).join('') + '</div></section>';
  }
  function industryRow() {
    return '<section class="sec"><div class="sec-h"><h2>Browse</h2></div><div class="chips">' + INDUSTRIES.map(function (n) {
      return '<button type="button" class="chip" data-act="grid" data-k="ind" data-ind="' + n + '">' + n + '</button>';
    }).join('') + ['Action', 'Comedy', 'Thriller', 'Drama', 'Sci-Fi', 'Horror', 'Romance', 'Animation', 'Crime'].map(function (g) {
      return '<button type="button" class="chip" data-act="grid" data-k="gen" data-g="' + g + '">' + g + '</button>';
    }).join('') + '</div></section>';
  }

  /* ---------- auto-fill with Claude ---------- */
  function setFill(msg) { var m = $('fillmsg'); if (m) m.textContent = msg; }

  /* ---------- TMDB (works in the installed app) ---------- */
  var TM = { q: '', res: [], msg: '', busy: false, t: 0 };
  var TM_BASE = 'https://movie-vault-tmdb.himoviesinme.workers.dev';
  function tmKey() { try { return (localStorage.getItem('reelvault.tmdb') || '').trim() || 'proxy'; } catch (e) { return 'proxy'; } }
  function tmGet(path, params) {
    var k = tmKey(), opt = {}, u;
    if (k === 'proxy') u = TM_BASE + path + '?' + (params || '');
    else {
      u = 'https://api.themoviedb.org/3' + path + '?' + (params || '');
      if (k.length > 40) opt.headers = { Authorization: 'Bearer ' + k }; else u += '&api_key=' + encodeURIComponent(k);
    }
    return fetch(u, opt).then(function (r) { if (r.status === 401) throw { code: 'key' }; if (!r.ok) throw { code: 'http' }; return r.json(); });
  }
  function tmHtml(q) {
    if (!q.trim()) return '';
    var h = '<h2 class="tmh">From TMDB</h2>';
    if (!tmKey()) return h + '<p class="note">To search every movie and series in the world, add your free TMDB key in Settings.</p><button type="button" class="btn alt full" data-act="settings">Open Settings</button>';
    if (TM.q !== q.trim()) return h + '<p class="note">Searching...</p>';
    if (TM.msg) return h + '<p class="note">' + esc(TM.msg) + '</p>';
    if (TM.busy) return h + '<p class="note">Searching...</p>';
    if (!TM.res.length) return h + '<p class="note">Nothing found on TMDB.</p>';
    return h + TM.res.map(function (r) {
      var t = r.title || r.name || '', y = String(r.release_date || r.first_air_date || '').slice(0, 4);
      var img = r.poster_path ? '<div class="poster has-img mini"><img src="https://image.tmdb.org/t/p/w154' + r.poster_path + '" alt=""></div>' : '<div class="poster mini" style="--h:' + hueOf(t) + ';--h2:' + ((hueOf(t) + 40) % 360) + '"></div>';
      return '<button type="button" class="res" data-act="tm-add" data-id="' + r.id + '" data-mt="' + r.media_type + '">' + img + '<span class="res-body"><b>' + esc(t) + '</b><small>' +
        esc([y, r.media_type === 'tv' ? 'Series' : 'Movie', r.vote_average ? '★ ' + r.vote_average.toFixed(1) : ''].filter(Boolean).join(' · ')) + '</small></span>' + ic('plus') + '</button>';
    }).join('');
  }
  function tmDraw() { var el = $('tmres'); if (el) el.innerHTML = tmHtml(cur().q || ''); }
  function tmSearch(q) {
    clearTimeout(TM.t); q = (q || '').trim();
    if (!q || !tmKey()) { tmDraw(); return; }
    TM.t = setTimeout(function () {
      TM.busy = true; TM.msg = ''; TM.q = q; tmDraw();
      tmGet('/search/multi', 'include_adult=false&query=' + encodeURIComponent(q)).then(function (r) {
        if (TM.q !== q) return;
        TM.res = (r.results || []).filter(function (x) { return x.media_type === 'movie' || x.media_type === 'tv'; }).slice(0, 15);
      }).catch(function (e) {
        TM.res = []; TM.msg = e && e.code === 'key' ? 'TMDB key is not valid. Check it in Settings.' : 'Could not reach TMDB. Check your internet.';
      }).then(function () { TM.busy = false; if (TM.q === q) tmDraw(); });
    }, 500);
  }
  function dirsOf(r, isTv) {
    var crew = (r.credits && r.credits.crew) || [];
    var l = isTv ? (r.created_by || []) : crew.filter(function (c) { return c.job === 'Director'; });
    return l.slice(0, 3).map(function (c) { return [c.name, c.id || 0, c.profile_path || '']; });
  }
  function tmImport(id, mt, openOnly) {
    var ex = allItems().filter(function (i) { return i.tm && Number(i.tm.id) === Number(id) && i.tm.mt === mt; })[0];
    if (ex) { go({ v: 'details', key: ex.key }); return; }
    toast(openOnly ? 'Opening...' : 'Adding...');
    tmGet('/' + mt + '/' + id, 'append_to_response=credits').then(function (r) {
      var isTv = mt === 'tv', title = r.title || r.name || 'Untitled';
      var year = parseInt(String(r.release_date || r.first_air_date || '').slice(0, 4), 10) || 0;
      var dup = allItems().filter(function (i) { return i.title.toLowerCase() === title.toLowerCase() && (!year || !i.year || i.year === year); })[0];
      if (dup) { toast('Already in Movie Vault.'); go({ v: 'details', key: dup.key }); return; }
      var lang = r.original_language, oc = (r.origin_country || (r.production_countries || []).map(function (c) { return c.iso_3166_1; })) || [];
      var ind = indOf(lang, oc);
      var crew = (r.credits && r.credits.crew) || [];
      var dir = isTv ? (r.created_by || []).map(function (c) { return c.name; }).join(', ') : crew.filter(function (c) { return c.job === 'Director'; }).map(function (c) { return c.name; }).slice(0, 2).join(', ');
      var cast = ((r.credits && r.credits.cast) || []).slice(0, 10).map(function (c) { return [c.name, c.character || '', c.id || 0, c.profile_path || '']; });
      var rt = !isTv && r.runtime ? Math.floor(r.runtime / 60) + 'h ' + (r.runtime % 60) + 'm' : '';
      var seasons = isTv ? (r.seasons || []).filter(function (x) { return x.season_number > 0 && x.episode_count > 0; }).map(function (x) { return x.episode_count; }) : [];
      var d = { kind: 'u', title: title, type: isTv ? 'series' : 'movie', year: year, industry: ind, seasons: seasons, runtime: rt, genres: (r.genres || []).map(function (g) { return g.name; }).slice(0, 3),
        director: dir, dirs: dirsOf(r, isTv), cast: cast, imdb: r.vote_average > 0 ? Math.round(r.vote_average * 10) / 10 : 0, overview: String(r.overview || '').slice(0, 400), tm: { id: r.id, mt: mt }, want: !openOnly, watched: false, loved: false, ts: Date.now() };
      var finish = function (img) {
        if (img) d.poster = img;
        var key = 'u_' + newId(); docs.set(key, d); persist(key);
        go({ v: 'details', key: key }); if (!openOnly) toast('Added “' + title + '” to Watchlist.');
      };
      if (!r.poster_path) { finish(''); return; }
      var url = 'https://image.tmdb.org/t/p/w342' + r.poster_path;
      fetch(url).then(function (x) { return x.blob(); }).then(function (b) {
        return new Promise(function (ok, no) { var f = new FileReader(); f.onload = function () { ok(f.result); }; f.onerror = no; f.readAsDataURL(b); });
      }).then(function (u) { finish(safeImg(u) && u.length < 400000 ? u : url); }).catch(function () { finish(url); });
    }).catch(function (e) { toast(e && e.code === 'key' ? 'TMDB key is not valid.' : 'Could not reach TMDB.'); });
  }

  /* ---------- Online discover (TMDB) ---------- */
  var DD = function (n) { return new Date(Date.now() + n * 86400000).toISOString().slice(0, 10); };
  var FEEDS = [['intr', 'Trending', '/discover/movie', 'with_origin_country=IN&sort_by=popularity.desc&primary_release_date.gte=' + DD(-120) + '&primary_release_date.lte=' + DD(0), 'movie'],
    ['intv', 'Indian Series', '/discover/tv', 'with_origin_country=IN&sort_by=popularity.desc&first_air_date.gte=' + DD(-365) + '&first_air_date.lte=' + DD(0), 'tv'],
    ['bolly', 'Bollywood', '/discover/movie', 'with_original_language=hi&sort_by=popularity.desc', 'movie'], ['tolly', 'Tollywood', '/discover/movie', 'with_original_language=te&sort_by=popularity.desc', 'movie'],
    ['kolly', 'Tamil', '/discover/movie', 'with_original_language=ta&sort_by=popularity.desc', 'movie'], ['molly', 'Malayalam', '/discover/movie', 'with_original_language=ml&sort_by=popularity.desc', 'movie'],
    ['sandal', 'Kannada', '/discover/movie', 'with_original_language=kn&sort_by=popularity.desc', 'movie'],
    ['trending', 'Trending Worldwide', '/trending/all/week', '', ''], ['newm', 'New Movies', '/movie/now_playing', '', 'movie'], ['news', 'New Series', '/tv/on_the_air', '', 'tv'],
    ['popm', 'Popular Movies', '/movie/popular', '', 'movie'], ['pops', 'Popular Series', '/tv/popular', '', 'tv'], ['topm', 'Top Rated', '/movie/top_rated', '', 'movie'],
    ['dhaka', 'Dhallywood', '/discover/movie', 'with_original_language=bn&with_origin_country=BD&sort_by=popularity.desc', 'movie']];
  var ON = { feed: 'intr', page: 1, items: [], busy: false, msg: '', loaded: '' };
  function onLoad(more) {
    var f = FEEDS.filter(function (x) { return x[0] === ON.feed; })[0];
    if (!tmKey()) { ON.msg = 'nokey'; onDraw(); return; }
    if (more) ON.page++; else { ON.page = 1; ON.items = []; }
    ON.busy = true; ON.msg = ''; var feed = ON.feed; onDraw();
    tmGet(f[2], (f[3] ? f[3] + '&' : '') + 'page=' + ON.page).then(function (r) {
      if (feed !== ON.feed) return;
      var seen = {}; ON.items.forEach(function (i) { seen[i.media_type + i.id] = 1; });
      (r.results || []).forEach(function (x) {
        x.media_type = x.media_type || f[4];
        if ((x.media_type === 'movie' || x.media_type === 'tv') && !seen[x.media_type + x.id]) ON.items.push(x);
      });
    }).catch(function (e) { ON.msg = e && e.code === 'key' ? 'key' : 'net'; }).then(function () { ON.busy = false; if (feed === ON.feed) onDraw(); });
  }
  function onBody() {
    if (ON.msg === 'nokey') return '<p class="note">Add your free TMDB key in Settings to browse the latest movies and series online.</p><button type="button" class="btn alt full" data-act="settings">Open Settings</button>';
    var h = '';
    if (ON.msg === 'key') h += '<p class="note">TMDB key is not valid. Check it in Settings.</p>';
    else if (ON.msg === 'net') h += '<p class="note">Could not reach TMDB. Check your internet.</p>';
    h += '<div class="grid">' + ON.items.map(function (r) {
      var t = r.title || r.name || '', y = String(r.release_date || r.first_air_date || '').slice(0, 4), hh = hueOf(t);
      var img = r.poster_path ? '<div class="poster has-img"><img src="https://image.tmdb.org/t/p/w342' + r.poster_path + '" alt=""></div>' :
        '<div class="poster m-beam" style="--h:' + hh + ';--h2:' + ((hh + 40) % 360) + '"><span class="p-year">' + y + '</span><span class="p-title">' + esc(t) + '</span></div>';
      return '<button type="button" class="tile" data-act="tm-add" data-id="' + r.id + '" data-mt="' + r.media_type + '"><div class="poster-wrap">' + img + '</div><span class="tile-t">' + esc(t) + '</span><span class="tile-y">' +
        esc([y, r.vote_average ? '★ ' + r.vote_average.toFixed(1) : ''].filter(Boolean).join(' · ')) + '</span></button>';
    }).join('') + '</div>';
    if (ON.busy) h += '<p class="note">Loading...</p>';
    else if (ON.items.length) h += '<div style="margin-top:14px"><button type="button" class="btn alt full" data-act="on-more">Load more</button></div>';
    return h;
  }
  function onDraw() { var el = $('onbody'); if (el) el.innerHTML = onBody(); }
  function vOnline() {
    return subBar('Discover online') + '<p class="note">Always up to date from TMDB. Tap a title to add it to your Watchlist with poster, cast and details.</p>' +
      '<div class="chips" role="group" aria-label="Online lists">' + FEEDS.map(function (f) {
        return '<button type="button" class="chip" data-act="on-feed" data-f="' + f[0] + '" aria-pressed="' + (f[0] === ON.feed) + '">' + f[1] + '</button>';
      }).join('') + '</div><div id="onbody">' + onBody() + '</div>';
  }

  /* ---------- Login (this device) ---------- */
  var STANDALONE = !(window.claude && window.claude.use);
  var LS_ACCT = 'reelvault.acct';
  function acct() { try { return JSON.parse(lsGet(LS_ACCT) || 'null'); } catch (e) { return null; } }
  function hex(buf) { return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join(''); }
  function hashPw(pw, salt) {
    var enc = new TextEncoder();
    if (!(window.crypto && crypto.subtle)) { var h = 5381, t = salt + pw; for (var i = 0; i < t.length; i++) h = ((h * 33) ^ t.charCodeAt(i)) >>> 0; return Promise.resolve('x' + h); }
    return crypto.subtle.importKey('raw', enc.encode(pw), 'PBKDF2', false, ['deriveBits']).then(function (k) {
      return crypto.subtle.deriveBits({ name: 'PBKDF2', salt: enc.encode(salt), iterations: 100000, hash: 'SHA-256' }, k, 256);
    }).then(hex);
  }
  var LS_REM = 'reelvault.rem', SS_SESS = 'reelvault.sess';
  function ssGet(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function ssSet(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { /* unavailable */ } }
  function ssDel(k) { try { sessionStorage.removeItem(k); } catch (e) { /* unavailable */ } }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { /* unavailable */ } }
  function acctName(a) { return a ? String(a.dn || a.user || a.name || '') : ''; }
  function signIn(a, remember) {
    ui.unlocked = true; ui.me.name = acctName(a); ui.confirm = ''; ui.lu = '';
    ssSet(SS_SESS, a.salt);
    if (remember) lsSet(LS_REM, JSON.stringify({ sid: a.salt, exp: Date.now() + 90 * 86400000 })); else lsDel(LS_REM);
    window.scrollTo(0, 0);
    render(); autoSync(false);
  }
  function signOut() { ssDel(SS_SESS); lsDel(LS_REM); ui.unlocked = false; ui.stack = [{ v: 'home' }]; hreset(); ui.confirm = ''; ui.lu = ''; try { lsDel('reelvault.nav'); } catch (e) {} window.scrollTo(0, 0); render(); }
  function restoreSession() {
    var a = acct(); if (!a) return false;
    var r = null; try { r = JSON.parse(lsGet(LS_REM) || 'null'); } catch (e) { r = null; }
    if (r && r.sid === a.salt && r.exp > Date.now()) { lsSet(LS_REM, JSON.stringify({ sid: a.salt, exp: Date.now() + 90 * 86400000 })); ui.unlocked = true; ui.me.name = acctName(a); return true; }
    if (r) lsDel(LS_REM);
    if (ssGet(SS_SESS) === a.salt) { ui.unlocked = true; ui.me.name = acctName(a); return true; }
    return false;
  }
  function mf(id, label, ph, icon, type, auto, extra, eye) {
    return '<div class="mf"><span class="mi">' + ic(icon) + '</span><span class="mfb"><label for="' + id + '">' + label + ' <i class="req">*</i></label>' +
      '<input type="' + type + '" id="' + id + '" placeholder="' + ph + '" autocomplete="' + auto + '" autocapitalize="off" spellcheck="false" ' + (extra || '') + '></span>' +
      (eye ? '<button type="button" class="eye" data-act="eye" aria-label="Show password" aria-pressed="false">' + ic('eye') + '</button>' : '') + '</div>';
  }
  function vLock() {
    var a = acct(), h = '<section class="auth m3auth"><i class="ab ab1"></i><i class="ab ab2"></i><div class="abrand">' + logoImg('alogo') + '<b>Movie <span>Vault</span></b></div><h1>Login</h1>';
    h += '<p class="anote">' + (a ? 'Welcome back. Log in to open your lists.' : 'New here? Register below. Already registered on another phone? Log in with your email and password.') + '</p>';
    h += '<form id="loginForm" class="aform acard" novalidate><div class="aerr" id="lerr" role="alert" hidden></div>' +
      mf('lUser', 'Username or email address', 'Enter your email or username', 'mail', 'text', 'username', 'maxlength="80" value="' + esc(ui.lu || '') + '"') +
      mf('lPw', 'Password', 'Enter your password', 'lock', 'password', 'current-password', 'maxlength="60"', true) +
      '<div class="arow"><label class="achk"><input type="checkbox" id="lRem" checked><span>Remember me</span></label>' +
      '<button type="button" class="alink" data-act="lost">Lost your password?</button></div>' +
      '<button type="submit" class="abtn">Log in<span class="go">' + ic('arrow') + '</span></button></form>';
    if (ui.confirm === 'forgot') {
      h += '<div class="aerr info"><span>Your login is stored only on this phone, so a reset link cannot be emailed. To reset it, erase this phone\'s login and lists, then register again. If you made a Google Drive backup, restore it afterwards from Settings.</span>' +
        '<div class="two"><button type="button" class="btn" data-act="forgot-yes">Erase and reset</button><button type="button" class="btn alt" data-act="confirm-no">Cancel</button></div></div>';
    }
    h += '<div class="aor"><span>OR</span></div>';
    if (a) {
      h += '<div class="acard"><h2>Register</h2><p class="anote">This phone already has an account. Log in above. To start a different account, use Lost your password? (it erases this phone\'s lists).</p></div>';
    } else {
      h += '<form id="regForm" class="aform acard" novalidate><h2>Register</h2><p class="anote">Create a new account to sync your lists across devices.</p><div class="aerr" id="rerr" role="alert" hidden></div>' +
        mf('rUser', 'Username', 'Choose a username', 'user', 'text', 'username', 'maxlength="30"') +
        mf('rEmail', 'Email address', 'Enter your email address', 'mail', 'email', 'email', 'maxlength="80" inputmode="email"') +
        mf('rPw', 'Password', 'Create a password', 'lock', 'password', 'new-password', 'maxlength="60"', true) +
        mf('rPw2', 'Confirm password', 'Confirm your password', 'lock', 'password', 'new-password', 'maxlength="60"', true) +
        '<div class="arow"><label class="achk"><input type="checkbox" id="rRem" checked><span>Remember me</span></label></div>' +
        '<button type="submit" class="abtn">Register<span class="go">' + ic('arrow') + '</span></button></form>';
    }
    return h + '</section>';
  }
  function showErr(id, msg) { var el = $(id); if (!el) return; el.textContent = msg; el.hidden = !msg; if (msg) { try { el.scrollIntoView({ block: 'nearest' }); } catch (e) { /* ignore */ } } }
  document.addEventListener('submit', function (e) {
    var fid = e.target.id;
    if (fid !== 'loginForm' && fid !== 'regForm') return;
    e.preventDefault();
    var btn = e.target.querySelector('.abtn');
    if (fid === 'loginForm') {
      var a = acct(), who = $('lUser').value.trim().toLowerCase(), pw = $('lPw').value, rem = $('lRem').checked;
      if (!who) { showErr('lerr', 'Enter your username or email address.'); $('lUser').focus(); return; }
      if (!pw) { showErr('lerr', 'Enter your password.'); $('lPw').focus(); return; }
      if (!a) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(who)) { showErr('lerr', 'Enter the email address you registered with.'); $('lUser').focus(); return; }
        showErr('lerr', ''); btn.disabled = true;
        clAuth('in', who, pw).then(function () { return clPull(); }).then(function (d) {
          var nm = (d && d.name) || who.split('@')[0], salt2 = newId() + newId();
          if (d && d.backup) applyBackup(d.backup);
          return hashPw(pw, salt2).then(function (hh) { var acc = { user: nm, name: nm, email: who, salt: salt2, hash: hh }; lsSet(LS_ACCT, JSON.stringify(acc)); signIn(acc, rem); });
        }).catch(function (er) { btn.disabled = false; clSet(null); showErr('lerr', er.message === 'NETWORK' ? 'No internet connection.' : (/INVALID|NOT_FOUND|PASSWORD/.test(er.message) ? 'Incorrect email or password.' : fbErr(er.message))); });
        return;
      }
      var match = [a.user, a.name, a.email].some(function (x) { return x && String(x).toLowerCase() === who; });
      showErr('lerr', ''); btn.disabled = true;
      hashPw(pw, a.salt).then(function (hh) {
        btn.disabled = false;
        if (match && hh === a.hash) { signIn(a, rem); clAutoConnect(a, pw); }
        else { showErr('lerr', 'Incorrect username or password.'); var pf = $('lPw'); if (pf) { pf.value = ''; pf.focus(); } }
      });
      return;
    }
    var user = $('rUser').value.trim().replace(/\s+/g, ' '), email = $('rEmail').value.trim(), p1 = $('rPw').value, p2 = $('rPw2').value, remr = $('rRem').checked;
    if (acct()) { showErr('rerr', 'This phone already has an account.'); return; }
    if (user.length < 2) { showErr('rerr', 'Enter a username of at least 2 characters.'); $('rUser').focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showErr('rerr', 'Enter a valid email address.'); $('rEmail').focus(); return; }
    if (p1.length < 6) { showErr('rerr', 'Password must be at least 6 characters.'); $('rPw').focus(); return; }
    if (p1 !== p2) { showErr('rerr', 'Passwords do not match.'); $('rPw2').focus(); return; }
    showErr('rerr', ''); btn.disabled = true;
    var salt = newId() + newId(), cloudOk = false;
    clAuth('up', email, p1).then(function () { cloudOk = true; }, function (er) {
      if (er && er.message === 'EMAIL_EXISTS') { var x = new Error('exists'); x.exists = true; throw x; }
    }).then(function () { return hashPw(p1, salt); }).then(function (hh) {
      var acc = { user: user, name: user, email: email, salt: salt, hash: hh };
      lsSet(LS_ACCT, JSON.stringify(acc));
      signIn(acc, remr);
      if (cloudOk) clPush(true);
    }).catch(function (er) {
      btn.disabled = false;
      if (er && er.exists) showErr('rerr', 'This email is already registered. Log in above with your email and password.');
    });
  });


  /* ---------- Cloud account (Firebase: email + password, lists in Firestore) ---------- */
  var FB = { key: 'AIzaSyBAN_XNxl_8lz6v_96gFyNVsmWUOyPkAh8', pid: 'movie-vault-d591a' };
  var FSB = 'https://firestore.googleapis.com/v1/projects/' + FB.pid + '/databases/(default)/documents/users/';
  var CL = { busy: false, msg: '', tok: '', exp: 0, timer: 0 };
  function clGet() { try { return JSON.parse(lsGet('reelvault.cloud') || 'null'); } catch (e) { return null; } }
  function clSet(o) { if (o) lsSet('reelvault.cloud', JSON.stringify(o)); else lsDel('reelvault.cloud'); }
  function fbErr(m) {
    m = String(m || '');
    var map = { EMAIL_EXISTS: 'This email already has a cloud account.', EMAIL_NOT_FOUND: 'No cloud account with this email.', INVALID_PASSWORD: 'Incorrect email or password.',
      INVALID_LOGIN_CREDENTIALS: 'Incorrect email or password.', USER_DISABLED: 'This account is disabled.', OPERATION_NOT_ALLOWED: 'Email sign-in is not enabled in Firebase yet.',
      TOO_MANY_ATTEMPTS_TRY_LATER: 'Too many tries. Please wait a few minutes.', INVALID_EMAIL: 'Enter a valid email address.', NETWORK: 'No internet connection.' };
    var k = m.split(' ')[0].split(':')[0];
    if (/^WEAK_PASSWORD/.test(m)) return 'Password must be at least 6 characters.';
    return map[k] || ('Cloud error: ' + (m || 'unknown'));
  }
  function fbCall(url, opt) {
    return fetch(url, opt).catch(function () { throw new Error('NETWORK'); }).then(function (r) {
      return r.text().then(function (t) { var j = {}; try { j = t ? JSON.parse(t) : {}; } catch (e) { j = {}; } if (!r.ok) { var er = new Error((j.error && j.error.message) || ('HTTP ' + r.status)); er.status = r.status; throw er; } return j; });
    });
  }
  function fbPost(ep, body) { return fbCall('https://identitytoolkit.googleapis.com/v1/' + ep + '?key=' + FB.key, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }); }
  function clAuth(mode, email, pw) {
    return fbPost(mode === 'up' ? 'accounts:signUp' : 'accounts:signInWithPassword', { email: email, password: pw, returnSecureToken: true }).then(function (j) {
      CL.tok = j.idToken; CL.exp = Date.now() + (Number(j.expiresIn) || 3600) * 1000 - 60000;
      clSet({ uid: j.localId, email: email, refresh: j.refreshToken, last: 0 }); return j;
    });
  }
  function clToken() {
    if (CL.tok && Date.now() < CL.exp) return Promise.resolve(CL.tok);
    var c = clGet(); if (!c || !c.refresh) return Promise.reject(new Error('Not connected to a cloud account.'));
    return fbCall('https://securetoken.googleapis.com/v1/token?key=' + FB.key, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: form({ grant_type: 'refresh_token', refresh_token: c.refresh }) }).then(function (j) {
      if (!j.id_token) throw new Error('Cloud sign-in expired. Connect again.');
      CL.tok = j.id_token; CL.exp = Date.now() + (Number(j.expires_in) || 3600) * 1000 - 60000;
      c.refresh = j.refresh_token || c.refresh; clSet(c); return CL.tok;
    });
  }
  function clPull() {
    var c = clGet();
    return clToken().then(function (tok) {
      return fetch(FSB + c.uid, { headers: { Authorization: 'Bearer ' + tok } }).catch(function () { throw new Error('NETWORK'); });
    }).then(function (r) {
      if (r.status === 404) return null;
      if (!r.ok) throw new Error('Cloud refused the read (' + r.status + '). Check the Firestore rules.');
      return r.json();
    }).then(function (d) {
      if (!d || !d.fields) return null;
      var f = d.fields, b = null;
      try { b = f.backup && f.backup.stringValue ? JSON.parse(f.backup.stringValue) : null; } catch (e) { b = null; }
      return { name: f.name && f.name.stringValue || '', backup: b };
    });
  }
  function clPush(quiet) {
    var c = clGet(); if (!c) return Promise.resolve(false);
    if (CL.busy) return Promise.resolve(false);
    CL.busy = true;
    return clToken().then(function (tok) {
      var a = acct() || {};
      var body = { fields: { backup: { stringValue: snapshot() }, updated: { integerValue: String(Date.now()) }, name: { stringValue: acctName(a) }, email: { stringValue: c.email || '' } } };
      return fetch(FSB + c.uid + '?updateMask.fieldPaths=backup&updateMask.fieldPaths=updated&updateMask.fieldPaths=name&updateMask.fieldPaths=email',
        { method: 'PATCH', headers: { Authorization: 'Bearer ' + tok, 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).catch(function () { throw new Error('NETWORK'); });
    }).then(function (r) {
      if (!r.ok) throw new Error('Cloud refused the save (' + r.status + '). Check the Firestore rules.');
      var c2 = clGet(); if (c2) { c2.last = Date.now(); clSet(c2); }
      CL.msg = 'Saved to your cloud account.'; return true;
    }).catch(function (e) { CL.msg = e.message === 'NETWORK' ? 'No internet. Will try again later.' : (e.message || 'Cloud save failed.'); return false; })
      .then(function (ok) { CL.busy = false; if (!quiet && cur().v === 'settings') render(); return ok; });
  }
  function mergeDocs(b) {
    var n = 0;
    if (!b || b.app !== 'reelvault' || !b.docs) return 0;
    Object.keys(b.docs).forEach(function (k) {
      if (!(/^(c_|u_)/.test(k) || k === 'profile')) return;
      var r = b.docs[k], l = docs.get(k);
      if (r && typeof r === 'object' && (!l || (r.ts || 0) > (l.ts || 0))) { docs.set(k, r); n++; }
    });
    saveLocal(); return n;
  }
  function clAfterChange(msg) { CL.busy = false; CL.msg = msg; render(); }
  function clAutoConnect(a, pw) {
    if (clGet() || !a || !a.email || CL.busy) return;
    clAuth('up', a.email, pw).catch(function (e) { if (e && e.message === 'EMAIL_EXISTS') return clAuth('in', a.email, pw).then(function () { return clPull(); }).then(function (d) { if (d) mergeDocs(d.backup); }); throw e; })
      .then(function () { return clPush(true); }).catch(function () { clSet(null); });
  }
  function clDelete() {
    var c = clGet(); if (!c || CL.busy) return; CL.busy = true; ui.confirm = ''; CL.msg = 'Deleting...'; render();
    clToken().then(function (tok) {
      return fetch(FSB + c.uid, { method: 'DELETE', headers: { Authorization: 'Bearer ' + tok } }).catch(function () { throw new Error('NETWORK'); }).then(function () { return fbPost('accounts:delete', { idToken: tok }); });
    }).then(function () {
      clSet(null); CL.tok = ''; CL.busy = false;
      ['reelvault.v1', 'reelvault.synced', 'reelvault.welcomed', LS_ACCT, LS_REM, 'reelvault.cat', 'reelvault.gd'].forEach(function (k) { lsDel(k); }); ssDel(SS_SESS);
      docs = new Map(); ui.unlocked = false; ui.stack = [{ v: 'home' }]; ui.confirm = ''; hreset(); render();
    })
      .catch(function (e) { clAfterChange(e.message === 'NETWORK' ? fbErr('NETWORK') : 'Could not delete: ' + (e.message || '')); });
  }
  function clCard() {
    if (!STANDALONE) return '';
    var c = clGet(), h = '<section class="mcard">' + mh('user', 'Account', 'Your account information');
    if (c) {
      h += '<div class="macct"><span class="mav">' + esc(String(c.email || '?').charAt(0).toUpperCase()) + '</span><div class="mt"><b>' + esc(c.email || '') + '</b><small>Your lists are saved automatically' + (c.last ? '<br>(Last saved ' + esc(new Date(c.last).toLocaleString()) + ')' : '') + '</small></div></div>' +
        (ui.confirm === 'cldel' ? '<div class="confirm"><span>Delete your account and all lists saved online? This also erases this phone. It cannot be undone.</span><button type="button" class="btn" data-act="cl-del-yes">Yes, delete</button><button type="button" class="btn alt" data-act="confirm-no">Cancel</button></div>'
          : '<button type="button" class="mrow danger" data-act="cl-del-ask"><span class="mi plain">' + ic('trash') + '</span><span class="mt"><b>Delete my account</b></span>' + ic('chev') + '</button><p class="mnote">Saved to your cloud account.</p>');
    } else {
      h += '<p class="mnote">Your lists are saved on this phone. Online saving turns on by itself the next time you log in with internet.</p>';
    }
    return h + '<p class="fillmsg" id="clmsg" role="status">' + esc(CL.msg) + '</p></section>';
  }

  /* ---------- Google Drive backup (device sign-in) ---------- */
  function gdSet(o) { lsSet('reelvault.gd', JSON.stringify(o)); }
  function form(o) { return Object.keys(o).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(o[k]); }).join('&'); }
  function gdPost(url, o) {
    return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: form(o) }).then(function (r) { return r.json(); });
  }
  function snapshot() {
    var o = {}; docs.forEach(function (v, k) { if (v && (!v.auto || v.want || v.watched || v.loved || v.w || v.watching)) o[k] = v; });
    return JSON.stringify({ app: 'reelvault', v: 1, ts: Date.now(), docs: o });
  }
  function applyBackup(j) {
    if (!j || j.app !== 'reelvault' || !j.docs) throw new Error('That backup file is not valid.');
    var m = new Map(), n = 0;
    Object.keys(j.docs).forEach(function (k) { if (/^(c_|u_)/.test(k) || k === 'profile') { var v = j.docs[k]; if (v && typeof v === 'object') { m.set(k, v); n++; } } });
    docs = m; saveLocal(); lsSet('reelvault.lastsync2', '0'); setTimeout(function () { autoSync(false); }, 500); return n;
  }
  function copyText(t) {
    function fb() { var ta = document.createElement('textarea'); ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); var ok = false; try { ok = document.execCommand('copy'); } catch (e) {} ta.remove(); return ok; }
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(t).then(function () { return true; }, function () { return fb(); });
    return Promise.resolve(fb());
  }
  /* ---------- Google Drive backup (native Google Sign-In, hidden app folder) ---------- */
  var GD = { msg: '', busy: false }, BK = 'movievault-backup.json';
  function gdGet() { var o; try { o = JSON.parse(lsGet('reelvault.gd') || '{}') || {}; } catch (e) { o = {}; } return o; }
  function gdPlug() { var C = window.Capacitor; return (APPP && C && C.Plugins && C.Plugins.Browser) || null; }
  function gdMsg(m) { GD.msg = m; var el = $('gdmsg'); if (el) el.textContent = m; }
  var GD_CID = '714095624241-25gvb92er813vfj6e6tppl92fhc3mqtl.apps.googleusercontent.com', GD_RED = 'com.reelvault.app:/oauth2redirect';
  function b64u(buf) { var b = new Uint8Array(buf), t = ''; for (var i = 0; i < b.length; i++) t += String.fromCharCode(b[i]); return btoa(t).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function gdForm(o) { return Object.keys(o).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(o[k]); }).join('&'); }
  function gdTokenReq(o) {
    return fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: gdForm(o) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok || j.error) throw new Error('Google: ' + (j.error_description || j.error || r.status)); return j; }); });
  }
  function gdToken() {
    var g = gdGet(); if (!g.refresh) return Promise.reject(new Error('Sign in with Google first.'));
    return gdTokenReq({ client_id: GD_CID, grant_type: 'refresh_token', refresh_token: g.refresh }).then(function (j) { return j.access_token; });
  }
  function gdConnect() {
    if (GD.busy) return;
    var ver = b64u(crypto.getRandomValues(new Uint8Array(48))), st = b64u(crypto.getRandomValues(new Uint8Array(12)));
    crypto.subtle.digest('SHA-256', new TextEncoder().encode(ver)).then(function (h) {
      lsSet('reelvault.gdp', JSON.stringify({ v: ver, s: st }));
      var url = 'https://accounts.google.com/o/oauth2/v2/auth?' + gdForm({ client_id: GD_CID, redirect_uri: GD_RED, response_type: 'code', scope: 'openid email https://www.googleapis.com/auth/drive.appdata', code_challenge: b64u(h), code_challenge_method: 'S256', state: st, access_type: 'offline', prompt: 'consent' });
      return gdPlug().open({ url: url });
    }).catch(function (e) { GD.msg = (e && e.message) || 'Could not open Google.'; if (cur().v === 'settings') render(); });
  }
  function gdHandle(url) {
    if (!url || url.indexOf('com.reelvault.app:') !== 0) return;
    var q = {}; (url.split('?')[1] || '').split('#')[0].split('&').forEach(function (p2) { var kv = p2.split('='); if (kv[0]) q[kv[0]] = decodeURIComponent((kv[1] || '').replace(/\+/g, ' ')); });
    var pend; try { pend = JSON.parse(lsGet('reelvault.gdp') || 'null'); } catch (e) { pend = null; }
    try { gdPlug().close(); } catch (e2) {}
    if (q.error) { GD.msg = 'Google sign-in was cancelled.'; if (cur().v === 'settings') render(); return; }
    if (!q.code || !pend || pend.s !== q.state) { GD.msg = 'Sign-in could not be verified. Try again.'; render(); return; }
    lsSet('reelvault.gdp', ''); GD.busy = true; gdMsg('Signing in...');
    gdTokenReq({ client_id: GD_CID, grant_type: 'authorization_code', code: q.code, code_verifier: pend.v, redirect_uri: GD_RED }).then(function (j) {
      var g = gdGet(); if (j.refresh_token) g.refresh = j.refresh_token;
      try { var pl = JSON.parse(atob(j.id_token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))); g.email = pl.email || g.email || 'Google account'; } catch (e3) { g.email = g.email || 'Google account'; }
      if (!g.refresh) throw new Error('Google did not allow offline access. Try again.');
      if ((j.scope || '').indexOf('drive.appdata') < 0) { delete g.refresh; gdSet(g); throw new Error('Drive permission was not allowed. Sign in again and tick the Google Drive box.'); }
      gdSet(g); GD.msg = 'Signed in. Now tap Back up now.';
    }).catch(function (e) { GD.msg = (e && e.message) || 'Sign-in failed.'; }).then(function () { GD.busy = false; render(); });
  }
  function gdInit() {
    if (!APPP || !APPP.addListener) return;
    try { APPP.addListener('appUrlOpen', function (e) { gdHandle(e && e.url); }); } catch (e) {}
    try { APPP.getLaunchUrl().then(function (r) { if (r && r.url) setTimeout(function () { gdHandle(r.url); }, 600); }); } catch (e) {}
  }
  function gdErr(r, what) {
    return r.text().then(function (t) { var m = ''; try { var e = JSON.parse(t).error; m = (e.errors && e.errors[0] && e.errors[0].reason ? e.errors[0].reason + ': ' : '') + (e.message || ''); } catch (x) { m = t.slice(0, 120); } throw new Error(what + ' (' + r.status + ') ' + m); });
  }
  function gdFind(tok) {
    return fetch('https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&orderBy=modifiedTime%20desc&fields=files(id,modifiedTime)&q=' + encodeURIComponent("name='" + BK + "'"), { headers: { Authorization: 'Bearer ' + tok } })
      .then(function (r) { if (!r.ok) return gdErr(r, 'Google Drive refused'); return r.json(); }).then(function (j) { return (j.files || [])[0] || null; });
  }
  function gdBackup() {
    if (GD.busy) return; GD.busy = true; gdMsg('Backing up...');
    var tok, body = snapshot();
    gdToken().then(function (t) { tok = t; return gdFind(tok); }).then(function (f) {
      if (f) return fetch('https://www.googleapis.com/upload/drive/v3/files/' + f.id + '?uploadType=media', { method: 'PATCH', headers: { Authorization: 'Bearer ' + tok, 'Content-Type': 'application/json' }, body: body });
      var bd = 'rvbound' + newId();
      var mp = '--' + bd + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n' + JSON.stringify({ name: BK, parents: ['appDataFolder'] }) + '\r\n--' + bd + '\r\nContent-Type: application/json\r\n\r\n' + body + '\r\n--' + bd + '--';
      return fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', { method: 'POST', headers: { Authorization: 'Bearer ' + tok, 'Content-Type': 'multipart/related; boundary=' + bd }, body: mp });
    }).then(function (r) {
      if (!r.ok) return gdErr(r, 'Drive refused the upload');
      var g = gdGet(); g.last = Date.now(); gdSet(g); GD.msg = 'Backup saved to Google Drive.';
    }).catch(function (e) { GD.msg = (e && e.message) || 'Backup failed.'; }).then(function () { GD.busy = false; if (cur().v === 'settings') render(); });
  }
  function gdRestore() {
    if (GD.busy) return; GD.busy = true; ui.confirm = ''; gdMsg('Restoring...');
    gdToken().then(function (tok) {
      return gdFind(tok).then(function (f) {
        if (!f) throw new Error('No backup found in your Google Drive.');
        return fetch('https://www.googleapis.com/drive/v3/files/' + f.id + '?alt=media', { headers: { Authorization: 'Bearer ' + tok } });
      });
    }).then(function (r) { if (!r.ok) return gdErr(r, 'Could not download the backup'); return r.json(); }).then(function (j) {
      GD.msg = 'Restored ' + applyBackup(j) + ' items from your backup.';
    }).catch(function (e) { GD.msg = (e && e.message) || 'Restore failed.'; }).then(function () { GD.busy = false; render(); });
  }
  function gdCard() {
    if (!STANDALONE || !gdPlug()) return '';
    var g = gdGet(), on = !!g.refresh, h = '<section class="mcard">' + mh(GLOGO, 'Google Drive Backup', 'Keep your data safe', 'plain');
    if (on) {
      h += '<div class="mbox">Signed in as <b>' + esc(g.email) + '</b><br>' + (g.last ? 'Last backup: ' + esc(new Date(g.last).toLocaleString()) : 'No backup yet.') + '</div>' +
        '<button type="button" class="mbtn primary" data-act="gd-backup">' + ic('upcloud') + 'Back up now</button>' +
        (ui.confirm === 'restore' ? '<div class="confirm"><span>Replace everything on this phone with your Drive backup?</span><button type="button" class="btn" data-act="gd-restore-yes">Yes, restore</button><button type="button" class="btn alt" data-act="confirm-no">Cancel</button></div>'
          : '<button type="button" class="mbtn" data-act="gd-restore-ask">' + ic('history') + 'Restore from backup</button>') +
        '<button type="button" class="mbtn" data-act="gd-off">' + GLOGO + 'Sign out of Google</button>' +
        '<p class="mnote">Backup saved to Google Drive. Backs up by itself every few hours.</p>';
    } else {
      h += '<button type="button" class="mbtn primary" data-act="gd-connect">' + GLOGO + 'Sign in with Google</button><p class="mnote">Pick your Google account once. Your backup is kept in a hidden app folder in your Google Drive, only this app can see it.</p>';
    }
    return h + '<p class="fillmsg" id="gdmsg" role="status">' + esc(GD.msg) + '</p></section>';
  }
  setTimeout(function () { var g = gdGet(); if (STANDALONE && gdPlug() && g.refresh && Date.now() - (g.last || 0) > 6 * 3600000) gdBackup(); }, 8000);

  /* backup as words */
  var WC = 'bdfgklmnprstvzhj'.split(''), WV = 'aeio'.split(''), WS = [];
  WC.forEach(function (c) { WV.forEach(function (v) { WS.push(c + v); }); });
  function wEnc(bytes) {
    var n = bytes.length, a = [n >> 16 & 255, n >> 8 & 255, n & 255].concat(Array.prototype.slice.call(bytes));
    while (a.length % 3) a.push(0);
    var w = [];
    for (var i = 0; i < a.length; i += 3) { var x = a[i] << 16 | a[i + 1] << 8 | a[i + 2]; w.push(WS[x >> 18 & 63] + WS[x >> 12 & 63], WS[x >> 6 & 63] + WS[x & 63]); }
    return w;
  }
  function wDec(txt) {
    var ws = (txt || '').toLowerCase().replace(/[^a-z]+/g, ' ').trim().split(' '), a = [];
    if (ws.length < 2 || ws.length % 2) throw new Error('bad');
    for (var i = 0; i < ws.length; i += 2) {
      var p = [ws[i].slice(0, 2), ws[i].slice(2), ws[i + 1].slice(0, 2), ws[i + 1].slice(2)].map(function (t) { var k = WS.indexOf(t); if (ws[i].length !== 4 || ws[i + 1].length !== 4 || k < 0) throw new Error('bad'); return k; });
      var x = p[0] << 18 | p[1] << 12 | p[2] << 6 | p[3]; a.push(x >> 16 & 255, x >> 8 & 255, x & 255);
    }
    var n = a[0] << 16 | a[1] << 8 | a[2];
    if (n < 1 || n > a.length - 3) throw new Error('bad');
    return new Uint8Array(a.slice(3, 3 + n));
  }
  function wPack(str) {
    var raw = new TextEncoder().encode(str);
    if (!window.CompressionStream) return Promise.resolve(wEnc([0].concat(Array.prototype.slice.call(raw))));
    var cs = new CompressionStream('gzip'), wr = cs.writable.getWriter(); wr.write(raw); wr.close();
    return new Response(cs.readable).arrayBuffer().then(function (b) { return wEnc([1].concat(Array.prototype.slice.call(new Uint8Array(b)))); });
  }
  function wUnpack(txt) {
    var d = wDec(txt), body = d.slice(1);
    if (d[0] === 0) return Promise.resolve(new TextDecoder().decode(body));
    var ds = new DecompressionStream('gzip'), wr = ds.writable.getWriter(); wr.write(body); wr.close();
    return new Response(ds.readable).arrayBuffer().then(function (b) { return new TextDecoder().decode(b); });
  }
  function lbCard() {
    if (!STANDALONE) return '';
    return '<div class="card"><h2 class="tmh" style="margin-top:0">Backup with words</h2>' +
      '<p class="note">Copy your backup as a list of words. Keep it in Notes or Telegram saved messages. To restore, paste the words back.</p>' +
      '<button type="button" class="btn alt" data-act="lb-copy">Copy backup words</button>' +
      '<details class="lbd"><summary class="btn alt">Paste words to restore</summary>' +
      '<textarea id="lbText" rows="5" placeholder="Paste your backup words here"></textarea>' +
      '<button type="button" class="btn" data-act="lb-restore">Restore</button></details><p class="fillmsg" id="lbmsg" role="status"></p></div>';
  }

  /* ---------- Languages ---------- */
  var LANGS = [['en-US', 'English (US)', 'en-US', -1], ['bn-BD', 'বাংলা (বাংলাদেশ)', 'bn-BD', 0], ['hi-IN', 'हिन्दी (भारत)', 'hi-IN', 1], ['ta-IN', 'தமிழ்', 'ta-IN', 2], ['te-IN', 'తెలుగు', 'te-IN', 3], ['ur-PK', 'اردو (پاکستان)', 'ur-PK', 4], ['ar-SA', 'العربية', 'ar-SA', 5], ['es-ES', 'Español', 'es-ES', 6], ['fr-FR', 'Français', 'fr-FR', 7]];
  var I18N = {"Cloud account": ["ক্লাউড অ্যাকাউন্ট", "क्लाउड खाता", "கிளவுட் கணக்கு", "క్లౌడ్ ఖాతా", "کلاؤڈ اکاؤنٹ", "حساب سحابي", "Cuenta en la nube", "Compte cloud"], "Sync now": ["এখনই সিঙ্ক করুন", "अभी सिंक करें", "இப்போது ஒத்திசை", "ఇప్పుడే సింక్ చేయండి", "ابھی سنک کریں", "زامن الآن", "Sincronizar ahora", "Synchroniser"], "Create cloud account": ["ক্লাউড অ্যাকাউন্ট খুলুন", "क्लाउड खाता बनाएँ", "கிளவுட் கணக்கை உருவாக்கு", "క్లౌడ్ ఖాతా సృష్టించండి", "کلاؤڈ اکاؤنٹ بنائیں", "إنشاء حساب سحابي", "Crear cuenta en la nube", "Créer un compte cloud"], "Log in with cloud account": ["ক্লাউড অ্যাকাউন্টে লগইন", "क्लाउड खाते से लॉगिन", "கிளவுட் கணக்கில் உள்நுழை", "క్లౌడ్ ఖాతాతో లాగిన్", "کلاؤڈ اکاؤنٹ سے لاگ ان", "تسجيل الدخول بالحساب السحابي", "Entrar con cuenta en la nube", "Se connecter avec le compte cloud"], "Restore from cloud": ["ক্লাউড থেকে রিস্টোর", "क्लाउड से रिस्टोर", "கிளவுடிலிருந்து மீட்டெடு", "క్లౌడ్ నుండి పునరుద్ధరించు", "کلاؤڈ سے بحال کریں", "استعادة من السحابة", "Restaurar de la nube", "Restaurer depuis le cloud"], "Delete cloud account": ["ক্লাউড অ্যাকাউন্ট মুছুন", "क्लाउड खाता हटाएँ", "கிளவுட் கணக்கை நீக்கு", "క్లౌడ్ ఖాతా తొలగించండి", "کلاؤڈ اکاؤنٹ حذف کریں", "حذف الحساب السحابي", "Eliminar cuenta en la nube", "Supprimer le compte cloud"], "Backup as text": ["টেক্সট ব্যাকআপ", "टेक्स्ट बैकअप", "உரை காப்புப்பிரதி", "టెక్స్ట్ బ్యాకప్", "ٹیکسٹ بیک اپ", "نسخة احتياطية نصية", "Copia como texto", "Sauvegarde en texte"], "Copy backup": ["ব্যাকআপ কপি করুন", "बैकअप कॉपी करें", "காப்புப்பிரதியை நகலெடு", "బ్యాకప్ కాపీ చేయండి", "بیک اپ کاپی کریں", "نسخ النسخة الاحتياطية", "Copiar copia", "Copier la sauvegarde"], "Restore from text": ["টেক্সট থেকে রিস্টোর", "टेक्स्ट से रिस्टोर करें", "உரையிலிருந்து மீட்டெடு", "టెక్స్ట్ నుండి పునరుద్ధరించు", "ٹیکسٹ سے بحال کریں", "استعادة من النص", "Restaurar desde texto", "Restaurer depuis le texte"], "Paste backup here": ["এখানে ব্যাকআপ পেস্ট করুন", "यहाँ बैकअप पेस्ट करें", "காப்புப்பிரதியை இங்கே ஒட்டவும்", "బ్యాకప్‌ను ఇక్కడ అతికించండి", "بیک اپ یہاں پیسٹ کریں", "الصق النسخة الاحتياطية هنا", "Pega la copia aquí", "Collez la sauvegarde ici"], "Credits": ["কৃতজ্ঞতা", "श्रेय", "நன்றி", "క్రెడిట్స్", "کریڈٹس", "الشكر والتقدير", "Créditos", "Crédits"], "Search online": ["অনলাইনে খুঁজুন", "ऑनलाइन खोजें", "ஆன்லைனில் தேடு", "ఆన్‌లైన్‌లో వెతకండి", "آن لائن تلاش کریں", "ابحث على الإنترنت", "Buscar en línea", "Rechercher en ligne"], "Movie Vault keeps your lists private on this phone.": ["Movie Vault আপনার তালিকা এই ফোনেই ব্যক্তিগত রাখে।", "Movie Vault आपकी सूचियाँ इसी फ़ोन पर निजी रखता है।", "Movie Vault உங்கள் பட்டியல்களை இந்த ஃபோனிலேயே தனிப்பட்டதாக வைக்கிறது.", "Movie Vault మీ జాబితాలను ఈ ఫోన్‌లోనే ప్రైవేట్‌గా ఉంచుతుంది.", "Movie Vault آپ کی فہرستیں اسی فون پر نجی رکھتا ہے۔", "يحافظ Movie Vault على خصوصية قوائمك على هذا الهاتف.", "Movie Vault mantiene tus listas privadas en este teléfono.", "Movie Vault garde vos listes privées sur ce téléphone."], "This product uses the TMDB API but is not endorsed or certified by TMDB or JustWatch.": ["এই পণ্য TMDB API ব্যবহার করে, কিন্তু TMDB বা JustWatch এটি অনুমোদন বা সত্যায়ন করেনি।", "यह उत्पाद TMDB API का उपयोग करता है, लेकिन TMDB या JustWatch द्वारा समर्थित या प्रमाणित नहीं है।", "இந்தத் தயாரிப்பு TMDB API-ஐப் பயன்படுத்துகிறது, ஆனால் TMDB அல்லது JustWatch ஆல் அங்கீகரிக்கப்படவில்லை.", "ఈ ఉత్పత్తి TMDB APIని ఉపయోగిస్తుంది, కానీ TMDB లేదా JustWatch ఆమోదించలేదు.", "یہ پروڈکٹ TMDB API استعمال کرتی ہے لیکن TMDB یا JustWatch کی منظور شدہ نہیں ہے۔", "يستخدم هذا المنتج واجهة TMDB API لكنه غير معتمد من TMDB أو JustWatch.", "Este producto usa la API de TMDB pero no está respaldado ni certificado por TMDB ni JustWatch.", "Ce produit utilise l'API TMDB mais n'est ni approuvé ni certifié par TMDB ou JustWatch."], "In Theaters": ["সিনেমা হলে চলছে", "सिनेमाघरों में", "திரையரங்குகளில்", "థియేటర్లలో", "سنیما گھروں میں", "في دور السينما", "En cines", "Au cinéma"], "New on OTT": ["নতুন OTT-তে", "OTT पर नई", "OTT-யில் புதியவை", "OTTలో కొత్తవి", "OTT پر نئی", "جديد على OTT", "Novedades en OTT", "Nouveautés OTT"], "Theaters": ["সিনেমা হল", "सिनेमाघर", "திரையரங்கு", "థియేటర్", "سنیما", "السينما", "Cines", "Cinémas"], "Titles will appear after the next sync.": ["পরের সিঙ্কের পর শিরোনাম দেখা যাবে।", "अगले सिंक के बाद शीर्षक दिखेंगे।", "அடுத்த ஒத்திசைவுக்குப் பிறகு தலைப்புகள் தோன்றும்.", "తదుపరి సింక్ తర్వాత టైటిల్స్ కనిపిస్తాయి.", "اگلے سنک کے بعد ٹائٹلز نظر آئیں گے۔", "ستظهر العناوين بعد المزامنة التالية.", "Los títulos aparecerán tras la próxima sincronización.", "Les titres apparaîtront après la prochaine synchronisation."], "Developer": ["ডেভেলপার", "डेवलपर", "உருவாக்குநர்", "డెవలపర్", "ڈیولپر", "المطوّر", "Desarrollador", "Développeur"], "Community & Info": ["কমিউনিটি ও তথ্য", "समुदाय और जानकारी", "சமூகம் & தகவல்", "కమ్యూనిటీ & సమాచారం", "کمیونٹی اور معلومات", "المجتمع والمعلومات", "Comunidad e información", "Communauté et infos"], "GitHub": ["গিটহাব", "गिटहब", "கிட்ஹப்", "గిట్‌హబ్", "گٹ ہب", "جيت هب", "GitHub", "GitHub"], "GitHub profile": ["গিটহাব প্রোফাইল", "गिटहब प्रोफ़ाइल", "கிட்ஹப் சுயவிவரம்", "గిట్‌హబ్ ప్రొఫైల్", "گٹ ہب پروفائل", "ملف GitHub", "Perfil de GitHub", "Profil GitHub"], "View GitHub profile": ["গিটহাব প্রোফাইল দেখুন", "गिटहब प्रोफ़ाइल देखें", "கிட்ஹப் சுயவிவரத்தைப் பார்", "గిట్‌హబ్ ప్రొఫైల్ చూడండి", "گٹ ہب پروفائل دیکھیں", "عرض ملف GitHub", "Ver perfil de GitHub", "Voir le profil GitHub"], "Repositories": ["রিপোজিটরি", "रिपॉज़िटरी", "களஞ்சியங்கள்", "రిపాజిటరీలు", "ریپوزٹریز", "المستودعات", "Repositorios", "Dépôts"], "Followers": ["ফলোয়ার", "फ़ॉलोअर्स", "பின்தொடர்பவர்கள்", "ఫాలోవర్లు", "فالوورز", "المتابعون", "Seguidores", "Abonnés"], "Following": ["ফলো করছেন", "फ़ॉलो कर रहे", "பின்தொடர்கிறார்", "ఫాలో అవుతున్నారు", "فالو کر رہے", "يتابع", "Siguiendo", "Abonnements"], "Check for updates": ["আপডেট খুঁজুন", "अपडेट जाँचें", "புதுப்பிப்புகளைச் சரிபார்", "అప్‌డేట్‌లను తనిఖీ చేయి", "اپ ڈیٹ چیک کریں", "التحقق من التحديثات", "Buscar actualizaciones", "Rechercher des mises à jour"], "Checking for updates...": ["আপডেট খোঁজা হচ্ছে...", "अपडेट जाँच रहे हैं...", "புதுப்பிப்புகளைச் சரிபார்க்கிறது...", "అప్‌డేట్‌లు తనిఖీ చేస్తోంది...", "اپ ڈیٹ چیک ہو رہی ہے...", "جارٍ التحقق من التحديثات...", "Buscando actualizaciones...", "Recherche de mises à jour..."], "Tap the button to look for a newer version.": ["নতুন ভার্সন খুঁজতে বাটনে চাপুন।", "नया वर्ज़न खोजने के लिए बटन दबाएँ।", "புதிய பதிப்பைத் தேட பொத்தானைத் தட்டவும்.", "కొత్త వెర్షన్ కోసం బటన్ నొక్కండి.", "نیا ورژن تلاش کرنے کے لیے بٹن دبائیں۔", "اضغط الزر للبحث عن إصدار أحدث.", "Pulsa el botón para buscar una versión nueva.", "Touchez le bouton pour chercher une nouvelle version."], "You are up to date": ["আপনার অ্যাপ আপ-টু-ডেট", "आपका ऐप अप-टू-डेट है", "நீங்கள் சமீபத்திய பதிப்பில் உள்ளீர்கள்", "మీరు తాజా వెర్షన్‌లో ఉన్నారు", "آپ کی ایپ تازہ ترین ہے", "أنت على أحدث إصدار", "Estás al día", "Vous êtes à jour"], "Download update": ["আপডেট ডাউনলোড করুন", "अपडेट डाउनलोड करें", "புதுப்பிப்பைப் பதிவிறக்கு", "అప్‌డేట్ డౌన్‌లోడ్ చేయి", "اپ ڈیٹ ڈاؤن لوڈ کریں", "تنزيل التحديث", "Descargar actualización", "Télécharger la mise à jour"], "Could not check for updates. Check your internet and try again.": ["আপডেট খোঁজা যায়নি। ইন্টারনেট দেখে আবার চেষ্টা করুন।", "अपडेट नहीं जाँच सके। इंटरनेट देखकर फिर कोशिश करें।", "புதுப்பிப்புகளைச் சரிபார்க்க முடியவில்லை. இணையத்தைப் பார்த்து மீண்டும் முயலவும்.", "అప్‌డేట్‌లు తనిఖీ చేయలేకపోయింది. ఇంటర్నెట్ చూసి మళ్లీ ప్రయత్నించండి.", "اپ ڈیٹ چیک نہیں ہو سکی۔ انٹرنیٹ دیکھ کر دوبارہ کوشش کریں۔", "تعذّر التحقق من التحديثات. تحقق من الإنترنت وحاول مجددًا.", "No se pudo buscar actualizaciones. Revisa tu internet e inténtalo de nuevo.", "Impossible de chercher les mises à jour. Vérifiez votre connexion et réessayez."], "Loading GitHub profile...": ["গিটহাব প্রোফাইল লোড হচ্ছে...", "गिटहब प्रोफ़ाइल लोड हो रही है...", "கிட்ஹப் சுயவிவரம் ஏற்றப்படுகிறது...", "గిట్‌హబ్ ప్రొఫైల్ లోడ్ అవుతోంది...", "گٹ ہب پروفائل لوڈ ہو رہی ہے...", "جارٍ تحميل ملف GitHub...", "Cargando perfil de GitHub...", "Chargement du profil GitHub..."],"Press back again to exit":["বের হতে আবার Back চাপুন","बाहर निकलने के लिए फिर से वापस दबाएँ","வெளியேற மீண்டும் பின் அழுத்தவும்","నిష్క్రమించడానికి మళ్లీ వెనుకకు నొక్కండి","باہر نکلنے کے لیے دوبارہ واپس دبائیں","اضغط رجوع مرة أخرى للخروج","Pulsa atrás de nuevo para salir","Appuyez encore sur retour pour quitter"],"Home":["হোম","होम","முகப்பு","హోమ్","ہوم","الرئيسية","Inicio","Accueil"],"New Releases":["নতুন রিলিজ","नई रिलीज़","புதிய வெளியீடுகள்","కొత్త విడుదలలు","نئی ریلیزز","أحدث الإصدارات","Estrenos","Nouveautés"],"Watchlist":["ওয়াচলিস্ট","वॉचलिस्ट","பார்க்கும் பட்டியல்","వాచ్‌లిస్ట్","واچ لسٹ","قائمة المشاهدة","Por ver","À voir"],"Watched":["দেখা হয়েছে","देखा हुआ","பார்த்தவை","చూసినవి","دیکھا ہوا","تمت المشاهدة","Vistas","Vus"],"New":["নতুন","नया","புதியது","కొత్త","نیا","جديد","Nuevo","Nouveau"],"Popular":["জনপ্রিয়","लोकप्रिय","பிரபலமானவை","ప్రజాదరణ","مقبول","الأكثر شعبية","Populares","Populaires"],"Series":["সিরিজ","सीरीज़","தொடர்கள்","సిరీస్","سیریز","المسلسلات","Series","Séries"],"Settings":["সেটিংস","सेटिंग्स","அமைப்புகள்","సెట్టింగ్‌లు","ترتیبات","الإعدادات","Ajustes","Paramètres"],"Search":["খুঁজুন","खोजें","தேடு","వెతుకు","تلاش","بحث","Buscar","Rechercher"],"Profile":["প্রোফাইল","प्रोफ़ाइल","சுயவிவரம்","ప్రొఫైల్","پروفائل","الملف الشخصي","Perfil","Profil"],"Back":["পেছনে","वापस","பின்","వెనుకకు","واپس","رجوع","Atrás","Retour"],"Login":["লগইন","लॉगिन","உள்நுழை","లాగిన్","لاگ ان","تسجيل الدخول","Iniciar sesión","Connexion"],"Log in":["লগইন","लॉग इन","உள்நுழை","లాగిన్","لاگ ان","دخول","Entrar","Se connecter"],"Register":["নিবন্ধন","रजिस्टर","பதிவு செய்","నమోదు","رجسٹر","إنشاء حساب","Registrarse","Inscription"],"Username":["ইউজারনেম","यूज़रनेम","பயனர் பெயர்","యూజర్‌నేమ్","یوزر نیم","اسم المستخدم","Usuario","Nom d'utilisateur"],"Username or email address":["ইউজারনেম বা ইমেইল","यूज़रनेम या ईमेल पता","பயனர் பெயர் அல்லது மின்னஞ்சல்","యూజర్‌నేమ్ లేదా ఇమెయిల్","یوزر نیم یا ای میل","اسم المستخدم أو البريد الإلكتروني","Usuario o correo electrónico","Nom d'utilisateur ou e-mail"],"Email address":["ইমেইল ঠিকানা","ईमेल पता","மின்னஞ்சல் முகவரி","ఇమెయిల్ చిరునామా","ای میل ایڈریس","البريد الإلكتروني","Correo electrónico","Adresse e-mail"],"Password":["পাসওয়ার্ড","पासवर्ड","கடவுச்சொல்","పాస్‌వర్డ్","پاس ورڈ","كلمة المرور","Contraseña","Mot de passe"],"Confirm password":["পাসওয়ার্ড নিশ্চিত করুন","पासवर्ड की पुष्टि करें","கடவுச்சொல்லை உறுதிப்படுத்து","పాస్‌వర్డ్ నిర్ధారించండి","پاس ورڈ کی تصدیق","تأكيد كلمة المرور","Confirmar contraseña","Confirmer le mot de passe"],"Remember me":["আমাকে মনে রাখো","मुझे याद रखें","என்னை நினைவில் வை","నన్ను గుర్తుంచుకో","مجھے یاد رکھیں","تذكرني","Recordarme","Se souvenir de moi"],"Lost your password?":["পাসওয়ার্ড হারিয়ে ফেলেছেন?","पासवर्ड भूल गए?","கடவுச்சொல்லை மறந்தீர்களா?","పాస్‌వర్డ్ మర్చిపోయారా?","پاس ورڈ بھول گئے؟","نسيت كلمة المرور؟","¿Olvidaste tu contraseña?","Mot de passe perdu ?"],"OR":["অথবা","या","அல்லது","లేదా","یا","أو","O","OU"],"Log out":["লগআউট","लॉग आउट","வெளியேறு","లాగ్ అవుట్","لاگ آؤٹ","تسجيل الخروج","Cerrar sesión","Se déconnecter"],"Cancel":["বাতিল","रद्द करें","ரத்து","రద్దు","منسوخ","إلغاء","Cancelar","Annuler"],"Keep":["রাখুন","रखें","வை","ఉంచు","رکھیں","إبقاء","Conservar","Garder"],"Erase and reset":["মুছে রিসেট করুন","मिटाकर रीसेट करें","அழித்து மீட்டமை","తొలగించి రీసెట్ చేయి","مٹا کر ری سیٹ کریں","مسح وإعادة ضبط","Borrar y restablecer","Effacer et réinitialiser"],"Your cinema, your story.":["আপনার সিনেমা, আপনার গল্প।","आपका सिनेमा, आपकी कहानी।","உங்கள் சினிமா, உங்கள் கதை.","మీ సినిమా, మీ కథ.","آپ کا سنیما، آپ کی کہانی۔","سينماك، قصتك.","Tu cine, tu historia.","Votre cinéma, votre histoire."],"Get started":["শুরু করুন","शुरू करें","தொடங்கு","ప్రారంభించు","شروع کریں","ابدأ","Empezar","Commencer"],"No account on this phone yet. Register below to get started.":["এই ফোনে এখনও কোনো অ্যাকাউন্ট নেই। শুরু করতে নিচে নিবন্ধন করুন।","इस फ़ोन पर अभी कोई खाता नहीं है। शुरू करने के लिए नीचे रजिस्टर करें।","இந்த தொலைபேசியில் கணக்கு இல்லை. தொடங்க கீழே பதிவு செய்யவும்.","ఈ ఫోన్‌లో ఇంకా ఖాతా లేదు. ప్రారంభించడానికి క్రింద నమోదు చేయండి.","اس فون پر ابھی کوئی اکاؤنٹ نہیں۔ شروع کرنے کے لیے نیچے رجسٹر کریں۔","لا يوجد حساب على هذا الهاتف بعد. سجّل أدناه للبدء.","Aún no hay ninguna cuenta en este teléfono. Regístrate abajo para empezar.","Aucun compte sur ce téléphone. Inscrivez-vous ci-dessous pour commencer."],"Discover daily":["প্রতিদিনের আবিষ্কার","रोज़ कुछ नया","தினமும் கண்டறி","రోజూ కనుగొనండి","روزانہ دریافت","اكتشف يوميًا","Descubre cada día","Découvrir chaque jour"],"Today's charts":["আজকের চার্ট","आज के चार्ट","இன்றைய பட்டியல்கள்","నేటి చార్ట్‌లు","آج کے چارٹس","قوائم اليوم","Listas de hoy","Classements du jour"],"New releases":["নতুন রিলিজ","नई रिलीज़","புதிய வெளியீடுகள்","కొత్త విడుదలలు","نئی ریلیزز","أحدث الإصدارات","Estrenos","Nouveautés"],"Top 10 today":["আজকের সেরা ১০","आज के टॉप 10","இன்றைய முதல் 10","నేటి టాప్ 10","آج کے ٹاپ 10","أفضل 10 اليوم","Top 10 de hoy","Top 10 du jour"],"Top web series":["সেরা ওয়েব সিরিজ","टॉप वेब सीरीज़","சிறந்த வெப் தொடர்கள்","టాప్ వెబ్ సిరీస్","ٹاپ ویب سیریز","أفضل المسلسلات","Mejores series web","Meilleures séries web"],"Top Rated":["সর্বোচ্চ রেটিং","टॉप रेटेड","அதிக மதிப்பீடு","టాప్ రేటెడ్","سب سے اعلیٰ ریٹنگ","الأعلى تقييمًا","Mejor valoradas","Les mieux notés"],"Recommended for you":["আপনার জন্য সুপারিশ","आपके लिए सुझाव","உங்களுக்காக பரிந்துரை","మీ కోసం సిఫార్సులు","آپ کے لیے تجاویز","موصى به لك","Recomendado para ti","Recommandé pour vous"],"Browse":["ব্রাউজ","ब्राउज़ करें","உலாவு","బ్రౌజ్","براؤز","تصفح","Explorar","Parcourir"],"See all":["সব দেখুন","सभी देखें","அனைத்தும்","అన్నీ చూడండి","سب دیکھیں","عرض الكل","Ver todo","Voir tout"],"Continue Watching":["দেখা চালিয়ে যান","देखना जारी रखें","தொடர்ந்து பார்","చూడటం కొనసాగించండి","دیکھنا جاری رکھیں","متابعة المشاهدة","Seguir viendo","Reprendre"],"Top Hollywood movies":["সেরা হলিউড সিনেমা","टॉप हॉलीवुड फ़िल्में","சிறந்த ஹாலிவுட் படங்கள்","టాప్ హాలీవుడ్ సినిమాలు","ٹاپ ہالی ووڈ فلمیں","أفضل أفلام هوليوود","Mejores películas de Hollywood","Meilleurs films hollywoodiens"],"Dramedies":["ড্রামেডি","ड्रामेडी","டிராமெடி","డ్రామెడీ","ڈرامیڈی","دراميديا","Dramedias","Dramédies"],"Psychological thrillers":["সাইকোলজিক্যাল থ্রিলার","साइकोलॉजिकल थ्रिलर","உளவியல் த்ரில்லர்","సైకలాజికల్ థ్రిల్లర్లు","نفسیاتی تھرلر","إثارة نفسية","Thrillers psicológicos","Thrillers psychologiques"],"Cerebral":["চিন্তাশীল","गहरी सोच वाली","சிந்தனையூட்டும்","ఆలోచనాత్మక","ذہنی پیچیدہ","عقلانية","Cerebrales","Cérébraux"],"Laugh out loud":["হাসির খোরাক","खूब हँसाने वाली","வாய்விட்டு சிரி","నవ్వుల విందు","خوب ہنسائیں","ضحك من القلب","Para reír a carcajadas","À mourir de rire"],"Top drama movies":["সেরা ড্রামা সিনেমা","टॉप ड्रामा फ़िल्में","சிறந்த நாடகப் படங்கள்","టాప్ డ్రామా సినిమాలు","ٹاپ ڈرامہ فلمیں","أفضل أفلام الدراما","Mejores dramas","Meilleurs drames"],"Top mystery & thriller":["সেরা মিস্ট্রি ও থ্রিলার","टॉप मिस्ट्री और थ्रिलर","சிறந்த மர்ம & த்ரில்லர்","టాప్ మిస్టరీ & థ్రిల్లర్","ٹاپ اسرار و تھرلر","أفضل الغموض والإثارة","Mejor misterio y suspense","Meilleurs mystères et thrillers"],"Action & adrenaline":["অ্যাকশন ও অ্যাড্রেনালিন","एक्शन और एड्रेनालिन","ஆக்ஷன் & அட்ரினலின்","యాక్షన్ & అడ్రినలిన్","ایکشن اور ایڈرینالین","أكشن وأدرينالين","Acción y adrenalina","Action et adrénaline"],"Crime stories":["ক্রাইম গল্প","क्राइम कहानियाँ","குற்றக் கதைகள்","క్రైమ్ కథలు","جرم کی کہانیاں","قصص الجريمة","Historias de crimen","Histoires criminelles"],"Top horror":["সেরা হরর","टॉप हॉरर","சிறந்த திகில்","టాప్ హారర్","ٹاپ ہارر","أفضل الرعب","Mejor terror","Meilleurs films d'horreur"],"Dark fantasy":["ডার্ক ফ্যান্টাসি","डार्क फ़ैंटेसी","டார்க் பேண்டஸி","డార్క్ ఫాంటసీ","ڈارک فینٹسی","فانتازيا مظلمة","Fantasía oscura","Fantasy sombre"],"Free to enjoy: family & animation":["পরিবার ও অ্যানিমেশন","परिवार और एनिमेशन","குடும்பம் & அனிமேஷன்","కుటుంబం & యానిమేషన్","فیملی اور اینیمیشن","للعائلة والأنيميشن","Familia y animación","Famille et animation"],"Highly rated":["উচ্চ রেটিং","उच्च रेटिंग","அதிக மதிப்பீடு","అధిక రేటింగ్","اعلیٰ ریٹنگ","تقييم مرتفع","Muy valorada","Très bien notée"],"New release":["নতুন রিলিজ","नई रिलीज़","புதிய வெளியீடு","కొత్త విడుదల","نئی ریلیز","إصدار جديد","Estreno","Nouveauté"],"Trending":["ট্রেন্ডিং","ट्रेंडिंग","டிரெண்டிங்","ట్రెండింగ్","ٹرینڈنگ","رائج","Tendencias","Tendances"],"View details":["বিস্তারিত দেখুন","विवरण देखें","விவரங்கள்","వివరాలు చూడండి","تفصیلات دیکھیں","عرض التفاصيل","Ver detalles","Voir les détails"],"Web series":["ওয়েব সিরিজ","वेब सीरीज़","வெப் தொடர்","వెబ్ సిరీస్","ویب سیریز","مسلسلات الويب","Series web","Séries web"],"Action":["অ্যাকশন","एक्शन","ஆக்ஷன்","యాక్షన్","ایکشن","أكشن","Acción","Action"],"Adventure":["অ্যাডভেঞ্চার","एडवेंचर","சாகசம்","అడ్వెంచర్","ایڈونچر","مغامرة","Aventura","Aventure"],"Animation":["অ্যানিমেশন","एनिमेशन","அனிமேஷன்","యానిమేషన్","اینیمیشن","رسوم متحركة","Animación","Animation"],"Comedy":["কমেডি","कॉमेडी","நகைச்சுவை","కామెడీ","کامیڈی","كوميديا","Comedia","Comédie"],"Crime":["ক্রাইম","क्राइम","குற்றம்","క్రైమ్","جرم","جريمة","Crimen","Policier"],"Drama":["ড্রামা","ड्रामा","நாடகம்","డ్రామా","ڈرامہ","دراما","Drama","Drame"],"Horror":["হরর","हॉरर","திகில்","హారర్","ہارر","رعب","Terror","Horreur"],"Romance":["রোমান্স","रोमांस","காதல்","రొమాన్స్","رومانس","رومانسي","Romance","Romance"],"Sci-Fi":["সায়েন্স ফিকশন","साइ-फ़ाई","அறிவியல் புனைவு","సైన్స్ ఫిక్షన్","سائنس فکشن","خيال علمي","Ciencia ficción","Science-fiction"],"Thriller":["থ্রিলার","थ्रिलर","த்ரில்லர்","థ్రిల్లర్","تھرلر","إثارة","Suspense","Thriller"],"Mystery":["মিস্ট্রি","मिस्ट्री","மர்மம்","మిస్టరీ","اسرار","غموض","Misterio","Mystère"],"Fantasy":["ফ্যান্টাসি","फ़ैंटेसी","பேண்டஸி","ఫాంటసీ","فینٹسی","فانتازيا","Fantasía","Fantastique"],"Family":["ফ্যামিলি","फ़ैमिली","குடும்பம்","ఫ్యామిలీ","فیملی","عائلي","Familiar","Famille"],"Documentary":["ডকুমেন্টারি","डॉक्यूमेंट्री","ஆவணப்படம்","డాక్యుమెంటరీ","دستاویزی","وثائقي","Documental","Documentaire"],"History":["ইতিহাস","इतिहास","வரலாறு","చరిత్ర","تاریخ","تاريخ","Historia","Histoire"],"Music":["সংগীত","संगीत","இசை","సంగీతం","موسیقی","موسيقى","Música","Musique"],"War":["যুদ্ধ","युद्ध","போர்","యుద్ధం","جنگ","حرب","Bélica","Guerre"],"Western":["ওয়েস্টার্ন","वेस्टर्न","வெஸ்டர்ன்","వెస్ట్రన్","ویسٹرن","ويسترن","Wéstern","Western"],"Biography":["জীবনী","जीवनी","வாழ்க்கை வரலாறு","జీవిత చరిత్ర","سوانح","سيرة ذاتية","Biografía","Biographie"],"Watch now":["এখনই দেখুন","अभी देखें","இப்போது பார்","ఇప్పుడు చూడండి","ابھی دیکھیں","شاهد الآن","Ver ahora","Regarder"],"Synopsis":["সারসংক্ষেপ","सारांश","கதைச்சுருக்கம்","సారాంశం","خلاصہ","الملخص","Sinopsis","Synopsis"],"Videos":["ভিডিও","वीडियो","வீடியோக்கள்","వీడియోలు","ویڈیوز","فيديوهات","Vídeos","Vidéos"],"Trailers & clips":["ট্রেলার ও ক্লিপ","ट्रेलर और क्लिप","டிரெய்லர்கள் & கிளிப்","ట్రైలర్లు & క్లిప్‌లు","ٹریلرز اور کلپس","الإعلانات والمقاطع","Tráileres y clips","Bandes-annonces et extraits"],"About the movie":["সিনেমা সম্পর্কে","फ़िल्म के बारे में","திரைப்படம் பற்றி","సినిమా గురించి","فلم کے بارے میں","عن الفيلم","Sobre la película","À propos du film"],"About the series":["সিরিজ সম্পর্কে","सीरीज़ के बारे में","தொடர் பற்றி","సిరీస్ గురించి","سیریز کے بارے میں","عن المسلسل","Sobre la serie","À propos de la série"],"Director":["পরিচালক","निर्देशक","இயக்குநர்","దర్శకుడు","ہدایتکار","المخرج","Director","Réalisateur"],"Created by":["নির্মাতা","निर्माता","உருவாக்கியவர்","సృష్టికర్త","تخلیق کار","من إنشاء","Creada por","Créé par"],"Cast":["অভিনয়শিল্পী","कलाकार","நடிகர்கள்","నటీనటులు","کاسٹ","طاقم التمثيل","Reparto","Distribution"],"You might also like":["আপনার আরও ভালো লাগতে পারে","आपको ये भी पसंद आ सकता है","இவையும் பிடிக்கலாம்","మీకు ఇవి కూడా నచ్చవచ్చు","آپ کو یہ بھی پسند آ سکتا ہے","قد يعجبك أيضًا","También te puede gustar","Vous aimerez aussi"],"Want to Watch":["দেখতে চাই","देखना है","பார்க்க வேண்டும்","చూడాలి","دیکھنا ہے","أريد مشاهدته","Quiero verla","À regarder"],"Love it":["পছন্দের","पसंदीदा","பிடித்தது","ఇష్టం","پسندیدہ","أحببته","Me encanta","J'adore"],"Seasons & episodes":["সিজন ও এপিসোড","सीज़न और एपिसोड","சீசன்கள் & எபிசோடுகள்","సీజన్లు & ఎపిసోడ్‌లు","سیزن اور اقساط","المواسم والحلقات","Temporadas y episodios","Saisons et épisodes"],"Mark season watched":["সিজন দেখা হয়েছে চিহ্নিত করুন","सीज़न देखा हुआ चिह्नित करें","சீசனை பார்த்ததாக குறி","సీజన్ చూసినట్లు గుర్తించు","سیزن دیکھا ہوا نشان زد کریں","تحديد الموسم كمشاهد","Marcar temporada como vista","Marquer la saison comme vue"],"Clear season":["সিজন মার্ক মুছুন","सीज़न का निशान हटाएँ","சீசன் குறியை நீக்கு","సీజన్ గుర్తు తొలగించు","سیزن کا نشان ہٹائیں","مسح علامة الموسم","Quitar marca de temporada","Effacer la saison"],"Release date":["মুক্তির তারিখ","रिलीज़ की तारीख़","வெளியீட்டு தேதி","విడుదల తేదీ","ریلیز کی تاریخ","تاريخ الإصدار","Fecha de estreno","Date de sortie"],"First aired":["প্রথম সম্প্রচার","पहला प्रसारण","முதல் ஒளிபரப்பு","మొదటి ప్రసారం","پہلی نشریات","أول عرض","Primera emisión","Première diffusion"],"Runtime":["দৈর্ঘ্য","अवधि","நேரம்","నిడివి","دورانیہ","المدة","Duración","Durée"],"Age rating":["বয়স রেটিং","आयु रेटिंग","வயது மதிப்பீடு","వయస్సు రేటింగ్","عمر کی درجہ بندی","التصنيف العمري","Clasificación por edad","Classification d'âge"],"Genres":["ধরন","शैलियाँ","வகைகள்","జానర్లు","اصناف","الأنواع","Géneros","Genres"],"Industry":["ইন্ডাস্ট্রি","इंडस्ट्री","திரையுலகம்","ఇండస్ట్రీ","انڈسٹری","الصناعة","Industria","Industrie"],"Production country":["নির্মাণকারী দেশ","निर्माण देश","தயாரிப்பு நாடு","నిర్మాణ దేశం","پیداواری ملک","بلد الإنتاج","País de producción","Pays de production"],"Original language":["মূল ভাষা","मूल भाषा","மூல மொழி","అసలు భాష","اصل زبان","اللغة الأصلية","Idioma original","Langue originale"],"Status":["অবস্থা","स्थिति","நிலை","స్థితి","حیثیت","الحالة","Estado","Statut"],"Seasons":["সিজন","सीज़न","சீசன்கள்","సీజన్లు","سیزنز","المواسم","Temporadas","Saisons"],"Seasons and episode counts come from TMDB.":["সিজন ও এপিসোডের সংখ্যা TMDB থেকে আসে।","सीज़न और एपिसोड की संख्या TMDB से आती है।","சீசன் & எபிசோடு எண்ணிக்கை TMDB இலிருந்து வருகிறது.","సీజన్లు & ఎపిసోడ్ల సంఖ్య TMDB నుండి వస్తుంది.","سیزن اور اقساط کی تعداد TMDB سے آتی ہے۔","أعداد المواسم والحلقات من TMDB.","Las temporadas y los episodios provienen de TMDB.","Les saisons et épisodes proviennent de TMDB."],"Streaming data by JustWatch.":["স্ট্রিমিং তথ্য JustWatch থেকে।","स्ट्रीमिंग डेटा JustWatch से।","ஸ்ட்ரீமிங் தரவு JustWatch வழங்கியது.","స్ట్రీమింగ్ డేటా JustWatch నుండి.","اسٹریمنگ ڈیٹا JustWatch سے۔","بيانات البث من JustWatch.","Datos de streaming de JustWatch.","Données de streaming par JustWatch."],"Looking up where to watch...":["কোথায় দেখবেন খোঁজা হচ্ছে...","कहाँ देखें, खोज रहे हैं...","எங்கே பார்க்கலாம் என தேடுகிறது...","ఎక్కడ చూడాలో వెతుకుతోంది...","دیکھنے کی جگہ تلاش ہو رہی ہے...","جارٍ البحث عن أماكن المشاهدة...","Buscando dónde verla...","Recherche des plateformes..."],"Loading seasons from TMDB...":["TMDB থেকে সিজন লোড হচ্ছে...","TMDB से सीज़न लोड हो रहे हैं...","TMDB இலிருந்து சீசன்கள் ஏற்றப்படுகின்றன...","TMDB నుండి సీజన్లు లోడ్ అవుతున్నాయి...","TMDB سے سیزن لوڈ ہو رہے ہیں...","جارٍ تحميل المواسم من TMDB...","Cargando temporadas desde TMDB...","Chargement des saisons depuis TMDB..."],"Account & Profile":["অ্যাকাউন্ট ও প্রোফাইল","खाता और प्रोफ़ाइल","கணக்கு & சுயவிவரம்","ఖాతా & ప్రొఫైల్","اکاؤنٹ اور پروفائل","الحساب والملف الشخصي","Cuenta y perfil","Compte et profil"],"Saved Movies":["সেভ করা সিনেমা","सेव की गई फ़िल्में","சேமித்த படங்கள்","సేవ్ చేసిన సినిమాలు","محفوظ فلمیں","الأفلام المحفوظة","Películas guardadas","Films enregistrés"],"Appearance":["অ্যাপের থিম","दिखावट","தோற்றம்","రూపం","ظاہری شکل","المظهر","Apariencia","Apparence"],"Dark":["ডার্ক","डार्क","இருண்ட","డార్క్","ڈارک","داكن","Oscuro","Sombre"],"Light":["লাইট","लाइट","ஒளி","లైట్","لائٹ","فاتح","Claro","Clair"],"System":["সিস্টেম","सिस्टम","கணினி","సిస్టమ్","سسٹم","النظام","Sistema","Système"],"Online":["অনলাইন","ऑनलाइन","ஆன்லைன்","ఆన్‌లైన్","آن لائن","عبر الإنترنت","En línea","En ligne"],"Your country (2 letters, for where-to-watch)":["আপনার দেশ (২ অক্ষর, কোথায় দেখবেন তার জন্য)","आपका देश (2 अक्षर, कहाँ देखें के लिए)","உங்கள் நாடு (2 எழுத்துகள்)","మీ దేశం (2 అక్షరాలు)","آپ کا ملک (2 حروف)","بلدك (حرفان)","Tu país (2 letras)","Votre pays (2 lettres)"],"Save":["সংরক্ষণ","सेव करें","சேமி","సేవ్","محفوظ کریں","حفظ","Guardar","Enregistrer"],"Check for new releases now":["এখনই নতুন রিলিজ খুঁজুন","अभी नई रिलीज़ खोजें","புதிய வெளியீடுகளை இப்போது சரிபார்","కొత్త విడుదలలను ఇప్పుడే తనిఖీ చేయి","نئی ریلیزز ابھی دیکھیں","ابحث عن إصدارات جديدة الآن","Buscar estrenos ahora","Chercher les nouveautés"],"Movie data, posters and new releases come from TMDB automatically.":["সিনেমার তথ্য, পোস্টার ও নতুন রিলিজ স্বয়ংক্রিয়ভাবে TMDB থেকে আসে।","फ़िल्म का डेटा, पोस्टर और नई रिलीज़ अपने आप TMDB से आती हैं।","படத் தகவல், போஸ்டர்கள், புதிய வெளியீடுகள் TMDB இலிருந்து தானாக வரும்.","సినిమా సమాచారం, పోస్టర్లు, కొత్త విడుదలలు TMDB నుండి ఆటోమేటిక్‌గా వస్తాయి.","فلم کا ڈیٹا، پوسٹر اور نئی ریلیزز خود بخود TMDB سے آتی ہیں۔","بيانات الأفلام والملصقات والإصدارات الجديدة تأتي تلقائيًا من TMDB.","Los datos, carteles y estrenos provienen de TMDB automáticamente.","Les données, affiches et nouveautés viennent automatiquement de TMDB."],"Google Drive backup":["গুগল ড্রাইভ ব্যাকআপ","गूगल ड्राइव बैकअप","கூகுள் டிரைவ் காப்புப்பிரதி","గూగుల్ డ్రైవ్ బ్యాకప్","گوگل ڈرائیو بیک اپ","النسخ الاحتياطي على Google Drive","Copia en Google Drive","Sauvegarde Google Drive"],"Connect Google Drive":["গুগল ড্রাইভ যুক্ত করুন","गूगल ड्राइव जोड़ें","கூகுள் டிரைவை இணை","గూగుల్ డ్రైవ్ కనెక్ట్ చేయి","گوگل ڈرائیو جوڑیں","ربط Google Drive","Conectar Google Drive","Connecter Google Drive"],"Back up now":["এখনই ব্যাকআপ নিন","अभी बैकअप लें","இப்போது காப்புப்பிரதி எடு","ఇప్పుడే బ్యాకప్ తీయి","ابھی بیک اپ لیں","نسخ احتياطي الآن","Copia ahora","Sauvegarder maintenant"],"Restore from backup":["ব্যাকআপ থেকে ফিরিয়ে আনুন","बैकअप से रीस्टोर करें","காப்புப்பிரதியிலிருந்து மீட்டெடு","బ్యాకప్ నుండి పునరుద్ధరించు","بیک اپ سے بحال کریں","استعادة من النسخة الاحتياطية","Restaurar copia","Restaurer la sauvegarde"],"Disconnect":["বিচ্ছিন্ন করুন","डिस्कनेक्ट करें","துண்டி","డిస్‌కనెక్ట్","منقطع کریں","قطع الاتصال","Desconectar","Déconnecter"],"About":["সম্পর্কে","जानकारी","பற்றி","గురించి","متعلق","حول","Acerca de","À propos"],"Clear my lists":["আমার লিস্ট মুছুন","मेरी सूचियाँ मिटाएँ","என் பட்டியல்களை அழி","నా జాబితాలు తొలగించు","میری فہرستیں صاف کریں","مسح قوائمي","Borrar mis listas","Effacer mes listes"],"Clear all lists and custom titles?":["সব লিস্ট ও কাস্টম টাইটেল মুছবেন?","सभी सूचियाँ और कस्टम टाइटल मिटाएँ?","அனைத்து பட்டியல்களையும் அழிக்கவா?","అన్ని జాబితాలను తొలగించాలా?","تمام فہرستیں صاف کریں؟","مسح كل القوائم والعناوين المخصصة؟","¿Borrar todas las listas y títulos personalizados?","Effacer toutes les listes et titres personnalisés ?"],"Yes, clear":["হ্যাঁ, মুছুন","हाँ, मिटाएँ","ஆம், அழி","అవును, తొలగించు","ہاں، صاف کریں","نعم، امسح","Sí, borrar","Oui, effacer"],"Language":["ভাষা","भाषा","மொழி","భాష","زبان","اللغة","Idioma","Langue"],"Saved in this browser only.":["শুধু এই ব্রাউজারে সংরক্ষিত।","केवल इसी ब्राउज़र में सेव।","இந்த உலாவியில் மட்டும் சேமிக்கப்பட்டது.","ఈ బ్రౌజర్‌లో మాత్రమే సేవ్ అయింది.","صرف اسی براؤزر میں محفوظ۔","محفوظ في هذا المتصفح فقط.","Guardado solo en este navegador.","Enregistré dans ce navigateur uniquement."],"Favorites":["প্রিয়","पसंदीदा","பிடித்தவை","ఇష్టమైనవి","پسندیدہ","المفضلة","Favoritos","Favoris"],"Loved":["পছন্দের","पसंद किए","பிடித்தவை","ఇష్టపడినవి","پسند کردہ","المحبوبة","Favoritas","Aimés"],"In Progress":["চলমান","जारी","நடப்பில்","కొనసాగుతున్నవి","جاری","قيد المشاهدة","En curso","En cours"],"All":["সব","सभी","அனைத்தும்","అన్నీ","سب","الكل","Todo","Tout"],"Not Watched Yet":["এখনও দেখা হয়নি","अभी नहीं देखा","இன்னும் பார்க்கவில்லை","ఇంకా చూడలేదు","ابھی نہیں دیکھا","لم تتم مشاهدته","Sin ver","Pas encore vu"],"Your Movie Vault":["আপনার Movie Vault","आपका Movie Vault","உங்கள் Movie Vault","మీ Movie Vault","آپ کا Movie Vault","Movie Vault الخاص بك","Tu Movie Vault","Votre Movie Vault"],"Your watchlist is empty":["আপনার ওয়াচলিস্ট খালি","आपकी वॉचलिस्ट खाली है","உங்கள் பட்டியல் காலியாக உள்ளது","మీ వాచ్‌లిస్ట్ ఖాళీగా ఉంది","آپ کی واچ لسٹ خالی ہے","قائمة المشاهدة فارغة","Tu lista está vacía","Votre liste est vide"],"Open any title and tap Want to Watch to save it here.":["যেকোনো টাইটেল খুলে 'দেখতে চাই' চাপুন, এখানে সেভ হবে।","कोई भी टाइटल खोलें और 'देखना है' दबाएँ, यहाँ सेव होगा।","எந்த படத்தையும் திறந்து 'பார்க்க வேண்டும்' தட்டவும்.","ఏదైనా టైటిల్ తెరిచి 'చూడాలి' నొక్కండి.","کوئی بھی ٹائٹل کھولیں اور 'دیکھنا ہے' دبائیں۔","افتح أي عنوان واضغط «أريد مشاهدته» ليُحفظ هنا.","Abre un título y pulsa «Quiero verla» para guardarlo aquí.","Ouvrez un titre et appuyez sur « À regarder » pour l'ajouter ici."],"Nothing watched yet":["এখনও কিছু দেখা হয়নি","अभी तक कुछ नहीं देखा","இன்னும் எதுவும் பார்க்கவில்லை","ఇంకా ఏదీ చూడలేదు","ابھی کچھ نہیں دیکھا","لم تشاهد شيئًا بعد","Aún no has visto nada","Rien de vu pour l'instant"],"Open any title and tap Watched to mark it.":["যেকোনো টাইটেল খুলে 'দেখা হয়েছে' চাপুন।","कोई भी टाइटल खोलें और 'देखा हुआ' दबाएँ।","எந்த படத்தையும் திறந்து 'பார்த்தவை' தட்டவும்.","ఏదైనా టైటిల్ తెరిచి 'చూసినవి' నొక్కండి.","کوئی بھی ٹائٹل کھولیں اور 'دیکھا ہوا' دبائیں۔","افتح أي عنوان واضغط «تمت المشاهدة».","Abre un título y pulsa «Vistas».","Ouvrez un titre et appuyez sur « Vus »."],"Search titles, directors or actors":["টাইটেল, পরিচালক বা অভিনেতা খুঁজুন","टाइटल, निर्देशक या अभिनेता खोजें","தலைப்பு, இயக்குநர், நடிகரைத் தேடு","టైటిల్, దర్శకుడు, నటులను వెతకండి","ٹائٹل، ہدایتکار یا اداکار تلاش کریں","ابحث بالعنوان أو المخرج أو الممثل","Busca títulos, directores o actores","Rechercher titres, réalisateurs ou acteurs"],"Title, director or actor":["টাইটেল, পরিচালক বা অভিনেতা","टाइटल, निर्देशक या अभिनेता","தலைப்பு, இயக்குநர், நடிகர்","టైటిల్, దర్శకుడు, నటుడు","ٹائٹل، ہدایتکار، اداکار","عنوان أو مخرج أو ممثل","Título, director o actor","Titre, réalisateur ou acteur"],"Search by title, director, actor or industry such as Bollywood or Dhallywood.":["টাইটেল, পরিচালক, অভিনেতা বা বলিউড/ঢালিউডের মতো ইন্ডাস্ট্রি দিয়ে খুঁজুন।","टाइटल, निर्देशक, अभिनेता या बॉलीवुड/ढॉलीवुड जैसी इंडस्ट्री से खोजें।","தலைப்பு, இயக்குநர், நடிகர் அல்லது பாலிவுட் போன்ற திரையுலகத்தால் தேடு.","టైటిల్, దర్శకుడు, నటుడు లేదా బాలీవుడ్ వంటి ఇండస్ట్రీతో వెతకండి.","ٹائٹل، ہدایتکار، اداکار یا بالی ووڈ جیسی انڈسٹری سے تلاش کریں۔","ابحث بالعنوان أو المخرج أو الممثل أو الصناعة مثل بوليوود.","Busca por título, director, actor o industria como Bollywood.","Cherchez par titre, réalisateur, acteur ou industrie comme Bollywood."],"Searching...":["খোঁজা হচ্ছে...","खोज रहे हैं...","தேடுகிறது...","వెతుకుతోంది...","تلاش ہو رہی ہے...","جارٍ البحث...","Buscando...","Recherche..."],"From TMDB":["TMDB থেকে","TMDB से","TMDB இலிருந்து","TMDB నుండి","TMDB سے","من TMDB","Desde TMDB","Depuis TMDB"],"Loading new releases...":["নতুন রিলিজ লোড হচ্ছে...","नई रिलीज़ लोड हो रही हैं...","புதிய வெளியீடுகள் ஏற்றப்படுகின்றன...","కొత్త విడుదలలు లోడ్ అవుతున్నాయి...","نئی ریلیزز لوڈ ہو رہی ہیں...","جارٍ تحميل الإصدارات الجديدة...","Cargando estrenos...","Chargement des nouveautés..."],"Discover online":["অনলাইনে আবিষ্কার","ऑनलाइन खोजें","ஆன்லைனில் கண்டறி","ఆన్‌లైన్‌లో కనుగొనండి","آن لائن دریافت","اكتشف عبر الإنترنت","Descubrir en línea","Découvrir en ligne"],"New Movies":["নতুন সিনেমা","नई फ़िल्में","புதிய படங்கள்","కొత్త సినిమాలు","نئی فلمیں","أفلام جديدة","Películas nuevas","Nouveaux films"],"New Series":["নতুন সিরিজ","नई सीरीज़","புதிய தொடர்கள்","కొత్త సిరీస్","نئی سیریز","مسلسلات جديدة","Series nuevas","Nouvelles séries"],"Popular Movies":["জনপ্রিয় সিনেমা","लोकप्रिय फ़िल्में","பிரபல படங்கள்","ప్రజాదరణ పొందిన సినిమాలు","مقبول فلمیں","أفلام شائعة","Películas populares","Films populaires"],"Popular Series":["জনপ্রিয় সিরিজ","लोकप्रिय सीरीज़","பிரபல தொடர்கள்","ప్రజాదరణ పొందిన సిరీస్","مقبول سیریز","مسلسلات شائعة","Series populares","Séries populaires"],"Always up to date from TMDB. Tap a title to add it to your Watchlist with poster, cast and details.":["সবসময় TMDB থেকে আপডেট। টাইটেলে চাপলে পোস্টার, কাস্টসহ ওয়াচলিস্টে যোগ হবে।","हमेशा TMDB से अपडेट। टाइटल दबाएँ, पोस्टर और कलाकारों सहित वॉचलिस्ट में जुड़ जाएगा।","எப்போதும் TMDB இலிருந்து புதுப்பிக்கப்படும். தட்டினால் பட்டியலில் சேரும்.","ఎల్లప్పుడూ TMDB నుండి అప్‌డేట్. నొక్కితే వాచ్‌లిస్ట్‌లో చేరుతుంది.","ہمیشہ TMDB سے اپ ڈیٹ۔ ٹائٹل دبائیں تو واچ لسٹ میں شامل ہو جائے گا۔","محدّث دائمًا من TMDB. اضغط على عنوان لإضافته إلى قائمة المشاهدة.","Siempre actualizado desde TMDB. Toca un título para añadirlo a tu lista.","Toujours à jour depuis TMDB. Touchez un titre pour l'ajouter à votre liste."],"Could not reach TMDB. Check your internet.":["TMDB-তে পৌঁছানো যায়নি। ইন্টারনেট দেখুন।","TMDB तक नहीं पहुँच सके। इंटरनेट जाँचें।","TMDB ஐ அடைய முடியவில்லை. இணையத்தைச் சரிபார்.","TMDB చేరుకోలేకపోయింది. ఇంటర్నెట్ తనిఖీ చేయండి.","TMDB تک رسائی نہیں ہوئی۔ انٹرنیٹ چیک کریں۔","تعذّر الوصول إلى TMDB. تحقق من الإنترنت.","No se pudo conectar con TMDB. Revisa tu internet.","Impossible de joindre TMDB. Vérifiez votre connexion."],"Could not load streaming info.":["স্ট্রিমিং তথ্য লোড করা যায়নি।","स्ट्रीमिंग जानकारी लोड नहीं हो सकी।","ஸ்ட்ரீமிங் தகவலை ஏற்ற முடியவில்லை.","స్ట్రీమింగ్ సమాచారం లోడ్ కాలేదు.","اسٹریمنگ معلومات لوڈ نہیں ہو سکیں۔","تعذّر تحميل معلومات البث.","No se pudo cargar la información de streaming.","Impossible de charger les infos de streaming."],"Your login is stored only on this phone, so a reset link cannot be emailed. To reset it, erase this phone's login and lists, then register again. If you made a Google Drive backup, restore it afterwards from Settings.":["আপনার লগইন শুধু এই ফোনে আছে, তাই রিসেট লিংক ইমেইলে পাঠানো যায় না। রিসেট করতে এই ফোনের লগইন ও লিস্ট মুছে আবার নিবন্ধন করুন। গুগল ড্রাইভে ব্যাকআপ থাকলে পরে সেটিংস থেকে ফিরিয়ে আনুন।","आपका लॉगिन केवल इसी फ़ोन में है, इसलिए रीसेट लिंक ईमेल नहीं हो सकता। रीसेट के लिए इस फ़ोन का लॉगिन और सूचियाँ मिटाकर दोबारा रजिस्टर करें। गूगल ड्राइव बैकअप हो तो बाद में सेटिंग्स से रीस्टोर करें।","உங்கள் உள்நுழைவு இந்த தொலைபேசியில் மட்டுமே உள்ளது; மீட்டமைப்பு இணைப்பை அனுப்ப முடியாது. மீட்டமைக்க இந்த தொலைபேசியின் உள்நுழைவு மற்றும் பட்டியல்களை அழித்து மீண்டும் பதிவு செய்யவும்.","మీ లాగిన్ ఈ ఫోన్‌లో మాత్రమే ఉంది, కాబట్టి రీసెట్ లింక్ పంపలేము. రీసెట్ చేయడానికి ఈ ఫోన్ లాగిన్, జాబితాలను తొలగించి మళ్లీ నమోదు చేయండి.","آپ کا لاگ ان صرف اسی فون میں ہے، اس لیے ری سیٹ لنک ای میل نہیں ہو سکتا۔ ری سیٹ کے لیے اس فون کا لاگ ان اور فہرستیں مٹا کر دوبارہ رجسٹر کریں۔","تسجيل الدخول محفوظ على هذا الهاتف فقط، لذا لا يمكن إرسال رابط إعادة التعيين. لإعادة التعيين امسح بيانات الدخول والقوائم ثم سجّل من جديد.","Tu acceso se guarda solo en este teléfono, así que no se puede enviar un enlace por correo. Para restablecerlo, borra el acceso y las listas de este teléfono y regístrate de nuevo.","Votre connexion n'est stockée que sur ce téléphone ; un lien de réinitialisation ne peut pas être envoyé. Effacez la connexion et les listes de ce téléphone, puis inscrivez-vous à nouveau."],"Check for updates":["আপডেট খুঁজুন","अपडेट जाँचें","புதுப்பிப்புகளைச் சரிபார்","అప్‌డేట్‌లను తనిఖీ చేయి","اپ ڈیٹس چیک کریں","البحث عن تحديثات","Buscar actualizaciones","Rechercher des mises à jour"],"Developer":["ডেভেলপার","डेवलपर","உருவாக்குநர்","డెవలపర్","ڈیولپر","المطوّر","Desarrollador","Développeur"],"Repositories":["রিপোজিটরি","रिपॉज़िटरी","களஞ்சியங்கள்","రిపోజిటరీలు","ریپوزٹریز","المستودعات","Repositorios","Dépôts"],"Followers":["ফলোয়ার","फ़ॉलोअर्स","பின்தொடர்பவர்கள்","ఫాలోవర్లు","فالوورز","المتابعون","Seguidores","Abonnés"],"Following":["ফলো করছেন","फ़ॉलो कर रहे","பின்தொடர்கிறார்","ఫాలో అవుతున్నారు","فالو کر رہے ہیں","يتابع","Siguiendo","Abonnements"],"View GitHub profile":["GitHub প্রোফাইল দেখুন","GitHub प्रोफ़ाइल देखें","GitHub சுயவிவரத்தைப் பார்","GitHub ప్రొఫైల్ చూడండి","GitHub پروفائل دیکھیں","عرض ملف GitHub","Ver perfil de GitHub","Voir le profil GitHub"],"Loading GitHub profile...":["GitHub প্রোফাইল লোড হচ্ছে...","GitHub प्रोफ़ाइल लोड हो रही है...","GitHub சுயவிவரம் ஏற்றப்படுகிறது...","GitHub ప్రొఫైల్ లోడ్ అవుతోంది...","GitHub پروفائل لوڈ ہو رہی ہے...","جارٍ تحميل ملف GitHub...","Cargando perfil de GitHub...","Chargement du profil GitHub..."],"Checking for updates...":["আপডেট খোঁজা হচ্ছে...","अपडेट जाँचे जा रहे हैं...","புதுப்பிப்புகளைச் சரிபார்க்கிறது...","అప్‌డేట్‌లు తనిఖీ చేస్తోంది...","اپ ڈیٹس چیک ہو رہی ہیں...","جارٍ البحث عن تحديثات...","Buscando actualizaciones...","Recherche de mises à jour..."],"Tap the button to look for a newer version.":["নতুন সংস্করণ খুঁজতে বাটনে চাপুন।","नया संस्करण खोजने के लिए बटन दबाएँ।","புதிய பதிப்பைத் தேட பொத்தானைத் தட்டவும்.","కొత్త వెర్షన్ కోసం బటన్ నొక్కండి.","نیا ورژن تلاش کرنے کے لیے بٹن دبائیں۔","اضغط الزر للبحث عن إصدار أحدث.","Pulsa el botón para buscar una versión nueva.","Touchez le bouton pour chercher une nouvelle version."],"Could not check for updates. Check your internet and try again.":["আপডেট খোঁজা যায়নি। ইন্টারনেট দেখে আবার চেষ্টা করুন।","अपडेट नहीं जाँचे जा सके। इंटरनेट देखकर दोबारा कोशिश करें।","புதுப்பிப்புகளைச் சரிபார்க்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.","అప్‌డేట్‌లు తనిఖీ చేయలేకపోయింది. మళ్లీ ప్రయత్నించండి.","اپ ڈیٹس چیک نہیں ہو سکیں۔ دوبارہ کوشش کریں۔","تعذّر البحث عن التحديثات. حاول مجددًا.","No se pudo buscar actualizaciones. Inténtalo de nuevo.","Impossible de chercher les mises à jour. Réessayez."],"You are up to date":["আপনি সর্বশেষ সংস্করণে আছেন","आप नवीनतम संस्करण पर हैं","நீங்கள் சமீபத்திய பதிப்பில் உள்ளீர்கள்","మీరు తాజా వెర్షన్‌లో ఉన్నారు","آپ تازہ ترین ورژن پر ہیں","أنت على أحدث إصدار","Estás al día","Vous êtes à jour"],"Download update":["আপডেট ডাউনলোড করুন","अपडेट डाउनलोड करें","புதுப்பிப்பைப் பதிவிறக்கு","అప్‌డేట్ డౌన్‌లోడ్ చేయి","اپ ڈیٹ ڈاؤن لوڈ کریں","تنزيل التحديث","Descargar actualización","Télécharger la mise à jour"]};
  var IPAT = [["{a} of {b} episodes",["{b}টির মধ্যে {a}টি এপিসোড","{b} में से {a} एपिसोड","{b} இல் {a} எபிசோடுகள்","{b} లో {a} ఎపిసోడ్లు","{b} میں سے {a} اقساط","{a} من {b} حلقات","{a} de {b} episodios","{a} sur {b} épisodes"]],["{a} of {b} seasons · {c} of {d} episodes",["{b}টি সিজনের {a}টি · {d}টি এপিসোডের {c}টি","{b} में से {a} सीज़न · {d} में से {c} एपिसोड","{b} இல் {a} சீசன் · {d} இல் {c} எபிசோடு","{b} లో {a} సీజన్లు · {d} లో {c} ఎపిసోడ్లు","{b} میں سے {a} سیزن · {d} میں سے {c} اقساط","{a} من {b} مواسم · {c} من {d} حلقات","{a} de {b} temporadas · {c} de {d} episodios","{a} sur {b} saisons · {c} sur {d} épisodes"]],["Season {n}",["সিজন {n}","सीज़न {n}","சீசன் {n}","సీజన్ {n}","سیزن {n}","الموسم {n}","Temporada {n}","Saison {n}"]],["{n} seasons",["{n}টি সিজন","{n} सीज़न","{n} சீசன்கள்","{n} సీజన్లు","{n} سیزن","{n} مواسم","{n} temporadas","{n} saisons"]],["{n} season",["{n}টি সিজন","{n} सीज़न","{n} சீசன்","{n} సీజన్","{n} سیزن","موسم واحد","{n} temporada","{n} saison"]],["Next up: season {a}, episode {b}",["পরবর্তী: সিজন {a}, এপিসোড {b}","अगला: सीज़न {a}, एपिसोड {b}","அடுத்தது: சீசன் {a}, எபிசோடு {b}","తదుపరి: సీజన్ {a}, ఎపిసోడ్ {b}","اگلا: سیزن {a}، قسط {b}","التالي: الموسم {a}، الحلقة {b}","Siguiente: temporada {a}, episodio {b}","Suivant : saison {a}, épisode {b}"]],["Good morning, {n}",["সুপ্রভাত, {n}","सुप्रभात, {n}","காலை வணக்கம், {n}","శుభోదయం, {n}","صبح بخیر، {n}","صباح الخير، {n}","Buenos días, {n}","Bonjour, {n}"]],["Good afternoon, {n}",["শুভ অপরাহ্ন, {n}","नमस्कार, {n}","மதிய வணக்கம், {n}","శుభ మధ్యాహ్నం, {n}","سلام، {n}","طاب يومك، {n}","Buenas tardes, {n}","Bon après-midi, {n}"]],["Good evening, {n}",["শুভ সন্ধ্যা, {n}","शुभ संध्या, {n}","மாலை வணக்கம், {n}","శుభ సాయంత్రం, {n}","شام بخیر، {n}","مساء الخير، {n}","Buenas noches, {n}","Bonsoir, {n}"]],["{n} titles. Tap one to open it.",["{n}টি টাইটেল। খুলতে চাপুন।","{n} टाइटल। खोलने के लिए दबाएँ।","{n} தலைப்புகள். திறக்க தட்டவும்.","{n} టైటిల్స్. తెరవడానికి నొక్కండి.","{n} ٹائٹلز۔ کھولنے کے لیے دبائیں۔","{n} عنوانًا. اضغط لفتحه.","{n} títulos. Toca uno para abrirlo.","{n} titres. Touchez-en un pour l'ouvrir."]],["Show more ({n} left)",["আরও দেখুন (আরও {n}টি)","और दिखाएँ ({n} बाकी)","மேலும் காட்டு ({n} மீதம்)","మరిన్ని చూపు ({n} మిగిలి)","مزید دکھائیں ({n} باقی)","عرض المزيد (متبقي {n})","Mostrar más (quedan {n})","Afficher plus ({n} restants)"]],["Not listed for {n} yet. Change your country in Settings.",["{n}-এর জন্য এখনও তালিকাভুক্ত নয়। সেটিংসে দেশ বদলান।","{n} के लिए अभी सूचीबद्ध नहीं। सेटिंग्स में देश बदलें।","{n} க்கு இன்னும் பட்டியலிடப்படவில்லை. அமைப்புகளில் நாட்டை மாற்றவும்.","{n} కోసం ఇంకా జాబితా కాలేదు. సెట్టింగ్‌లలో దేశం మార్చండి.","{n} کے لیے ابھی درج نہیں۔ ترتیبات میں ملک بدلیں۔","غير متوفر في {n} بعد. غيّر البلد من الإعدادات.","Aún no disponible en {n}. Cambia tu país en Ajustes.","Pas encore disponible pour {n}. Changez de pays dans les paramètres."]]].map(function (p) {
    var names = [], rx = '^' + p[0].replace(/[.*+?^$()|[\]\\]/g, '\\$&').replace(/\{(\w)\}/g, function (m, c) { names.push(c); return '(.+?)'; }) + '$';
    return { rx: new RegExp(rx), names: names, t: p[1] };
  });
  function langCode() {
    var c = lsGet('reelvault.lang');
    if (c && LANGS.some(function (l) { return l[0] === c; })) return c;
    var n = String((typeof navigator !== 'undefined' && navigator.language) || 'en').toLowerCase().slice(0, 2), m = LANGS.filter(function (l) { return l[0].slice(0, 2) === n; })[0];
    return m ? m[0] : 'en-US';
  }
  function langIdx() { var c = langCode(); return LANGS.filter(function (l) { return l[0] === c; })[0][3]; }
  function langTm() { var c = langCode(); return LANGS.filter(function (l) { return l[0] === c; })[0][2]; }
  function trExact(s, ix) {
    var e = I18N[s]; if (e) return e[ix];
    for (var i = 0; i < IPAT.length; i++) {
      var m = IPAT[i].rx.exec(s);
      if (m) { var out = IPAT[i].t[ix]; IPAT[i].names.forEach(function (nm, k) { out = out.split('{' + nm + '}').join(m[k + 1]); }); return out; }
    }
    return null;
  }
  function tr(s) {
    var ix = langIdx(); if (ix < 0 || !s) return s;
    var t = String(s).trim(); if (!t) return s;
    var r = trExact(t, ix);
    if (r == null && /( · |, )/.test(t)) {
      var parts = t.split(/( · |, )/), ch = false;
      parts = parts.map(function (p) { if (p === ' · ' || p === ', ') return p; var x = trExact(p, ix); if (x != null) { ch = true; return x; } return p; });
      if (ch) r = parts.join('');
    }
    return r == null ? s : String(s).replace(t, r);
  }
  var TSKIP = '.tile-t,.cb2 b,.dhead h1,.res-body b,.spb b,.vn,.cast b,.wname b,.cbody b,.person b,script,style';
  var TBUSY = false;
  function translateDom() {
    var ix = langIdx(); if (ix < 0 || TBUSY) return;
    TBUSY = true;
    try {
      var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), n, list = [];
      while ((n = w.nextNode())) { if (n.nodeValue.trim() && n.parentElement && !n.parentElement.closest(TSKIP)) list.push(n); }
      list.forEach(function (x) { var v = tr(x.nodeValue); if (v !== x.nodeValue) x.nodeValue = v; });
      Array.prototype.forEach.call(document.querySelectorAll('[placeholder],[aria-label]'), function (e) {
        var p = e.getAttribute('placeholder'); if (p) { var q = tr(p); if (q !== p) e.setAttribute('placeholder', q); }
        var a = e.getAttribute('aria-label'); if (a) { var b2 = tr(a); if (b2 !== a) e.setAttribute('aria-label', b2); }
      });
    } catch (e) {}
    TBUSY = false;
  }
  var TQ = 0;
  function qTranslate() { if (langIdx() < 0 || TQ) return; TQ = requestAnimationFrame(function () { TQ = 0; translateDom(); }); }
  function applyLang() {
    var c = langCode();
    document.documentElement.lang = c.slice(0, 2);
    document.documentElement.dir = (c === 'ur-PK' || c === 'ar-SA') ? 'rtl' : 'ltr';
    qTranslate();
  }
  function setLang(c) { lsSet('reelvault.lang', c); PV = {}; applyLang(); render(); }
  try { new MutationObserver(qTranslate).observe(document.body, { childList: true, subtree: true, characterData: true }); } catch (e) {}
  document.addEventListener('change', function (e) { if (e.target && e.target.id === 'langSel') setLang(e.target.value); });

  /* ---------- Where to watch + trailer (TMDB, streaming data by JustWatch) ---------- */
  var PV = {};
  function region() { try { return (localStorage.getItem('reelvault.region') || 'IN').toUpperCase().slice(0, 2); } catch (e) { return 'IN'; } }
  function geoInit() {
    try {
      fetch(TM_BASE + '/geo').then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
        var c = j && String(j.country || '').toUpperCase();
        if (c && /^[A-Z]{2}$/.test(c) && c !== region()) { try { localStorage.setItem('reelvault.region', c); } catch (e) {} }
      }).catch(function () {});
    } catch (e2) {}
  }
  function fmtDate(d) { if (!d) return ''; var t = new Date(d + 'T00:00:00'); return isNaN(t) ? d : t.toLocaleDateString(langCode(), { day: 'numeric', month: 'short', year: 'numeric' }); }
  function fmtRt(m) { return m ? Math.floor(m / 60) + 'h ' + (m % 60) + 'min' : ''; }
  var PURL = [['netflix', 'https://www.netflix.com/search?q='], ['prime video', 'https://www.primevideo.com/search?phrase='], ['amazon video', 'https://www.primevideo.com/search?phrase='], ['amazon prime', 'https://www.primevideo.com/search?phrase='],
    ['hotstar', 'https://www.hotstar.com/in/search?q='], ['disney', 'https://www.disneyplus.com/search/'], ['apple tv', 'https://tv.apple.com/search?term='], ['hulu', 'https://www.hulu.com/search?q='],
    ['hbo max', 'https://play.max.com/search?q='], ['paramount', 'https://www.paramountplus.com/search/?q='], ['peacock', 'https://www.peacocktv.com/search?q='], ['youtube', 'https://www.youtube.com/results?search_query='],
    ['google play', 'https://play.google.com/store/search?c=movies&q='], ['zee5', 'https://www.zee5.com/search?q='], ['hoichoi', 'https://www.hoichoi.tv/search?q='], ['crunchyroll', 'https://www.crunchyroll.com/search?q='], ['mubi', 'https://mubi.com/en/search/films?query=']];
  function provUrl(name, it) {
    var n = String(name || '').toLowerCase(), q = encodeURIComponent(it.title || '');
    if (n === 'max') return 'https://play.max.com/search?q=' + q;
    for (var i = 0; i < PURL.length; i++) if (n.indexOf(PURL[i][0]) !== -1) return PURL[i][1] + (PURL[i][0] === 'youtube' ? q + encodeURIComponent(' full movie') : q);
    return 'https://www.google.com/search?q=' + encodeURIComponent('Watch ' + (it.title || '') + ' on ' + name);
  }
  function provWatch(it, p) {
    var h = '<div class="dc-h"><h2>Where to watch</h2><span class="rgn">' + esc(region()) + '</span></div>';
    if (!p) return h + '<p class="note">Looking up where to watch...</p>';
    if (p.err) return h + '<p class="note">' + esc(p.err) + '</p>';
    var seen = {}, rows = [];
    [['flatrate', 'Stream'], ['free', 'Free'], ['ads', 'Free with ads'], ['rent', 'Rent'], ['buy', 'Buy']].forEach(function (g) {
      ((p.pr && p.pr[g[0]]) || []).forEach(function (x) {
        if (seen[x.provider_id] || rows.length >= 10) return; seen[x.provider_id] = 1; rows.push([x, g[1]]);
      });
    });
    if (!rows.length) return h + '<p class="note">Not listed for ' + esc(region()) + ' yet.</p>' + '<button type="button" class="btn alt full" data-act="open-url" data-u="' + esc('https://www.google.com/search?q=' + encodeURIComponent((it.title || '') + ' ' + (it.year || '') + ' watch online')) + '">Search online</button>';
    h += '<div class="wlist">' + rows.map(function (r) {
      var x = r[0];
      return '<button type="button" class="wchip" data-act="open-url" data-u="' + esc(provUrl(x.provider_name, it)) + '"><span class="wlogo">' + (x.logo_path ? '<img src="https://image.tmdb.org/t/p/w92' + x.logo_path + '" alt="" loading="lazy">' : '') + '</span>' +
        '<span class="wname"><b>' + esc(x.provider_name) + '</b><small>' + r[1] + '</small></span></button>';
    }).join('') + '</div>';
    return h;
  }
  function provVids(p) {
    if (!p || !p.vids || !p.vids.length) return '';
    return '<div class="dc-h"><h2>Trailer</h2></div><div class="hrow snap vrow">' + p.vids.map(function (v) {
      return '<button type="button" class="vbig" data-act="open-url" data-u="https://www.youtube.com/watch?v=' + esc(v.key) + '">' +
        '<img src="https://img.youtube.com/vi/' + esc(v.key) + '/hqdefault.jpg" alt="" loading="lazy"><i class="vplay">' + ic('play', '', true) + '</i>' +
        '<span class="vcap">' + esc(v.type === 'Trailer' ? 'Official Trailer' : (v.name || v.type)) + '</span></button>';
    }).join('') + '</div>';
  }
  function provAbout(it, p) {
    var i = (p && p.info) || {}, rows = [];
    var add = function (ico, k, v) { if (v) rows.push('<div class="irow"><span class="ii">' + ic(ico) + '</span><span class="ik">' + k + '</span><span class="iv">' + esc(v) + '</span></div>'); };
    add('film', 'Original Title', it.title);
    add('calendar', it.type === 'series' ? 'First aired' : 'Release Date', fmtDate(i.date) || (it.year ? String(it.year) : ''));
    add('clock', 'Runtime', i.runtime || it.runtime);
    add('clap', 'Genres', (i.genres && i.genres.length ? i.genres : it.genres).join(', '));
    add('globe', 'Language', i.lang);
    add('star', 'Rating', it.imdb ? it.imdb.toFixed(1) + '/10' : '');
    add('info', 'Age rating', i.cert);
    add('flag', 'Country', i.countries);
    add('flame', 'Industry', it.industry);
    if (it.type === 'series') add('grid', 'Seasons', i.seasons ? String(i.seasons) : (it.seasons && it.seasons.length ? String(it.seasons.length) : ''));
    add('spark', 'Status', i.status);
    return '<div class="dc-h"><h2>' + (it.type === 'series' ? 'Series' : 'Movie') + ' information</h2></div><div class="info">' + rows.join('') + '</div>' + (i.tagline ? '<p class="tagline">&ldquo;' + esc(i.tagline) + '&rdquo;</p>' : '');
  }
  function provSim(p) {
    if (!p || !p.sim || !p.sim.length) return '';
    return '<div class="dc-h"><h2>More like this</h2></div><div class="hrow">' + p.sim.map(function (r) {
      var t = r.title || r.name || '', y = String(r.release_date || r.first_air_date || '').slice(0, 4);
      return '<button type="button" class="hcard" data-act="tm-open" data-id="' + r.id + '" data-mt="' + r.mt + '"><span class="hposter"><img src="https://image.tmdb.org/t/p/w185' + r.poster_path + '" alt="" loading="lazy"></span>' +
        '<span class="vn">' + esc(t) + '</span><span class="tile-y">' + y + '</span></button>';
    }).join('') + '</div>';
  }
  function provPaint(key, ck) {
    var cv = cur(); if (cv.v !== 'details' || cv.key !== key) return;
    var it = getItem(key); if (!it) return;
    var p = PV[ck] || null, set = function (id, h) { var e = $(id); if (e) { e.innerHTML = h; e.hidden = !h; } };
    set('pv-watch', provWatch(it, p)); set('pv-vids', provVids(p)); set('pv-about', provAbout(it, p)); set('pv-sim', provSim(p));
    var vt = $('dtVotes'); if (vt && p && p.info && p.info.votes) vt.textContent = '(' + numFmt(p.info.votes) + ')';
    if (p && p.loc && langIdx() >= 0) {
      var tt = $('dtTitle'), sy = $('dtSyn');
      if (tt && p.loc.title) tt.textContent = p.loc.title;
      if (sy && p.loc.overview) sy.textContent = p.loc.overview;
    }
  }
  function provLoad(key) {
    var it = getItem(key);
    if (!it || !$('pv-watch')) return;
    var ck = key + region() + langCode();
    if (!tmKey()) { provPaint(key, ck); return; }
    if (PV[ck]) { provPaint(key, ck); return; }
    provPaint(key, ck);
    var done = function (id, mt) {
      return tmGet('/' + mt + '/' + id, 'language=' + langTm() + '&include_video_language=' + langTm().slice(0, 2) + ',en,null&append_to_response=videos,similar,recommendations,watch/providers,release_dates,content_ratings').then(function (r) {
        var rg = region(), tv = mt === 'tv', cert = '';
        try {
          if (tv) { var cr = (r.content_ratings && r.content_ratings.results) || []; var c1 = cr.filter(function (x) { return x.iso_3166_1 === rg; })[0] || cr.filter(function (x) { return x.iso_3166_1 === 'US'; })[0]; cert = c1 ? c1.rating : ''; }
          else { var rd = (r.release_dates && r.release_dates.results) || []; var pick = function (cc) { var e = rd.filter(function (x) { return x.iso_3166_1 === cc; })[0]; var z = e ? (e.release_dates || []).filter(function (y) { return y.certification; })[0] : null; return z ? z.certification : ''; }; cert = pick(rg) || pick('US'); }
        } catch (e) {}
        var rank = { Trailer: 0, Teaser: 1, Clip: 2, Featurette: 3, 'Behind the Scenes': 4 };
        var vids = ((r.videos && r.videos.results) || []).filter(function (v) { return v.site === 'YouTube'; })
          .sort(function (a, b) { return (rank[a.type] == null ? 9 : rank[a.type]) - (rank[b.type] == null ? 9 : rank[b.type]) || (b.official ? 1 : 0) - (a.official ? 1 : 0); }).slice(0, 10)
          .map(function (v) { return { key: v.key, type: v.type, name: v.name }; });
        var seenS = {}, sim = [];
        ((r.recommendations && r.recommendations.results) || []).concat((r.similar && r.similar.results) || []).forEach(function (x) {
          if (!x.poster_path || seenS[x.id] || sim.length >= 20) return; seenS[x.id] = 1; x.mt = x.media_type || mt; sim.push(x);
        });
        var cn = (r.production_countries || []).map(function (c) { return c.name; }).slice(0, 3).join(', ');
        var lng = ''; try { lng = (r.spoken_languages || []).filter(function (l) { return l.iso_639_1 === r.original_language; })[0]; lng = lng ? (lng.english_name || lng.name) : String(r.original_language || '').toUpperCase(); } catch (e2) {}
        PV[ck] = { loc: { title: r.title || r.name || '', overview: r.overview || '' }, pr: (r['watch/providers'] && r['watch/providers'].results || {})[rg] || null, vids: vids, sim: sim,
          info: { date: r.release_date || r.first_air_date || '', runtime: tv ? ((r.episode_run_time || [])[0] ? (r.episode_run_time[0] + ' min / ep') : '') : fmtRt(r.runtime), cert: cert, genres: (r.genres || []).map(function (g) { return g.name; }), countries: cn, lang: lng, tagline: r.tagline || '', status: r.status || '', seasons: r.number_of_seasons || 0, votes: r.vote_count || 0 } };
      });
    };
    var start = it.tm ? Promise.resolve(it.tm) : tmGet('/search/multi', 'include_adult=false&query=' + encodeURIComponent(it.title)).then(function (r) {
      var c = (r.results || []).filter(function (x) { return (x.media_type === 'movie' || x.media_type === 'tv') && (!it.year || String(x.release_date || x.first_air_date || '').slice(0, 4) == it.year); })[0];
      if (!c) throw { code: 'none' };
      return { id: c.id, mt: c.media_type };
    });
    start.then(function (t) { return done(t.id, t.mt); }).catch(function (e) { PV[ck] = { err: e && e.code === 'key' ? 'TMDB key is not valid.' : e && e.code === 'none' ? 'No streaming info found for this title.' : 'Could not load streaming info.' }; })
      .then(function () { provPaint(key, ck); });
  }

  /* ---------- Auto-add new releases (TMDB) ---------- */
  var GMAP = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 53: 'Thriller', 10752: 'War', 37: 'Western', 10759: 'Action', 10765: 'Sci-Fi' };
  var SY = { busy: false };
  function indOf(lang, oc) { return lang === 'hi' ? 'Bollywood' : lang === 'te' ? 'Tollywood' : lang === 'ta' ? 'Kollywood' : lang === 'ml' ? 'Mollywood' : lang === 'kn' ? 'Sandalwood' : (lang === 'bn' && (oc || []).indexOf('BD') !== -1) ? 'Dhallywood' : ['bn', 'mr', 'pa', 'gu', 'bho', 'or', 'as'].indexOf(lang) !== -1 ? 'Regional' : lang === 'en' ? 'Hollywood' : 'Other'; }
  function posterFill() {
    if (!tmKey()) return;
    var todo = CATALOG.filter(function (c) { var d = docs.get('c_' + c.id) || {}; return !d.poster && !d.pq; }).slice(0, 70), i = 0, got = 0;
    if (!todo.length) return;
    function next() {
      if (i >= todo.length) { if (got) softRender(); return; }
      var c = todo[i++];
      return tmGet('/search/multi', 'include_adult=false&query=' + encodeURIComponent(c.title)).then(function (r) {
        var m = (r.results || []).filter(function (x) {
          var y = parseInt(String(x.release_date || x.first_air_date || '').slice(0, 4), 10) || 0;
          return (x.media_type === 'movie' || x.media_type === 'tv') && x.poster_path && (!c.year || !y || Math.abs(y - c.year) <= 1);
        })[0];
        var key = 'c_' + c.id, d = docs.get(key) || {};
        d.pq = 1; if (m) { d.poster = 'https://image.tmdb.org/t/p/w342' + m.poster_path; got++; }
        docs.set(key, d); persist(key);
      }).catch(function () {}).then(next);
    }
    next(); next(); next();
  }
  function autoSync(force) {
    if (SY.busy || !tmKey()) return;
    posterFill();
    var last = Number(lsGet('reelvault.lastsync2') || 0);
    if (!force && lsGet('reelvault.cat') && Date.now() - last < 4 * 3600 * 1000 && new Date(last).toDateString() === new Date().toDateString()) return;
    SY.busy = true;
    if (force || !last) toast('Loading new releases...');
    var dd = function (n) { return new Date(Date.now() + n * 86400000).toISOString().slice(0, 10); };
    var mv = 'primary_release_date.gte=' + dd(-400) + '&primary_release_date.lte=' + dd(14);
    var tvr = 'first_air_date.gte=' + dd(-700) + '&first_air_date.lte=' + dd(14);
    var rg = region();
    var uq = function (a) { return a.filter(function (x, n) { return a.indexOf(x) === n; }); };
    var thr = function (r) { return ['/discover/movie', 'region=' + r + '&with_release_type=2|3&release_date.gte=' + dd(-35) + '&release_date.lte=' + dd(0) + '&sort_by=popularity.desc', 'movie', 2, 'th']; };
    var feeds = uq(['IN', rg, 'US']).map(thr).concat([['/movie/now_playing', 'region=IN', 'movie', 2, 'th'], ['/movie/now_playing', 'region=' + rg, 'movie', 1, 'th'], ['/movie/now_playing', '', 'movie', 3, 'th']]);
    /* OTT: ask each streaming platform for its newest titles (label, TMDB provider ids, countries) */
    var mon = 'with_watch_monetization_types=flatrate|free|ads';
    [['Netflix', '8', uq(['IN', rg, 'US'])], ['Prime Video', '119|9', uq(['IN', rg, 'US'])], ['JioHotstar', '122|2336|220', ['IN']], ['Zee5', '232', ['IN']], ['SonyLIV', '237', ['IN']],
     ['Apple TV+', '350', uq(['IN', rg, 'US'])], ['Hoichoi', '315', uq(['IN', rg])], ['Aha', '532', ['IN']], ['MX Player', '515', ['IN']]].forEach(function (pv) {
      pv[2].forEach(function (r) {
        var base = 'watch_region=' + r + '&with_watch_providers=' + pv[1] + '&' + mon;
        feeds.push(['/discover/movie', base + '&primary_release_date.gte=' + dd(-180) + '&primary_release_date.lte=' + dd(0) + '&sort_by=primary_release_date.desc', 'movie', 2, 'ott', pv[0]]);
        feeds.push(['/discover/tv', base + '&first_air_date.gte=' + dd(-240) + '&first_air_date.lte=' + dd(0) + '&sort_by=first_air_date.desc', 'tv', 1, 'ott', pv[0]]);
      });
    });
    feeds = feeds.concat([
      ['/discover/movie', 'with_origin_country=IN&sort_by=popularity.desc&primary_release_date.gte=' + dd(-120) + '&primary_release_date.lte=' + dd(0), 'movie', 2, 'in'],
      ['/discover/tv', 'with_origin_country=IN&sort_by=popularity.desc&first_air_date.gte=' + dd(-365) + '&first_air_date.lte=' + dd(0), 'tv', 1, 'in'],
      ['/trending/all/week', '', '', 1, 'in', 'glob'],
      ['/discover/movie', 'with_original_language=kn&sort_by=primary_release_date.desc&vote_count.gte=2&' + mv, 'movie', 2],
      ['/discover/movie', 'with_original_language=ta&sort_by=popularity.desc&' + mv, 'movie', 1], ['/discover/movie', 'with_original_language=ml&sort_by=popularity.desc&' + mv, 'movie', 1], ['/discover/movie', 'with_original_language=kn&sort_by=popularity.desc&' + mv, 'movie', 1],
      ['/discover/movie', 'with_original_language=mr&sort_by=primary_release_date.desc&' + mv, 'movie', 1], ['/discover/movie', 'with_original_language=pa&sort_by=primary_release_date.desc&' + mv, 'movie', 1], ['/discover/movie', 'with_original_language=gu&sort_by=primary_release_date.desc&' + mv, 'movie', 1],
      ['/discover/tv', 'with_original_language=ta&sort_by=popularity.desc&' + tvr, 'tv', 1], ['/discover/tv', 'with_original_language=ml&sort_by=popularity.desc&' + tvr, 'tv', 1],
      ['/tv/on_the_air', '', 'tv', 3], ['/trending/all/week', '', '', 3], ['/trending/all/day', '', '', 1],
      ['/discover/movie', 'sort_by=primary_release_date.desc&vote_count.gte=100&' + mv, 'movie', 3],
      ['/discover/movie', 'with_original_language=hi&sort_by=primary_release_date.desc&vote_count.gte=3&' + mv, 'movie', 3],
      ['/discover/movie', 'with_original_language=te&sort_by=primary_release_date.desc&vote_count.gte=3&' + mv, 'movie', 3],
      ['/discover/movie', 'with_original_language=bn&with_origin_country=BD&sort_by=primary_release_date.desc&' + mv, 'movie', 2],
      ['/discover/movie', 'with_original_language=ta&sort_by=primary_release_date.desc&vote_count.gte=3&' + mv, 'movie', 2],
      ['/discover/movie', 'with_original_language=ml&sort_by=primary_release_date.desc&vote_count.gte=3&' + mv, 'movie', 2],
      ['/discover/movie', 'with_original_language=hi&sort_by=popularity.desc&' + mv, 'movie', 2],
      ['/discover/movie', 'with_original_language=te&sort_by=popularity.desc&' + mv, 'movie', 2],
      ['/discover/tv', 'with_original_language=hi&sort_by=popularity.desc&' + tvr, 'tv', 2],
      ['/discover/tv', 'with_original_language=bn&sort_by=popularity.desc&' + tvr, 'tv', 1],
      ['/discover/tv', 'with_original_language=te&sort_by=popularity.desc&' + tvr, 'tv', 1],
      ['/discover/tv', 'sort_by=popularity.desc&vote_count.gte=50&' + tvr, 'tv', 3],
      ['/movie/popular', '', 'movie', 5, 'wtm', 'pop'], ['/tv/popular', '', 'tv', 5, 'wts', 'pop'], ['/movie/top_rated', '', 'movie', 3, 'wtm', 'top'], ['/tv/top_rated', '', 'tv', 3, 'wts', 'top']]);
    var reqs = [];
    feeds.forEach(function (f) { for (var p = 1; p <= f[3]; p++) reqs.push([f, p]); });
    var out = new Array(reqs.length), idx = 0, okAny = false, failed = 0;
    function worker() {
      if (idx >= reqs.length) return Promise.resolve();
      var i = idx++, f = reqs[i][0], pg = reqs[i][1];
      return tmGet(f[0], (f[1] ? f[1] + '&' : '') + 'page=' + pg).then(function (r) {
        okAny = true; out[i] = (r.results || []).map(function (x) { x.media_type = x.media_type || f[2]; return x; });
      }).catch(function () { out[i] = []; failed++; }).then(worker);
    }
    Promise.all([worker(), worker(), worker(), worker(), worker(), worker()]).then(function () {
      if (!okAny) return;
      var cat = { th: [], ott: [], pv: {}, inn: [], wtm: [], wts: [] }, seen = { th: {}, ott: {}, in: {}, wtm: {}, wts: {} }, oc = [], pl = { inI: [], inG: [], wtmP: [], wtmT: [], wtsP: [], wtsT: [] };
      reqs.forEach(function (rq, i) {
        var tg = rq[0][4]; if (!tg) return;
        (out[i] || []).forEach(function (r) {
          var mt = r.media_type, k = mt + r.id;
          if ((mt !== 'movie' && mt !== 'tv') || seen[tg][k]) return;
          seen[tg][k] = 1;
          if (tg === 'ott') { if (r.poster_path) oc.push({ k: k, rel: String(r.release_date || r.first_air_date || ''), pv: rq[0][5] || '', ind: ['hi', 'ta', 'te', 'ml', 'kn', 'bn', 'mr', 'pa', 'gu', 'bho', 'or', 'as'].indexOf(r.original_language) !== -1 ? 0 : 1 }); }
          else if (tg === 'in') pl[rq[0][5] === 'glob' ? 'inG' : 'inI'].push(k);
          else if (tg === 'wtm' || tg === 'wts') pl[tg + (rq[0][5] === 'top' ? 'T' : 'P')].push(k);
          else cat.th.push(k);
        });
      });
      /* Trending: two Indian titles, then one global title, and so on. World top: popular and top rated side by side */
      (function () {
        var a = pl.inI, g = pl.inG, x = 0, y = 0, seenT = {};
        while ((x < a.length || y < g.length) && cat.inn.length < 120) {
          for (var t = 0; t < 2 && x < a.length; t++) { var k1 = a[x++]; if (!seenT[k1]) { seenT[k1] = 1; cat.inn.push(k1); } }
          if (y < g.length) { var k2 = g[y++]; if (!seenT[k2]) { seenT[k2] = 1; cat.inn.push(k2); } }
        }
        ['wtm', 'wts'].forEach(function (w) {
          var P = pl[w + 'P'], T = pl[w + 'T'], sw = {};
          for (var n = 0; n < Math.max(P.length, T.length); n++) [P[n], T[n]].forEach(function (k) { if (k && !sw[k]) { sw[k] = 1; cat[w].push(k); } });
        });
      })();
      /* Indian titles first, then the rest; newest first inside each group */
      oc.sort(function (a, b) { return a.ind - b.ind || (a.rel < b.rel ? 1 : a.rel > b.rel ? -1 : 0); });
      oc.slice(0, 260).forEach(function (o) { cat.ott.push(o.k); if (o.pv) cat.pv[o.k] = o.pv; });
      if (cat.th.length || cat.ott.length || cat.inn.length) { CAT = { th: cat.th.length ? cat.th : CAT.th, ott: cat.ott.length ? cat.ott : CAT.ott, pv: cat.ott.length ? cat.pv : CAT.pv, inn: cat.inn.length ? cat.inn : CAT.inn, wtm: cat.wtm.length ? cat.wtm : CAT.wtm, wts: cat.wts.length ? cat.wts : CAT.wts }; lsSet('reelvault.cat', JSON.stringify(CAT)); }
      /* drop old auto-added titles that are no longer in any live list, so the 900 limit never blocks new releases */
      var gone = 0;
      if (failed <= reqs.length * 0.2) {
        var live = {};
        out.forEach(function (list) { (list || []).forEach(function (r) { if (r.media_type === 'movie' || r.media_type === 'tv') live[r.media_type + r.id] = 1; }); });
        Array.from(docs.keys()).forEach(function (id) {
          var d = docs.get(id);
          if (!d || !d.auto || !d.tm || live[d.tm.mt + d.tm.id]) return;
          if (d.want || d.watched || d.loved || (d.w && Object.keys(d.w).length)) return;
          docs.delete(id); gone++;
        });
      }
      var have = {}, n = 0, autoCount = 0, until = dd(14);
      docs.forEach(function (d) { if (d && d.tm) have[d.tm.mt + d.tm.id] = 1; if (d && d.auto) autoCount++; });
      var titles = {}; allItems().forEach(function (i) { titles[i.title.toLowerCase() + '|' + i.year] = 1; });
      out.forEach(function (list) {
        (list || []).forEach(function (r) {
          if ((r.media_type !== 'movie' && r.media_type !== 'tv') || autoCount + n >= 1300 || have[r.media_type + r.id]) return;
          var title = r.title || r.name || '', rel = String(r.release_date || r.first_air_date || ''), year = parseInt(rel.slice(0, 4), 10) || 0;
          if (!title || !r.poster_path || !year || (rel && rel > until) || titles[title.toLowerCase() + '|' + year]) return;
          var key = 'u_tm_' + r.media_type + '_' + r.id;
          docs.set(key, { kind: 'u', auto: true, title: title, type: r.media_type === 'tv' ? 'series' : 'movie', year: year, rel: rel, industry: indOf(r.original_language, r.origin_country),
            seasons: [], genres: (r.genre_ids || []).map(function (g) { return GMAP[g]; }).filter(Boolean).slice(0, 3), director: '', cast: [], imdb: r.vote_average > 0 ? Math.round(r.vote_average * 10) / 10 : 0,
            overview: String(r.overview || '').slice(0, 300), poster: 'https://image.tmdb.org/t/p/w342' + r.poster_path, tm: { id: r.id, mt: r.media_type }, want: false, watched: false, loved: false, ts: Date.now() });
          have[r.media_type + r.id] = 1; titles[title.toLowerCase() + '|' + year] = 1; n++;
        });
      });
      saveLocal();
      lsSet('reelvault.lastsync2', String(Date.now()));
      if (n) { toast(n + ' titles added.'); softRender(); }
      else if (force) toast('Already up to date.');
    }).catch(function () {}).then(function () { SY.busy = false; });
  }
  function STANDALONE_OR_KEY() { return !!tmKey(); }
  function enrich(key) {
    var d = docs.get(key);
    if (!d || !d.auto || d.rich || !d.tm || !tmKey()) return;
    d.rich = true;
    tmGet('/' + d.tm.mt + '/' + d.tm.id, 'append_to_response=credits').then(function (r) {
      var isTv = d.tm.mt === 'tv', crew = (r.credits && r.credits.crew) || [];
      d.director = isTv ? (r.created_by || []).map(function (c) { return c.name; }).join(', ') : crew.filter(function (c) { return c.job === 'Director'; }).map(function (c) { return c.name; }).slice(0, 2).join(', ');
      d.dirs = dirsOf(r, isTv);
      d.cast = ((r.credits && r.credits.cast) || []).slice(0, 10).map(function (c) { return [c.name, c.character || '', c.id || 0, c.profile_path || '']; });
      if (!isTv && r.runtime) d.runtime = Math.floor(r.runtime / 60) + 'h ' + (r.runtime % 60) + 'm';
      if (isTv) d.seasons = (r.seasons || []).filter(function (x) { return x.season_number > 0 && x.episode_count > 0; }).map(function (x) { return x.episode_count; });
      if (r.genres && r.genres.length) d.genres = r.genres.map(function (g) { return g.name; }).slice(0, 3);
      persist(key); var cv = cur(); if (cv.v === 'details' && cv.key === key) render();
    }).catch(function () { d.rich = false; });
  }
  function autofill() {
    var tEl = $('aTitle');
    if (!tEl || !window.claude || !window.claude.use) return;
    var title = tEl.value.trim();
    if (!title) { toast('Type a title first.'); tEl.focus(); return; }
    var yr = parseInt($('aYear').value, 10);
    var btn = $('aFill');
    if (btn) btn.disabled = true;
    setFill('Asking Claude. This can take up to a minute.');
    var ask = 'Reply with only one JSON object describing the film or series titled ' + JSON.stringify(title) + (yr ? ' (released around ' + yr + ')' : '') +
      '. Use exactly these keys: "title" (official English title), "type" ("movie" or "series"), "year" (first release year, a number), ' +
      '"industry" (one of "Bollywood", "Tollywood", "Kollywood", "Mollywood", "Sandalwood", "Regional", "Hollywood", "Dhallywood", "Other"), "genres" (up to 3 genre names), ' +
      '"director" (director, or creator for a series), "cast" (up to 6 main actor names), "imdb" (IMDb rating as a number, or null), ' +
      '"seasons" (for a series only, an array with the episode count of each season you are sure about, otherwise an empty array), ' +
      '"overview" (one or two sentences in your own words). If you do not recognise the title, or are unsure of a field, use null, "" or [] for it. Never invent people, numbers or plot details.';
    window.claude.use('sample').then(function (sample) {
      if (!sample) throw { code: 'not_granted' };
      return sample.json(ask);
    }).then(function (r) {
      if (!$('aTitle')) return;
      if (!r || typeof r !== 'object') throw { code: 'invalid_json' };
      var set = function (id, v) { var el = $(id); if (el && v !== null && v !== undefined && String(v).trim() !== '') el.value = v; };
      var filled = 0;
      if (typeof r.title === 'string') set('aTitle', r.title);
      if (r.type === 'movie' || r.type === 'series') $('aType').value = r.type;
      if (Number(r.year) > 1880 && Number(r.year) < 2100) { set('aYear', Math.round(Number(r.year))); filled++; }
      if (INDUSTRIES.indexOf(r.industry) !== -1) $('aInd').value = r.industry;
      if (Array.isArray(r.genres) && r.genres.length) { set('aGenres', r.genres.slice(0, 3).join(', ')); filled++; }
      if (typeof r.director === 'string' && r.director) { set('aDir', r.director); filled++; }
      if (Array.isArray(r.cast) && r.cast.length) { set('aCast', r.cast.slice(0, 6).join(', ')); filled++; }
      if (Number(r.imdb) > 0 && Number(r.imdb) <= 10) set('aImdb', Number(r.imdb).toFixed(1));
      if (Array.isArray(r.seasons) && r.seasons.length && r.type === 'series') set('aSeasons', r.seasons.join(', '));
      if (typeof r.overview === 'string') set('aOverview', r.overview);
      setFill(filled ? 'Filled from Claude. This is not a live database, so check each field before saving.' : 'Claude did not recognise that title. Fill in the details yourself.');
    }).catch(function (e) {
      var c = e && e.code;
      setFill(c === 'not_granted' || c === 'sampling_disabled' ? 'Claude is not available here. Fill in the details yourself.' :
        c === 'rate_limited' ? 'Too many requests. Try again in a little while.' : 'Could not get details. Fill them in yourself or try again.');
    }).then(function () { var b = $('aFill'); if (b) b.disabled = false; });
  }
  function getItem(key) { return allItems().filter(function (i) { return i.key === key; })[0]; }
  function recommend(its) {
    var seed = its.filter(function (i) { return i.watched || i.loved; });
    var cand = its.filter(function (i) { return !i.watched; });
    if (!seed.length) return cand.sort(function (a, b) { return (b.imdb || 0) - (a.imdb || 0); });
    var gw = {}, dw = {};
    seed.forEach(function (s) {
      var w = s.loved ? 2 : 1;
      s.genres.forEach(function (g) { gw[g] = (gw[g] || 0) + w; });
      if (s.director) dw[s.director] = (dw[s.director] || 0) + w;
    });
    cand.forEach(function (c) {
      var sc = 0;
      c.genres.forEach(function (g) { sc += gw[g] || 0; });
      sc += (dw[c.director] || 0) * 2;
      c.score = sc + (c.imdb || 0) / 4;
    });
    return cand.sort(function (a, b) { return b.score - a.score; });
  }
  function toggle(key, f) {
    var it = getItem(key);
    if (!it) return;
    var d = docs.get(key);
    d = d ? Object.assign({}, d) : { kind: 'c', want: false, watched: false, loved: false };
    if (!it.want) d.want = false;
    var msg;
    /* while a title is on the Watchlist, Watched and Loved stay locked until it is taken off */
    if (it.want && f !== 'want') { toast('Remove it from Watchlist first.'); return; }
    if (f === 'watched' && it.hasEps) {
      if (it.watched) { setAllEps(key, false); return; }
      d.want = false; d.ts = Date.now(); docs.set(key, d);
      setAllEps(key, true); return;
    }
    if (f === 'want') {
      if (it.want) { d.want = false; msg = 'Removed from Watchlist.'; }
      else {
        d.want = true; d.watched = false; d.loved = false;
        if (it.hasEps && it.watched) {
          materialize(it, d);
          d.seasons.forEach(function (n, i) { d.w[String(i + 1)] = '0'.repeat(n); });
        }
        msg = 'Added to Watchlist.';
      }
    } else if (f === 'watched') {
      d.watched = !it.watched; msg = d.watched ? 'Marked as watched.' : 'Removed from Watched.';
    } else {
      d.loved = !it.loved; msg = d.loved ? 'Added to Favorites.' : 'Removed from Favorites.';
    }
    d.ts = Date.now();
    docs.set(key, d);
    persist(key);
    render();
    toast(msg);
  }

  /* ---------- theme ---------- */
  function applyTheme(p) {
    var r = document.documentElement;
    if (p === 'dark' || p === 'light') r.setAttribute('data-theme', p); else r.removeAttribute('data-theme');
    try { if (window.RVNative) window.RVNative.setBars(isDarkNow()); } catch (e) {}
  }
  function fxPref() { return 'full'; }
  function applyFx(f) { var r = document.documentElement; if (f === 'lite') r.setAttribute('data-fx', 'lite'); else r.removeAttribute('data-fx'); }
  try { applyFx(fxPref()); } catch (e) {}
  try { var __mq = window.matchMedia && matchMedia('(prefers-color-scheme: dark)'); var __mf = function () { if (themePref() === 'system') { try { if (window.RVNative) window.RVNative.setBars(isDarkNow()); } catch (e) {} } }; if (__mq) { if (__mq.addEventListener) __mq.addEventListener('change', __mf); else if (__mq.addListener) __mq.addListener(__mf); } } catch (e) {}
  setTimeout(function () { nativeInit(); geoInit(); }, 0);
  function isDarkNow() { var p = themePref(); if (p === 'dark') return true; if (p === 'light') return false; try { return !!(window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches); } catch (e) { return true; } }
  function nativeInit() {
    try {
      var root = document.documentElement;
      var apply = function (t, b) { root.style.setProperty('--sat', (t || 0) + 'px'); root.style.setProperty('--sab', (b || 0) + 'px'); };
      window.rvInsets = apply;
      if (window.RVNative) {
        var iv = String(window.RVNative.insets() || '0,0').split(','); apply(+iv[0], +iv[1]);
        window.RVNative.setBars(isDarkNow());
        setTimeout(function () { var q = String(window.RVNative.insets() || '0,0').split(','); apply(+q[0], +q[1]); }, 600);
        document.addEventListener('focusin', function (e) { var t = e.target; if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) setTimeout(function () { try { t.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (x) {} }, 350); });
      }
      if (!document.getElementById('sbScrim')) { var d = document.createElement('div'); d.id = 'sbScrim'; document.body.appendChild(d); }
    } catch (e) {}
  }
  function themePref() { return lsGet(LS_THEME) || 'system'; }
  function setProfile(patch) {
    var p = Object.assign({ kind: 'p' }, docs.get('profile') || {}, patch);
    docs.set('profile', p);
    persist('profile');
  }

  /* ---------- view pieces ---------- */
  function poster(it, wide, extra) {
    var img = it.poster ? '<img src="' + it.poster + '" alt="" loading="lazy" decoding="async">' : '';
    var inner = img || ('<span class="p-year">' + (it.year || '') + '</span><span class="p-title">' + esc(it.short) + '</span>');
    return '<div class="poster m-' + it.motif + (it.poster ? ' has-img' : '') + (wide ? ' wide' : '') + (extra ? ' ' + extra : '') +
      '" style="--h:' + it.hue + ';--h2:' + it.hue2 + '" role="img" aria-label="' + esc(it.title) + ' poster">' + inner + '</div>';
  }
  function qbadge(it) {
    var q = function (f, on, icn, lab) {
      return '<span class="qbn q-' + f + (on ? ' on' : '') + (it.want && f !== 'want' ? ' lock' : '') + '" role="button" data-act="toggle" data-f="' + f + '" data-key="' + it.key + '" aria-pressed="' + (on ? 'true' : 'false') + '"' + (it.want && f !== 'want' ? ' aria-disabled="true"' : '') + ' aria-label="' + lab + '">' + icn + '</span>';
    };
    return '<span class="qb">' + q('want', it.want, ic('bookmark', '', it.want), it.want ? 'Remove from Watchlist' : 'Add to Watchlist') +
      q('watched', it.watched, ic('check'), it.watched ? 'Remove from Watched' : 'Mark as watched') +
      q('loved', it.loved, ic('heart', '', it.loved), it.loved ? 'Remove from Favorites' : 'Add to Favorites') + '</span>';
  }
  function tile(it) {
    var badge = qbadge(it);
    return '<button type="button" class="tile" data-act="open" data-key="' + it.key + '"><div class="poster-wrap">' + poster(it) + badge + pbar(it) + '</div>' +
      '<span class="tile-t">' + esc(it.short) + '</span><span class="tile-y">' + (it.year || '') + '</span></button>';
  }
  function avatar(big) {
    var inner = ui.me.avatar ? '<img src="' + esc(ui.me.avatar) + '" alt="">' : ic('user');
    return inner;
  }
  function bar(title) {
    return '<header class="bar"><button type="button" class="avatar-btn" data-act="profile" aria-label="Profile">' + avatar() + '</button>' +
      '<h1 class="bar-t">' + esc(title) + '</h1><button type="button" class="iconbtn" data-act="search" aria-label="Search">' + ic('search') + '</button></header>';
  }
  function subBar(title, right) {
    return '<header class="bar"><button type="button" class="iconbtn" data-act="back" aria-label="Back">' + ic('back') + '</button><h1 class="bar-t">' + esc(title) + '</h1>' + (right || '') + '</header>';
  }
  function section(title, kind, its) {
    return '<section class="sec"><div class="sec-h"><h2>' + title + '</h2><button type="button" class="link" data-act="grid" data-k="' + kind + '">See all' + ic('chev') + '</button></div>' +
      '<div class="row-h">' + its.map(tile).join('') + '</div></section>';
  }
  function chipsRow(list, active) {
    return '<div class="chips" role="group" aria-label="Filter">' + list.map(function (c) {
      return '<button type="button" class="chip" data-act="chip" data-c="' + c[0] + '" aria-pressed="' + (c[0] === active) + '">' + esc(c[1]) + '</button>';
    }).join('') + '</div>';
  }
  function greet() { var h = new Date().getHours(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; }
  var PC = {}; try { PC = JSON.parse(lsGet('reelvault.pc') || '{}') || {}; } catch (e) { PC = {}; }
  function savePC() { try { lsSet('reelvault.pc', JSON.stringify(PC)); } catch (e) {} }
  function picInner(n, pth) { return pth ? '<img src="https://image.tmdb.org/t/p/w185' + esc(pth) + '" alt="" loading="lazy">' : esc(initials(n)); }
  function person(n, role, id, pth) {
    var c = PC[n] || {}, pp = pth || c.p || '', pid = id || c.id || 0;
    return '<button type="button" class="cast" data-act="person" data-name="' + esc(n) + '" data-id="' + pid + '"><span class="pic" data-pn="' + esc(n) + '"' + (pp ? ' data-done="1"' : '') + ' style="--ph:' + hueOf(n) + '">' + picInner(n, pp) + '</span><b>' + esc(n) + '</b>' + (role ? '<small>' + esc(role) + '</small>' : '') + '</button>';
  }
  function picsFill() {
    if (!tmKey()) return;
    var els = Array.prototype.slice.call(document.querySelectorAll('.pic[data-pn]:not([data-done])')), i = 0;
    function put(el, n) { var c = PC[n]; el.setAttribute('data-done', '1'); if (c && c.p) el.innerHTML = picInner(n, c.p); var b = el.closest('[data-act=person]'); if (b && c && c.id && !Number(b.getAttribute('data-id'))) b.setAttribute('data-id', c.id); }
    function next() {
      if (i >= els.length) return;
      var el = els[i++], n = el.getAttribute('data-pn');
      if (PC[n]) { put(el, n); return next(); }
      return tmGet('/search/person', 'include_adult=false&query=' + encodeURIComponent(n)).then(function (r) {
        var m = (r.results || [])[0]; PC[n] = m ? { id: m.id, p: m.profile_path || '' } : { id: 0, p: '' }; savePC();
      }).catch(function () {}).then(function () { if (PC[n]) put(el, n); return next(); });
    }
    next(); next(); next(); next();
  }
  var PP = {};
  function personHtml(v) {
    var d = PP[v.id];
    if (v.err) return '<p class="note">' + esc(v.err) + '</p>';
    if (!d) return '<p class="note">Loading...</p>';
    var cc = d.combined_credits || { cast: [], crew: [] }, f = v.pf || 'all', seen = {}, list = [], today = new Date().toISOString().slice(0, 10);
    function add(x, role, kind) {
      if (x.media_type !== 'movie' && x.media_type !== 'tv') return;
      if (x.media_type === 'tv' && ((x.genre_ids || []).indexOf(10767) !== -1 || (x.genre_ids || []).indexOf(10763) !== -1 || /^(self|himself|herself)/i.test(x.character || ''))) return;
      var k = x.media_type + x.id; if (seen[k]) return; seen[k] = 1;
      list.push({ id: x.id, mt: x.media_type, t: x.title || x.name || '', date: x.release_date || x.first_air_date || '', p: x.poster_path || '', role: role, kind: kind });
    }
    if (f !== 'dir') (cc.cast || []).forEach(function (x) { add(x, x.character || '', 'act'); });
    if (f !== 'act') (cc.crew || []).forEach(function (x) { if (x.job === 'Director') add(x, 'Director', 'dir'); });
    list.sort(function (a, b) { return a.date && b.date ? (a.date < b.date ? 1 : -1) : (a.date ? -1 : b.date ? 1 : 0); });
    var born = d.birthday ? String(d.birthday).slice(0, 4) : '';
    var h = '<section class="who"><div class="avatar-btn big" style="overflow:hidden">' + (d.profile_path ? '<img src="https://image.tmdb.org/t/p/w185' + esc(d.profile_path) + '" alt="" style="width:100%;height:100%;object-fit:cover">' : esc(initials(d.name))) + '</div>' +
      '<h1>' + esc(d.name) + '</h1><p>' + esc([d.known_for_department, born ? 'Born ' + born : '', d.place_of_birth || ''].filter(Boolean).join(' · ')) + '</p></section>';
    if (d.biography) h += '<p class="overview">' + esc(String(d.biography).slice(0, 420)) + (d.biography.length > 420 ? '...' : '') + '</p>';
    h += '<div class="chips" role="group" aria-label="Credits">' + [['all', 'All'], ['act', 'Acting'], ['dir', 'Directing']].map(function (c) {
      return '<button type="button" class="chip" data-act="pchip" data-c="' + c[0] + '" aria-pressed="' + (f === c[0]) + '">' + c[1] + '</button>'; }).join('') + '</div>';
    if (!list.length) return h + '<p class="note">No titles found.</p>';
    var lim = v.lim || 60;
    h += '<p class="note">' + list.length + ' titles. Tap one to open it.</p><div class="grid">' + list.slice(0, lim).map(function (r) {
      var hh = hueOf(r.t), y = r.date ? r.date.slice(0, 4) : '';
      var img = r.p ? '<div class="poster has-img"><img src="https://image.tmdb.org/t/p/w342' + r.p + '" alt="" loading="lazy" decoding="async"></div>' :
        '<div class="poster m-beam" style="--h:' + hh + ';--h2:' + ((hh + 40) % 360) + '"><span class="p-year">' + y + '</span><span class="p-title">' + esc(r.t) + '</span></div>';
      return '<button type="button" class="tile" data-act="tm-open" data-id="' + r.id + '" data-mt="' + r.mt + '"><div class="poster-wrap">' + img + '</div><span class="tile-t">' + esc(r.t) + '</span><span class="tile-y">' +
        esc([y, r.role].filter(Boolean).join(' · ')) + '</span></button>';
    }).join('') + '</div>';
    if (list.length > lim) h += '<div style="margin-top:14px"><button type="button" class="btn alt full" data-act="more">Show more (' + (list.length - lim) + ' left)</button></div>';
    return h;
  }
  function personDraw() { var v = cur(); var el = $('pwrap'); if (v.v === 'person' && el) el.innerHTML = personHtml(v); }
  function personLoad(v) {
    if (!tmKey()) { v.err = 'TMDB is not available.'; personDraw(); return; }
    var fetchIt = function (id) {
      v.id = id;
      if (PP[id]) { personDraw(); return; }
      tmGet('/person/' + id, 'append_to_response=combined_credits').then(function (r) { PP[id] = r; }).catch(function () { v.err = 'Could not load this person. Check your internet.'; }).then(personDraw);
    };
    if (Number(v.id)) { fetchIt(Number(v.id)); return; }
    var c = PC[v.name];
    if (c && c.id) { fetchIt(c.id); return; }
    tmGet('/search/person', 'include_adult=false&query=' + encodeURIComponent(v.name)).then(function (r) {
      var m = (r.results || [])[0]; if (!m) { v.err = 'Nobody found with that name.'; personDraw(); return; }
      PC[v.name] = { id: m.id, p: m.profile_path || '' }; savePC(); fetchIt(m.id);
    }).catch(function () { v.err = 'Could not load this person. Check your internet.'; personDraw(); });
  }
  function vPerson(v) { return subBar(v.name || 'Person') + '<div id="pwrap">' + personHtml(v) + '</div>'; }

  /* ---------- views ---------- */
  function vWelcome() {
    return '<section class="welcome">' + logoImg('logo') + '<h1>Movie <span>Vault</span></h1><p>Your cinema, your story.</p>' +
      '<p>Keep every movie and series you want to watch, have watched, and love in one place.</p>' +
      '<button type="button" class="btn" data-act="start">Get started</button></section>';
  }
  function vHome() {
    var its = allItems(), yr = new Date().getFullYear();
    var rcmp = function (a, b) { if (!!a.auto !== !!b.auto) return a.auto ? -1 : 1; var ra = a.rel || String(a.year), rb = b.rel || String(b.year); return rb < ra ? -1 : rb > ra ? 1 : 0; };
    var byRate = function (a, b) { return (b.imdb || 0) - (a.imdb || 0) || b.year - a.year; };
    var recs = recommend(its).slice(0, 14);
    var nowD = new Date(), mon = nowD.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    /* header: brand, quick tabs, search */
    var h = '<header class="jh"><div class="jtop"><span class="wm big">' + logoImg('hlogo') + '<span>MOVIE <i>VAULT</i></span></span><span class="jgrp">' +
      '<button type="button" class="jic" data-act="grid" data-k="want" aria-label="Watchlist">' + ic('bookmark') + '</button>' +
      '<button type="button" class="jic avatar-btn" data-act="profile" aria-label="Profile">' + avatar() + '</button></span></div>' +
      '<button type="button" class="hsearch" data-act="search" aria-label="Search movies and TV shows">' + ic('search') + '<span>Search movies, TV shows, actors...</span></button>' +
      '<div class="jtabs"><button type="button" class="on" data-act="grid" data-k="th">' + ic('ticket') + 'Theaters</button><button type="button" data-act="grid" data-k="new">' + ic('spark') + 'New</button><button type="button" data-act="grid" data-k="top">' + ic('flame') + 'Popular</button>' +
      '<button type="button" data-act="grid" data-k="series">' + ic('clap') + 'Series</button><button type="button" data-act="settings">' + ic('gear') + 'Settings</button>' +
      '</div></header>';
    var hpool = its.filter(function (i) { return i.poster && i.year >= yr - 2 && (i.imdb || 0) >= 6; }).sort(byRate).slice(0, 10);
    var hi = hpool.length ? hpool[nowD.getDate() % hpool.length] : null;
    h += '<section class="dhero">' + (hi ? '<img class="dh-img" src="' + esc(hi.poster) + '" alt="" decoding="async">' : '') +
      '<div class="dh-t"><small>Discover daily</small><h1>' + greet() + ',<br>' + esc(ui.me.name || 'Movie lover') + ' <span aria-hidden="true">\ud83d\udc4b</span></h1><p>Find something great to watch today</p></div>' +
      '<button type="button" class="dbadge" data-act="online" aria-label="Discover online"><small>' + mon + '</small><b>' + nowD.getDate() + '</b></button></section>';
    var insAt = h.length;
    h += continueRow(its);
    /* today's charts: swipe between industries */
    var cols = [['Bollywood', function (i) { return i.industry === 'Bollywood'; }], ['Tollywood', function (i) { return i.industry === 'Tollywood'; }], ['Kollywood', function (i) { return i.industry === 'Kollywood'; }], ['Mollywood', function (i) { return i.industry === 'Mollywood'; }], ['Sandalwood', function (i) { return i.industry === 'Sandalwood'; }],
      ['Hollywood', function (i) { return i.industry === 'Hollywood' && i.type !== 'series'; }], ['Dhallywood', function (i) { return i.industry === 'Dhallywood'; }], ['Web series', function (i) { return i.type === 'series'; }]];
    var cards = cols.map(function (c) {
      var l = its.filter(c[1]).sort(function (a, b) { return (b.year >= yr - 2 ? 1 : 0) - (a.year >= yr - 2 ? 1 : 0) || byRate(a, b); }).slice(0, 3);
      if (l.length < 3) return '';
      return '<div class="ccard"><div class="chead"><b>' + c[0] + '</b></div>' + l.map(function (i, n) {
        return '<button type="button" class="cr2" data-act="open" data-key="' + i.key + '"><span class="bign">' + (n + 1) + '</span>' + poster(i, false, 'mini') + '<span class="cb2"><b>' + esc(i.title) + '</b><small>' + esc(i.year + (i.imdb ? ' · ' + i.imdb.toFixed(1) : '')) + '</small></span></button>';
      }).join('') + '</div>';
    }).join('');
    if (cards) h += '<section class="hsec"><h2 class="hh2">Today\'s charts</h2><div class="hrow2 snap">' + cards + '</div></section>';
    /* spotlight cards */
    var spot = its.filter(function (i) { return i.year >= yr - 2 && (i.imdb || 0) >= 6; }).sort(byRate).slice(0, 7);
    if (spot.length < 3) spot = its.filter(function (i) { return (i.imdb || 0) >= 7; }).sort(function (a, b) { return b.year - a.year || byRate(a, b); }).slice(0, 7);
    if (spot.length >= 3) h += '<section class="hsec"><div class="hrow2 snap">' + spot.map(function (i) {
      var tag = i.year >= yr ? 'New release' : (i.imdb >= 8 ? 'Highly rated' : 'Trending');
      return '<button type="button" class="spot" data-act="open" data-key="' + i.key + '"><span class="spbg" aria-hidden="true">' + poster(i) + '</span><span class="sptag">' + tag + '</span>' +
        '<span class="spp">' + poster(i, false, 'mini') + '</span><span class="spb"><small>' + esc([i.year, i.runtime].filter(Boolean).join(' · ')) + '</small><b>' + esc(i.title) + '</b>' +
        '<small>' + (i.type === 'series' ? '(Series)' : esc(i.genres.slice(0, 2).join(' · '))) + '</small>' +
        (i.imdb ? '<em class="imdb">IMDb ' + i.imdb.toFixed(1) + '</em>' : '') + '<span class="spgo">View details</span></span></button>';
    }).join('') + '</div></section>';
    var tl = function (it) {
      var tg = '';
      if (it.type === 'series') tg += '<span class="ptag tv">TV</span>';
      if (it.th >= 0) tg += '<span class="ptag th">' + ic('ticket') + 'In Theaters</span>';
      else if (it.ott >= 0) tg += '<span class="ptag ot">' + ic('playc') + esc(it.ottp || 'New on OTT') + '</span>';
      else if (it.year >= yr && !it.watched) tg += '<span class="ptag nw">New</span>';
      var badge = qbadge(it);
      return '<button type="button" class="tile" data-act="open" data-key="' + it.key + '"><div class="poster-wrap">' + poster(it) + badge + pbar(it) + tg + '</div>' +
        '<span class="tile-t">' + esc(it.short) + '</span><span class="tile-y">' + (it.year || '') + (it.imdb ? ' · ' + it.imdb.toFixed(1) : '') + '</span></button>';
    };
    var hs = function (title, attrs, l) {
      return '<section class="hsec"><div class="sec-h"><h2 class="hh2">' + title + '</h2><button type="button" class="link" ' + attrs + '>See all' + ic('chev') + '</button></div><div class="row-h big snap">' + l.map(tl).join('') + '</div></section>';
    };
    /* Home order: In Theaters, New on OTT, Trending, Bollywood, Hollywood, Dhallywood, Indian Cinema, World Top Movies, World Top Series. A title shows once in these rows. */
    var shown = {};
    var take = function (l, n) { var o = []; for (var q = 0; q < l.length && o.length < n; q++) { if (!shown[l[q].key]) { shown[l[q].key] = 1; o.push(l[q]); } } return o; };
    var top2 = '', add = function (title, attrs, l, min) { if (l.length >= (min || 3)) top2 += hs(title, attrs, l); };
    add('In Theaters', 'data-act="grid" data-k="th"', take(its.filter(function (i) { return i.th >= 0 && !i.watched; }).sort(byTh), 16), 1);
    add('New on OTT', 'data-act="grid" data-k="ott"', take(its.filter(function (i) { return i.ott >= 0 && i.th < 0 && !i.watched; }).sort(byOtt), 16), 1);
    add('Trending', 'data-act="grid" data-k="inn"', take(its.filter(function (i) { return i.inn >= 0 && !i.watched; }).sort(function (a, b) { return a.inn - b.inn; }), 16));
    add('Bollywood', 'data-act="grid" data-k="ind" data-ind="Bollywood"', take(its.filter(function (i) { return i.industry === 'Bollywood' && i.year >= yr - 3 && !i.watched; }).sort(rcmp), 14));
    add('Hollywood', 'data-act="grid" data-k="ind" data-ind="Hollywood"', take(its.filter(function (i) { return i.industry === 'Hollywood' && i.type !== 'series' && i.year >= yr - 3 && !i.watched; }).sort(rcmp), 14));
    add('Dhallywood', 'data-act="grid" data-k="ind" data-ind="Dhallywood"', take(its.filter(function (i) { return i.industry === 'Dhallywood' && !i.watched; }).sort(rcmp), 14));
    var grp = IN_IND.map(function (nm) { return its.filter(function (i) { return i.industry === nm && i.year >= yr - 3 && !i.watched && !shown[i.key]; }).sort(rcmp); });
    var mix = [], gi = 0, more = true;
    while (more && mix.length < 16) { more = false; grp.forEach(function (g2) { if (gi < g2.length && mix.length < 16) { mix.push(g2[gi]); more = true; } }); gi++; }
    add('Indian Cinema', 'data-act="grid" data-k="indall"', take(mix, 16));
    add('World Top Movies', 'data-act="grid" data-k="wtm"', take(its.filter(function (i) { return i.wtm >= 0 && !i.watched; }).sort(function (a, b) { return a.wtm - b.wtm; }), 16));
    add('World Top Series', 'data-act="grid" data-k="wts"', take(its.filter(function (i) { return i.wts >= 0 && !i.watched; }).sort(function (a, b) { return a.wts - b.wts; }), 16));
    /* Continue watching and the other discover sections come after these */
    h = h.slice(0, insAt) + top2 + h.slice(insAt);
    var isIn = function (i) { return IN_IND.indexOf(i.industry) !== -1 ? 0 : 1; };
    var fresh = its.filter(function (i) { return i.year >= 2023 && !i.watched; }).sort(function (a, b) { return crank(a) - crank(b) || isIn(a) - isIn(b) || rcmp(a, b); }).slice(0, 16);
    if (fresh.length) h += hs('New releases', 'data-act="grid" data-k="new"', fresh);
    /* top 10 list */
    var t10 = its.filter(function (i) { return i.year >= yr - 3 && (i.imdb || 0) >= 5; }).sort(byRate).slice(0, 10);
    if (t10.length >= 5) h += '<section class="hsec"><h2 class="hh2">Top 10 today</h2><div class="t10">' + t10.map(function (i, n) {
      return '<button type="button" class="t10r" data-act="open" data-key="' + i.key + '"><span class="bign' + (n === 9 ? ' two' : '') + '">' + (n + 1) + '</span>' + poster(i, false, 'mini') + '<span class="cb2"><b>' + esc(i.title) + '</b><small>' + esc([i.year, i.genres.slice(0, 2).join(', ')].filter(Boolean).join(' · ')) + '</small></span></button>';
    }).join('') + '</div></section>';
    var has = function (i) { var a = arguments; for (var k = 1; k < a.length; k++) if (i.genres.indexOf(a[k]) === -1) return false; return true; };
    var rows = [
      ['Dramedies', 'data-act="grid" data-k="gen" data-g="Comedy"', function (i) { return has(i, 'Comedy', 'Drama'); }],
      ['Free to enjoy: family & animation', 'data-act="grid" data-k="gen" data-g="Family"', function (i) { return has(i, 'Family') || has(i, 'Animation'); }],
      ['Top drama movies', 'data-act="grid" data-k="gen" data-g="Drama"', function (i) { return has(i, 'Drama') && i.type !== 'series'; }],
      ['Dark fantasy', 'data-act="grid" data-k="gen" data-g="Fantasy"', function (i) { return has(i, 'Fantasy') || (has(i, 'Horror') && has(i, 'Mystery')); }],
      ['Psychological thrillers', 'data-act="grid" data-k="gen" data-g="Thriller"', function (i) { return has(i, 'Thriller') && (has(i, 'Mystery') || has(i, 'Drama') || has(i, 'Crime')); }],
      ['Top mystery & thriller', 'data-act="grid" data-k="gen" data-g="Mystery"', function (i) { return has(i, 'Mystery') || has(i, 'Thriller'); }],
      ['Cerebral', 'data-act="grid" data-k="gen" data-g="Sci-Fi"', function (i) { return has(i, 'Sci-Fi') && (has(i, 'Mystery') || has(i, 'Drama') || has(i, 'Thriller')); }],
      ['Action & adrenaline', 'data-act="grid" data-k="gen" data-g="Action"', function (i) { return has(i, 'Action'); }],
      ['Laugh out loud', 'data-act="grid" data-k="gen" data-g="Comedy"', function (i) { return has(i, 'Comedy'); }],
      ['Top horror', 'data-act="grid" data-k="gen" data-g="Horror"', function (i) { return has(i, 'Horror'); }],
      ['Romance', 'data-act="grid" data-k="gen" data-g="Romance"', function (i) { return has(i, 'Romance'); }],
      ['Crime stories', 'data-act="grid" data-k="gen" data-g="Crime"', function (i) { return has(i, 'Crime'); }],
      ['Adventure', 'data-act="grid" data-k="gen" data-g="Adventure"', function (i) { return has(i, 'Adventure'); }]
    ];
    rows.forEach(function (r, n) {
      var l = its.filter(function (i) { return r[2](i) && !i.watched; }).sort(byRate).slice(0, 14);
      if (l.length >= 4) h += hs(r[0], r[1], l);
      if (n === 0) h += industryRow();
    });
    if (recs.length) h += hs('Recommended for you', 'data-act="grid" data-k="recs"', recs);
    return h;
  }
  var GRID = {
    inn: 'Trending', wtm: 'World Top Movies', wts: 'World Top Series', indall: 'Indian Cinema',
    new: 'New Releases', th: 'In Theaters', ott: 'New on OTT', want: 'Watchlist', watched: 'Watched', loved: 'Favorites', top: 'Top Rated', series: 'Top web series', recs: 'Recommended for You'
  };
  var GENRES = ['Action', 'Thriller', 'Comedy', 'Sci-Fi', 'Drama', 'Animation'];
  function vGrid(v) {
    var its = allItems(), list, chips = '', empty;
    var tab = v.k === 'new' || v.k === 'want' || v.k === 'watched';
    if (v.k === 'new') {
      var c = v.chip || 'unwatched';
      list = its.filter(function (i) { return i.year >= 2023; });
      if (c === 'th') list = list.filter(function (i) { return i.th >= 0; });
      else if (c === 'ott') list = list.filter(function (i) { return i.ott >= 0; });
      else if (c === 'unwatched') list = list.filter(function (i) { return !i.watched; });
      else if (c !== 'all') list = list.filter(function (i) { return i.genres.indexOf(c) !== -1; });
      list.sort(function (a, b) { if (crank(a) !== crank(b)) return crank(a) - crank(b); if (crank(a) === 0) return byTh(a, b); if (crank(a) === 1) return byOtt(a, b); if (!!a.auto !== !!b.auto) return a.auto ? -1 : 1; var ra = a.rel || String(a.year), rb = b.rel || String(b.year); return rb < ra ? -1 : rb > ra ? 1 : (b.imdb || 0) - (a.imdb || 0); });
      chips = chipsRow([['unwatched', 'Not Watched Yet'], ['th', 'In Theaters'], ['ott', 'New on OTT'], ['all', 'All']].concat(GENRES.map(function (g) { return [g, g]; })), c);
      empty = ['Nothing here', 'No recent titles match this filter.'];
    } else if (v.k === 'th' || v.k === 'ott') {
      var cc = v.chip || 'all', isT = v.k === 'th';
      list = its.filter(function (i) { return (isT ? i.th : i.ott) >= 0 && (cc === 'all' || i.type === cc || (!isT && i.ottp === cc)); }).sort(isT ? byTh : byOtt);
      var pvs = []; if (!isT) its.forEach(function (i) { if (i.ott >= 0 && i.ottp && pvs.indexOf(i.ottp) === -1) pvs.push(i.ottp); });
      chips = chipsRow([['all', 'All'], ['movie', 'Movies'], ['series', 'Series']].concat(pvs.map(function (n) { return [n, n]; })), cc);
      empty = ['Nothing here yet', 'Titles will appear after the next sync.'];
    } else if (v.k === 'inn' || v.k === 'wtm' || v.k === 'wts') {
      list = its.filter(function (i) { return i[v.k] >= 0; }).sort(function (a, b) { return a[v.k] - b[v.k]; });
      empty = ['Nothing here yet', 'Titles will appear after the next sync.'];
    } else if (v.k === 'indall') {
      var ic2 = v.chip || 'all', CH = { Hindi: ['Bollywood'], Tamil: ['Kollywood'], Telugu: ['Tollywood'], Malayalam: ['Mollywood'], Kannada: ['Sandalwood'], Regional: ['Regional'] };
      list = its.filter(function (i) { return IN_IND.indexOf(i.industry) !== -1 && (ic2 === 'all' || (CH[ic2] && CH[ic2].indexOf(i.industry) !== -1)); }).sort(function (a, b) { var ra = a.rel || String(a.year), rb = b.rel || String(b.year); return rb < ra ? -1 : rb > ra ? 1 : 0; });
      chips = chipsRow([['all', 'All'], ['Hindi', 'Hindi'], ['Tamil', 'Tamil'], ['Telugu', 'Telugu'], ['Malayalam', 'Malayalam'], ['Kannada', 'Kannada'], ['Regional', 'Bengali, Marathi, Punjabi & more']], ic2);
      empty = ['Nothing here yet', 'Titles will appear after the next sync.'];
    } else if (v.k === 'want') {
      list = its.filter(function (i) { return i.want; }).sort(function (a, b) { return b.ts - a.ts; });
      empty = ['Your watchlist is empty', 'Open any title and tap Want to Watch to save it here.'];
    } else if (v.k === 'watched') {
      var w = v.chip || 'all';
      list = its.filter(function (i) { return w === 'progress' ? i.watching : (i.watched && (w === 'all' || i.loved)); }).sort(function (a, b) { return b.ts - a.ts; });
      chips = chipsRow([['all', 'All'], ['loved', 'Loved'], ['progress', 'In Progress']], w);
      empty = w === 'progress' ? ['Nothing in progress', 'Mark an episode of a series to see it here.'] : ['Nothing watched yet', 'Open any title and tap Watched to mark it.'];
    } else if (v.k === 'loved') {
      list = its.filter(function (i) { return i.loved; }).sort(function (a, b) { return b.ts - a.ts; });
      empty = ['No favorites yet', 'Tap Love it on a title to add it here.'];
    } else if (v.k === 'ind') {
      var kind = v.chip || 'all';
      list = its.filter(function (i) { return i.industry === v.ind && (kind === 'all' || i.type === kind); })
        .sort(function (a, b) { return (b.imdb || 0) - (a.imdb || 0) || b.year - a.year; });
      chips = chipsRow([['all', 'All'], ['movie', 'Movies'], ['series', 'Series']], kind);
      empty = ['Nothing here yet', 'Add a title from the search screen and choose ' + esc(v.ind) + ' as its industry.'];
    } else if (v.k === 'gen') {
      list = its.filter(function (i) { return i.genres.indexOf(v.g) !== -1; }).sort(function (a, b) { return (b.imdb || 0) - (a.imdb || 0) || b.year - a.year; });
      empty = ['Nothing here yet', ''];
    } else if (v.k === 'series') {
      list = its.filter(function (i) { return i.type === 'series'; }).sort(function (a, b) { return (b.imdb || 0) - (a.imdb || 0) || b.year - a.year; });
      empty = ['No series yet', ''];
    } else if (v.k === 'top') {
      list = its.sort(function (a, b) { return (b.imdb || 0) - (a.imdb || 0); });
      empty = ['Nothing here', ''];
    } else {
      list = recommend(its);
      empty = ['Nothing to recommend', 'Mark a few titles as watched or loved and picks will appear.'];
    }
    var gt = v.k === 'ind' ? v.ind : v.k === 'gen' ? v.g : GRID[v.k];
    var h = tab ? bar(gt) : subBar(gt);
    h += chips;
    if (!list.length) h += '<div class="empty"><h2>' + empty[0] + '</h2><p>' + empty[1] + '</p></div>';
    else {
      var lim = v.lim || 90;
      h += '<div class="grid">' + list.slice(0, lim).map(tile).join('') + '</div>';
      if (list.length > lim) h += '<div style="margin-top:14px"><button type="button" class="btn alt full" data-act="more">Show more (' + (list.length - lim) + ' left)</button></div>';
    }
    return h;
  }
  function actsHtml(it) {
    var tile = function (cls, f, on, icon, label) {
      return '<button type="button" class="act ' + cls + '" data-act="toggle" data-f="' + f + '" data-key="' + it.key + '" aria-pressed="' + on + '"' + (it.want && f !== 'want' ? ' aria-disabled="true"' : '') + '><span class="ai">' + icon + '</span><span class="al">' + label + '</span></button>';
    };
    return '<div class="acts live d4">' +
      tile('t-want', 'want', it.want, ic('bookmark', '', it.want), 'Watchlist') +
      tile('t-watched', 'watched', it.watched, ic('checkc'), 'Watched') +
      tile('t-loved', 'loved', it.loved, ic('heart', '', it.loved), 'Favorite') +
      '<button type="button" class="act t-share" data-act="share" data-key="' + it.key + '"><span class="ai">' + ic('share') + '</span><span class="al">Share</span></button>' +
      '</div>';
  }
  function vDetails(v) {
    var it = getItem(v.key);
    if (!it) return subBar('Not found') + '<div class="empty"><h2>This title is gone</h2><button type="button" class="btn" data-act="back">Go back</button></div>';
    var metaBits = [it.year || '', it.runtime, it.genres.slice(0, 3).join(', ')].filter(Boolean);
    var h = '<div class="hero" style="--h:' + it.hue + ';--h2:' + it.hue2 + '">' + poster(it) +
      '<div class="hero-top"><button type="button" class="iconbtn ghost" data-act="back" aria-label="Back">' + ic('back') + '</button>' +
      '<div class="grp"><button type="button" class="iconbtn ghost" data-act="share" data-key="' + it.key + '" aria-label="Share">' + ic('more') + '</button></div></div></div>';
    h += '<div class="dhead"><h1 id="dtTitle">' + esc(it.title) + '</h1><p class="meta chips-m">' + metaBits.map(function (m) { return '<span>' + esc(m) + '</span>'; }).join('') + '</p>';
    if (it.imdb) h += '<p class="rate">' + ic('star', '', true) + '<span>' + it.imdb.toFixed(1) + '/10 <small id="dtVotes"></small></span></p>';
    h += '</div>';
    h += actsHtml(it);
    h += '<section class="sec dcard wsec" id="pv-watch" hidden></section>';
    if (it.overview) h += '<section class="sec dcard"><div class="dc-h"><h2>Synopsis</h2></div><div class="synw"><p class="overview" id="dtSyn">' + esc(it.overview) + '</p>' +
      '<button type="button" class="syn-btn" data-act="syn-toggle" aria-label="Show more" aria-expanded="false">' + ic('chevd') + '</button></div></section>';
    h += '<section class="sec dcard" id="pv-vids" hidden></section>';
    h += '<section class="sec dcard" id="pv-about"></section>';
    h += seriesPanel(it);
    if (it.director) {
      var dn = it.director.split(',').map(function (x) { return x.trim(); }).filter(Boolean);
      h += '<section class="sec dcard"><div class="dc-h"><h2>' + (it.type === 'series' ? 'Created by' : 'Director') + '</h2></div><div class="dirrow">' + dn.map(function (n, i) {
        var dr = (it.dirs || []).filter(function (x) { return x[0] === n; })[0] || [];
        return person(n, it.type === 'series' ? 'Creator' : 'Director', dr[1], dr[2]); }).join('') + '</div></section>';
    }
    if (it.cast.length) h += '<section class="sec dcard"><div class="dc-h"><h2>Cast</h2></div><div class="cast-row">' + it.cast.map(function (c) { return person(c[0], c[1], c[2], c[3]); }).join('') + '</div></section>';
    h += '<section class="sec dcard" id="pv-sim" hidden></section>';
    if (!it.builtin) {
      h += ui.confirm === 'del:' + it.key
        ? '<div class="confirm"><span>Delete this title?</span><button type="button" class="btn" data-act="del-yes" data-key="' + it.key + '">Yes, delete</button><button type="button" class="btn alt" data-act="confirm-no">Keep</button></div>'
        : '<div class="tools"><button type="button" class="link danger" data-act="del-ask" data-key="' + it.key + '">Delete this title</button></div>';
    }
    return h;
  }
  function vSearch(v) {
    return subBar('Search') + '<div class="searchbox">' + ic('search') + '<label class="sr" for="q">Search titles, directors or actors</label>' +
      '<input type="search" id="q" placeholder="Title, director or actor" value="' + esc(v.q || '') + '" autocomplete="off"></div><div id="results">' + resultsHtml(v.q || '') + '</div>';
  }
  function resultsHtml(q) {
    q = q.trim().toLowerCase();
    var its = allItems();
    var out = q ? its.filter(function (i) {
      return i.title.toLowerCase().indexOf(q) !== -1 || i.director.toLowerCase().indexOf(q) !== -1 || i.industry.toLowerCase().indexOf(q) !== -1 ||
        i.cast.some(function (c) { return c[0].toLowerCase().indexOf(q) !== -1; });
    }) : [];
    var h = '';
    if (q && !out.length) h += '<p class="note">Not in the built-in catalog.</p>';
    else if (!q) h += '<p class="note">Search by title, director, actor or industry such as Bollywood or Dhallywood.</p>';
    else h += out.slice(0, 30).map(function (i) {
      var st = i.watched ? 'Watched' : i.want ? 'In watchlist' : '';
      return '<button type="button" class="res" data-act="open" data-key="' + i.key + '">' + poster(i, false, 'mini') + '<span class="res-body"><b>' + esc(i.title) + '</b><small>' +
        esc([i.year || '', i.genres.slice(0, 2).join(', '), st].filter(Boolean).join(' · ')) + '</small></span>' + ic('chev') + '</button>';
    }).join('');
    h += '<div id="tmres">' + tmHtml(q) + '</div>';
    var auto = !!(q && !out.length && ui.canFill);
    return h;
  }
  function v0q() { return (cur().q || '').trim(); }
  function vAdd(v) {
    var p = safeImg(ui.draft.poster);
    return subBar('Add a title') + '<form class="card" id="addForm" autocomplete="off">' +
      '<label class="f"><span>Title</span><input type="text" id="aTitle" maxlength="120" value="' + esc(v.t || '') + '" placeholder="Movie or series name"></label>' +
      (ui.canFill ? '<button type="button" class="btn alt" id="aFill" data-act="autofill">Auto-fill details with Claude</button><p class="fillmsg" id="fillmsg" role="status"></p>' : '') +
      '<div class="two"><label class="f"><span>Type</span><select id="aType"><option value="movie">Movie</option><option value="series">Series</option></select></label>' +
      '<label class="f"><span>Year</span><input type="number" id="aYear" inputmode="numeric" min="1888" max="2100" placeholder="2024"></label></div>' +
      '<label class="f"><span>Industry</span><select id="aInd">' + INDUSTRIES.map(function (n) { return '<option value="' + n + '">' + n + '</option>'; }).join('') + '</select></label>' +
      '<label class="f"><span>Episodes per season (series only)</span><input type="text" id="aSeasons" maxlength="120" inputmode="numeric" placeholder="8, 10, 10"></label>' +
      '<label class="f"><span>Genres (comma separated)</span><input type="text" id="aGenres" maxlength="80" placeholder="Action, Thriller"></label>' +
      '<label class="f"><span>Director or creator</span><input type="text" id="aDir" maxlength="80"></label>' +
      '<label class="f"><span>Cast (comma separated)</span><input type="text" id="aCast" maxlength="200" placeholder="Actor one, Actor two"></label>' +
      '<div class="two"><label class="f"><span>IMDb rating (0 to 10)</span><input type="number" id="aImdb" step="0.1" min="0" max="10" inputmode="decimal"></label>' +
      '<label class="f"><span>Add to</span><select id="aList"><option value="want">Watchlist</option><option value="watched">Watched</option><option value="">Just save</option></select></label></div>' +
      '<label class="f"><span>About</span><textarea id="aOverview" maxlength="400" placeholder="A line or two about the story"></textarea></label>' +
      '<div class="pv" id="pv">' + (p ? '<div class="poster has-img"><img src="' + p + '" alt=""></div>' : '') +
      '<button type="button" class="btn alt" data-act="poster" data-key="__draft">' + ic('camera') + ' ' + (p ? 'Change poster' : 'Add a poster') + '</button></div>' +
      '<button type="submit" class="btn">Save title</button></form>';
  }
  /* ---------- Material 3 building blocks ---------- */
  var GLOGO = '<svg class="glg" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3A12 12 0 1 1 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7A20 20 0 1 0 44 24c0-1.3-.1-2.6-.4-3.9z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8A12 12 0 0 1 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7A20 20 0 0 0 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.7 28l-6.5 5A20 20 0 0 0 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/></svg>';
  function mh(i, t, sub, tone) {
    return '<div class="mh"><span class="mi ' + (tone || '') + '">' + (i.charAt(0) === '<' ? i : ic(i)) + '</span><div class="mt"><b>' + t + '</b><small>' + sub + '</small></div></div>';
  }
  function mrow(i, t, sub, attrs, tone, right) {
    return '<button type="button" class="mrow" ' + attrs + '><span class="mi ' + (tone || '') + '">' + ic(i) + '</span><span class="mt"><b>' + t + '</b>' + (sub ? '<small>' + sub + '</small>' : '') + '</span>' + (right || ic('chev')) + '</button>';
  }
  function vSettings() {
    var tp = themePref(), nm = (ui.me && ui.me.name) || 'Movie lover';
    var seg = '<div class="seg m3seg" role="group" aria-label="Appearance">' + [['light', 'Light', 'sun'], ['dark', 'Dark', 'moon'], ['system', 'System', 'phone']].map(function (o) {
      return '<button type="button" data-act="theme-set" data-v="' + o[0] + '"' + (tp === o[0] ? ' class="on"' : '') + '>' + ic(o[2]) + o[1] + '</button>'; }).join('') + '</div>';
    var lang = '<label class="mrow lang"><span class="mi blue">' + ic('globe') + '</span><span class="mt"><b>Language</b><small>Choose your preferred language</small></span><select id="langSel">' + LANGS.map(function (l) { return '<option value="' + l[0] + '"' + (l[0] === langCode() ? ' selected' : '') + '>' + l[1] + '</option>'; }).join('') + '</select></label>';
    var h = '<header class="sbar"><button type="button" class="iconbtn" data-act="back" aria-label="Back">' + ic('back') + '</button><div class="st"><h1>Settings</h1><small>' + esc(nm) + '</small></div><button type="button" class="avatar-btn" data-act="profile" aria-label="Profile">' + avatar() + '</button></header>' +
      '<div class="mstack">' +
      '<section class="mcard">' + mh('palette', 'Appearance', 'Choose how Movie Vault looks') + seg + '</section>' +
      '<section class="mcard">' + mh('gear', 'Preferences', 'Personalize your experience') + '<div class="mgroup">' +
        mrow('user', 'Account &amp; Profile', 'Manage your account information', 'data-act="profile"') +
        mrow('bookmark', 'Saved Movies', 'View and manage your saved titles', 'data-act="grid" data-k="want"', 'blue') + lang + '</div></section>' +
      '<section class="mcard">' + mh('cloud', 'Online', 'Get the latest content') +
        '<button type="button" class="mrow tonal" data-act="sync-now"><span class="mi">' + ic('reset') + '</span><span class="mt"><b>Check for new releases now</b></span>' + ic('chev') + '</button>' +
        '<p class="mnote">Movie data, posters and new releases come from TMDB automatically.</p></section>' +
      clCard() + gdCard() +
      '<section class="mcard">' + mh('info', 'About', 'App information and actions') + '<div class="mgroup plain">' +
        mrow('reset', 'Check for updates', '', 'data-act="update"', 'plain', '<em>v' + APP_VERSION + '</em>' + ic('chev')) +
        mrow('info', 'About', '', 'data-act="about"', 'plain') + '</div>' +
        (ui.confirm === 'reset'
          ? '<div class="confirm"><span>Clear all lists and custom titles?</span><button type="button" class="btn" data-act="reset-yes">Yes, clear</button><button type="button" class="btn alt" data-act="confirm-no">Keep</button></div>'
          : '<button type="button" class="mrow danger" data-act="reset-ask"><span class="mi plain">' + ic('trash') + '</span><span class="mt"><b>Clear my lists</b></span>' + ic('chev') + '</button>') +
        (STANDALONE ? '<button type="button" class="mrow danger" data-act="logout"><span class="mi plain">' + ic('logout') + '</span><span class="mt"><b>Sign out</b></span>' + ic('chev') + '</button>' : '') +
      '</section></div><p class="sync">' + syncText() + '</p>';
    return h;
  }
  function syncText() {
    if (backend.col) return 'Saved to your account. Only you can see your lists.';
    return backend.failed ? 'Could not reach your account. Changes stay in this browser.' : 'Saved in this browser only.';
  }
  /* ---------- About, developer (GitHub) and update check ---------- */
  var APP_VERSION = '1.7.3', GH_USER = 'yourmostak2', GH_URL = 'https://github.com/yourmostak2', UPD_REPO = 'yourmostak2/movievaultapp';
  var GH = { d: null, busy: false, err: '' }, UPD = { busy: false, res: null, ts: 0 };
  try { var __g = JSON.parse(lsGet('reelvault.gh') || 'null'); if (__g && __g.d) GH.d = __g.d; GH.ts = (__g && __g.ts) || 0; } catch (e) {}
  function numFmt(n) { n = Number(n) || 0; return n >= 1000 ? (Math.round(n / 100) / 10) + 'k' : String(n); }
  function ghLoad(force) {
    if (GH.busy) return;
    if (!force && GH.d && Date.now() - (GH.ts || 0) < 6 * 3600 * 1000) return;
    GH.busy = true; GH.err = '';
    fetch('https://api.github.com/users/' + GH_USER, { headers: { Accept: 'application/vnd.github+json' } }).then(function (r) { if (!r.ok) throw new Error('http'); return r.json(); }).then(function (j) {
      GH.d = { login: j.login, name: j.name || j.login, bio: j.bio || '', avatar: j.avatar_url || '', repos: j.public_repos || 0, followers: j.followers || 0, following: j.following || 0, loc: j.location || '', url: j.html_url || GH_URL };
      GH.ts = Date.now(); try { lsSet('reelvault.gh', JSON.stringify({ d: GH.d, ts: GH.ts })); } catch (e) {}
    }).catch(function () { GH.err = 'Could not load the GitHub profile. Check your internet.'; })
      .then(function () { GH.busy = false; var v = cur(); if (v.v === 'about') render(); });
  }
  var TG_URL = 'https://t.me/movievaultupdate';
  function devCard() {
    var d = GH.d, nm = (d && d.name) || GH_USER, av = (d && d.avatar) ? d.avatar + (d.avatar.indexOf('?') === -1 ? '?s=300' : '&s=300') : 'https://github.com/' + GH_USER + '.png?size=300';
    var h = '<section class="mcard a3dev"><div class="a3who"><span class="a3av">' + esc(initials(nm)) + '<img src="' + esc(av) + '" alt="" onerror="this.remove()"></span><div class="a3wt"><h3>' + esc(nm) + '</h3>' +
      '<p class="a3h">@' + esc((d && d.login) || GH_USER) + ((d && d.loc) ? ' · ' + esc(d.loc) : '') + '</p>' + ((d && d.bio) ? '<p class="a3bio">' + esc(d.bio) + '</p>' : '') +
      (d ? '<div class="a3stats"><span><b>' + numFmt(d.repos) + '</b><small>Repositories</small></span><span><b>' + numFmt(d.followers) + '</b><small>Followers</small></span><span><b>' + numFmt(d.following) + '</b><small>Following</small></span></div>'
         : (GH.busy ? '<p class="a3bio">Loading GitHub profile...</p>' : '')) + '</div></div>';
    return h + '<button type="button" class="a3link" data-act="open-url" data-u="' + esc((d && d.url) || GH_URL) + '">' + ic('github') + '<span>GitHub</span>' + ic('chev') + '</button>' + '</section>';
  }
  function vAbout() {
    var tile = function (i, t, sub) { return '<div class="a3t"><span class="mi">' + ic(i) + '</span><span class="mt"><b>' + t + '</b><small>' + sub + '</small></span></div>'; };
    return '<header class="sbar"><button type="button" class="iconbtn" data-act="back" aria-label="Back">' + ic('back') + '</button><div class="st"><h1>About</h1></div></header>' +
      '<div class="mstack a3">' +
      '<section class="a3hero"><i class="a3b a3b1"></i><i class="a3b a3b2"></i><i class="a3b a3b3"></i>' + logoImg('a3logo') + '<h2 class="a3name">Movie <span>Vault</span></h2><span class="a3ver">v' + APP_VERSION + ' • Android</span>' +
      '<div class="a3tiles">' + tile('clap', 'Movies', 'Discover') + tile('tv', 'Series', 'Explore') + tile('heart', 'Your Lists', 'Keep Track') + '</div></section>' +
      '<div><div class="mh a3sh">' + '<span class="mi">' + ic('user') + '</span><div class="mt"><b>Developer</b><small>Made with passion</small></div></div>' + devCard() + '</div>' +
      '<div><div class="mh a3sh"><span class="mi">' + ic('info') + '</span><div class="mt"><b>Community &amp; Info</b><small>Links and app information</small></div></div><section class="mcard flush"><div class="mgroup">' +
        mrow('github', 'GitHub profile', 'View source code and contribute', 'data-act="open-url" data-u="' + esc((GH.d && GH.d.url) || GH_URL) + '"') +
        mrow('telegram', 'Telegram channel', 'News and announcements', 'data-act="open-url" data-u="' + TG_URL + '"', 'tg') +
        mrow('reset', 'Check for updates', 'Current version: v' + APP_VERSION, 'data-act="update"') + '</div></section></div>' +
      '<div><div class="mh a3sh"><span class="mi red">' + ic('heart') + '</span><div class="mt"><b>Credits</b><small>Data sources and third-party services</small></div></div><section class="mcard a3cred">' +
        '<p>Movie Vault keeps your lists private on this phone.</p>' +
        '<p><b>TMDB</b> — movie and series data, posters, cast and new releases.</p>' +
        '<p><b>JustWatch</b> — streaming availability data, provided through TMDB.</p>' +
        '<p class="a3fine">This product uses the TMDB API but is not endorsed or certified by TMDB or JustWatch.</p></section></div></div>';
  }
  function verCmp(a, b) {
    var x = String(a).replace(/^[^0-9]*/, '').split('.').map(function (n) { return parseInt(n, 10) || 0; }), y = String(b).replace(/^[^0-9]*/, '').split('.').map(function (n) { return parseInt(n, 10) || 0; });
    for (var i = 0; i < Math.max(x.length, y.length); i++) { var d = (x[i] || 0) - (y[i] || 0); if (d) return d > 0 ? 1 : -1; }
    return 0;
  }
  function updCheck() {
    if (UPD.busy) return;
    UPD.busy = true; UPD.res = null;
    var v = cur(); if (v.v === 'update') render();
    function rel(u) { return fetch(u, { headers: { Accept: 'application/vnd.github+json' } }).then(function (r) {
      if (r.status === 404) return { none: true };
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }); }
    rel('https://api.github.com/repos/' + UPD_REPO + '/releases/latest').catch(function () { return rel(TM_BASE + '/github/latest'); }).then(function (j) {
      if (j.none) { UPD.res = { none: true }; return; }
      var apk = (j.assets || []).filter(function (a) { return /\.apk$/i.test(a.name || ''); })[0];
      UPD.res = { tag: j.tag_name || '', name: j.name || j.tag_name || '', notes: String(j.body || '').slice(0, 1800), date: j.published_at || '', apk: apk ? apk.browser_download_url : '', size: apk ? (apk.size || 0) : 0, page: j.html_url || '', newer: verCmp(j.tag_name || '0', APP_VERSION) > 0 };
    }).catch(function (e) { UPD.res = { err: true, why: String((e && e.message) || e).slice(0, 80) }; }).then(function () { UPD.busy = false; UPD.ts = Date.now(); var c = cur(); if (c.v === 'update') render(); if (UPD.after) { var af = UPD.after; UPD.after = null; try { af(); } catch (e9) {} } });
  }
  function mdLite(t) {
    var inl = function (x) {
      x = esc(x);
      x = x.replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, function (m, a, u) { return '<a href="#" data-act="open-url" data-u="' + u + '">' + a + '</a>'; });
      x = x.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/\*([^*\s][^*]*)\*/g, '<i>$1</i>').replace(/`([^`]+)`/g, '<code>$1</code>');
      return x;
    };
    var out = [], list = false;
    String(t || '').replace(/\r/g, '').split('\n').forEach(function (ln) {
      ln = ln.trim();
      var li = /^[-*]\s+(.*)$/.exec(ln);
      if (li) { if (!list) { out.push('<ul>'); list = true; } out.push('<li>' + inl(li[1]) + '</li>'); return; }
      if (list) { out.push('</ul>'); list = false; }
      if (!ln || /^-{3,}$/.test(ln)) return;
      var h = /^(#{1,6})\s+(.*)$/.exec(ln);
      if (h) { if (h[1].length === 1) return; out.push('<h4>' + inl(h[2]) + '</h4>'); return; }
      out.push('<p>' + inl(ln) + '</p>');
    });
    if (list) out.push('</ul>');
    return '<div class="rn">' + out.join('') + '</div>';
  }
  /* ---------- in-app update: popup on launch, download and install inside the app ---------- */
  var UD = { el: null, st: '', pct: 0, msg: '' };
  function nativeUpd() { return !!(window.RVNative && window.RVNative.download && window.RVNative.install); }
  function updSnoozed(tag) { try { var s = JSON.parse(lsGet('reelvault.updlater') || 'null'); return !!(s && s.tag === tag && Date.now() - s.ts < 12 * 3600 * 1000); } catch (e) { return false; } }
  function updDlgClose() { if (UD.el) { try { UD.el.remove(); } catch (e) {} UD.el = null; } }
  function updDlgOpen(r) {
    if (UD.el) return;
    UD.st = 'ask'; UD.pct = 0; UD.msg = '';
    var el = document.createElement('div'); el.className = 'udlg'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true');
    el.addEventListener('click', function (ev) {
      var b = ev.target.closest ? ev.target.closest('[data-ud]') : null;
      if (!b) { return; }
      var a = b.getAttribute('data-ud');
      if (a === 'go' || a === 'retry') updStart();
      else if (a === 'install') { UD.st = 'done'; try { window.RVNative.install(); } catch (e) {} }
      else if (a === 'cancel') { try { window.RVNative.cancel(); } catch (e) {} updDlgClose(); }
      else if (a === 'later') { try { lsSet('reelvault.updlater', JSON.stringify({ tag: (UPD.res && UPD.res.tag) || '', ts: Date.now() })); } catch (e) {} updDlgClose(); }
      else if (a === 'close') updDlgClose();
      else if (a === 'web') { try { window.open((UPD.res && (UPD.res.apk || UPD.res.page)) || '', '_blank'); } catch (e) {} }
    });
    document.body.appendChild(el); UD.el = el; udDraw();
  }
  function udDraw() {
    var r = UPD.res; if (!UD.el || !r) return;
    var st = UD.st, body = '', btns = '';
    var btn = function (a, t, alt) { return '<button type="button" class="btn' + (alt ? ' alt' : '') + '" data-ud="' + a + '">' + t + '</button>'; };
    if (st === 'ask') {
      body = (r.notes ? '<div class="udn">' + mdLite(r.notes) + '</div>' : '');
      btns = btn('later', 'Later', true) + btn('go', 'Download');
    } else if (st === 'busy') {
      body = '<p class="udt">Downloading... ' + (UD.pct > 0 ? UD.pct + '%' : '') + '</p><div class="udbar"><i style="width:' + Math.max(UD.pct, 3) + '%"></i></div><p class="udt sm">Keep the app open until it finishes.</p>';
      btns = btn('cancel', 'Cancel', true);
    } else if (st === 'done') {
      body = '<p class="udt">Download complete. The Android installer will open. Tap <b>Install</b> there.</p>';
      btns = btn('later', 'Later', true) + btn('install', 'Install now');
    } else if (st === 'perm') {
      body = '<p class="udt">Android needs your permission once. Turn on <b>Allow from this source</b> for Movie Vault, then come back here and tap <b>Install now</b>.</p>';
      btns = btn('later', 'Later', true) + btn('install', 'Install now');
    } else if (st === 'installing') {
      body = '<p class="udt">The Android installer is open. Tap <b>Install</b> there to finish. Your lists stay safe.</p>';
      btns = btn('close', 'Close', true) + btn('install', 'Open installer');
    } else {
      body = '<p class="udt">' + esc(UD.msg || 'Something went wrong.') + '</p>';
      btns = btn('close', 'Close', true) + btn('retry', 'Try again') + btn('web', 'Open in browser', true);
    }
    UD.el.innerHTML = '<div class="udc"><div class="udh"><span class="udi">' + ic('reset') + '</span><div><b>Update available</b><small>Movie Vault ' + esc(r.tag) + ' &middot; you have v' + APP_VERSION + '</small></div></div>' + body + '<div class="udb">' + btns + '</div></div>';
  }
  function updStart() {
    var r = UPD.res; if (!r || !r.apk) return;
    UD.st = 'busy'; UD.pct = 0; UD.msg = ''; udDraw();
    try { window.RVNative.download(r.apk, r.size || 0); } catch (e) { UD.st = 'error'; UD.msg = 'Could not start the download.'; udDraw(); }
  }
  window.rvUpd = function (state, pct, msg) {
    if (!UD.el) { return; }
    if (state === 'progress') { UD.pct = pct; if (UD.st === 'busy') udDraw(); return; }
    if (state === 'done') { UD.st = 'done'; udDraw(); try { window.RVNative.install(); } catch (e) {} return; }
    if (state === 'perm') UD.st = 'perm';
    else if (state === 'installing') UD.st = 'installing';
    else if (state === 'cancel') { updDlgClose(); return; }
    else { UD.st = 'error'; UD.msg = (msg || '').trim() === 'Cancelled' ? 'Download cancelled.' : ((msg || '').trim() ? msg.trim() + '.' : 'Something went wrong.') + ' Check your internet and try again.'; }
    udDraw();
  };
  function updAuto(tries) {
    if (!nativeUpd() || UD.el) return;
    if (!nav || nav.hidden) { if ((tries || 0) < 6) setTimeout(function () { updAuto((tries || 0) + 1); }, 5000); return; }
    var last = +lsGet('reelvault.updchk') || 0;
    if (Date.now() - last < 30 * 60 * 1000) return;
    lsSet('reelvault.updchk', String(Date.now()));
    UPD.after = function () { var r = UPD.res; if (r && r.newer && r.apk && !updSnoozed(r.tag) && !UD.el) updDlgOpen(r); };
    updCheck();
  }
  setTimeout(function () { updAuto(0); }, 3500);

  function vUpdate() {
    var r = UPD.res, h = subBar('Check for updates') + '<section class="card"><div class="dev-top"><span class="dev-av ic-av">' + ic('reset') + '</span><span class="dev-id"><b>Movie Vault</b><small>Version ' + APP_VERSION + '</small></span></div>';
    if (UPD.busy) h += '<p class="note" style="margin:0">Checking for updates...</p>';
    else if (!r) h += '<p class="note" style="margin:0">Tap the button to look for a newer version.</p>';
    else if (r.err) h += '<p class="note" style="margin:0">Could not check for updates. Check your internet and try again.</p>' + (r.why ? '<p class="note" style="margin:6px 0 0;font-size:.8rem">' + esc(r.why) + '</p>' : '');
    else if (r.none) h += '<p class="note" style="margin:0">No published release was found yet. The developer can publish a GitHub Release with the APK to enable update checks.</p>';
    else if (r.newer) {
      h += '<p style="margin:0"><b>Update available: ' + esc(r.tag) + '</b></p>' + (r.date ? '<p class="note" style="margin:0">' + esc(fmtDate(String(r.date).slice(0, 10))) + '</p>' : '') +
        (r.notes ? mdLite(r.notes) : '') +
        (nativeUpd() && r.apk
          ? '<button type="button" class="btn full" data-act="upd-install">Download and install</button><p class="note" style="margin:0;font-size:.74rem">The update downloads and installs right here in the app. Your lists stay safe.</p>'
          : '<button type="button" class="btn full" data-act="open-url" data-u="' + esc(r.apk || r.page) + '">Download update</button>' +
            '<p class="note" style="margin:0;font-size:.74rem">After downloading, open the APK and install it over this app. Your lists stay safe.</p>');
    } else h += '<p style="margin:0"><b>You are up to date</b></p><p class="note" style="margin:0">Latest version: ' + esc(r.tag || APP_VERSION) + '</p>';
    h += '<button type="button" class="btn alt full" data-act="upd-check"' + (UPD.busy ? ' disabled' : '') + '>Check for updates</button></section>';
    return h;
  }

  function vProfile() {
    var its = allItems(), c = clGet();
    var w = its.filter(function (i) { return i.watched; }).length, q = its.filter(function (i) { return i.want; }).length, l = its.filter(function (i) { return i.loved; }).length;
    var nm = ui.me.name || 'Movie lover';
    var stat = function (icn, k, n, lab) { return '<button type="button" class="stat" data-act="grid" data-k="' + k + '"><span class="mi">' + ic(icn) + '</span><b>' + n + '</b><small>' + lab + '</small></button>'; };
    var h = '<div class="pf"><i class="pb pb1"></i><i class="pb pb2"></i><i class="pb pb3"></i>' +
      '<header class="sbar pfbar"><button type="button" class="iconbtn" data-act="back" aria-label="Back">' + ic('back') + '</button><div class="st"><h1>Profile</h1></div><button type="button" class="iconbtn" data-act="settings" aria-label="Settings">' + ic('sliders') + '</button></header>' +
      '<section class="who"><div class="avbig">' + avatar() + '</div><h1>Hey, ' + esc(nm) + '</h1><p>Your Movie Vault</p></section>' +
      '<div class="mstats">' + stat('playc', 'watched', w, 'Watched') + stat('bookmark', 'want', q, 'Watchlist') + stat('heart', 'loved', l, 'Favorites') + '</div>' +
      '<h2 class="mlabel">Account information</h2><div class="mcard flush"><div class="mgroup">' +
      (ui.editName
        ? '<form id="nameForm" class="nmedit" autocomplete="off"><div class="mf"><span class="mi">' + ic('user') + '</span><span class="mfb"><label for="nmIn">Full name</label><input type="text" id="nmIn" maxlength="30" value="' + esc(ui.me.name || '') + '" placeholder="Your name" autocomplete="name"></span></div>' +
          '<div class="nmbtns"><button type="button" class="nmb alt" data-act="name-cancel">Cancel</button><button type="submit" class="nmb">Save</button></div><p class="mnote">Shown in your greeting and profile. Your login username does not change.</p></form>'
        : '<div class="mrow static"><span class="mi">' + ic('user') + '</span><span class="mt lv"><small>Full name</small><b>' + esc(nm) + '</b></span><button type="button" class="nmedit-btn" data-act="name-edit" aria-label="Edit name">' + ic('edit') + '</button></div>') +
      (c && c.email ? '<div class="mrow static"><span class="mi">' + ic('mail') + '</span><span class="mt lv"><small>Email</small><b>' + esc(c.email) + '</b></span></div>' : '') + '</div></div>' +
      '<h2 class="mlabel">Backup</h2><details class="mbo mcard flush"><summary class="mrow"><span class="mi">' + ic('cloud') + '</span><span class="mt"><b>More backup options</b><small>Back up or restore with words</small></span>' + ic('chev') + '</summary><div class="mbo-body">' + lbCard() + '</div></details>' +
      '<h2 class="mlabel">Library</h2><div class="mcard flush"><div class="mgroup">' +
      mrow('heart', 'Favorites', 'Movies and series you love', 'data-act="grid" data-k="loved"', 'red') +
      mrow('bookmark', 'Saved Movies', 'Your saved titles', 'data-act="grid" data-k="want"', 'blue') +
      mrow('sliders', 'Settings', 'Appearance, language and more', 'data-act="settings"', 'green') + '</div></div>' +
      (c ? '<h2 class="mlabel">Security</h2><div class="mcard flush">' +
        (ui.confirm === 'cldel'
          ? '<div class="confirm"><span>Delete your account and all lists saved online? It cannot be undone.</span><button type="button" class="btn" data-act="cl-del-yes">Yes, delete</button><button type="button" class="btn alt" data-act="confirm-no">Keep</button></div>'
          : '<button type="button" class="mrow danger" data-act="cl-del-ask"><span class="mi">' + ic('trash') + '</span><span class="mt"><b>Delete account</b><small>This action cannot be undone</small></span>' + ic('chev') + '</button>') + '</div>' : '') +
      '<p class="ver">Movie Vault v' + APP_VERSION + '</p></div>';
    return h;
  }

  /* ---------- render ---------- */
  function navActive(v) {
    if (v.v === 'home') return 'home';
    if (v.v === 'grid' && (v.k === 'new' || v.k === 'want' || v.k === 'watched')) return v.k;
    return '';
  }
  var LASTSIG = '';
  function render() {
    var v = cur(), h;
    if (v.v !== 'profile') ui.editName = false;
    try { document.documentElement.classList.toggle('on-details', v.v === 'details'); document.documentElement.classList.toggle('on-profile', v.v === 'profile'); document.documentElement.classList.toggle('on-home', v.v === 'home'); } catch (e) {}
    var welcomed = lsGet(LS_WELCOME) === '1' || !!(docs.get('profile') && docs.get('profile').welcomed);
    if (STANDALONE && !ui.unlocked) { screen.innerHTML = vLock(); nav.hidden = true; qTranslate(); return; }
    if (!settled && !welcomed) h = '<section class="welcome">' + logoImg('logo') + '<h1>Movie <span>Vault</span></h1></section>';
    else if (!welcomed) h = vWelcome();
    else if (v.v === 'home') h = vHome();
    else if (v.v === 'grid') h = vGrid(v);
    else if (v.v === 'details') h = vDetails(v);
    else if (v.v === 'search') h = vSearch(v);
    else if (v.v === 'add') h = vAdd(v);
    else if (v.v === 'settings') h = vSettings();
    else if (v.v === 'person') h = vPerson(v);
    else if (v.v === 'about') h = vAbout();
    else if (v.v === 'update') h = vUpdate();
    else if (v.v === 'online') { h = vOnline(); if (!ON.items.length && !ON.busy && ON.msg !== 'nokey') setTimeout(function () { onLoad(false); }, 0); else if (!tmKey()) ON.msg = 'nokey'; }
    else h = vProfile();
    var sig = v.v + '|' + (v.k || '') + '|' + (v.key || '') + '|' + (v.id || '');
    var hs0 = [];
    if (sig === LASTSIG) { try { hs0 = Array.prototype.map.call(screen.querySelectorAll('.row-h,.hrow2,.chips,.jtabs'), function (el) { return el.scrollLeft; }); } catch (e) {} }
    screen.innerHTML = h;
    if (hs0.length) { try { Array.prototype.forEach.call(screen.querySelectorAll('.row-h,.hrow2,.chips,.jtabs'), function (el, i) { if (hs0[i]) el.scrollLeft = hs0[i]; }); } catch (e) {} }
    if (sig !== LASTSIG) { LASTSIG = sig; screen.classList.remove('enter'); void screen.offsetWidth; screen.classList.add('enter'); }
    if (v.v === 'details') { provLoad(v.key); enrich(v.key); seasonSync(v.key); picsFill(); }
    if (v.v === 'about') ghLoad(false);
    if (v.v === 'update' && !UPD.busy && (!UPD.res || Date.now() - UPD.ts > 3600000)) setTimeout(updCheck, 0);
    if (v.v === 'person') { if (!PP[v.id] && !v.err && !v.loading) { v.loading = true; personLoad(v); } }
    var a = welcomed ? navActive(v) : '';
    nav.hidden = !a;
    qTranslate();
    var defs = { home: ['home', 'Home'], new: ['grid', 'New Releases'], want: ['bookmark', 'Watchlist'], watched: ['checkc', 'Watched'] };
    nav.style.setProperty('--i', Math.max(0, ['home', 'new', 'want', 'watched'].indexOf(a)));
    nav.style.gridTemplateColumns = ['home', 'new', 'want', 'watched'].map(function (k) { return k === a ? '1.45fr' : '1fr'; }).join(' ');
    nav.querySelectorAll('button').forEach(function (b) {
      var t = b.dataset.t;
      b.innerHTML = ic(defs[t][0]) + '<span>' + defs[t][1] + '</span>';
      if (t === a) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
  }
  function softRender() {
    var v = cur();
    if (STANDALONE && !ui.unlocked) return;
    if (v.v === 'add') return;
    if (v.v === 'search') { var r = $('results'); if (r) r.innerHTML = resultsHtml(v.q || ''); return; }
    render();
  }
  /* Android back button: every in-app page pushes one history entry, so the system Back pops the page instead of closing the app */
  var HD = 0, HIGN = 0;
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) {}
  var APPP = null;
  try { if (window.Capacitor && Capacitor.isPluginAvailable && Capacitor.isPluginAvailable('App')) APPP = (Capacitor.Plugins && Capacitor.Plugins.App) || (Capacitor.registerPlugin ? Capacitor.registerPlugin('App') : null); } catch (e) { APPP = null; }
  function hpush() { if (APPP) return; try { history.pushState({ rv: HD + 1 }, ''); HD++; } catch (e) {} }
  function hreset() { if (!APPP && HD > 0) { var n = HD; HD = 0; try { HIGN++; history.go(-n); setTimeout(function () { HIGN = 0; }, 900); } catch (e) { HIGN = 0; } } }
  /* remember where the user was on every screen (scroll and row positions) so Back returns to exactly that place */
  var ROWSEL = '.row-h,.hrow2,.chips,.jtabs';
  function saveView() {
    var v = cur(); if (!v) return;
    try { v._y = Math.round(window.scrollY || document.documentElement.scrollTop || 0); v._r = Array.prototype.map.call(screen.querySelectorAll(ROWSEL), function (el) { return el.scrollLeft; }); } catch (e) {}
  }
  function restoreView() {
    var v = cur(); if (!v) return;
    if (v.v === 'search' && v.q && TM.q !== String(v.q).trim()) tmSearch(v.q);
    if (v._y == null) { window.scrollTo(0, 0); return; }
    var y = v._y, r = v._r || [], n = 0;
    (function step() {
      try {
        var els = screen.querySelectorAll(ROWSEL);
        r.forEach(function (x, i) { if (x && els[i]) els[i].scrollLeft = x; });
        window.scrollTo(0, y);
      } catch (e) {}
      if (++n < 8 && Math.abs((window.scrollY || 0) - y) > 2) setTimeout(step, 90);
    })();
  }
  var NAVKEY = 'reelvault.nav';
  function saveNav() {
    try {
      var keep = ui.stack.filter(function (x) { return x.v !== 'add' && x.v !== 'update'; }).map(function (x) { return { v: x.v, k: x.k, key: x.key, ind: x.ind, g: x.g, q: x.q, chip: x.chip, lim: x.lim, name: x.name, id: x.id, pf: x.pf, _y: x._y }; });
      lsSet(NAVKEY, JSON.stringify({ t: Date.now(), s: keep }));
    } catch (e) {}
  }
  function sameView(a, b) { return !!a && !!b && a.v === b.v && a.k === b.k && a.key === b.key && a.ind === b.ind && a.g === b.g && a.id === b.id && a.name === b.name; }
  function go(v) {
    if (sameView(cur(), v)) { if (v.v === 'search') { var q0 = $('q'); if (q0) q0.focus(); } return; }
    saveView(); ui.stack.push(v); hpush(); ui.confirm = ''; window.scrollTo(0, 0); render(); saveNav();
    if (v.v === 'search') { var q = $('q'); if (q) q.focus(); }
  }
  function popTo() { if (ui.stack.length > 1) ui.stack.pop(); ui.confirm = ''; render(); restoreView(); saveNav(); }
  function back() {
    if (HD > 0) {
      var len = ui.stack.length;
      try { history.back(); setTimeout(function () { if (ui.stack.length === len && len > 1) { if (HD > 0) HD--; popTo(); } }, 500); return; } catch (e) {}
    }
    popTo();
  }
  window.addEventListener('popstate', function () {
    if (HIGN > 0) { HIGN--; return; }
    if (HD > 0) HD--;
    popTo();
  });
  var LASTBACK = 0;
  if (APPP && APPP.addListener) {
    try {
      APPP.addListener('backButton', function () {
        if (ui.confirm) { ui.confirm = ''; render(); return; }
        if (ui.stack.length > 1) { back(); return; }
        if (cur().v !== 'home') { tab('home'); return; }
        var now = Date.now();
        if (now - LASTBACK < 2000) { try { APPP.exitApp(); } catch (e) {} } else { LASTBACK = now; toast('Press back again to exit'); }
      });
    } catch (e) {}
  }
  gdInit();
  function tab(t) {
    ui.stack = [t === 'home' ? { v: 'home' } : { v: 'grid', k: t }];
    hreset();
    ui.confirm = '';
    window.scrollTo(0, 0);
    render(); saveNav();
  }

  /* ---------- posters ---------- */
  function readPoster(file) {
    return new Promise(function (res, rej) {
      var fr = new FileReader();
      fr.onerror = rej;
      fr.onload = function () {
        var img = new Image();
        img.onerror = rej;
        img.onload = function () {
          var W = 360, H = 540, s = Math.max(W / img.width, H / img.height);
          var c = document.createElement('canvas');
          c.width = W; c.height = H;
          var w = img.width * s, h = img.height * s;
          c.getContext('2d').drawImage(img, (W - w) / 2, (H - h) / 2, w, h);
          res(c.toDataURL('image/jpeg', 0.82));
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }
  fileEl.addEventListener('change', function () {
    var f = fileEl.files && fileEl.files[0], target = ui.posterTarget;
    fileEl.value = '';
    if (!f || !target) return;
    readPoster(f).then(function (url) {
      if (target === '__draft') {
        ui.draft.poster = url;
        var pv = $('pv');
        if (pv) pv.innerHTML = '<div class="poster has-img"><img src="' + url + '" alt=""></div><button type="button" class="btn alt" data-act="poster" data-key="__draft">' + ic('camera') + ' Change poster</button>';
      } else {
        var d = docs.get(target);
        d = d ? Object.assign({}, d) : { kind: 'c', want: false, watched: false, loved: false, ts: 0 };
        d.poster = url;
        docs.set(target, d);
        persist(target);
        render();
        toast('Poster updated.');
      }
    }).catch(function () { toast('Could not read that image.'); });
  });

  /* ---------- events ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]');
    if (!b) return;
    var act = b.dataset.act, key = b.dataset.key;
    if (act === 'tab') tab(b.dataset.t);
    else if (act === 'open') go({ v: 'details', key: key });
    else if (act === 'back') back();
    else if (act === 'search') go({ v: 'search', q: '' });
    else if (act === 'settings') go({ v: 'settings' });
    else if (act === 'profile') go({ v: 'profile' });
    else if (act === 'name-edit') { ui.editName = true; render(); setTimeout(function () { var n = $('nmIn'); if (n) { n.focus(); n.select(); } }, 50); }
    else if (act === 'name-cancel') { ui.editName = false; render(); }
    else if (act === 'grid') go({ v: 'grid', k: b.dataset.k, ind: b.dataset.ind, g: b.dataset.g });
    else if (act === 'add') { ui.draft = { poster: null }; go({ v: 'add', t: b.dataset.t || '' }); if (b.dataset.auto === '1') setTimeout(autofill, 0); }
    else if (act === 'sel-season') { ui.sel[key] = Number(b.dataset.s); render(); }
    else if (act === 'ep') toggleEp(key, Number(b.dataset.s), Number(b.dataset.e));
    else if (act === 'season-all') toggleSeason(key, Number(b.dataset.s));
    else if (act === 'autofill') autofill();
    else if (act === 'sync-now') { if (false) toast(''); else { toast('Checking...'); autoSync(true); } }
    else if (act === 'syn-toggle') { var sw = b.closest('.synw'); if (sw) { var on2 = sw.classList.toggle('open'); b.setAttribute('aria-expanded', on2 ? 'true' : 'false'); } }
    else if (act === 'share') {
      var sit = getItem(b.dataset.key), stxt = sit ? sit.title + (sit.year ? ' (' + sit.year + ')' : '') + ' — found on Movie Vault' : 'Movie Vault';
      try { if (navigator.share) { navigator.share({ title: sit ? sit.title : 'Movie Vault', text: stxt }).catch(function () {}); }
        else if (navigator.clipboard) { navigator.clipboard.writeText(stxt).then(function () { toast('Copied to clipboard.'); }, function () { toast(stxt); }); }
        else toast(stxt); } catch (e6) { toast(stxt); }
    }
    else if (act === 'ww-toggle') { ui.ww = !ui.ww; b.setAttribute('aria-pressed', ui.ww ? 'true' : 'false'); var wsx = $('pv-watch'); if (wsx) wsx.classList.toggle('open', ui.ww); }
    else if (act === 'open-url') { try { window.open(b.dataset.u, '_blank'); } catch (e5) {} }
    else if (act === 'logout') signOut();
    else if (act === 'lost') {
      var lu = $('lUser'); ui.lu = lu ? lu.value : '';
      if (!acct()) {
        var le = String(ui.lu || '').trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(le)) showErr('lerr', 'Type your email address above first.');
        else fbPost('accounts:sendOobCode', { requestType: 'PASSWORD_RESET', email: le }).then(function () { showErr('lerr', 'If this email has an account, a reset link was sent. Check your inbox.'); }, function (e8) { showErr('lerr', fbErr(e8.message)); });
      } else { ui.confirm = 'forgot'; render(); }
    }
    else if (act === 'eye') {
      var inp = b.parentNode.querySelector('input'), show = inp.type === 'password';
      inp.type = show ? 'text' : 'password'; b.setAttribute('aria-pressed', String(show));
      b.setAttribute('aria-label', show ? 'Hide password' : 'Show password'); b.innerHTML = ic(show ? 'eyeoff' : 'eye'); inp.focus();
    }
    else if (act === 'forgot-yes') { ui.confirm = ''; ui.lu = ''; ['reelvault.v1', 'reelvault.synced', 'reelvault.welcomed', 'reelvault.cloud', LS_ACCT, LS_REM].forEach(function (k) { lsDel(k); }); CL.tok = ''; ssDel(SS_SESS); docs = new Map(); render(); }
    else if (act === 'cl-del-ask') { ui.confirm = 'cldel'; render(); }
    else if (act === 'cl-del-yes') clDelete();
    else if (act === 'gd-connect') gdConnect();
    else if (act === 'gd-backup') gdBackup();
    else if (act === 'lb-copy') { wPack(snapshot()).then(function (w) { return copyText(w.join(' ')); }).then(function (ok) { toast(ok ? 'Backup words copied. Paste them somewhere safe.' : 'Could not copy. Try again.'); }); }
    else if (act === 'lb-restore') {
      var ta = $('lbText'), lm = $('lbmsg'), tx = (ta && ta.value || '').trim();
      var pr = tx.charAt(0) === '{' ? Promise.resolve(tx) : Promise.resolve().then(function () { return wUnpack(tx); });
      pr.then(function (js) { var cnt = applyBackup(JSON.parse(js)); toast('Restored ' + cnt + ' items.'); render(); })
        .catch(function () { var m2 = $('lbmsg'); if (m2) m2.textContent = 'These words are not a valid backup. Check you pasted all of them.'; });
    }
    else if (act === 'gd-restore-ask') { ui.confirm = 'restore'; render(); }
    else if (act === 'gd-restore-yes') gdRestore();
    else if (act === 'gd-off') { var g3 = gdGet(); delete g3.email; delete g3.refresh; gdSet(g3); GD.msg = 'Disconnected.'; render(); }
    else if (act === 'tm-add') tmImport(b.dataset.id, b.dataset.mt);
    else if (act === 'toggle') toggle(key, b.dataset.f);
    else if (act === 'online') { ON.msg = ''; go({ v: 'online' }); }
    else if (act === 'on-feed') { ON.feed = b.dataset.f; render(); onLoad(false); }
    else if (act === 'on-more') onLoad(true);
    else if (act === 'more') { var cv0 = cur(); cv0.lim = (cv0.lim || (cv0.v === 'person' ? 60 : 90)) + 60; if (cv0.v === 'person') personDraw(); else render(); }
    else if (act === 'person') go({ v: 'person', name: b.dataset.name, id: Number(b.dataset.id) || 0, pf: 'all' });
    else if (act === 'pchip') { cur().pf = b.dataset.c; cur().lim = 60; personDraw(); }
    else if (act === 'tm-open') tmImport(b.dataset.id, b.dataset.mt, true);
    else if (act === 'chip') { cur().chip = b.dataset.c; render(); }
    else if (act === 'start') { lsSet(LS_WELCOME, '1'); setProfile({ welcomed: true, theme: themePref() }); render(); }
    else if (act === 'poster') { ui.posterTarget = key; fileEl.click(); }
    else if (act === 'poster-clear') {
      var d = docs.get(key);
      if (d) { d = Object.assign({}, d); delete d.poster; docs.set(key, d); persist(key); render(); toast('Poster removed.'); }
    }
    else if (act === 'theme-set') { var tv = b.dataset.v; lsSet(LS_THEME, tv); applyTheme(tv); setProfile({ theme: tv }); render(); }
    else if (act === 'theme') {
      var nx = { dark: 'light', light: 'system', system: 'dark' }[themePref()] || 'dark';
      lsSet(LS_THEME, nx); applyTheme(nx); setProfile({ theme: nx }); render();
    }
    else if (act === 'about') go({ v: 'about' });
    else if (act === 'update') go({ v: 'update' });
    else if (act === 'upd-install') { if (UPD.res && UPD.res.apk) { updDlgOpen(UPD.res); updStart(); } }
    else if (act === 'upd-check') updCheck();
    else if (act === 'reset-ask') { ui.confirm = 'reset'; render(); }
    else if (act === 'confirm-no') { ui.confirm = ''; render(); }
    else if (act === 'reset-yes') {
      Array.from(docs.keys()).forEach(function (id) { if (/^(c_|u_)/.test(id)) removeDoc(id); });
      ui.confirm = '';
      render();
      toast('Your lists were cleared.');
    }
    else if (act === 'del-ask') { ui.confirm = 'del:' + key; render(); }
    else if (act === 'del-yes') { removeDoc(key); ui.confirm = ''; back(); toast('Title deleted.'); }
  });

  document.addEventListener('input', function (e) {
    if (e.target.id === 'q') { var v = cur(); v.q = e.target.value; var r = $('results'); if (r) r.innerHTML = resultsHtml(v.q); tmSearch(v.q); }
  });

  document.addEventListener('submit', function (e) {
    if (e.target.id !== 'nameForm') return;
    e.preventDefault();
    var inp = $('nmIn'); if (!inp) return;
    var v = inp.value.trim().replace(/\s+/g, ' ');
    if (v.length < 2) { toast('Enter a name of at least 2 characters.'); inp.focus(); return; }
    var a = acct();
    if (a) { a.dn = v; lsSet(LS_ACCT, JSON.stringify(a)); if (clGet()) clPush(true); }
    ui.me.name = v; ui.editName = false; render(); toast('Name updated.');
  });
  document.addEventListener('submit', function (e) {
    if (e.target.id !== 'addForm') return;
    e.preventDefault();
    var title = $('aTitle').value.trim().replace(/\s+/g, ' ');
    if (!title) { toast('Type a title first.'); $('aTitle').focus(); return; }
    var year = parseInt($('aYear').value, 10) || 0;
    var type = $('aType').value;
    var dup = allItems().some(function (i) { return i.title.toLowerCase() === title.toLowerCase() && (!year || !i.year || i.year === year); });
    if (dup) { toast('That title is already in Movie Vault.'); return; }
    var imdb = parseFloat($('aImdb').value);
    var split = function (s) { return s.split(',').map(function (x) { return x.trim(); }).filter(Boolean).slice(0, 12); };
    var list = $('aList').value;
    var key = 'u_' + newId();
    var d = { kind: 'u', title: title, type: type, year: year || 0, industry: $('aInd').value, seasons: type === 'series' ? parseSeasons($('aSeasons').value) : [], genres: split($('aGenres').value), director: $('aDir').value.trim(),
      cast: split($('aCast').value).map(function (n) { return [n, '']; }), imdb: imdb > 0 && imdb <= 10 ? Math.round(imdb * 10) / 10 : 0,
      overview: $('aOverview').value.trim(), want: list === 'want', watched: list === 'watched', loved: false, ts: Date.now() };
    var p = safeImg(ui.draft.poster);
    if (p) d.poster = p;
    docs.set(key, d);
    persist(key);
    ui.draft = { poster: null };
    ui.stack[ui.stack.length - 1] = { v: 'details', key: key };
    ui.confirm = ''; window.scrollTo(0, 0); render();
    toast('Saved “' + title + '”.');
  });

  document.addEventListener('scroll', function (e) {
    var t = e.target;
    if (!t || t.id !== 'featRow') return;
    var dots = $('dots');
    if (!dots) return;
    var i = Math.round(t.scrollLeft / (t.clientWidth + 12));
    Array.prototype.forEach.call(dots.children, function (d, n) { d.className = n === i ? 'on' : ''; });
  }, true);

  document.addEventListener('visibilitychange', function () { if (!document.hidden && (!STANDALONE || ui.unlocked)) autoSync(false); });
  setInterval(function () { if (!document.hidden && (!STANDALONE || ui.unlocked)) autoSync(false); }, 30 * 60 * 1000);
  loadLocal();
  applyLang();
  if (STANDALONE) restoreSession();
  settled = lsGet(LS_WELCOME) === '1';
  (function restoreNav() {
    try {
      var j = JSON.parse(lsGet(NAVKEY) || 'null');
      if (!j || !j.s || !j.s.length || Date.now() - j.t > 15 * 60 * 1000) return;
      var okv = j.s.filter(function (x) { return x && /^(home|grid|details|search|settings|profile|about|person|online)$/.test(x.v) && (x.v !== 'details' || (x.key && getItem(x.key))); });
      if (okv.length < 2 || okv[0].v !== j.s[0].v) return;
      ui.stack = okv;
      for (var n = 1; n < okv.length; n++) hpush();
    } catch (e) {}
  })();
  render(); restoreView();
  connect();
  setTimeout(function () { if (!STANDALONE || ui.unlocked) autoSync(false); }, 2000);
})();