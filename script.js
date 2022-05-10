const btnRate = document.querySelectorAll(".rate");
const btnSubmit = document.querySelector(".btn-submit");
const containerRating = document.querySelector(".container-rating");
let rate = 0;

/* function get rating 
from input 
number elements */

function getRate() {
  btnRate.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      rate = e.target.value;
      console.log(rate);
    })
  );
}

/* function create "thank" 
you reply 
element upon click
 on the Submit button */

function createReplyEl() {
  getRate();

  btnSubmit.addEventListener("click", () => {
    document.body.innerHTML = "";
    let replyEl = document.createElement("div");
    replyEl.innerHTML = `
        <div class="container-reply">
            <header class="selection">
              <div class="mobile-img">
                <img
                  src="images/illustration-thank-you.svg"
                  alt="thank illustration with mobile and credit card"
                />
              </div>
              <div class="selected-rate">You selected ${rate} out of 5</div>
            </header>
            <section class="thank-you-msg">
              <div class="heading"><h1>Thank you!</h1></div>
              <p class="paragraph-content">
                We appreciate you taking the time to give a rating. If you ever need
                more support, don’t hesitate to get in touch!
              </p>
            </section>
         
        `;
    document.body.appendChild(replyEl);
  });
}

createReplyEl();
