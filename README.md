# people-thoughts

Sebuah simple web app dimana orang-orang dapat berbagi pikiran dan pendapat mereka di forum terbuka. 
Web app ini menggunakan web socket sehingga dapat ter-update secara realtime ketika ada pikiran atau pendapat baru yang ditambahkan. 

Tech Stack : NodeJs, Express, ReactJs, Socket.Io

# Setup

1. Install dependencies menggunakan yarn atau npm
2. Server terdapat di folder backend dan Client terdapat di folder frontend
3. Buat file .env pada folder backend dan frontend
    contoh format .env pada backend:\
    PORT=8000\
    FRONTEND_HOST=http://localhost:3000
    
    contoh format .env pada frontend:\
    REACT_APP_BACKEND_URL=http://localhost:8000
4. Jalankan frontend dan backend menggunakan yarn start atau npm start

# Dependencies
backend dependencies: 
1. @people/express-error-handler (local package)
2. @people/http-request-logger (local package)
3. body-parser
4. cors
5. dotenv
6. express
7. mongoose
8. multer
9. nodemon
10. socket.io

frontend dependencies:
1. @emotion/react
2. @emotion/styled
3. @people/styles (local package)
4. @testing-library/jest-dom
5. @testing-library/react
6. @testing-library/user-event
7. antd
8. axios
9. react
10. react-dom
11. react-scripts
12. socket.io-client
13. web-vitals

# Terima Kasih
