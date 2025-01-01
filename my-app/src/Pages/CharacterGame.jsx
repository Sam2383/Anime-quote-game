import axios from "axios";
import { useState } from "react";


function CharacterGame() {

    const[quote, setQuote] = useState('Click the button to get your quote')
    const[char, setChar] =useState('')
    const[anime, setAnime] =useState('')
    //creation of state variables which will be different depending on what random information the api returns

    



    
    

    async function GetQuote(){
        
        try{
            
            const response = await axios.get('http://localhost:3001/api/quotes')

            console.log(response.data.data.content);           
            const fetchedQuote = response.data.data.content
            const fetchedChar = response.data.data.character.name
            const fetchedAnime = response.data.data.anime.name
            //assigning a variable to relevant api response data


            setQuote(fetchedQuote);
            console.log(quote);

            setChar(fetchedChar)
            console.log(char)

            setAnime(fetchedAnime)
            console.log(anime)

            //updating and logging state variables with aforementioned variables
                                    
        }
        
        
        catch(error){
            
            console.error(error)
            
        }
       
        
    };


    function AnswerChecker(){

        
            console.log(document.getElementById('guess'))
            const guessInput = document.getElementById('guess');
            if (guessInput.value === char) {
                alert('Correct character guessed.');
            }
            else{
                alert(`Incorrect answer. The correct answer was ${char} from ${anime}`)
            }
    }
    //purpose is to determine if user has inputted correct character or not.











        



        
        

    return (
        <>        
        <div className="bg-black h-screen text-white flex flex-col items-center justify-center">
            <div className="mb-10">
            <a href="/" className="hover:text-green-500">
                <p>Rules</p>
            </a>
            </div>
            
            <button id="quotebutton" className="bg-gray-700 py-4 px-4 rounded hover:bg-gray-500 " onClick={GetQuote}>Click to generate an anime quote</button>
            <p className="mt-9 mb-9">
              {JSON.stringify(quote)}  
            </p>
            <form>
                <input type="text" className="text-black py-3 px-4 rounded" placeholder="Enter character name" id="guess" ></input>
                <button className="bg-gray-700 py-3 px-4 rounded hover:bg-gray-500 " onClick={AnswerChecker} >Submit Answer</button> 
                {/* upon this button being clicked, user's answer is checked to see if it is correct. */}
            </form>

            {/* {JSON.stringify(char)}  */}
                
        </div>
        </>
    );
}

export default CharacterGame;




