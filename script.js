/*------------------------------back to top button--------------------------------------*/

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  // Show or hide the button based on scroll position
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    var btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

/*------------------------------footer--------------------------------------*/ 

//copyright year update
document.getElementById('currentYear').innerHTML = new Date().getFullYear();

/*------------------------------Payment page js--------------------------------------*/ 

window.addEventListener('load', () => toggleForm('credit'));

  function toggleForm(paymentMethod) {
    let formTypeHTML = '';

    if (paymentMethod === 'credit') {
      formTypeHTML = `
        <div class="form-floating mt-3">
          <input id="nameOnCard" type="text" class="form-control">
          <label for="nameOnCard">Name On Card</label>
        </div>
        <div class="form-floating mt-3">
          <input id="cardNumber" type="text" class="form-control">
          <label for="cardNumber">Card Number</label>
        </div>
        <div class="row g-3">
          <div class="col">
            <div class="form-floating mt-3">
              <input id="expiry_mm" type="text" class="form-control">
              <label for="expiry_mm">Expiry (mm)</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mt-3">
              <input id="cvv" type="text" class="form-control">
              <label for="cvv">CVV</label>
            </div>
          </div>
        </div>
      `;
    } else if (paymentMethod === 'bank') {
      formTypeHTML = `
        <div class="form-floating mt-3">
          <input id="accountHolder" type="text" class="form-control">
          <label for="accountHolder">Name of Account Holder</label>
        </div>
        <div class="form-floating mt-3">
          <input id="routing" type="text" class="form-control">
          <label for="routing">Routing Number</label>
        </div>
        <div class="form-floating mt-3">
          <select name="accountType" id="accountType" class="form-control">
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
          </select>
          <label for="accountType">Account Type</label>
        </div>
      `;
    } else if (paymentMethod === 'paypal') {
      formTypeHTML = `
        <div class="form-floating mt-3">
          <input id="paypalEmail" type="text" class="form-control">
          <label for="paypalEmail">PayPal Email</label>
        </div>
        <div class="form-floating mt-3">
          <input id="paypalpw" type="text" class="form-control">
          <label for="paypalpw">PayPal Password</label>
        </div>
      `;
    }

    document.getElementById('formType').innerHTML = formTypeHTML;
  }