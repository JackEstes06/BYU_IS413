namespace OOPFun;

public class WordTools
{
    public int WordCounter(string words)
    {
        int wordCount = 0;
        
        foreach (string word in words.Split(' '))
        {
            wordCount++;
        }

        return wordCount;
    }
}