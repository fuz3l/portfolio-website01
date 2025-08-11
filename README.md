# Amaan's Portfolio - Next.js Version (JavaScript)

This is a Next.js version of the original HTML portfolio website, featuring the same design and functionality with modern React components built in JavaScript.

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Music Player**: Play/pause background music with visual indicators
- **Live Timer**: Tracks time spent on the website
- **Modern UI**: Built with Tailwind CSS and JetBrains Mono font
- **JavaScript**: Built with modern JavaScript and React hooks

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.js           # Root layout with font configuration
│   │   ├── page.js             # Main portfolio page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── ThemeToggle.js      # Dark/light mode toggle
│       ├── MusicPlayer.js      # Audio player component
│       ├── ChatButton.js       # Chat icon button
│       └── Timer.js            # Time tracking component
├── public/
│   └── music.mp3              # Background music file (placeholder)
└── README.md                  # Complete documentation
```

## Customization

### Adding Music
Replace the placeholder `public/music.mp3` file with your preferred background music.

### Styling
The project uses Tailwind CSS for styling. You can customize colors, fonts, and layout by modifying:
- `tailwind.config.js` - Tailwind configuration
- `src/app/globals.css` - Global styles
- Component files - Individual component styling

### Content
Update the navigation links and content in `src/app/page.js` to match your portfolio sections.

## Technologies Used

- **Next.js 15** - React framework
- **JavaScript** - Modern ES6+ features
- **Tailwind CSS** - Utility-first CSS framework
- **JetBrains Mono** - Programming font
- **React Hooks** - State management

## Deployment

The project can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

```bash
npm run build
npm start
```

## Original vs Next.js Version

This Next.js version maintains the exact same visual design and functionality as the original HTML version while providing:

- Better code organization with React components
- Modern JavaScript features
- Improved performance with Next.js optimizations
- Easier maintenance and scalability
- Modern development experience

## License

This project is open source and available under the MIT License. 