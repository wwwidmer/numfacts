# Numfacts
Numfacts is a web application that allows users to explore some facts about numbers with an interface that keeps the user engaging.

## Minimum Viable Product
This app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, sufficient CSS styling:

- [ ] Production README
- [ ] feature URLs
- [ ] main navigation component
- [ ] multi-browser support

## Design Docs

### Components
- Main navigation
- Number
- Facts

### API calls
http://numbersapi.com/number/type

`type` is one of trivia, math, date, or year. Defaults to trivia if omitted.

`number` is an integer, or the keyword random, for which we will try to return a random available fact, or a day of year in the form month/day (eg. 2/29, 1/09, 04/1), if type is date
ranges of numbers
