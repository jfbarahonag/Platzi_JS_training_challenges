/* Rock, paper, scissors */

function validate_input(input)
{
    return input === "paper" ||
            input === "rock" ||
            input === "scissors";
}

function compare_hands(hand_1, hand_2)
{
    if (hand_1 == hand_2)
    {
        //console.log("tie\r\n");
        return 0;
    }
    else
    {
        if (hand_1 == "rock" && hand_2 == "scissors"  ||
            hand_1 == "paper" && hand_2 == "rock"     ||
            hand_1 == "scissors" && hand_2 == "paper")
        {
            //console.log("User wins\r\n");
            return 1;
        }
        else
        {
            //console.log("Cpu wins\r\n");
            return 2;
        }
    }
}

function game(hand_usr, hand_cpu)
{
    if(validate_input(hand_usr) && validate_input(hand_cpu))
    {
        if (compare_hands(hand_usr, hand_cpu) === 0)
        {
            console.log("tie\r\n");
        }
        else if (compare_hands(hand_usr, hand_cpu) === 1)
        {
            console.log("User wins\r\n");
        }
        else if (compare_hands(hand_usr, hand_cpu) === 2)
        {
            console.log("Cpu wins\r\n");
        }
    }
    else
    {
        console.log("Some hand is bad typed\r\n");
    }
}

game("rock", "scissors");
game("scissors", "paper");
game("paper", "rock");

game("1", "scissors.");
game("paper", 5);
game("rock", "Rock");