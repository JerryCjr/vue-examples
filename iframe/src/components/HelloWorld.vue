<template>
  <iframe id="iframe" :src="src" frameborder="0" ref="domIframe"></iframe>
</template>

<script>
window.document.domain = 'localhost'
export default {
  name: 'HelloWorld',
  data () {
    return {
      src: 'http://localhost:8081/index1.html'
    }
  },
  mounted () {
    window.test = this.test

    window.addEventListener(
      'message',
      function(e) {
        console.log(e.data)
      },
      false
    )

    this.test();
  },
  methods: {
    test () {
      // console.log('it is a test')
      // console.log(this.$refs['domIframe'].contentWindow);

      window.postMessage(
        {
          data: 2
        },
        '*'
      )
      const domIframeWindow = this.$refs['domIframe'].contentWindow;
      domIframeWindow.postMessage({
        data: 1
      }, '*')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#iframe {
  width: 100%;
  height: 100%;
}
</style>
