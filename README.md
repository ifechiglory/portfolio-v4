# 🚀 React Developer Portfolio

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-green) ![React](https://img.shields.io/badge/React-18-blue) ![Gatsby](https://img.shields.io/badge/Gatsby-5-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3-blue)

A modern, high-performance portfolio website built with Gatsby and React, inspired by Brittany Chiang's v4 design. Features smooth animations, responsive design, and optimized performance.

## ✨ Features

- ⚡ **Blazing Fast** - Built with Gatsby for optimal performance

- 🎨 **Modern Design** - Inspired by Brittany Chiang's portfolio

- 📱 **Fully Responsive** - Mobile-first approach with Tailwind CSS

- 🎬 **Smooth Animations** - Framer Motion for delightful interactions

- 🎯 **SEO Optimized** - Built-in Gatsby SEO features

- 🌙 **Dark Theme** - Navy/Green color scheme for developer-friendly UI

## 🛠️ Tech Stack

| Technology | Purpose |

|------------|---------|

| **React 18** | UI Components |

| **Gatsby 5** | Static Site Generation |

| **Tailwind CSS** | Styling & Utilities |

| **Framer Motion** | Animations & Transitions |

| **GraphQL** | Data Querying |

| **Lucide React** | Icons |

## 📁 Project Structure

```

portfolio/

├── src/

│   ├── components/

│   │   ├── Layout/

│   │   │   ├── Header.jsx     # Navigation with mobile menu

│   │   │   └── Footer.jsx

│   │   └── Sections/

│   │       ├── Hero.jsx       # Landing section

│   │       ├── About.jsx      # About me with profile image

│   │       ├── Experience.jsx # Work history cards

│   │       ├── Projects.jsx   # Project showcase

│   │       └── Contact.jsx    # Contact form

│   ├── pages/

│   │   └── index.js          # Main page

│   ├── data/

│   │   ├── experience.json   # Work experience data

│   │   ├── projects.json     # Project data

│   │   └── navLinks.json     # Navigation structure

│   └── styles/

│       └── global.css        # Tailwind directives & custom styles

├── static/

│   └── resume.pdf           # Static assets

├── gatsby-config.js         # Gatsby configuration

├── tailwind.config.js       # Tailwind theme

└── package.json

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+  

- npm or yarn

### Installation

1\. **Clone the repository**

```bash

git clone https://github.com/yourusername/portfolio.git

cd portfolio

```

2\. **Install dependencies**

```bash

npm install

# or

yarn install

```

3\. **Run development server**

```bash

npm run develop

# or

yarn develop

```

Open [http://localhost:8000](http://localhost:8000) to view your site.

4\. **Build for production**

```bash

npm run build

# or

yarn build

```

## 🎨 Customization

### 1. Personal Information

Update these files with your details:

- `src/data/experience.json` - Work experience

- `src/data/projects.json` - Your projects

- `src/data/navLinks.json` - Navigation items

- `static/resume.pdf` - Your resume

### 2. Styling

Modify the color scheme in `tailwind.config.js`:

```javascript

module.exports = {

  theme: {

    extend: {

      colors: {

        navy: '#0a192f',

        'light-navy': '#112240',

        'lightest-navy': '#233554',

        slate: '#8892b0',

        'light-slate': '#a8b2d1',

        'lightest-slate': '#ccd6f6',

        green: '#64ffda',

      }

    }

  }

}

```

### 3. Profile Image

Replace `src/images/me.jpeg` with your profile photo.

## 📱 Key Components

### Header Navigation

- Fixed header with scroll effects

- Mobile menu with full-screen overlay

- Smooth scrolling to sections

- Resume download button

### Experience Section

```jsx

// Interactive cards with:

- Expandable details

- Technology tags

- Current job badges

- Statistics counter

```

### About Section

```jsx

// Profile with animated pulse effect

- 4-ring concentric circles

- Staggered animations

- Technology grid with hover effects

```

## 🎯 Performance Optimizations

- **Image Optimization**: Gatsby Image Plugin for responsive images

- **Code Splitting**: Automatic route-based code splitting

- **Prefetching**: Gatsby Link prefetches pages on hover

- **Minification**: HTML, CSS, JS minification in production

- **Lazy Loading**: Images and components load on viewport entry

## 📝 Scripts

| Command | Description |

|---------|-------------|

| `npm run develop` | Start development server |

| `npm run build` | Build for production |

| `npm run serve` | Serve production build |

| `npm run clean` | Clear Gatsby cache |

| `npm run lint` | Run ESLint |

| `npm run format` | Format with Prettier |

## 🚀 Deployment

### Netlify (Recommended)

1\. Push to GitHub

2\. Connect repo to Netlify

3\. Build command: `npm run build`

4\. Publish directory: `public`

### Vercel

```bash

npm i -g vercel

vercel

```

### GitHub Pages

```bash

npm run build

npm run deploy

```

## 🤝 Contributing

1\. Fork the project

2\. Create your feature branch (`git checkout -b feature/AmazingFeature`)

3\. Commit changes (`git commit -m 'Add AmazingFeature'`)

4\. Push to branch (`git push origin feature/AmazingFeature`)

5\. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Brittany Chiang](https://brittanychiang.com)

- Icons from [Lucide React](https://lucide.dev)

- Animation library [Framer Motion](https://www.framer.com/motion/)

Project Link: [https://github.com/ifechiglory/portfolio-v4](https://github.com/ifechiglory/portfolio-v4)

---

⭐ **Star this repo if you found it helpful!** ⭐

---
