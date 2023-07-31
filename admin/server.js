import express from 'express';
import cors from 'cors';
import { useUserRoute } from './service/route/user.js';
import { useAppRoute } from './service/route/app.js';
import { useKbRoute } from './service/route/kb.js';
import { useSystemRoute } from './service/route/system.js';

import path from 'path'

import { fileURLToPath } from 'url';
import { dirname } from 'path';




const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

useUserRoute(app);
useAppRoute(app);
useKbRoute(app);
useSystemRoute(app);

// app.get('/*', (req, res) => {
//   res.sendFile(new URL('dist/index.html', import.meta.url).pathname);
// });


// app.use((err, req, res, next) => {
//   res.sendFile(new URL('dist/index.html', import.meta.url).pathname);
// });



// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




// 处理所有的 HTTP GET 请求，路径为 '/*'
app.get('/*', (req, res) => {
  const filePath = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(filePath);
});

// 错误处理中间件，处理所有的错误情况
app.use((err, req, res, next) => {
  const filePath = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(filePath);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
