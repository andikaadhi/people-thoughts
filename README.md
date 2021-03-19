# people-thoughts

Sebuah simple web app dimana orang-orang dapat berbagi pikiran dan pendapat mereka di forum terbuka. 
Web app ini menggunakan web socket sehingga dapat ter-update secara realtime ketika ada pikiran atau pendapat baru yang ditambahkan. 

Tech Stack : NodeJs, Express, ReactJs, Socket.Io

# Setup

1. Install dependencies menggunakan yarn atau npm
2. Server terdapat di folder backend dan Client terdapat di folder frontend
3. Buat file .env pada folder backend dan frontend
    contoh format .env pada backend:
    PORT=8000
    FRONTEND_HOST=http://localhost:3000
    
    contoh format .env pada frontend:
    REACT_APP_BACKEND_URL=http://localhost:8000
4. Jalankan frontend dan backend menggunakan yarn start atau npm start

# Dependencies
backend : 
"dependencies": {
  "@people/express-error-handler": "^1.0.0",
  "@people/http-request-logger": "^1.0.0",
  "body-parser": "^1.19.0",
  "cors": "^2.8.5",
  "dotenv": "^8.2.0",
  "express": "^4.17.1",
  "mongoose": "^5.12.0",
  "multer": "^1.4.2",
  "nodemon": "^2.0.7",
  "socket.io": "^4.0.0"
}

frontend: 
"dependencies": {
  "@emotion/react": "^11.1.5",
  "@emotion/styled": "^11.1.5",
  "@people/styles": "^1.0.0",
  "@testing-library/jest-dom": "^5.11.4",
  "@testing-library/react": "^11.1.0",
  "@testing-library/user-event": "^12.1.10",
  "antd": "^4.14.0",
  "axios": "^0.21.1",
  "react": "^17.0.1",
  "react-dom": "^17.0.1",
  "react-scripts": "4.0.1",
  "socket.io-client": "^4.0.0",
  "web-vitals": "^1.0.1"
},

# Terima kasih
