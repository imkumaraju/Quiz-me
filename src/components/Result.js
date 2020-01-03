import React from 'react';

const Result = ({score, playAgain}) => (

<div className="score">you scored {score}/ 5 correct answers!
<button className="playBtn" onClick={playAgain}>
    Play again!
</button>
</div>
); 

export default Result;