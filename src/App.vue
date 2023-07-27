<template>
  <div
    class="bg-cold h-screen w-full bg-no-repeat bg-bottom duration-300"
    :class="
      typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''
    "
  >
    <div id="main" class="p-6 h-screen">
      <div class="w-full mb-5">
        <input
          type="text"
          placeholder="Enter City Name..."
          class="w-full outline-none py-2 px-3 rounded text-sm block"
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box text-center text-white">
          <div class="location text-3xl font-mono">
            {{ weather.name }} City, {{ weather.sys.country }}
          </div>
          <div class="date text-xl text-gray-200">{{ dateBuilder() }}</div>
        </div>
        <!-- weather-box -->
        <div class="weather-box text-center text-white">
          <div
            class="temp font-black text-3xl my-4 inline-block py-10 px-8 rounded"
          >
            {{ Math.round(weather.main.temp / 10) }}<sup>o</sup>C
          </div>
          <div class="weather italic text-xl font-black">
            {{ weather.weather[0].main }}, {{ weather.weather[0].description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      api_key: "f1937617cb4bbd501edd56b39b759522",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&unit=metric&appid=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            this.weather = data;
            console.log(data);
          });
      }
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ];
      let days = [
        "Chủ Nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7",
      ];
      return `${days[d.getDay()]}, ${d.getDate()} ${
        months[d.getMonth()]
      } ${d.getFullYear()}`;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
body {
  font-family: "Montserrat", sans-serif;
}
#main {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}
.temp {
  background-color: rgba(0, 0, 0, 0.25);
}
.warm {
  background-image: url("./assets/warm-bg.jpg");
}
</style>
