# 🌍 WorkScape: Connecting You with Opportunities

WorkScape is a comprehensive **job search platform** designed to streamline the job hunting experience by aggregating listings from multiple sources into a single, user-friendly mobile application.  
Built using **React Native**, **Expo**, and **Firebase**, the app allows users to search, save, and apply for jobs seamlessly while providing companies with tools to post and manage job listings.

---

## 📌 Project Overview

WorkScape bridges the gap between talent and opportunity by creating a centralized platform where job seekers can discover their dream roles and employers can find the perfect candidates — all within a clean, intuitive, and responsive interface.

The platform leverages the **JSearch API (RapidAPI)** to fetch real-time job data and integrates **Firebase** for authentication, data management, and cloud functions, ensuring a scalable and secure experience for all users.

---

## 🎯 Objectives

- ✅ Aggregate job listings from multiple sources into one platform
- ✅ Simplify the job application process with direct in-app applications
- ✅ Provide personalized job recommendations using AI-driven insights
- ✅ Offer real-time notifications for job updates and application statuses
- ✅ Ensure a user-friendly interface for both job seekers and employers

---

## 🧠 Key Features

### For Job Seekers 👤
- 🔐 **User Registration & Authentication** – Secure signup and login
- 🔍 **Advanced Job Search** – Filter by location, salary, experience, and more
- 🔖 **Save Jobs** – Bookmark listings for later review
- 📝 **Direct Applications** – Apply to jobs via deep linking
- 📊 **Track Application Status** – Monitor your job applications in real-time
- 🎯 **Personalized Recommendations** – AI-driven job suggestions based on your profile

### For Employers 🏢
- 🏭 **Company Registration** – Create and manage company profiles
- 📢 **Post Job Listings** – Publish job openings with detailed requirements
- 👥 **View Candidate Profiles** – Search and review potential hires
- 📋 **Manage Applications** – Track and respond to candidate applications
- 📈 **Analytics Dashboard** – Monitor job posting performance

---

## 🛠️ Technology Stack

### Frontend
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

### Backend & Database
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Firestore](https://img.shields.io/badge/Firestore-FFA611?style=for-the-badge&logo=firebase&logoColor=white)
![Cloud Functions](https://img.shields.io/badge/Cloud_Functions-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)

### API & Integration
![RapidAPI](https://img.shields.io/badge/RapidAPI-0096D6?style=for-the-badge&logo=rapidapi&logoColor=white)
![JSearch API](https://img.shields.io/badge/JSearch_API-1E90FF?style=for-the-badge&logo=apifox&logoColor=white)

### Testing & Development Tools
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Firebase Emulator](https://img.shields.io/badge/Firebase_Emulator-FFA611?style=for-the-badge&logo=firebase&logoColor=white)

---

## ⚙️ Installation & Setup

Follow these steps to set up WorkScape locally:

```bash
# Clone the repository
git clone https://github.com/DPriyangkush/WorkScape.git

# Navigate into the project directory
cd WorkScape

# Install dependencies
npm install

# Start the Expo development server
npx expo start
```

**Prerequisites:**
- Node.js ≥ 18
- Expo CLI installed (`npm install -g expo-cli`)
- Valid RapidAPI key for JSearch API
- Firebase project configured with your credentials

---

## 🔑 Environment Variables

Create a `.env` file in your project root and include the following:

```bash
EXPO_PUBLIC_RAPID_API_KEY=your_rapidapi_key
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
```

---

## 🗃️ Database Design

The app uses **Firebase Firestore** with the following collections:

| Collection | Description |
|------------|-------------|
| **Company Registration** | Company details and credentials |
| **Jobs** | Job postings with titles, descriptions, and requirements |
| **Candidate Registration** | User profiles and credentials |
| **Saved Jobs** | User-bookmarked jobs |
| **Applications** | Job application tracking |
| **Candidate Login** | Authentication data |

---

## 🔗 System Architecture

```
Frontend (React Native)
    ↓
Firebase Authentication
    ↓
Firebase Firestore (Database)
    ↓
Cloud Functions (Business Logic)
    ↓
JSearch API (External Job Data)
```

**Key Components:**
- **Frontend Components:** JobList, JobDetail, SearchBar, UserProfile, CompanyDashboard
- **Backend Services:** Firebase Auth, Firestore, Cloud Functions
- **External Integration:** JSearch API for real-time job listings
- **Security:** Firebase Security Rules, HTTPS, data encryption

---

## 📊 UML Diagrams

The project includes comprehensive system analysis and design documentation:

- ✅ Entity-Relationship Diagram (ERD)
- ✅ Class Diagram
- ✅ Object Diagram
- ✅ Activity Diagram
- ✅ Sequence Diagram
- ✅ Use Case Diagram
- ✅ Component Diagram
- ✅ Deployment Diagram

---

## 🧪 Testing Strategy

### Testing Methodologies
- **Unit Testing** – Individual components (auth, job search, etc.)
- **Integration Testing** – Module interactions (Firebase, APIs)
- **System Testing** – End-to-end workflow validation
- **User Acceptance Testing (UAT)** – Feedback from real users

### Test Cases Covered
✅ User registration and login  
✅ Job search with filters  
✅ Job application submission  
✅ Company job posting  
✅ Bookmark functionality  
✅ Performance and security testing  
✅ API response handling  
✅ Authentication flow  

### Testing Tools
- **Jest & React Native Testing Library** – Unit and integration testing
- **Postman** – API testing and validation
- **Firebase Emulator** – Backend testing and development

---

## 🚀 Future Enhancements

### Phase 1 (Short-term)
- ⬜ AI-powered job recommendations
- ⬜ Resume parsing and auto-fill applications
- ⬜ Dark mode and UI customization
- ⬜ Multi-language support

### Phase 2 (Mid-term)
- ⬜ In-app chat system for candidate-recruiter communication
- ⬜ Video resumes and virtual interviews
- ⬜ Salary insights and company reviews
- ⬜ LinkedIn integration

### Phase 3 (Long-term)
- ⬜ Blockchain-based employment verification
- ⬜ Smart interview preparation tools
- ⬜ Gamification for user engagement
- ⬜ Augmented Reality office tours

---

## 📚 References & Resources

- **React Native in Action** – Nader Dabit
- **Fullstack React Native** – Devin Abbott & Houssein Djirdeh
- **Firebase Essentials** – Neil Smyth
- **API Design Patterns** – JJ Geewax
- **Designing Mobile Interfaces** – Steven Hoober & Eric Berkman

---

## 🗂️ Project Structure

```
WorkScape/
├── src/
│   ├── components/          # Reusable UI components
│   ├── screens/             # App screens (Home, Search, Profile, etc.)
│   ├── navigation/          # Navigation configuration
│   ├── services/            # API calls and Firebase services
│   ├── utils/               # Helper functions
│   └── config/              # App configuration
├── assets/                  # Images, fonts, and static files
├── __tests__/              # Test files
├── firebase/               # Firebase configuration
├── .env                    # Environment variables
├── app.json               # Expo configuration
├── package.json           # Dependencies
└── README.md              # Project documentation
```

---

## 🧑‍💻 Author & Academic Information

**Developed By:** Priyangkush Debnath  
**Under the Guidance of:** Prof. Shivani Deopa  
**Institution:** Ramniranjan Jhunjhunwala College of Arts, Science & Commerce, Ghatkopar (W)  
**University:** University of Mumbai (2024–2025)  
**Program:** Bachelor of Computer Science

📍 Mumbai, Maharashtra, India  
💼 Passionate about Data Science, Mobile Development, and Web Technologies
  
🔗 [LinkedIn](https://www.linkedin.com/in/priyangkush/) | [GitHub](https://github.com/DPriyangkush)  
📧 Email: dpriyangkush004@gmail.com

---

## ⭐ Contribute

Contributions are always welcome!  
If you'd like to improve the UI, add features, or fix bugs, please:

1. Fork the repository
2. Create a new branch (`feature/your-feature-name`)
3. Commit your changes with clear messages
4. Submit a pull request with a detailed description

---

## 🛡️ License

This project is developed for **academic purposes** as part of the Bachelor of Computer Science program.  
Licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact & Support

For queries, contributions, or feedback:
- 📧 Email: dpriyangkush004@gmail.com
- 🐞 Issues: [GitHub Issues Page](https://github.com/DPriyangkush/WorkScape/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/DPriyangkush/WorkScape/discussions)

---

**Made with ❤️ for Job Seekers and Employers Everywhere**

*WorkScape – Bridging the gap between talent and opportunity.*
