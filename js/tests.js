/* author Vlad Yakymenko Dp-P05 JS Core */

/* Test function attack of kingdom */
QUnit.test("kingdom attack should return number >= 0 and <= 50", function( assert ) {
  var result = kingdom.attack(); 
  if (result >= 0 && result <= 50) {
    result = true;
  } else {
    result = false;
  }
  assert.ok(result, "Passed!" );
});

/* Test function attack of enemy */
QUnit.test("enemy.attack should return number >= 0 and <= 50", function( assert ) {
  var result = enemy.attack(); 
  if (result >= 0 && result <= 50) {
    result = true;
  } else {
    result = false;
  }
  assert.ok(result, "Passed!" );
});