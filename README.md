# Chew Yong Shan - Cybersecurity Professional Portfolio

A modern, responsive portfolio website showcasing the professional experience and skills of Chew Yong Shan, a Senior Cybersecurity Professional with expertise in penetration testing, incident response, and cloud security assessments.

## 🌟 Features

- **Modern Design**: Clean, professional design with cybersecurity-themed color scheme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations, hover effects, and interactive components
- **Professional Sections**: 
  - Hero section with key statistics
  - About section with education and soft skills
  - Work experience timeline
  - Comprehensive technical skills showcase
  - Professional certifications display
  - Contact form with validation
- **Performance Optimized**: Fast loading with optimized animations and lazy loading
- **Accessibility**: Built with accessibility best practices

## 🚀 Quick Start

### Option 1: Direct Deployment to GitHub Pages

1. **Fork or Clone this repository**
   ```bash
   git clone https://github.com/your-username/resume-website.git
   cd resume-website
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at**: `https://your-username.github.io/resume-website`

### Option 2: Custom Domain (harrychew.com)

1. **Set up your custom domain**:
   - In your repository settings, go to Pages
   - Add your custom domain: `harrychew.com`
   - Create a CNAME file in the root directory with your domain

2. **Update DNS settings** with your domain provider:
   ```
   Type: CNAME
   Name: @
   Value: your-username.github.io
   ```

## 📁 File Structure

```
resume-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🎨 Customization

### Colors and Theme
The website uses CSS custom properties for easy customization. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary-color: #1a1a2e;
    --secondary-color: #16213e;
    --accent-color: #0f3460;
    --highlight-color: #e94560;
    /* ... other colors */
}
```

### Content Updates
- **Personal Information**: Update contact details in the contact section
- **Experience**: Modify the timeline items in the experience section
- **Skills**: Add or remove skill categories and tags
- **Certifications**: Update certification details and links

### Social Media Links
Update the social media links in `script.js`:

```javascript
if (platform.includes('linkedin')) {
    url = 'https://linkedin.com/in/your-actual-profile';
} else if (platform.includes('github')) {
    url = 'https://github.com/your-actual-username';
}
```

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features
- Lazy loading for images
- Optimized animations
- Minimal JavaScript footprint
- Efficient CSS with custom properties
- Responsive images and layouts

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized layouts for all screen sizes
- Hamburger menu for mobile devices
- Responsive typography and spacing

## 🎯 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times
- Mobile-friendly design

## 🔒 Security Features

- Form validation
- XSS protection
- Secure external links
- HTTPS ready

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Email format verification
- Success/error notifications
- Responsive design

**Note**: The form currently shows a success message. To make it functional, you'll need to:
1. Set up a backend service (e.g., Netlify Forms, Formspree)
2. Update the form action and method
3. Configure email notifications

## 🚀 Deployment Options

### GitHub Pages (Recommended)
- Free hosting
- Automatic deployment from Git
- Custom domain support
- SSL certificate included

### Netlify
- Drag and drop deployment
- Form handling
- Custom domain support
- Advanced features

### Vercel
- Fast deployment
- Automatic builds
- Custom domain support
- Serverless functions

## 📈 Analytics

To add analytics, include your tracking code in the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Chew Yong Shan** is a Senior Cybersecurity Professional with 4+ years of experience in:
- Penetration Testing
- Incident Response
- Cloud Security Assessments
- SOC Operations
- Security Leadership

### Contact Information
- **Email**: chewys96@gmail.com
- **Phone**: +60166403392
- **Location**: Kuala Lumpur, Malaysia
- **Website**: harrychew.com

### Professional Certifications
- Certified Azure Red Team Professional (CARTP)
- Certified Red Team Professional (CRTP)
- Offensive Security Certified Professional (OSCP)
- Practical Network Penetration Tester (PNPT)
- Certified Incident Responder (eCIR)
- Certified Ethical Hacker (CEHv10)

---

**Built with ❤️ for the cybersecurity community**

*Last updated: December 2024*
