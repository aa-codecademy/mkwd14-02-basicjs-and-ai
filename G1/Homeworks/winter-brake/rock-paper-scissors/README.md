
---

# ✂️🪨📄 JavaScript Project

## Rock–Paper–Scissors Tournament

---

## 👋 What Is This Game?

You will create a **Rock–Paper–Scissors game** where the player competes against the computer.
The game will include:

* Choosing a player name
* Selecting a number of rounds
* Keeping track of scores
* Declaring a winner at the end

You will practice:

* Functions
* Loops
* Arrays
* Control flow (`if/else`, `switch`)
* `prompt` input and parsing

---

## 🎯 Goal

Build a Rock–Paper–Scissors game where:

1. The player enters their name
2. The player chooses **number of rounds**
3. In each round:

   * The player picks Rock, Paper, or Scissors
   * The computer randomly chooses Rock, Paper, or Scissors
   * Determine the winner of the round
   * Show a fun message based on the outcome
4. Keep score and declare the overall winner after all rounds

---

## ✅ Requirements

---

### 1️⃣ Function Requirement

All your game logic must be inside this function:

```
rockPaperScissorsGame()
```

---

### 2️⃣ Player Setup

* Ask the player to **enter their name**
* Display a greeting:
  **"Welcome Alex! Get ready for Rock–Paper–Scissors!"**

---

### 3️⃣ Number of Rounds

* Ask the player how many rounds they want to play
* Store the number of rounds in a variable
* Loop through that many rounds

---

### 4️⃣ Player & Computer Choices

* Each round, ask the player to choose:

  * `"rock"`
  * `"paper"`
  * `"scissors"`
* Generate a random choice for the computer using an array:

  ```
  ["rock", "paper", "scissors"]
  ```

---

### 5️⃣ Determine Round Winner

* Compare the player’s choice vs computer choice using **if/else or switch**
* Rules:

  * Rock beats Scissors
  * Paper beats Rock
  * Scissors beats Paper
  * Same choice = Tie

---

### 6️⃣ Round Feedback Messages

**If the player wins:**

* 🎉 **"You win this round! Nice one, Alex!"**

**If the computer wins:**

* 💻 **"Computer takes this round! Don’t give up!"**

**If it’s a tie:**

* 🤝 **"It’s a tie! Try again!"**

---

### 7️⃣ Score Tracking

* Keep track of both player and computer wins in **variables**
* Display the current score after each round:

  ```
  Score: Alex 2 – Computer 1
  ```

---

### 8️⃣ End of Game

* After all rounds, declare the overall winner:

**Examples:**

* **Player wins:**
  🎉 **"Congratulations Alex! You won the tournament 3–1!"**
* **Computer wins:**
  💻 **"Game over! The computer won 4–2."**
* **Tie:**
  🤝 **"It’s a tie tournament! Both scored 3."**

---

## ⭐ Bonus Requirements (Optional)

---

### 🌟 Bonus 1: Fun Messages per Choice

* Show different funny messages depending on the match-up, e.g.:

  * Rock vs Scissors → **"Boom! Rock crushes scissors!"**
  * Paper vs Rock → **"Paper smothers rock! Nice!"**
  * Scissors vs Paper → **"Snip snip! Scissors win!"**

---

### 🌟 Bonus 2: Input Validation

* Don’t accept invalid inputs (e.g., “roc” or numbers)
* Ask the player again if input is invalid

---

### 🌟 Bonus 3: Play Again

* Ask the player if they want to start another tournament after finishing
* Reset scores for the new game

---

### 🌟 Bonus 4: Scoreboard Array

* Store each round result in an array
* Show a summary at the end:

  ```
  Round 1: Alex won
  Round 2: Tie
  Round 3: Computer won
  ```

---

## 🧪 Example Game Scenario

**Scenario 1**

* Name: `Emma`
* Rounds: 3

| Round | Player   | Computer | Result      | Message                                  |
| ----- | -------- | -------- | ----------- | ---------------------------------------- |
| 1     | rock     | scissors | Player wins | 🎉 "You win this round! Nice one, Emma!" |
| 2     | paper    | rock     | Player wins | 🎉 "You win this round! Nice one, Emma!" |
| 3     | scissors | scissors | Tie         | 🤝 "It’s a tie! Try again!"              |

**End Message:**
🎉 **"Congratulations Emma! You won the tournament 2–0–1!"**

---

## 📝 Notes

* Make your code **clean and readable**
* Use **arrays** for computer choices and optional round history
* Use **loops** for rounds
* Make the game **interactive and fun**

---

