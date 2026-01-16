# Number to Words Converter

![img.png](../assets/num-to-words.png)

## Objective
Convert numeric input to word representation for numbers 0-1,000,000

## Technical Requirements
- Support whole numbers only
- Number range handling:
    - Single-digit numbers (0-9)
    - Teen numbers (10-19)
    - Tens (20-90)
    - Hundreds
    - Thousands
    - Hundreds of thousands
    - Millions

## Conversion Rules
- English number naming conventions
- Grammatically correct structure

## Input Validation
- Reject non-numeric inputs
- Limit to 0-1,000,000
- Clear error messaging

## Test Cases
- `0` → "zero"
- `13` → "thirteen"
- `45` → "forty-five"
- `100` → "one hundred"
- `1,234` → "one thousand two hundred thirty-four"
- `999,999` → "nine hundred ninety-nine thousand nine hundred ninety-nine"

See this [example](https://lingojam.com/NumbersToWords).
