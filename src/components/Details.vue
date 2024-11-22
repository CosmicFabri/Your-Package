<template>
<div class="form">
    <div class="header">
    <h2>Detailed information</h2>
    <p>
        The following is the final form
        on which you will input more
        detailed information abour your
        desired destination. Please enter
        all the data carefully as you will
        confirm the shipment of your package.
    </p>
    </div>
    <div class="body">
    <div class="pagination">
        <div class="number active">1</div>
        <div class="bar"></div>
        <div class="number">2</div>
        <div class="bar"></div>
        <div class="number">3</div>
        <div class="bar"></div>
        <div class="number">4</div>
        <div class="bar"></div>
    </div>
    <div class="steps">
        <div class="step">
        <h4>Origin and destination</h4>
        <p>
            In this section you will
            provide us with details
            about the person who sends
            the package and the one who
            receives it.
        </p>
        <div class="grid">
            <div class="col">
            <label for="sender">Sender:</label>
            <input type="text" id="sender" required>
            </div>
            <div class="col">
            <label for="receiver">Receiver:</label>
            <input type="text" id="receiver" required>
            </div>
        </div>
        </div>
        <div class="step">
        <h4>Address information</h4>
        <p>
            Please be specific about
            the location information,
            this will help us send
            the package without delay.
        </p>
        <div class="grid">
            <div class="col">
            <label for="street">Street:</label>
            <input type="text" id="street" required>
            </div>
            <div class="col">
            <label for="city">City:</label>
            <input type="text" id="city" required>
            </div>
            <div class="col">
            <label for="state">State:</label>
            <input type="text" id="state" required>
            </div>
            <div class="col">
            <label for="zip">ZIP:</label>
            <input type="number" id="zip" required>
            </div>
        </div>
        </div>
        <div class="step">
        <h4>Contact information</h4>
        <p>
            Finally, you need to provide us with
            information about your person; this
            is because we may inform you about your
            package path and possible delays.
        </p>
        <div class="grid">
            <div class="col">
            <label for="phone">Phone number:</label>
            <input type="tel" id="phone" required>
            </div>
            <div class="col">
            <label for="e-mail">E-mail:</label>
            <input type="email" id="e-mail" required>
            </div>
        </div>
        </div>
        <div class="step">
        <div class="confirmation">
            <h2>Confirm shipment</h2>
            <p>
            You have now completed the entire
            process of specifying your package
            information. Click 'Confirm' when
            you are ready to send it.
            </p>
            <button id="confirm-btn" type="button">Confirm</button>
        </div>
        </div>
    </div>
    </div>
    <div class="footer">
    <button class="prev" disabled>Previous</button>
    <button class="next">Next</button>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
    // Logic for moving through the form
    let currentPage = 1;

    const prevBtn = document.querySelector(".form .footer .prev");
    const nextBtn = document.querySelector(".form .footer .next");

    function movePage() {
        prevBtn.disabled = false;
        nextBtn.disabled = false;

        if (currentPage === 1) {
        prevBtn.disabled = true;
        } else if (currentPage === 4) {
        nextBtn.disabled = true;
        }

        document.querySelector(".form .pagination .active").classList.remove("active");
        document
        .querySelectorAll(".form .pagination .number")[currentPage - 1]
        .classList.add("active");

        const stepNode = document.querySelector(".form .steps .step");
        const width = (currentPage - 1) * stepNode.offsetWidth * -1 + "px";
        stepNode.parentNode.style.marginLeft = width;
    }

    prevBtn.addEventListener("click", () => {
        currentPage -= 1;
        movePage();
    });

    nextBtn.addEventListener("click", () => {
        currentPage += 1;
        movePage();
    });

    // Controlling the values of the inputs of the form
    document.getElementById("confirm-btn").addEventListener("click", () => {
        // Gather values from inputs
        const sender = document.getElementById("sender").value
        const receiver = document.getElementById("receiver").value
        const street = document.getElementById("street").value
        const city = document.getElementById("city").value
        const state = document.getElementById("state").value
        const zip = document.getElementById("zip").value
        const phone = document.getElementById("phone").value
        const email = document.getElementById("e-mail").value

        // Validate inputs
        if (!sender || !receiver || !street || !city || !state || !zip || !phone || !email) {
        alert("Please fill out all fields.")
        return
        }

        const formData = {
            sender,
            receiver,
            street,
            city,
            state,
            zip,
            phone,
            email
        };

        // Showing the information
        console.log("Form Data:", formData);

        // Finish the process
        this.confirmation()
    })
    },
    methods: {
    confirmation() {
        alert('Congratulations! Your package will be sent in short.')
        this.$router.push('/');
    },
    },
};
</script>

<style>
.form {
    width: 98%;
    max-width: 400px;
    margin-left: 34%;
}

.form .header {
    text-align: center;
    padding: 20px;
    display: grid;
    gap: 5px;
}

.form .header p {
    color: #555;
}

.form .body {
    box-shadow: 0px 5px 5px 2px rgba(0,0,0,0.2);
    border-radius: 20px;
    height: 320px;
    overflow: hidden;
}

.form .body .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 15px 20px;
}

.form .body .pagination .number {
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border-radius: 50%;
    background: #00aaee;
    color: #fff;
    font-size: 15px;
}

.form .body .pagination .bar {
    width: 50px;
    height: 4px;
    background: #00aaee;
    border-radius: 5px;
}

.form .body .pagination .active ~ div {
    background: #ddd;
    color: #111;
}

.form .steps {
    width: 400%;
    display: flex;
}

.form .steps .step {
    width: 98vw;
    max-width: 400px;
    padding: 5px 15px 15px;
    overflow: hidden;
}

.form .steps .step h4 {
    margin-bottom: 5px;
}

.form .steps .step p {
    color: #555;
    max-width: 90%;
    font-size: 15px;
}

.form .steps .step .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 20px;
}

.form .steps .step .col .label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 15px;
}

.form .steps .step .col input {
    width: 80%;
    padding: 8px;
    border: 1px solid #bbb;
    font-size: 15px;
    border-radius: 8px;
}

.form .steps .step .confirmation {
    display: grid;
    text-align: center;
    place-items: center;
    gap: 15px;
}

.form .steps .step .confirmation button {
    background: #00aaee;
    color: #fff;
    padding: 10px 20px;
    border: none;
    outline: none;
    font-size: 15px;
    border-radius: 20px;
    cursor: pointer;
}

.form .footer {
    padding: 5px 0px;
    display: flex;
    justify-content: space-between;
}

.form .footer button {
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #bbb;
    background: #fff;
    color: black;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
}

.form .footer button:disabled {
  background: #ddd;
  color: #888;
  cursor: not-allowed;
  border-color: #ccc;
}
</style>