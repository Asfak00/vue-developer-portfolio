# 🌐 Vue Portfolio Website  

Welcome to my personal portfolio website! 🎉 This is a front-end developer portfolio that showcases my skills, projects, and experience. I’m making it open-source to help other developers build their own portfolios.

![image](https://github.com/user-attachments/assets/b5f9ded2-3678-47bd-8c45-09c24f94e185)

## ✨ Features  

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices.  
- **Modern UI/UX**: Clean and elegant interface with smooth animations.  
- **Dynamic Content**: Easily customize the content through JSON or JavaScript files.  
- **Projects Section**: Display your portfolio projects with descriptions, technologies used, and links.  
- **Social Media Integration**: Links to your social profiles.  
- **SEO Optimized**: Improve your online visibility.  

## 🔗 Demo  

Check out the live demo of my portfolio website: [Live Demo](https://asfakahmed.netlify.app)  

## 🚀 Installation  

Follow these steps to set up the project locally:  

### Prerequisites  

Make sure you have the following installed:  
- [Node.js](https://nodejs.org/) (v22.11.0)  
- [Git](https://git-scm.com/)  

### Clone the Repository  

```bash  
git clone https://github.com/Asfak00/vue-developer-portfolio.git
cd vue-developer-portfolio
```  

### Install Dependencies  

```bash  
npm install  
```  

### Start the Development Server  

```bash  
npm run dev  
```  

This will start the development server. Open your browser and navigate to `http://localhost:5174`.  

## 📂 Usage  

### Customize the Content  

1. Navigate to the `src/Utils` folder.  
2. Update the JSON or JavaScript files with your information (e.g., projects, blogs, skills etc).

### The full project folder structure

<pre>
Asfak00-vue-developer-portfolio/
├── index.html
├── public/
├── postcss.config.js
├── package.json
├── vite.config.js
├── LICENSE
├── README.md
├── tailwind.config.js
└── src/
    ├── SvgIcons/
    │   ├── JsIcon.vue
    │   ├── HasnodeIcon.vue
    │   ├── ReactIcon.vue
    │   ├── VueIcon.vue
    │   └── TailwindIcon.vue
    ├── components/
    │   ├── Footer.vue
    │   ├── Blogs.vue
    │   ├── MobileNavbar.vue
    │   ├── Hero.vue
    │   ├── Navbar.vue
    │   ├── Projects.vue
    │   ├── Experience.vue
    │   ├── AboutMe/
    │   │   ├── AboutMe.vue
    │   │   ├── Hobyy.vue
    │   │   ├── Index.vue
    │   │   └── Education.vue
    │   ├── Achievements.vue
    │   └── Skill.vue
    ├── Utils/
    │   ├── BlogsData.js
    │   ├── SkillsData.js
    │   ├── AchievementData.js
    │   ├── ExperienceData.js
    │   ├── ReusableStyles.js
    │   └── ProjectsData.js
    ├── Layout.vue
    ├── style.css
    ├── main.js
    └── App.vue
</pre>

### Build for Production  

To generate a production build:  

```bash  
npm run build  
```  

The optimized files will be in the `dist` folder, ready to deploy.  

### Deployment  

You can deploy the `dist` folder to any static hosting service, such as:  
- [Vercel](https://vercel.com/)  
- [Netlify](https://www.netlify.com/)  
- [GitHub Pages](https://pages.github.com/)  

## 🛠 Technologies Used  

- **Frontend**: HTML, CSS, JavaScript, Tailwind CSS  
- **Framework**: Vue.js
- **Animation**: Vue <Transition>

## 📄 License  

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Asfak00/vue-developer-portfolio/blob/main/LICENSE) file for details.  

## 🙌 Acknowledgements  

- Inspired by various modern portfolio designs.  
- Special thanks to open-source contributors and the developer community.  
