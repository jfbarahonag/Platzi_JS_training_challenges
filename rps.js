/* Rock, paper, scissors */

var TIE = 0;
var USER_WINS = 1;
var CPU_WINS = 2;

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
        return TIE;
    }
    else
    {
        if (hand_1 == "rock" && hand_2 == "scissors"  ||
            hand_1 == "paper" && hand_2 == "rock"     ||
            hand_1 == "scissors" && hand_2 == "paper")
        {
            //console.log("User wins\r\n");
            return USER_WINS;
        }
        else
        {
            //console.log("Cpu wins\r\n");
            return CPU_WINS;
        }
    }
}

function game(hand_usr, hand_cpu)
{
    if(validate_input(hand_usr) && validate_input(hand_cpu))
    {

        switch (compare_hands(hand_usr, hand_cpu))
        {
            case TIE:
                console.log("tie\r\n");
                break;

            case USER_WINS:
                console.log("User wins\r\n");
                break;

            case CPU_WINS:
                console.log("Cpu wins\r\n");
                break;
            
            default:
                // Never reach this
                console.log("Not valid response\r\n");
        }

    }
    else
    {
        console.log("Some hand is bad typed\r\n");
    }
}

game("rock", "scissors"); //user
game("paper", "scissors"); //pc
game("paper", "paper"); //tie

game("1", "scissors.");
game("paper", 5);
game("rock", "Rock");