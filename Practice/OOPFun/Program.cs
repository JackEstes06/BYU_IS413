using OOPFun;

// Enter a quote (from user)
// How many words
// How many chars
// How many of each letter was used

WordTools wt = new WordTools();
string userQuote = "";

Console.WriteLine("Please enter a quote to analyze: ");
userQuote = Console.ReadLine();

Console.WriteLine($"Quote: {userQuote}");
Console.WriteLine($"Word Count: {wt.WordCounter(userQuote)}");
Console.WriteLine($"Letter Count: {wt.CharCounter(userQuote)}");
Console.WriteLine($"Letter Map:");
wt.CharMap(userQuote);
Console.WriteLine();
