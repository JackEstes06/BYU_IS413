namespace OOPFun;

public class WordTools
{
    public int WordCounter(string words)
    {
        return words.Split(' ').Count();
    }

    public int CharCounter(string words)
    {
        return words.Split(' ').Sum(word => word.Length);
    }

    public void CharMap(string words)
    {
        // Setup default dictionary with each letter set to a 0 count
        Dictionary<char, int> map = new Dictionary<char, int>();
        for (char letter = 'A'; letter <= 'Z'; letter++)
        {
            map[letter] = 0;
        }

        // Loop through the entire string of words and update the dictionary value
        for (int i = 0; i < words.Length; i++)
        {
            char letter = char.ToUpper(words[i]);
            if (letter >= 'A' && letter <= 'Z')
            {
                map[letter]++;
            }
        }
        
        // Print the dictionary (optional, to verify)
        foreach (KeyValuePair<char,int> item in map)
        {
            Console.WriteLine($"{item.Key}: {item.Value}");
        }

        // return the map
        // return map;
    }
}