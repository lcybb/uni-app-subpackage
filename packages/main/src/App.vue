<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
    wx.$subpackages = {
      main: {}
    }
    console.log('main', wx.$subpackages)
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
</style>
