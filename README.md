# Personal Portfolio - Huynh Nhu Ngoc (@hnhngc)

🚀 **Live Demo:** [https://hnhnc176.github.io/portfolio/](https://hnhnc176.github.io/portfolio/)

A modern, responsive personal portfolio website showcasing my journey as a Software Engineer, featuring smooth animations, interactive navigation, and a clean design aesthetic.

## ✨ Features

### 🎨 **Design & UX**
- **Responsive Design**: Updating...
- **Smooth Animations**: Scroll-triggered animations with Intersection Observer API
- **Interactive Navigation**: Centered scrolling with active link highlighting
- **Modern UI**: Clean, professional design with hover effects and transitions
- **Accessibility**: Semantic HTML and keyboard navigation support

### 📱 **Sections**
- **Hero Section**: Introduction with animated elements and CV download
- **About Section**: Personal story, skills showcase, and social links
- **Experience Section**: Professional internship experiences with company logos
- **Projects Section**: Portfolio projects with descriptions and links
- **Contact Section**: Functional contact form with EmailJS integration

### 🛠 **Technical Features**
- **Smooth Scrolling**: Enhanced navigation with centered section positioning
- **Form Validation**: Client-side validation with error handling
- **Email Integration**: Contact form powered by EmailJS
- **Performance Optimized**: Efficient animations and lazy loading
- **Cross-browser Compatible**: Works across modern browsers

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Basic knowledge of HTML/CSS/JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hnhnc176/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Using Python server (recommended)
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   
   # Option 3: Using Node.js server
   npx serve .
   ```

3. **Customize content**
   - Update personal information in `index.html`
   - Modify styles in `main.css` and `base.css`
   - Configure EmailJS credentials in `script.js`

## ⚙️ Configuration

### EmailJS Setup

1. **Create EmailJS Account**
   - Visit [EmailJS](https://www.emailjs.com/)
   - Create a free account

2. **Configure Service**
   - Add email service (Gmail, Outlook, etc.)
   - Create email template
   - Get your credentials

3. **Update Configuration**
   ```javascript
   // In script.js, update these values:
   emailjs.init({
       publicKey: "YOUR_PUBLIC_KEY",
   });
   
   // Update service and template IDs
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
   ```

### Customization Guide

#### **Personal Information**
```html
<!-- Update in index.html -->
<p class="hero__greeting">Hi, My name is [Your Name]</p>
<h1 class="hero__title">[Your Title]</h1>
```

#### **Colors & Styling**
```css
/* Update in base.css */
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --background-color: #your-color;
}
```

#### **Projects**
```html
<!-- Add your projects in index.html -->
<article class="project-card active">
    <div class="project-card__bg">
        <img src="assets/your-project.png" alt="project image">
    </div>
    <!-- Project details -->
</article>
```

## 🏗️ Project Structure

```
portfolio/
├── 📁 assets/              # Images and documents
│   ├── 🖼️ hero.svg         # Hero section graphics
│   ├── 🖼️ about.svg        # About section graphics
│   ├── 📄 resume.pdf       # Downloadable CV
│   └── 🖼️ project-*.png    # Project screenshots
├── 📄 index.html           # Main HTML structure
├── 🎨 base.css             # CSS variables and base styles
├── 🎨 main.css             # Component styles and layouts
├── ⚡ script.js            # JavaScript functionality
└── 📖 README.md            # Project documentation
```

## 🛠️ Technologies Used

### **Frontend**
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality

### **Libraries & APIs**
- **EmailJS**: Contact form email delivery
- **BoxIcons**: Icon library for UI elements
- **Lucide Icons**: Additional icon set
- **Google Fonts**: Typography (DM Sans, Poppins, Source Code Pro)

### **Features**
- **Intersection Observer API**: Scroll animations
- **CSS Custom Properties**: Theming system
- **CSS Grid & Flexbox**: Responsive layouts
- **Form Validation API**: Contact form validation

## 🎯 Performance Features

- **Optimized Images**: Compressed assets for faster loading
- **Efficient Animations**: Hardware-accelerated CSS transforms
- **Minimal Dependencies**: Lightweight external libraries only
- **Semantic HTML**: Better SEO and accessibility
- **Mobile-First Design**: Responsive across all devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Huynh Nhu Ngoc (Jude)**
- 🌐 Portfolio: [https://hnhnc176.github.io/portfolio/](https://hnhnc176.github.io/portfolio/)
- 💼 LinkedIn: [https://www.linkedin.com/in/hnhngc/](https://www.linkedin.com/in/hnhngc/)
- 🐙 GitHub: [https://github.com/hnhnc176](https://github.com/hnhnc176)
- 📧 Email: ngochuynh.0176@gmail.com

---

⭐ **Star this repository if you found it helpful!**
