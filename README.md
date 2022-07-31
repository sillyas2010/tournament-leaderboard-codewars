# Tournament leaderboard [codewars kata](codewars.com/kata/57c178e16662d0d932000120)

<div class="markdown prose max-w-none mb-8" id="description">
  <p>the German Fussball-Bundesliga (national soccer league) started another new season!</p>
  <p>In this kata you get an array with 9 strings, which contain the matches from the first match day.<br>
    Every string has this format, where x and y are the number of goals for the teams, if the match has already been played:</p>
  <pre>
    <code>
  x:y [Team 1] - [Team 2]
  Example:
  6:0 FC Bayern München - Werder Bremen
  -:- Eintracht Frankfurt - Schalke 04
    </code>
  </pre>
  <p>The team, which has shot more goals than the other team, wins the match.</p>
  <p>Your method should create and return the league table as one string.<br></p>
  <p>Every line in the table follows these rules:</p>
  <pre>
    <code> 
  1. Tableplace with two chars and a dot (" 1.", "12.")
  2. Space
  3. Name of the team/club padded right up to 30 chars (filled up with spaces).
  4. Number of played matches (in this kata always only one digit)
  5. Two spaces
  6. Number of won matches (in this kata always only one digit)
  7. Two spaces
  8. Number of tie matches (in this kata always only one digit)
  9. Two spaces
 10. Number of lost matches (in this kata always only one digit)
 11. Two spaces
 12. Differences of goals (shot vs. gotten)
 13. Two spaces
 14. Count of points
    </code>
  </pre>
  <p>It is 3 points for a won match and 1 point for a tie.<br>
    The table has to be sorted by these criteria:</p>
  <pre>
    <code>
  1. Points
  2. If the points are the same: The difference of goals. (2:0 is better than 1:0)
  3. If the difference of goals is the same: More goals are better! (2:1 is better than 1:0)
  4. Otherwise: The teams share the same place, but ordered by the name of the team (case-insensitive!)!
    </code>
  </pre>
  <p>Example with the two matches above, if the league WOULD only have 4 teams:</p>
  <pre>
    <code>
  1. FC Bayern München             1  1  0  0  6:0  3 
  2. Eintrach Frankfurt            0  0  0  0  0:0  0
  2. Schalke 04                    0  0  0  0  0:0  0
  4. Werder Bremen                 1  0  0  1  0:6  0
    </code>
  </pre>
  <p>You do not have to do a check for the input values. It will always be an array of 9 strings and all strings will be complete!</p>
</div>
