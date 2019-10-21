var mykey = config.UNSPLASH_KEY;

var app = new Vue({
  el: '#app',
  data: {
    quote: "It always seems impossible until it's done - Nelson Mandela"
  }
})

var pic = new Vue({
  el: '#pic',
  data () {
    return {
      name: null,
    }
  },
  mounted () {
    axios
      .get('https://api.unsplash.com/photos/random/?client_id=' + mykey)
      // .then(response => (this.info = response.data.urls.small))
      .then(response => (this.name = response.data))
  },
})
