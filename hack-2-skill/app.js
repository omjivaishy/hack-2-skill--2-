const express=require('express')
const app=express();
const path=require('path');

const { render } = require('ejs');

const user=require('./model/create-data');
const job=require('./model/job-data');
const { error } = require('console');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/', async (req,res)=>{
    console.log("enter")
    let profession=req.query.search || '';
    try {
        let jobs=await job.find();
    res.render('home',{jobs,profession});
    } catch (error) {
        res.status(500).send("error in fetch")
    }   
});

app.get('/workconnect/sign_up',(req,res)=>{
    res.render('create',{error:''});
});

app.get('/workconnect/login',(req,res)=>{
    const errorMessage = req.query.error || '';
    res.render('login',{error:errorMessage});
});

app.get('/forget-password',(req,res)=>{
    const errorMessage = req.query.error || '';
    res.render('forget',{error:errorMessage});
});

app.post('/create', async (req,res)=>{
    let {firstname,lastname,mobile,state,district,password,confirmPassword,gender,dob}=req.body;
    if (password!=confirmPassword) {
        res.render('create',{error:'Password and confirm password should be same'});
        return;
    }
    let user1=await user.findOne({mobile});
    if (user1) {
        res.render('create',{error:'User already exists'});
        return;
    }
    let characters='0123456789{}[]()!@#$%^&*';
    let key='';
    for(let i=0;i<5;i++){
        key+=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    let username=firstname+lastname+key;
    console.log(username);
        let createduser=await user.create({
            username,
            firstname,
            lastname,
            mobile,
            state,
            district,
            password,
            gender,
            dob
        })
        res.redirect('/workconnect/login');
})

app.post('/login',async (req,res)=>{
    let {mobile,password}=req.body;
    let user1=await user.findOne({mobile});
    if (!user1) {
        return res.redirect(`/forget-password?error=Invalid mobile number or password`);
    }
    if (user1.password!=password) {
        return res.redirect(`/forget-password?error=Invalid mobile number or password`);
    }
    res.render('user',{user1})
});

app.post("/forget",async(req,res)=>{
    console.log("hii");
    let {mobile}=req.body;
    let ouruser=await user.findOne({mobile});
    let {password,confirmPassword}=req.body;
    if(!ouruser)
    {
        return res.redirect(`/forget-password?error=User with mobile number ${mobile} not found`);
        
    }
    if(password!=confirmPassword)
    {
        return res.redirect(`/forget-password?error=password and conform-password are not match`);
    }
    const updatedUser = await user.findOneAndUpdate(
        { mobile:mobile },
        { password:confirmPassword },
        { new: true, runValidators: true });
        res.redirect(`/workconnect/login`);
});

app.get('/workconnect/profile/:name',async(res,req)=>
{
    let name=req.params.name;
    let user1=await user.findOne({firstname:name});
    res.render('user',{user1});
});

app.get('/workconnect/post-job', (req, res) => {
    const errorMessage = req.query.error || ''; // Read error from query params
    res.render('post-job', { error: errorMessage });
});

app.get('/workconnect/view-jobs',async (req,res)=>{
    let str=req.query.search || '';
   profession= str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    try {
        let jobs=await job.find();
    res.render('view-jobs',{jobs,profession});
    } catch (error) {
        res.status(500).send("error in fetch")
    }
});

app.get('/workconnect/chatbot',(req,res)=>{
    res.render("chat-bot");
})

app.post('/post-job',async (req,res)=>{
    let {mobile,state,district,Address,no_workers,profession,salary,work_day,payment}=req.body;
    let user1=await user.findOne({mobile});
    if (!user1) {
       return res.redirect(`/workconnect/post-job?error=User with mobile number ${mobile} not found`);
    }
    let { firstname, lastname ,username } =user1;
    const dynamicData = {};
    for (let i = 0; i < no_workers.length; i++) {
        dynamicData[`field${i + 1}`] = { no_workers: no_workers[i], profession: profession[i] , salary: salary[i],work_day:work_day[i],payment:payment[i]};
    }
    let createduser=await job.create({
        username,
        firstname,
        lastname,
        mobile,
        state,
        district,
        Address,
        Data:dynamicData
    });
    res.render('user',{user1});
});

app.get('/workconnect/history/:name',async (req,res)=>{
    let name=req.params.name;
    let job1=await job.find({username:name});
    let filteredData = job1
    .map(job => Array.from(job.Data.values()).filter(data => data.no_workers > 0))
    .flat();
console.log("Final Filtered Data:", filteredData);
res.render('history',{filteredData});
});

app.get('/workconnect/delete-account/:name',async (req,res)=>{
    let name=req.params.name;
    let job1=await user.deleteOne({username:name});
    res.redirect('/');
});
app.listen(3000, () => console.log("🚀 Server running on port 3000"));