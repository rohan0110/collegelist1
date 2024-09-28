const colleges = [
        // Nashik Colleges
        { name: "K. K. Wagh Institute of Engineering Education and Research", city: "Nashik", state: "Maharashtra", cityRank: 1, stateRank: 5,learnMoreUrl: "", logo: "" },
        { name: "D. Y. Patil College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 2, stateRank: 10,learnMoreUrl: "", logo: "" },
        { name: "M. S. Bidve Engineering College", city: "Nashik", state: "Maharashtra", cityRank: 3, stateRank: 12,learnMoreUrl: "", logo: "" },
        { name: "Shah and Anchor Kutchhi Engineering College", city: "Nashik", state: "Maharashtra", cityRank: 4, stateRank: 15,learnMoreUrl: "", logo: "" },
        { name: "S. B. Patil College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 5, stateRank: 18,learnMoreUrl: "", logo: "" },
        { name: "J. D. College of Engineering and Management", city: "Nashik", state: "Maharashtra", cityRank: 6, stateRank: 20,learnMoreUrl: "", logo: "" },
        { name: "Smt. Chandaben Home Science College", city: "Nashik", state: "Maharashtra", cityRank: 7, stateRank: 25,learnMoreUrl: "", logo: "" },
        { name: "Nashik Institute of Technology", city: "Nashik", state: "Maharashtra", cityRank: 8, stateRank: 30,learnMoreUrl: "", logo: "" },
        { name: "Mahatma Gandhi Mission's College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 9, stateRank: 35,learnMoreUrl: "", logo: "" },
        { name: "Sahyadri Valley College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 10, stateRank: 40 ,learnMoreUrl: "", logo: ""},
        { name: "D. Y. Patil Institute of Technology", city: "Nashik", state: "Maharashtra", cityRank: 11, stateRank: 42,learnMoreUrl: "", logo: "" },
        { name: "Smt. Hiraben Nanavati Institute of Technology", city: "Nashik", state: "Maharashtra", cityRank: 12, stateRank: 43 ,learnMoreUrl: "", logo: ""},
        { name: "K. K. Wagh College of Pharmacy", city: "Nashik", state: "Maharashtra", cityRank: 13, stateRank: 45,learnMoreUrl: "", logo: "" },
        { name: "Nashik Engineering College", city: "Nashik", state: "Maharashtra", cityRank: 14, stateRank: 47 ,learnMoreUrl: "", logo: ""},
        { name: "Sulaiman Abdur Rahman College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 15, stateRank: 50 ,learnMoreUrl: "", logo: ""},
        { name: "K. T. Patil College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 16, stateRank: 52 ,learnMoreUrl: "", logo: ""},
        { name: "Nashik Institute of Technology", city: "Nashik", state: "Maharashtra", cityRank: 17, stateRank: 55 ,learnMoreUrl: "", logo: ""},
        { name: "Nashik Engineering College", city: "Nashik", state: "Maharashtra", cityRank: 18, stateRank: 58 ,learnMoreUrl: "", logo: ""},
        { name: "Sulaiman Abdur Rahman College of Engineering", city: "Nashik", state: "Maharashtra", cityRank: 19, stateRank: 60 ,learnMoreUrl: "", logo: ""},
        { name: "G. N. Khalsa College of Engineering and Management", city: "Nashik", state: "Maharashtra", cityRank: 20, stateRank: 62 ,learnMoreUrl: "", logo: ""},
    
        // Nagpur Colleges
        { name: "Visvesvaraya National Institute of Technology", city: "Nagpur", state: "Maharashtra", cityRank: 1, stateRank: 2,learnMoreUrl: "", logo: "" },
        { name: "G.H. Raisoni College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 2, stateRank: 6,learnMoreUrl: "", logo: "" },
        { name: "Priyadarshini Institute of Engineering and Technology", city: "Nagpur", state: "Maharashtra", cityRank: 3, stateRank: 11 ,learnMoreUrl: "", logo: ""},
        { name: "Dr. D. Y. Patil Institute of Technology", city: "Nagpur", state: "Maharashtra", cityRank: 4, stateRank: 17 ,learnMoreUrl: "", logo: ""},
        { name: "K.D. Kachhawa College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 5, stateRank: 22 ,learnMoreUrl: "", logo: ""},
        { name: "Nagpur Institute of Technology", city: "Nagpur", state: "Maharashtra", cityRank: 6, stateRank: 38 ,learnMoreUrl: "", logo: ""},
        { name: "Shri Ramdeobaba College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 7, stateRank: 36 ,learnMoreUrl: "", logo: ""},
        { name: "Rajiv Gandhi College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 8, stateRank: 32 ,learnMoreUrl: "", logo: ""},
        { name: "Yeshwantrao Chavan College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 9, stateRank: 39 ,learnMoreUrl: "", logo: ""},
        { name: "Smt. Radhikatai Pandav College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 10, stateRank: 40 ,learnMoreUrl: "", logo: ""},
        { name: "Lata Mangeshkar College of Music and Technology", city: "Nagpur", state: "Maharashtra", cityRank: 11, stateRank: 41 ,learnMoreUrl: "", logo: ""},
        { name: "Priyadarshini College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 12, stateRank: 45 ,learnMoreUrl: "", logo: ""},
        { name: "Shri Sai College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 13, stateRank: 46 ,learnMoreUrl: "", logo: ""},
        { name: "N. M. Institute of Engineering and Technology", city: "Nagpur", state: "Maharashtra", cityRank: 14, stateRank: 47 ,learnMoreUrl: "", logo: ""},
        { name: "Shri Datta Meghe College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 15, stateRank: 49 ,learnMoreUrl: "", logo: ""},
        { name: "G. S. Mandal's Institute of Technology", city: "Nagpur", state: "Maharashtra", cityRank: 16, stateRank: 50 ,learnMoreUrl: "", logo: ""},
        { name: "Smt. Radhikatai Pandav College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 17, stateRank: 51 ,learnMoreUrl: "", logo: ""},
        { name: "Dr. Anusaya D. Patil College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 18, stateRank: 53 ,learnMoreUrl: "", logo: ""},
        { name: "D. S. S. College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 19, stateRank: 54 ,learnMoreUrl: "", logo: ""},
        { name: "K. D. Kachhawa College of Engineering", city: "Nagpur", state: "Maharashtra", cityRank: 20, stateRank: 55 ,learnMoreUrl: "", logo: ""},
    
        // Mumbai Colleges
        { name: "Veermata Jijabai Technological Institute (VJTI)", city: "Mumbai", state: "Maharashtra", cityRank: 1, stateRank: 4 ,learnMoreUrl: "", logo: ""},
        { name: "Sardar Patel Institute of Technology (SPIT)", city: "Mumbai", state: "Maharashtra", cityRank: 2, stateRank: 6 ,learnMoreUrl: "", logo: ""},
        { name: "D. J. Sanghvi College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 3, stateRank: 7 ,learnMoreUrl: "", logo: ""},
        { name: "Thadomal Shahani Engineering College", city: "Mumbai", state: "Maharashtra", cityRank: 4, stateRank: 10 ,learnMoreUrl: "", logo: ""},
        { name: "Rizvi College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 5, stateRank: 11 ,learnMoreUrl: "", logo: ""},
        { name: "K. J. Somaiya College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 6, stateRank: 15 ,learnMoreUrl: "", logo: ""},
        { name: "Shivaji University", city: "Mumbai", state: "Maharashtra", cityRank: 7, stateRank: 18 ,learnMoreUrl: "", logo: ""},
        { name: "Dwarkadas J. Sanghvi College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 8, stateRank: 22 ,learnMoreUrl: "", logo: ""},
        { name: "Fr. Conceicao Rodrigues College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 9, stateRank: 23 ,learnMoreUrl: "", logo: ""},
        { name: "Shri Chhatrapati Shivaji Maharaj College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 10, stateRank: 25 ,learnMoreUrl: "", logo: ""},
        { name: "Don Bosco Institute of Technology", city: "Mumbai", state: "Maharashtra", cityRank: 11, stateRank: 28 ,learnMoreUrl: "", logo: ""},
        { name: "St. Francis Institute of Technology", city: "Mumbai", state: "Maharashtra", cityRank: 12, stateRank: 30 ,learnMoreUrl: "", logo: ""},
        { name: "Vivekanand Education Society's Institute of Technology", city: "Mumbai", state: "Maharashtra", cityRank: 13, stateRank: 31 ,learnMoreUrl: "", logo: ""},
        { name: "Shri Bhagubhai Mafatlal Polytechnic", city: "Mumbai", state: "Maharashtra", cityRank: 14, stateRank: 33 ,learnMoreUrl: "", logo: ""},
        { name: "Bharati Vidyapeeth College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 15, stateRank: 35 ,learnMoreUrl: "", logo: ""},
        { name: "K. J. Somaiya College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 16, stateRank: 37 ,learnMoreUrl: "", logo: ""},
        { name: "Shri Balaji College of Engineering and Management", city: "Mumbai", state: "Maharashtra", cityRank: 17, stateRank: 38 ,learnMoreUrl: "", logo: ""},
        { name: "Indira Gandhi Institute of Aeronautics", city: "Mumbai", state: "Maharashtra", cityRank: 18, stateRank: 40 ,learnMoreUrl: "", logo: ""},
        { name: "T. M. M. Engineering College", city: "Mumbai", state: "Maharashtra", cityRank: 19, stateRank: 45 ,learnMoreUrl: "", logo: ""},
        { name: "M. H. Saboo Siddik College of Engineering", city: "Mumbai", state: "Maharashtra", cityRank: 20, stateRank: 47 ,learnMoreUrl: "", logo: ""},
    
        // Pune Colleges
        { name: "College of Engineering Pune (COEP)", city: "Pune", state: "Maharashtra", cityRank: 1, stateRank: 1,learnMoreUrl: "", logo: "" },
        { name: "Vishwakarma Institute of Technology (VIT)", city: "Pune", state: "Maharashtra", cityRank: 2, stateRank: 5 ,learnMoreUrl: "", logo: ""},
        { name: "Pimpri Chinchwad College of Engineering (PCCOE)", city: "Pune", state: "Maharashtra", cityRank: 3, stateRank: 8 ,learnMoreUrl: "", logo: ""},
        { name: "MIT College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 4, stateRank: 9 ,learnMoreUrl: "", logo: ""},
        { name: "Bharati Vidyapeeth College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 5, stateRank: 13 ,learnMoreUrl: "", logo: ""},
        { name: "Dr. D. Y. Patil Institute of Technology", city: "Pune", state: "Maharashtra", cityRank: 6, stateRank: 14 ,learnMoreUrl: "", logo: ""},
        { name: "Smt. Kashibai Navale College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 7, stateRank: 19 ,learnMoreUrl: "", logo: ""},
        { name: "Indira College of Engineering and Management", city: "Pune", state: "Maharashtra", cityRank: 8, stateRank: 20 ,learnMoreUrl: "", logo: ""},
        { name: "Sinhgad Academy of Engineering", city: "Pune", state: "Maharashtra", cityRank: 9, stateRank: 21 ,learnMoreUrl: "", logo: ""},
        { name: "Jayawantrao Sawant College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 10, stateRank: 24 ,learnMoreUrl: "", logo: ""},
        { name: "Pimpri Chinchwad College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 11, stateRank: 25 ,learnMoreUrl: "", logo: ""},
        { name: "K. K. Wagh Institute of Engineering Education and Research", city: "Pune", state: "Maharashtra", cityRank: 12, stateRank: 28 ,learnMoreUrl: "", logo: ""},
        { name: "R. A. Podar College of Commerce and Economics", city: "Pune", state: "Maharashtra", cityRank: 13, stateRank: 29 ,learnMoreUrl: "", logo: ""},
        { name: "G. H. Raisoni College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 14, stateRank: 30 ,learnMoreUrl: "", logo: ""},
        { name: "Sanjivani College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 15, stateRank: 32 ,learnMoreUrl: "", logo: ""},
        { name: "D. Y. Patil Institute of Technology", city: "Pune", state: "Maharashtra", cityRank: 16, stateRank: 34 ,learnMoreUrl: "", logo: ""},
        { name: "Fergusson College", city: "Pune", state: "Maharashtra", cityRank: 17, stateRank: 36 ,learnMoreUrl: "", logo: ""},
        { name: "Bharti Vidyapeeth's College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 18, stateRank: 39 ,learnMoreUrl: "", logo: ""},
        { name: "M. A. Rangoonwala College of Dental Science", city: "Pune", state: "Maharashtra", cityRank: 19, stateRank: 41 ,learnMoreUrl: "", logo: ""},
        { name: "S. S. G. M. College of Engineering", city: "Pune", state: "Maharashtra", cityRank: 20, stateRank: 42 ,learnMoreUrl: "", logo: ""},
    ];

    function handleSelection() {
        const container = document.getElementById('college-container');
        container.innerHTML = ''; // Clear previous results
    
        // Get the selected city and rank filter
        const selectedCity = document.getElementById("college-selector").value;
        const rankFilter = document.getElementById("rank-selector").value;
    
        // Filter colleges based on selection
        let filteredColleges = colleges;
        if (selectedCity !== 'All') {
            filteredColleges = colleges.filter(college => college.city === selectedCity);
        }
    
        // Sort by state rank
        filteredColleges.sort((a, b) => a.stateRank - b.stateRank);
    
        // Limit the number of colleges based on the selected rank filter
        if (rankFilter !== 'All') {
            filteredColleges = filteredColleges.slice(0, rankFilter);
        }
    
        // Create and append college cards
        filteredColleges.forEach(college => {
            const card = document.createElement('div');
            card.className = 'college-card'; // Updated class name to match your HTML
        
            card.innerHTML = `
                <div class="card-content">
                    <h2 class="card-title">${college.name}</h2>
                    <p class="card-description">City Rank: <strong>${college.cityRank}</strong>, State Rank: <strong>${college.stateRank}</strong></p>
                    <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${college.city}, ${college.state}</p>
                    <a href="${college.learnMoreUrl}" class="learn-more-button">Learn More</a>
                </div>
            `;
        
            container.appendChild(card);
        });
        
    }
    // Initialize with all colleges displayed
    handleSelection();
  