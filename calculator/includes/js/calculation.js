$( document ).ready(function() {
  //sum inputs and display resulting value in table with appropriate ID
  $("input[name='sum']").sum("keyup", "#totalSum");
  $("input[name='sum2']").sum("keyup", "#totalSum2");
  $("input[name='sum3']").sum("keyup", "#totalSum3");
  $("input[name='sum4']").sum("keyup", "#totalSum4");
  $("input[name='sum5']").sum("keyup", "#totalSum5");
  $("input[name='sum6']").sum("keyup", "#totalSum6");

  //display the sum of all input fields except monthly income fields
  //the "exclude" class serves to exclude these fields.
  $("input").not(".exclude").sum("keyup", "#expenses");

  //display result of income minus expenses
  $("input").subtract({
    'bind':"keyup",
    'selector':"#subtract",
    'oncalc': function () {
      // console.log('oncalc');
      chart.unload({
        ids: [ 'housing', 'transportation', 'educational', 'personal', 'savings' ]
      });
      chart.load({
        columns: [
            ['housing', document.getElementById('totalSum2').innerHTML],
            ['transportation', document.getElementById('totalSum3').innerHTML],
            ['educational', document.getElementById('totalSum4').innerHTML],
            ['personal', document.getElementById('totalSum5').innerHTML],
            ['savings', document.getElementById('totalSum6').innerHTML]
        ]
      });
    }
  });
  // autoNumeric
    //inputs will have $99,999 max (keep in mind this is MONTHLY salary)
    //all other inputs will have $9,999 max (keep in mind this is MONTHLY expenses)

  $('.qbcalc input').autoNumeric('init', {
    mDec: 0,
    aSign: '$',
    vMin: "-99999",
    vMax: "99999",
    lZero: 'deny'
  }).bind('focus', function() {
    // if field was blank and then just has '$' in it
    if ( jQuery(this).val() == '$' ) {
      // sometimes chrome has issue placing cursor before $ so just wipe it
      jQuery(this).val('');
    }
  });
});
