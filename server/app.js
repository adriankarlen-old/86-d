import express from 'express';
import sequelize from './utils/database.js';
import router from './routes/routes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api', router);

sequelize.sync(); 

app.listen(4000, () => {
    console.log('Server started on port 4000');
});
