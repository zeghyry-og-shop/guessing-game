

count_files() {
    find . -maxdepth 1 -type f | wc -l
}


number=$(count_files)

echo "Welcome to the Guessing Game!"
echo "How many files are in the current directory?"


while true
do
    read -p "Enter your guess: " guess

   git status
    if ! [[ "$guess" =~ ^[0-9]+$ ]]
    then
        echo "Please enter a valid number."
    elif [ "$guess" -lt "$number" ]
    then
        echo "Too low! Try again."
    elif [ "$guess" -gt "$number" ]
    then
        echo "Too high! Try again."
    else
        echo "Congratulations! You guessed correctly!"
        break
    fi
done
