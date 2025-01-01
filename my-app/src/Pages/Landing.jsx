import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <>
            <div className="w-screen h-screen bg-black text-white">
                <div className="flex justify-center pt-10">
                    <h1 className="text-3xl font-bold">Anime Quote Guessing Game</h1>
                </div>
                <div className="flex justify-center items-center mt-9">
                    <div className="max-w-lg px-6 text-center">
                        <p className="text-lg mb-4 ">Rules:</p>
                        <ul className="list-disc list-outside space-y-4 text-left">
                            <li>
                                You will click a button that generates a random quote from an anime.
                            </li>
                            <li>
                                After clicking said button, you are to input the character you think uttered said quote.
                            </li>
                            <li>
                                Once you are certain of your answer, click the submit button to check your answer.
                            </li>
                            <li>Enjoy!</li>
                        </ul>
                        <div className="mt-6">
                            <Link to="/game">
                                <button className="bg-green-700 hover:bg-green-500 text-white py-2 px-4 rounded">
                                    Play Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
