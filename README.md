There are two ways to make this bug go away:

- Lowering the velocity of the star
- Setting star.collideWorldBounds = false

The latter looks OK but if the star is fast enough it can pass through the wall & go to offscreen
