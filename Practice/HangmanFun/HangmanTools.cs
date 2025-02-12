using System.Reflection.Metadata.Ecma335;

namespace HangmanFun;

public class HangmanTools
{
    public string GetRandomWord()
    {
        Random r = new Random();
        string word = "";
        
        List<string> words = new List<string>()
        {
            "apple",
            "mountain",
            "river",
            "ocean",
            "galaxy",
            "pineapple",
            "breeze",
            "crystal",
            "forest",
            "horizon",
            "lightning",
            "sunflower",
            "comet",
            "whisper",
            "ember",
            "shadow",
            "blossom",
            "glacier",
            "twilight",
            "harmony"
        };
        
        // Get a random word from the list above
        return words[r.Next(0, words.Count)];
    }

    public bool ValidGuess(string guess, string lettersGuessed)
    {
        // Default to valid guess
        bool result = true;
        
        // Check for 1 character
        if (guess.Length != 1)
        {
            Console.WriteLine("Sorry the guess can only be 1 letter");
            result = false;
        }
        // Check if letter guess
        else if (!Char.IsLetter(guess[0]))
        {
            Console.WriteLine("Sorry the guess needs to be a letter");
            result = false;
        }
        // Check if letter is in letters already guessed
        else if (lettersGuessed.Contains(guess))
        {
            Console.WriteLine("Sorry you already guessed that letter");
            result = false;
        }

        return result;
    }

    public string UpdateWord(string lettersGuessed, string solution)
    {
        string result = "";
        
        for (int i = 0; i < solution.Length; i++)
        {
            // If the letter in the solution has already been guessed, show the user
            // Otherwise show a _ as the hidden character
            if (lettersGuessed.Contains(solution[i]))
            {
                result += solution[i];
            }
            else
            {
                result += "_";
            }
        }

        return result;
    }
}