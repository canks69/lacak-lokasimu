# Menggunakan base image dari Node.js
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Menyalin package.json dan package-lock.json untuk menginstal dependensi
COPY package.json .
COPY package-lock.json .

# Menginstal dependensi
RUN npm ci --silent

# Menyalin sumber kode aplikasi
COPY . .

# Mengubah mode ke production
ENV NODE_ENV=production

# Membangun aplikasi Next.js
RUN npm run build

# Menjalankan aplikasi Next.js di port 3000
EXPOSE 3000
CMD ["npm", "start"]
