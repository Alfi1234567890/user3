// Task1: initiate app and run server at 3000

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));

// Task2: create mongoDB connection 


const express = require('express');
const mongoose = require('mongoose');


const app = express();


const mongoURI = 'mongodb+srv://alfifrancis2000:alfifrancis2000@alficluster.u3u5h.mongodb.net/?retryWrites=true&w=majority&appName=AlfiCluster';


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log('MongoDB connection error:', err));

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



//Task 2 : write api with error handling and appropriate api mentioned in the TODO below




// TODO: API to get a single employee by ID


app.get('/api/employees/:id', async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        next(error); 
    }
});



//TODO: get data from db  using api '/api/employeelist'






//TODO: get single data from db  using api '/api/employeelist/:id'





//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}






//TODO: delete a employee data from db by using api '/api/employeelist/:id'


app.delete('/api/employees/:id', async (req, res, next) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.json({ message: 'Employee deleted successfully', deletedEmployee });
    } catch (error) {
        next(error);  
    }
});


//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}




//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});

