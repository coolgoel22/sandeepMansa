export class Constants{
    public static getCitiesOfAState(state): string[]{
        let stateNCities =  {
            "Andhra Pradesh": ["Adoni", "Amaravati", "Anantapur", "Bhimavaram", "Chilakaluripet", "Chittoor", "Dharmavaram", "Eluru", "Gudivada", "Guntakal", "Guntur", "Hindupur", "Kadapa", "Kakinada", "Kurnool", "Machilipatnam", "Madanapalle", "Nandyal", "Narasaraopet", "Nellore", "Ongole", "Proddatur", "Rajamundry", "Srikakulam", "Tadepalligudem", "Tadipatri", "Tenali", "Tirupati", "Vijayawada", "Visakhapatnam", "Vizianagaram"],

            "Arunachal Pradesh":["Anjaw", "Changlang", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Papum Pare", "Siang", "Tawang", "Tirap", "Upper Dibang Valley", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],

            "Bihar": ["Arrah", "Aurangabad", "Bagaha", "Begusarai", "Bettiah", "Bhagalpur", "Bihar    Sharif", "Buxar", "Chhapra", "Danapur", "Darbhanga", "Dehri", "Gaya", "Hajipur", "Jamalpur", "Jehanabad", "Katihar", "Kishanganj", "Motihari", "Munger", "Muzaffarpur", "Nawada", "Patna", "Purnia", "Saharsa", "Sasaram", "Sitamarhi", "Siwan"],
            
            "Chhattisgarh": ["Bastar", "Bhilai-Durg", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Janjgir-champa", "Jashpur", "Kabeerdham", "Kanker", "Korba", "Koriya", "Mahasamund", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sarguja"],

            "Delhi": ["BTM Bagh", "Chanakyapuri", "Civil Lines", "Connaught Place", "Daryaganj", "Defence Colony", "Delhi Cantonment", "Hauz Khas", "IT park Garden", "Kalkaji", "Karol Bagh", "Kotwali", "Laxmi Nagar", "Model Town", "Najafgarh", "Narela", "Naveen Shahdara", "Paharganj", "Parliament Street", "Patel Nagar", "Preet Vihar", "Rohtash Nagar", "Sadar Bazaar", "Saraswati Vihar", "Shahdara", "Vasant Vihar", "Vivek Vihar"],
            
            "Goa":["Bicholim", "Canacona", "Cuncolim", "Curchorem", "Mapusa", "Margao", "Mormugao", "Panaji", "Pernem", "Ponda", "Quepem", "Sanguem", "Sanquelim", "Valpoi"],

            "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota", "Udaipur", "Dahod", "Dang", "Devbhoomi", "Dwarka", "Gandhinagar", "Gir", "Somnath", "Jamnagar", "Junagadh", "Kutch", "Kheda", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],

            "Haryana":["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurgaon", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],

            "Himachal Pradesh": ["Arki", "Baddi", "Bakloh Cantonment", "Banjar", "Bhota", "Bhuntar", "Bilaspur", "Chamba", "Chaupal", "Chuari Khas", "Dagshai Cantonment", "Dalhousie", "DalhousieCantonment", "Daulatpur", "Dera Gopipur", "Dharmsala", "Gagret", "Ghumarwin", "Hamirpur", "Indora", "Jawalamukhi", "Jhakhri", "Jogindernagar", "Jubbal", "Jutogh Cantonment", "Kangra", "Kasauli Cantonment", "Kotkhai", "Kullu", "Manali", "Mandi", "Mehatpur Basdehra", "Nadaun", "Nagrota Bagwan", "Nahan", "Naina Devi", "Nalagarh", "Narkanda", "Nurpur", "Palampur", "Paonta Sahib", "Parwanoo", "Rajgarh", "Rampur", "Rewalsar", "Rohru", "Sabathu Cantonment", "Santokhgarh", "Sarkaghat", "Seoni", "Shamshi", "Shimla", "Solan", "Sundarnagar", "Talai", "Theog", "Tira Sujanpur", "Una", "Yol Cantonment"],
            
            "Jammu & Kashmir":["Doda", "Jammu", "Kathua", "Kishtwar", "Poonch", "Rajouri", "Ramban", "Reasi", "Samba", "Udhampur"],

            "Jharkhand":["Bokaro Steel City", "Chirkunda", "Deoghar", "Dhanbad", "Giridih", "Hazaribagh", "Jamshedpur", "Medininagar", "Phusro", "Ramgarh", "Ranchi"],

            "Karnataka": ["Bagalkot", "Bengaluru Urban", "Bengaluru Rural", "Belagavi", "Ballari", "Bidar", "Vijayapur", "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere",  "Dharwad", "Gadag", "Kalaburagi", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Yadgir"],

            "Kerala":["Adoor", "Anchal", "Attingal", "Beypore", "Calicut", "Cannanore", "Chalakkudy", "Changanassery", "Chavakkad", "Cherthala", "Kalamassery", "Kanhangad", "Kannur", "Kasaragod", "Kattappana", "Kayamkulam", "Kochi", "Kollam", "Kottakkal", "Kottarakara", "Koyilandy", "Kunnamkulam", "Malappuram", "Mananthavady", "Manjeri", "Manjeshwaram", "Maradu", "Mattanur", "Muvattupuzha", "Nedumangad", "Neyyattinkara", "Nileshwaram", "Ottappalam", "Palakkad", "Pandalam", "Paravur", "Pathanamthitta", "Payyanur", "Perinthalmanna", "Ponnani", "Punalur", "Ramanattukara", "Shornur", "Taliparamba", "Tellicherry", "Thalassery", "Thirurangadi", "Thiruvananthapuram", "Thrissur", "Tirur", "Tiruvalla", "Uppala", "Varkala", "Vatakara"],

            "Madhya Pradesh": ["Bhopal", "Chambal", "Gwalior", "Indore", "Jabalpur", "Narmadapuram", "Rewa", "Sagar", "Shahdol", "Ujjain"],

            "Maharashtra":["Ahmednagar", "Akola", "Achalpur", "Amravati", "Aurangabad", "Beed", "Chandrapur", "Dhule", "Gondia", "Bhusawal", "Jalgaon", "Jalna", "Ichalkaranji", "Kolhapur", "Latur", "Greater Mumbai", "Kamptee", "Nagpur", "Nanded-Waghela ", "Nandurbar", "Malegaon", "Nashik", "Osmanabad", "Navi Mumbai Panvel Raigad CT", "Panvel", "Parbhani", "Pune", "Sangli", "Satara", "Barshi", "Solapur", "Bhiwandi-Nizampur", "Vasai-Virar", "Wardha", "Yavatmal", "Udgir"
            ],

            "Odisha": ["Angul" , "Boudh" , "Balangir" , "Bargarh" , "Balasore" , "Bhadrak" , "Cuttack" , "Debagarh" , "Dhenkanal" , "Ganjam" , "Gajapati" , "Jharsuguda" , "Jajpur" , "Jagatsinghapur" , "Khordha" , "Kendujhar" , "Kalahandi" , "Kandhamal" , "Koraput" , "Kendrapara" , "Malkangiri" , "Mayurbhanj" , "Nabarangpur" , "Nuapada" , "Nayagarh" , "Puri" , "Rayagada" , "Sambalpur" , "Subarnapur" , "Sundergarh"],

            "Punjab":["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Firozpur", "Fazilka", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Sri Muktsar Sahib", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Taran Taran"],
            
            "Rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalor", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],

            "Tamil Nadu": ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanniyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
            
            "Telangana": ["Adilabad", "Hyderabad", "Karimnagar", "Khammam", "Mahabubnagar", "Nalgonda", "Nizamabad", "Ramagundam", "Suryapet", "Warangal"],

            "Uttarakhand": ["Dehradun", "Haldwani", "Haridwar", "Kashipur", "Rishikesh", "Roorkee", "Rudrapur"],

            "Uttar Pradesh":["Agra", "Firozabad", "Mainpuri", "Mathura", "Aligarh", "Etah", "Hathras",      "Kasganj", "Allahabaad", "Fatehpur", "Kaushambi", "Pratapgarh", "Azamgarh", "Ballia", "Mau", "Budaun", "Bareilly", "Pilibhit", "Shahjahanpur", "Basti", "Sant Kabir Nagar", "Siddharthnagar", "Banda", "Chitrakoot", "Hamirpur", "Mahoba", "Bahraich", "Balarampur", "Gonda", "Shravasti", "Ambedkar Nagar", "Amethi", "Barabanki", "Faizabad", "Sultanpur", "Deoria", "Gorakhpur", "Kushinagar", "Maharajganj", "Jalaun", "Jhansi", "Lalitpur", "Auraiya", "Etawah", "Farrukhabad", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Hardoi", "Lakhimpur Kheri", "Lucknow", "Raebareli", "Sitapur", "Unnao", "Bagpat", "Bulandshahr", "Gautam Buddha Nagar", "Ghaziabad", "Hapur", "Meerut", "Mirzapur", "Sant Ravidas Nagar", "Sonbhadra", "Amroha", "Bijnor", "Moradabad", "Rampur", "Sambhal", "Muzaffarnagar", "Saharanpur", "Shamli", "Chandauli", "Ghazipur", "Jaunpur", "Varanasi"],

            "West Bengal": ["Alipurduar", "Asansol", "Baharampur", "Balurghat", "Bangaon", "Bankura", "Bardhaman", "Basirhat", "Chakdaha", "Cooch Behar", "Dankuni", "Darjeeling", "Dhulian", "Durgapur", "Habra", "Haldia", "Jalpaiguri", "Jangipur", "Kharagpur", "Kolkata", "Krishnanagar", "Malda", "Medinipur", "Nabadwip", "Purulia", "Raiganj", "Ranaghat", "Shantipur", "Siliguri"]
        }

        return stateNCities[state];
    }
    
    public static getStates(): string[] {
        return ["Andhra Pradesh", "Arunachal Pradesh", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttarakhand", "Uttar Pradesh", "West Bengal"];
        // return ["Assam", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", , "Tripura",  ];
    }
    public static getProductCategory(): any {
        return [
            {key:"1", name:"गौ क्षीर से बनने वाले उत्पाद"},
            {key:"2", name:"गोमय से बनने वाले उत्पाद"}, 
            {key:"3", name:"गौमूत्र से बनने वाले उत्पाद"},
            {key:"4", name:"गौमूत्र अर्क और उससे बनने वाले उत्पाद"},
            {key:"5", name:"गौमूत्र क्षार और उससे बनने वाले उत्पाद"},
            {key:"6", name:"गौमूत्र घन और उससे बनने वाले उत्पाद"},
            {key:"8", name:"पंचगव्य से बनने वाले उत्पाद"},
            {key:"7", name:"कृषि उत्पाद"}
         ]
    }
    public static getProductsList(): any {
        return {
            "1": [
                                    {key: '1', name:'गौ क्षीर'},
                                    {key: '2', name:'गौ घृत'}
                                ],
            "2": [
                                    {key: '3', name:'गोमय मच्छर प्रतिबंधक धूपबत्ती'}, 
                                    {key: '4', name:'गोमय भस्म (सर्व विकार)'},
                                    {key: '5', name:'बर्तन स्वच्छ करनेवाला चूर्ण'},
                                    {key: '6', name:'गोमय दंतमंजन'}
                                ],
            "3": [
                                    {key: '7', name:'केशसंवर्धक तेल'},
                                    {key: '8', name:'गौमूत्र नेत्रौषधी (आँखो के विकार)'},
                                    {key: '9', name:'गौमूत्र कर्ण औषधि (कानों के विकार)'},
                                    {key: '10', name:'गौमूत्र आसव (श्वसनतंत्र के विकार)'},
                                    {key: '11', name:'बालपाल रस (छोटे बच्चों के विकार)'},
                                    {key: '12', name:'नारी संजीवनी (स्त्रियों के विकार)'},
                                    {key: '13', name:'गौमूत्र चंद्रमा अर्क (सर्व विकार)'},
                                    {key: '14', name:'गौमूत्र नीम स्प्रे (त्वचाविकार)'}
                                ],
            "4": [
                                    {key: '15', name:'गौमूत्र अर्क - तुलसी'},
                                    {key: '16', name:'गौमूत्र अर्क - पारिजात'},
                                    {key: '18', name:'गौमूत्र अर्क - सप्तरंगी'},
                                    {key: '18', name:'गौमूत्र अर्क - सर्पगंधा'},
                                    {key: '18', name:'गौमूत्र अर्क - पुनर्नवा'},
                                    {key: '18', name:'गौमूत्र अर्क - सदाबहार'},
                                    {key: '19', name:'गौमूत्र अर्क - गोखरू'},
                                    {key: '19', name:'गौमूत्र अर्क - अर्जुन'},
                                    {key: '19', name:'गौमूत्र अर्क - वरुण'},
                                    {key: '19', name:'गौमूत्र अर्क - कांचनार'},
                                    {key: '19', name:'गौमूत्र अर्क - गिलोय'},
                                    {key: '19', name:'गौमूत्र अर्क - पाषाणभेद'},
                                    {key: '19', name:'गौमूत्र अर्क - मुलेठी'},
                                    {key: '18', name:'गौमूत्र अर्क - कालमेघ'},
                                    {key: '17', name:'गौमूत्र अर्क - नंदी (सहजन)'}
                                ],
            "5": [
                                    {key: '20', name:'गौमूत्र गेंदा स्प्रे (व्रण)'},
                                    {key: '21', name:'गौमूत्र शैम्पू (कैश विकार)'},
                                    {key: '22', name:'गव्य पित्तशामक चूर्ण'},
                                    {key: '23', name:'गव्य पित्त बर्हिगमन चूर्ण'},
                                    {key: '24', name:'वर्धमान त्रिफला गौमूत्र चूर्ण (सर्व विकार)'},
                                    {key: '25', name:'गौमूत्र मधुमेहारि चूर्ण (मधुमेह)'},
                                    {key: '26', name:'गौमूत्र गेंदा मलहम (व्रण)'},
                                    {key: '27', name:'गौमूत्र मंजिष्ठा मलहम (त्वचा विकार)'},
                                    {key: '28', name:'श्वेत कोढ़ नाशक मलहम'}
                                ],
            "6": [
                                    {key: '29', name:'गौमूत्र घनवटी'},
                                    {key: '30', name:'गौमूत्र मलहम (त्वचा विकार)'}
                                ],
            "7": [
                            {key: '31', name:'गौमूत्र कीटनाशक'},
                            {key: '32', name:'दशपर्णी अर्क (जैविक कीटनाशक)'},
                            {key: '33', name:'जीवामृत (जैविक खाद)'}
                        ],
            "8": [
                            {key: '31', name:'पंचगव्य नासिका'},
                            {key: '32', name:'स्नान चूर्ण'},
                            {key: '33', name:'मुख लेप'}
                        ]
        };
    }
    public static getProductCategoryObj():any{
        return {
            1: "गौ क्षीर से बनने वाले उत्पाद",
            2: "गोमय से बनने वाले उत्पाद", 
            3: "गौमूत्र से बनने वाले उत्पाद",
            4: "गौमूत्र अर्क और उससे बनने वाले उत्पाद",
            5: "गौमूत्र क्षार और उससे बनने वाले उत्पाद",
            6: "गौमूत्र घन ओर उससे बनने वाले उत्पाद",
            7: "कृषि उत्पाद"
        };
    }
    public static getProductNameObj():any{
        return {
            1:'गौ क्षीर',
            2:'गौ घृत',
            3:'गोमय मच्छर प्रतिबंधक धूपबत्ती',
            4:'गोमय भस्म (सर्व विकार)',
            5:'बर्तन स्वच्छ करनेवाला चूर्ण',
            6:'गोमय दंतमंजन',
            7:'केशसंवर्धक तेल',
            8:'गौमूत्र नेत्रौषधी (आँखो के विकार)',
            9:'गौमूत्र कर्ण औषधि (कानों के विकार)',
            10:'गौमूत्र आसव (श्वसनतंत्र के विकार)',
            11:'बालपाल रस (छोटे बच्चों के विकार)',
            12:'नारी संजीवनी (स्त्रियों के विकार)',
            13:'गौमूत्र चंद्रमा अर्क (सर्व विकार)',
            14:'गौमूत्र नीम स्प्रे (त्वचाविकार)',
            15:'तुलसी अर्क',
            16:'पारिजात  अर्क',
            17:'नंदी  अर्क',
            18:'कालमेघ  अर्क',
            19:'अर्जुन  अर्क',
            20:'गौमूत्र गेंदा स्प्रे (व्रण)',
            21:'गौमूत्र शैम्पू (कैश विकार)',
            22:'गव्य पित्तशामक चूर्ण',
            23:'गव्य पित्त बर्हिगमन चूर्ण',
            24:'वर्धमान त्रिफला गौमूत्र चूर्ण (सर्व विकार)',
            25:'गौमूत्र मधुमेहारि चूर्ण (मधुमेह)',
            26:'गौमूत्र गेंदा मलहम (व्रण)',
            27:'गौमूत्र मंजिष्ठा मलहम (त्वचा विकार)',
            28:'श्वेत कोढ़ नाशक मलहम',
            29:'गौमूत्र घनवटी',
            30:'गौमूत्र मलहम (त्वचा विकार)',
            31:'गौमूत्र कीटनाशक',
            32:'दशपर्णी अर्क (जैविक कीटनाशक)',
            33:'जीवामृत (जैविक खाद)'
        }
    }
}