import express from "express";
import fs from "fs";
import path from "path";

export function log(message, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app, server) {
  // For development without Vite, serve static files from public directory
  const publicPath = path.resolve(import.meta.dirname, "..", "public");
  
  app.use(express.static(publicPath));
  app.use(express.static(path.resolve(import.meta.dirname, "..", "src")));
  
  // Serve index.html for all routes that don't start with /api
  app.use("*", (req, res, next) => {
    const url = req.originalUrl;
    
    // Skip API routes
    if (url.startsWith("/api")) {
      return next();
    }
    
    try {
      const indexPath = path.resolve(publicPath, "index.html");
      let template = fs.readFileSync(indexPath, "utf-8");
      
      // Add React development scripts
      const devScripts = `
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script type="text/babel" src="/src/index.js"></script>
      `;
      
      template = template.replace('</body>', `${devScripts}</body>`);
      
      res.status(200).set({ "Content-Type": "text/html" }).send(template);
    } catch (e) {
      next(e);
    }
  });
}

export function serveStatic(app) {
  const distPath = path.resolve(import.meta.dirname, "..", "build");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first with npm run client:build`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
