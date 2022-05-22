# "words" is a variable here, to create a variable simply write the name then use the assignment operator [ = ] and give it a value
words = "This is a statement, let's see how long it is"


# "def" is a keyword used in creating a function in Python, 
# the syntax is like this: 
# def name_of_the_function (parameters here):


# The count_words function accepts an input (i.e the sentence you want to count it's words), then outputs the number of words in it
def count_words (sentence):
    # split: splits the sentence into a list of words using space [" "] 
    # i.e if i have a sentence like "i am a boy" if you look closely you'll see that the words are separated by spaces and so spliting them with space you'll get this: ['i', 'am', 'a', 'boy']
    words = sentence.split(" ")

    # len: is used to determine the length of the list
    word_count = len(words)

    # Then return the length
    return word_count


# Print is an outputting method, used to print something to the console
print(count_words(words))
