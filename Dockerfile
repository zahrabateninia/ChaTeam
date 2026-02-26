# ---- Build Stage ----
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root package.json
COPY package*.json ./

# Copy frontend and backend source
COPY frontend ./frontend
COPY backend ./backend

# Install all deps and build frontend (uses your root "build" script)
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine AS production

WORKDIR /app

# Copy backend
COPY --from=builder /app/backend ./backend

# Copy built frontend dist into where server.js expects it
COPY --from=builder /app/frontend/dist ./frontend/dist

# Copy root package.json for the start script
COPY package*.json ./

# Install only backend deps
RUN npm install --prefix backend --omit=dev

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "run", "start"]
