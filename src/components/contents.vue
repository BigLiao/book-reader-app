<template>
  <div class="contents">
    <div class="total">
      <div class="left">共{{totalCount}}章</div>
      <div class="right" @click="toggleOrder">
        <div v-show="order">顺序<i class="icon icon-reverse path1"></i><i class="icon icon-reverse path2"></i></div>
        <div v-show="!order">倒序<i class="icon icon-order path1"></i><i class="icon icon-order path2"></i></div>
      </div>
    </div>
    <ul class="list">
      <li v-for="(vItem, index) of vList" :key="index" @click="toRead(index + 1)">
        <h5 class="v-name">{{vItem.vN}}</h5>
        <ul>
          <li class="item" v-for="sItem in vItem.cs">
            <router-link tag="div" :to="sItem.id">{{sItem.cN}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    contentsList: {
      type: Array
    },
    bookId: {
      type: String
    }
  },
  data () {
    return {
      totalCount: 999,
      order: true,
      vList: []
    }
  },
  computed: {
    list () {
      return this.order ? this.contentsList : this.reverseList
    }
  },
  methods: {
    toggleOrder () {
      if (this.contentsList.length === 0) {
        return
      }
      if (!this.reverseList) {
        let result = []
        let i = null
        let array = this.contentsList
        for (i = array.length - 1; i >= 0; i -= 1) {
          result.push(array[i])
        }
        this.reverseList = result
      }
      this.order = !this.order
    },
    toRead (index) {
      this.$router.push('/book/' + this.bookId + '/' + index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.contents
  .total
    position relative
    height 44px
    padding 0 15px
    box-sizing border-box
    // border-top 1px solid #d2d2d2
    border-bottom 1px solid #d2d2d2  
    .left
      position absolute
      left 15px
      top 0
      height 44px
      line-height 44px
      font-size 16px
      color #1c1c1c
    .right
      position absolute
      top 0
      right 15px
      height 44px
      line-height 44px
      font-size 12px
      color #838383
      .icon
        display inline-block
        padding-left 3px
  .item
    height 44px
    border-bottom 1px solid #d2d2d2
    padding 0 15px
    line-height 44px
    color #404040
</style>