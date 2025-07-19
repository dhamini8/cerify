# Cerify Landing Page

A modern, responsive landing page built with React and Express.js, featuring a sleek design for a blockchain verification platform.

## 🚀 Features

- **Modern React Frontend**: Built with React 18 and modern hooks
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Component Library**: Extensive UI components built with Radix UI
- **Express.js Backend**: Server-side functionality for API endpoints
- **Real-time Updates**: WebSocket support for live updates
- **TypeScript Support**: Full TypeScript configuration
- **Smooth Animations**: Framer Motion for engaging user interactions

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **React Hook Form** - Form validation and management
- **React Query** - Data fetching and caching
- **Wouter** - Minimalist routing

### Backend
- **Express.js** - Web application framework
- **WebSocket** - Real-time communication

### Development Tools
- **Vite** - Build tool and dev server
- **CRACO** - Create React App Configuration Override
- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS processing tool

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Cerify-Landing-Final
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup (Optional)

If you need to configure any environment variables, create a `.env` file in the root directory:

```env
# Server
PORT=3001
NODE_ENV=development
```

## 🏃‍♂️ Running the Project

### Development Mode

To run both the frontend and backend in development mode:

```bash
# Start the React development server
npm run dev

# In a separate terminal, start the Express server
npm run server:dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

### Individual Services

#### Frontend Only
```bash
npm run client:start
```

#### Backend Only
```bash
npm run server:dev
```

### Production Build

To build and run the production version:

```bash
# Build both frontend and backend
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── index.html         # HTML template
│   └── figmaAssets/       # Design assets and icons
├── src/                   # Frontend source code
│   ├── components/        # Reusable UI components
│   │   └── ui/           # Radix UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   └── pages/            # Page components
│       └── sections/     # Page section components
├── server/               # Backend source code
│   ├── index.js         # Express server entry point
│   ├── routes.js        # API routes
│   └── vite.js          # Vite configuration
├── shared/               # Shared code between frontend and backend
└── package.json         # Project dependencies and scripts
```

## 🎨 Key Components

### Frontend Sections
- **Navigation Bar** - Main site navigation
- **Hero Banner** - Landing page hero section
- **Key Features** - Feature highlights
- **Process Steps** - Step-by-step process explanation
- **Detection Process** - Verification process details
- **User Ratings** - Customer testimonials
- **Deploy Smart Contracts** - Blockchain integration info
- **Site Footer** - Footer with links and information

### Backend Features
- RESTful API endpoints
- Session management
- WebSocket support for real-time features

## 🧪 Testing

Run the test suite:

```bash
npm run client:test
```

## 🔧 Configuration

### Webpack Aliases
The project uses custom path aliases configured in `craco.config.js`:
- `@` → `src/`
- `@shared` → `shared/`
- `@assets` → `public/`

### Tailwind CSS
Tailwind configuration includes:
- Custom animations
- Typography plugin
- Responsive breakpoints

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start React development server |
| `npm run server:dev` | Start Express development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run client:start` | Start React app only |
| `npm run client:build` | Build React app only |
| `npm run client:test` | Run tests |

## 🌐 Deployment

### Production Deployment

1. Build the application:
```bash
npm run build
```

2. Set production environment variables
3. Start the production server:
```bash
npm start
```

### Environment Variables for Production
- `NODE_ENV=production`
- `PORT` - Server port (default: 3001)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in your environment variables
2. **Build failures**: Clear node_modules and reinstall dependencies
3. **Module not found errors**: Ensure all dependencies are installed correctly

### Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure all dependencies are installed
4. Try clearing the cache with `npm start` or restarting the development server

---

