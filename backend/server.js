import express from 'express';
import cors from 'cors';
import axios from 'axios';



const app = express();
app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));







app.get('/api/quotes', async (req, res) => {
    try{
        const response = await axios.get('https://animechan.io/api/v1/quotes/random');
        console.log(response.data);
        res.json(response.data);
        
    }
    
    catch(error){
        
        console.error(error)
    }
    
    
});



app.listen(3001, () => console.log('Proxy server running on http://localhost:3001'));






















//  app.get('api/quotes') = () => {
//     axios.get('https://animechan.io/api/v1/quotes/random')
//     .then(response => console.log(response))
        
//     .catch(error =>console.error(error))

// };



