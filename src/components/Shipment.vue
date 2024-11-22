<template>
  <div class="parent">
    <div class="header">
      <h2>Send a package</h2>
      <p>
        Please choose the option that
        most suits your needs. After
        this, you will fill some other
        important fields to finish.
      </p>
    </div>
    <div class="grid-container">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="grid-item"
        :class="{ selected: selectedOption === index }"
        @click="selectOption(index)"
      >
        <img :src="option.image" :alt="option.text" />
        <p>{{ option.text }}</p>
      </div>
      <button :disabled="selectedOption === null" @click="confirmSelection">
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { image: require('@/assets/logo-dhl.png'), text: "Option 1 ($500 MXN)" },
        { image: require('@/assets/logo-estafeta.png'), text: "Option 2 ($520 MXN)" },
        { image: require('@/assets/logo-redpack.png'), text: "Option 3 ($490 MXN)" },
        { image: require('@/assets/logo-fedex.jpg'), text: "Option 4 ($510 MXN)" },
      ],
      selectedOption: null, // Track the selected option
    };
  },
  methods: {
    selectOption(index) {
      this.selectedOption = index; // Store the index of the selected option
    },
    confirmSelection() {
      this.goToDetails()
    },
    goToDetails() {
      this.$router.push('/shipment-details');
    },
  },
};
</script>

<style scoped>
.parent {
  width: 98%;
  max-width: 400px;
  margin-left: 34%;
}

.header {
  text-align: center;
  padding: 20px;
  display: grid;
  gap: 5px;
}

.header p {
  color: #555;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 300px;
  margin: auto;
  margin-top: 1.5%;
}

.grid-item {
  border: 2px solid #ccc;
  border-radius: 8px;
  text-align: center;
  padding: 16px;
  cursor: pointer;
  transition: border-color 0.3s;
}

.grid-item img {
  max-width: 100%;
  border-radius: 8px;
}

.grid-item p {
  margin: 8px 0 0;
}

.grid-item.selected {
  border-color: #007bff;
}

button {
  margin-top: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>