// find Geolocation to dispaly on post
const getGeoLocation = () => {
  const success = (position) => {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}X&longitude=${lon}&localityLanguage=en`;

    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((data) => {
        const geoLocationOutputContainer = document.querySelector(
          '.geo-location-output-container',
        );
        const geoLocationOutput = document.querySelector(
          '.geo-location-output-text',
        );

        geoLocationOutputContainer.classList.add('h-fit');
        geoLocationOutputContainer.classList.remove('h-0');
        document.querySelector('#geoLocation').value = data.city;

        geoLocationOutput.innerHTML = data.city;
      });
  };
  const error = (error) => {
    console.log(error);
  };
  navigator.geolocation.getCurrentPosition(success, error);
};

const geoLocationButton = document.querySelector('#geoLocationButton');

geoLocationButton.addEventListener('click', getGeoLocation);
