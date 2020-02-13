# Live Coding Session

In this live coding session, of 90 minutes, I had to do the various steps described bellow using TDD (Test Development Driven) which implies that when introduced changes to incorporate the new requirements I was a lot more confident if something had to be fixed.
The idea behind this challenge was not only to understand if I was capable of solving the various steps but also to simulate a pair programming session and how I would explain my thoughts out loud to the other person.

# Shopping Cart Challenge

Please complete the following exercise. At each stage build the simplest implementation which meets the requirement. Rather than looking stuff up, feel free to ask your partner for help.

Tackle each step in order. Do not read ahead and do not try to anticipate specific future requirements. You are not expected to be able to finish this exercise

## Step 1: Shopping cart

* You are building a checkout system for a shop that only sells apples and oranges.
* Apples cost 60p and oranges cost 25p.
* Build a checkout system which takes a list of items scanned at the till and outputs the total cost
* For example: [ Apple, Apple, Orange, Apple ] => £2.05
* Make reasonable assumptions about the inputs to your solution; for example, many candidates take a list of strings as input

## Step 2: Simple offers

* The shop decides to introduce two new offers
  * buy one, get one free on Apples
  * 3 for the price of 2 on Oranges
* Update your checkout functions accordingly

## Step 3: More complicated offers

* The shop adds Bananas which cost 20p
* Bananas are added to the same buy one, get one free offer as apples
* The cheapest item should be given free first
* Update your checkout