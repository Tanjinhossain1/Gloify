const express = require('express')
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())





const uri = "mongodb+srv://outhshad-digital-media:RbYQZE55c4R9LLQ3@cluster0.vz35n.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const toDoCollection = client.db("allToDo").collection("toDo");
        app.get('/check',(req,res)=>{
            res.send('wow it is work todo')
        })
    }
    finally { }
}

run().catch(console.dir())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})