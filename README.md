# 🚀 Modern Portfolio Website

A beautiful, responsive, and modern portfolio website built with React 18, featuring dark/light mode toggle, smooth animations, and cutting-edge design.

![Portfolio Preview](./src/Assets/portfolio-preview.png)

## ✨ Features

- 🎨 **Modern Design**: Clean, minimalist design with smooth animations
- 🌙 **Dark/Light Mode**: Toggle between dark and light themes
- 📱 **Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with React 18 and optimized bundle
- 🎭 **Animations**: Smooth transitions using Framer Motion
- 🎯 **Interactive**: Particle background and hover effects
- 📧 **Contact Form**: Functional contact form with validation
- 🎓 **Resume Section**: Downloadable resume integration
- 📊 **GitHub Stats**: Dynamic GitHub contributions calendar
- 🔧 **Modern Icons**: Lucide React icons throughout

## 🛠️ Technologies Used

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: CSS3, Bootstrap 5, Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Particles**: TSParticles
- **Routing**: React Router DOM v6
- **Build Tool**: Create React App
- **Font**: Inter, JetBrains Mono, Poppins

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anpatil1/Portfolio1-master.git
   cd Portfolio1-master
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

## 📁 Project Structure

```
Portfolio-master/
├── public/
│   ├── index.html
│   ├── favicon.png
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Home/
│   │   ├── Projects/
│   │   ├── Resume/
│   │   ├── NavbarNew.js
│   │   ├── ThemeProvider.js
│   │   ├── ParticleNew.js
│   │   └── Pre.js
│   ├── Assets/
│   ├── App.js
│   ├── style.css
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Customization

### Colors and Themes

Edit the CSS variables in `src/style.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  /* ... more variables */
}
```

### Personal Information

Update the following files with your information:
- `src/components/Home/Home.js` - Hero section
- `src/components/About/About.js` - About section
- `src/components/Contact/Contact.js` - Contact information
- `src/components/Projects/Projects.js` - Your projects

### Resume

Replace `src/Assets/Avadhut_Nangare_Patil_Resume.pdf` with your resume

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

## 📝 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from CRA (⚠️ irreversible)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [Lucide React](https://lucide.dev/) - For beautiful icons
- [Bootstrap](https://getbootstrap.com/) - For responsive design

## 📞 Contact

- **Email**: nangareavadhut@gmail.com
- **LinkedIn**: [Your LinkedIn](https://www.linkedin.com/in/avadhut-nangare-patil-470901250/)
- **GitHub**: [Your GitHub](https://github.com/Anpatil1)

---

⭐ Star this repository if you found it helpful!
