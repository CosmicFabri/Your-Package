<template>
<div class="form">
  <div class="header">
    <h2>Send a package</h2>
    <p>
      In this form, you will be able to
      fill in all the specifications
      needed for your package to be delivered.
      Plase make sure to respond to all fields.
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
        <h4>Package dimensions</h4>
        <p>
          Providing us with your package
          dimensions will help us search
          for the best option for you to take.
        </p>
        <div class="grid">
          <div class="col">
            <label for="width">Width (cm):</label>
            <input type="number" id="width" required>
          </div>
          <div class="col">
            <label for="height">Height (cm):</label>
            <input type="number" id="height" required>
          </div>
          <div class="col">
            <label for="depth">Depth (cm):</label>
            <input type="number" id="depth" required>
          </div>
        </div>
      </div>
      <div class="step">
        <h4>Package weight</h4>
        <p>
          Take into account that, the
          heavier your package is, the
          more expensive it could become
          to ship it.
        </p>
        <div class="grid">
          <div class="col">
            <label for="weight">Weight (kg):</label>
            <input type="number" id="weight" required>
          </div>
        </div>
      </div>
      <div class="step">
        <h4>ZIP codes</h4>
        <p>
          Now that you have provided us with
          your package weight, we need to know
          from where the package is being placed
          and where it is going.
        </p>
        <div class="grid">
          <div class="col">
            <label for="zip-origin">Origin ZIP code:</label>
            <input type="number" id="zip-origin" required>
          </div>
          <div class="col">
            <label for="zip-destination">Destination ZIP code:</label>
            <input type="number" id="zip-destination" required>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="confirmation">
          <h2>Confirm package shipment</h2>
          <p>
            Having filled all the previous fields,
            you can proceed to the confirmation
            of your shipment and choosing your
            best option for it. Feel free to
            review your responses.
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
      const width = document.getElementById("width").value
      const height = document.getElementById("height").value
      const depth = document.getElementById("depth").value
      const weight = document.getElementById("weight").value
      const zipOrigin = document.getElementById("zip-origin").value
      const zipDestination = document.getElementById("zip-destination").value

      // Validate inputs
      if (!width || !height || !depth || !weight || !zipOrigin || !zipDestination) {
        alert("Please fill out all fields.")
        return
      }

      // Log the captured values
      console.log("Package Details:")
      console.log(`Width: ${width} cm`)
      console.log(`Height: ${height} cm`)
      console.log(`Depth: ${depth} cm`)
      console.log(`Weight: ${weight} kg`)
      console.log(`Origin ZIP: ${zipOrigin}`)
      console.log(`Destination ZIP: ${zipDestination}`)

      // Go to another page
      this.goToShipment()
    })
  },
  methods: {
    goToShipment() {
      this.$router.push('/choose-shipment');
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