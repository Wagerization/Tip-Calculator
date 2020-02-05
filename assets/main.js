function totalAmount() {
  $("#submit-btn").on("click", event => {
    //Prevent the refresh of the page
    event.preventDefault();
    // get the number of people
    let numPeople = Number($("#number-people").val());
    // get the total bill amount
    let billAmount = Number($("#bill-amount").val());
    // get the percent for the tip
    let percentBill = $("select#services option:checked").val();
    // adds  percent total and shows how much each person needs to pay
    let eachPerson = (billAmount * percentBill) / numPeople;
    // add the total of the bill amount and the tip together
    let fullAmount = billAmount + eachPerson * numPeople;
    
    // displays the bill total
    $(".clear").empty();
    $(".final-amount").append(`
            <p>Bill Total &#36;${fullAmount.toFixed(2)} </p>  
          `);
    // displays the amount each person pays for the tip
    $(".each-person").append(`
            <p>Each Person Pays &#36;${eachPerson.toFixed(2)}</p>
          `);
  });
}

$(function() {
  totalAmount();
});
