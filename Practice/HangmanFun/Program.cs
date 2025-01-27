using System.ComponentModel.Design;
using HangmanFun;

HangmanTools ht = new HangmanTools();

// Welcome the user
Console.WriteLine("Welcome to our Hangman Game!");

// Generate Random Word
string randomWord = ht.GetRandomWord();
Thread.Sleep(500);
Console.Write(".");
Thread.Sleep(500);
Console.Write(".");
Thread.Sleep(500);
Console.Write(".");

Console.WriteLine();
Console.WriteLine("Generation Complete. Word is ready to be guessed!");

// Tests functions
// Console.WriteLine($"Hangman Tools: {randomWord}");
// Console.WriteLine($"Guess Checks: {ht.ValidGuess("1", "abceiou")}");
// Console.WriteLine($"Guess Checks: {ht.ValidGuess("guess", "abceiou")}");
// Console.WriteLine($"Guess Checks: {ht.ValidGuess("c", "abceiou")}");
// Console.WriteLine($"Guess Checks: {ht.ValidGuess("f", "abceiou")}");
// Console.WriteLine($"Guess Checks: {ht.UpdateWord("abceiou", randomWord)}");

// Get user guess
string guess = "";
string lettersGuessed = "";
int incorrectGuesses = 0;
bool gameOver = false;

do
{
    // Validate Guess
    do
    {
        Console.WriteLine("Please enter a letter: ");
        guess = Console.ReadLine();
    } while (!ht.ValidGuess(guess, lettersGuessed));

    // Check to see if the letter is in the word and continue game flow
    lettersGuessed += guess;
    string updatedWord = ht.UpdateWord(lettersGuessed, randomWord);
    
    if (randomWord.Contains(guess))
    {
        Console.WriteLine($"Congrats, {guess} is in the word!");
        if (updatedWord == randomWord)
        {
            Console.WriteLine("You Win!");
            gameOver = true;
        }
    }
    else
    {
        incorrectGuesses++;
        Console.WriteLine($"Sorry, {guess} is not in the word!");
        if (incorrectGuesses < 6)
        {       
            Console.WriteLine($"You have {6 - incorrectGuesses} guesses left!");
        }
        if (incorrectGuesses >= 6)
        {
            Console.WriteLine($"You lost!\nThe word was {updatedWord}.");
            gameOver = true;
        }

    }
    
    // Show the user the word as they've correctly guessed so far
    Console.WriteLine($"Word: {updatedWord}");
} while (!gameOver);
