const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/companies', require('./routes/companyRoutes'));
// app.use('/api/admin', require('./routes/adminRoutes'));

app.get('/', (req, res) => {
  console.log('API is running');

  res.send('🎯 Job Board API is running');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
