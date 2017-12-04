<template>
  <div class="book-read" ref="root" @click="clickRoot" :class="colorActive">
    <div class="top-bar" @click.stop v-show="barShow">
      <div class="back" @click="goBack"><i class="icon-back"></i></div>
      <div class="share"><i class="icon-share"></i></div>
    </div>
    <div class="title">{{chapterName}}</div>
    <div class="stage-wrapper">
      <div class="stage">
        <div class="scroll-wrapper" ref="scrollWrapper">
          <div class="scroll-content" ref="scrollContent">
            <div class="box" ref="box">
              <div class="content" ref="content" :style="{fontSize: fontSize+'px'}">
                <h4 class="content-title">{{chapterName}}</h4>
                <div v-html="content"></div>
              </div>
            </div>
            <!-- <div class="prev">上一章</div>
            <div class="next">下一章</div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-bar" @click.stop v-show="barShow">
      <div class="item contents" @click="showContents(true)">
        <div class="icon-catalog"></div>
        <div class="text">目录</div>
      </div>
      <div class="item percent">
        <div class="icon-process icon"></div>
        <div class="text">进度</div>
      </div>
      <div class="item config" @click="showConfig">
        <div class="icon-set"></div>
        <div class="text">设置</div>
      </div>
    </div>
    <div class="config-wrapper" v-show="configShow">
      <div class="font">
        <div class="button reduce" @click.stop="reduceFontSize">A-</div>
        <div class="text">{{fontSize}}</div>
        <div class="button add" @click.stop="addFontSize">A+</div>
      </div>
      <ul class="color">
        <li class="item default" :class="{active:colorActive==='default'}" @click="changeColor('default')"></li>
        <li class="item white" :class="{active:colorActive==='white'}" @click="changeColor('white')"></li>
        <li class="item dark" :class="{active:colorActive==='dark'}" @click="changeColor('dark')"><i class="icon-mode"></i></li>
      </ul>
    </div>
    <!-- <div class="contents-wrapper" v-show="contentsShow">
      <div class="bar">
        <div class="back" @click.stop="showContents(false)"><i class="icon-back"></i></div>
        {{contentsTitle}}
      </div>
      <div class="inner">
        <scroll :scrollbar="false" ref="contentsScroll">
          <contents :contentsList="chapterList"></contents>          
        </scroll>
      </div>
    </div> -->
  </div>
</template>

<script>
import { getChapterInfo } from '@/common/js/get-data'
import BScroll from 'better-scroll'
// import Contents from './contents'
// import Scroll from 'base/scroll/scroll'
const paddingWidth = 20

export default {
  name: 'BookRead',
  data () {
    return {
      contentList: [],
      contentIndex: 0,
      contentsTitle: '',
      chapterList: [],
      contentsShow: false,
      barShow: false,
      fontSize: 16,
      disableClick: false,
      colorActive: 'default',
      configShow: false,
      chapterId: '',
      pageToGo: 1
    }
  },
  computed: {
    content () {
      if (this.contentList[this.contentIndex]) {
        return this.contentList[this.contentIndex].content
      }
    },
    chapterName () {
      if (this.contentList[this.contentIndex]) {
        return this.contentList[this.contentIndex].chapterName
      }
    }
  },
  filters: {
    // addBR (val) {
    //   return val.replace('\\r\\n', '\\r\\n\\r\\n')
    // }
  },
  methods: {
    showContents (isShow) {
      this.contentsShow = isShow
      this.$nextTick(() => {
        this.$refs.contentsScroll.refresh()
      })
    },
    goBack () {
      // let router = this.$route
      // console.log(router)
      this.$router.go(-1)
    },
    clickRoot (e) {
      if (this.disableClick) {
        return
      }
      if (this.configShow) {
        this.configShow = false
      }
      if (this.barShow) {
        this.barShow = false
        return
      }
      let rootWidth = this.boxWidth + paddingWidth * 2
      let clientX = e.clientX
      let clientY = e.clientY
      let clientRange = rootWidth * 0.15
      let {pageX} = this.slider.getCurrentPage()
      if (clientX < clientRange) {
        this.slider.goToPage(pageX - 1, 0, 200)
      } else if (clientX > rootWidth - clientRange) {
        this.slider.goToPage(pageX + 1, 0, 200)
      } else {
        this.barShow = true
      }
    },
    addFontSize () {
      if (this.fontSize >= 28) {
        return
      }
      this.fontSize += 2
      // this.$refs.content.style.fontSize = this.fontSize + 'px'
      this._initWidth()
      this.slider.refresh()
    },
    reduceFontSize () {
      if (this.fontSize <= 12) {
        return
      }
      this.fontSize -= 2
      // this.$refs.content.style.fontSize = this.fontSize + 'px'
      this._initWidth()
      this.slider.refresh()
      if (this.pageX >= this.pageLength - 1) {
        this.slider.goToPage(this.pageLength - 2, 0, 0)
      }
    },
    changeColor (active) {
      this.colorActive = active
    },
    showConfig () {
      this.configShow = true
    },
    _initWidth () {
      this.contentWidth = this.$refs.content.scrollWidth
      this.boxWidth = this.$refs.box.clientWidth
      this.pageSize = (this.contentWidth + paddingWidth) / (this.boxWidth + paddingWidth)
      // 设置滚动区域宽度
      let scrollContent = this.$refs.scrollContent
      // 增加两边页面
      let addPage = 2
      if (this.prevId === 'first') {
        addPage = addPage - 1
      }
      if (this.nextId === 'last') {
        addPage = addPage - 1
      }
      this.pageLength = this.pageSize + addPage
      scrollContent.style.width = this.pageLength * (this.boxWidth + paddingWidth) + 'px'
    },
    _initSlide () {
      if (this.slider) {
        this.slider.refresh()
        return
      }
      this.slider = new BScroll(this.$refs.scrollWrapper, {
        scrollY: false,
        scrollX: true,
        momentum: false,
        snap: {
          loop: false,
          threshold: 0.1,
          speed: 400
        },
        click: false,
        preventDefault: false
      })
      this.slider.on('scrollEnd', () => {
        let {pageX} = this.slider.getCurrentPage()
        this.pageX = pageX
        if (pageX === this.pageLength - 1 && this.nextId !== 'last') {
          this._goNext()
        }
        if (pageX === 0 && this.prevId !== 'first') {
          this._goPrev()
        }
      })
    },
    // 判断是否第一章或者最后一章
    _getAside () {
      this.pageToGo = 1
      if (this.index === 0) {
        // this.prevId = 'first'
        this.$refs.box.style.left = 0
        this.pageToGo = 0
      } else {
        this.$refs.box.style.left = ''
        // this.prevId = this.chapterList[this.index - 1].chapter_id
      }
      if (this.index === this.chapterList.length - 1) {
        // this.nextId = 'last'
      } else {
        // this.nextId = this.chapterList[this.index + 1].chapter_id
      }
    },
    _getData (isPrev) {
      return new Promise((resolve, reject) => {
        getChapterInfo(this.bookId, this.chapterId).then(data => {
          this.bookInfo = data.data.bookInfo
          this.chapterInfo = data.data.chapterInfo
          if (isPrev) {
            this.contentList.unshift(this.chapterInfo)
          } else {
            this.contentList.push(this.chapterInfo)
          }
          this.nextId = this.chapterInfo.next
          this.prevId = this.chapterInfo.prev
          // 初始化滚动样式
          this.$nextTick(() => {
            resolve()
          })
        })
      })
    },
    _initData () {
      console.log(this.$route.params)
      this.bookId = this.$route.params.bookId
      this.chapterId = this.$route.params.chapterId
      this.contentIndex = 0
      this._getData().then(() => {
        this._initWidth()
        this._initSlide()
        this.slider.goToPage(this.pageToGo, 0, 0)
      })
    },
    _goNext () {
      this.slider.disable()
      // this.index++
      this.pageToGo = 1
      this.contentIndex++
      this.chapterId = this.nextId
      if (!this.contentList[this.contentIndex]) {
        this._getData().then(() => {
          this._initWidth()
          this._initSlide()
          this.slider.goToPage(this.pageToGo, 0, 0)
          this.slider.enable()
        })
      } else {
        this._initWidth()
        this._initSlide()
        this.slider.goToPage(this.pageToGo, 0, 0)
        this.slider.enable()
      }
      this.$router.replace('/book/' + this.bookId + '/' + this.chapterId)
    },
    _goPrev () {
      if (this.prevId === -1) {
        return
      }
      this.slider.disable()
      this.chapterId = this.prevId
      if (!this.contentList[this.contentIndex - 1]) {
        this._getData(true).then(() => {
          this._initWidth()
          this._initSlide()
          this.pageToGo = this.pageLength - 2
          this.slider.goToPage(this.pageToGo, 0, 0)
          this.slider.enable()
        })
      } else {
        this.contentIndex--
        this._initWidth()
        this._initSlide()
        this.pageToGo = this.pageLength - 2
        this.slider.goToPage(this.pageToGo, 0, 0)
        this.slider.enable()
      }
      // new Promise((resolve, reject) => {
      //   if (!this.contentList[this.contentIndex - 1]) {
      //     getNovelRead(this.prevId).then(data => {
      //       this.contentList.unshift(data.list[0])
      //       resolve()
      //     })
      //   } else {
      //     this.contentIndex--
      //     resolve()
      //   }
      // }).then(() => {
      //   this.$nextTick(() => {
      //     this._getAside()
      //     this._initWidth()
      //     this.slider.refresh()
      //     this.slider.goToPage(this.pageLength - 2, 0, 0)
      //     this.slider.enable()
      //   })
      // })
      this.$router.replace('/book/' + this.bookId + '/' + this.chapterId)
    }
  },
  created () {
    this._initData()
  },
  components: {
    // Contents,
    // Scroll
  }
}
</script>

<style lang="stylus" scoped>
$padding-width = 20px

.book-read
  position relative
  height 100%
  width 100%
  overflow visible
  user-select none
  background-color #ebeae0
  &.default
    background-color #ebeae0
  &.white
    background-color #d7dad7
  &.dark
    background-color #1a1a1a
    color rgba(255,255,255,.5)
  .title
    padding-top 10px
    padding-left $padding-width
    font-size 10px
    color #838383
  .stage-wrapper
    position absolute
    top 2em
    left 0
    right 0
    bottom 2em
  .stage
    position relative
    height 100%
    box-sizing border-box
    // padding 10px 0 30px
    margin 0 $padding-width
    overflow hidden
    .scroll-wrapper
      width 'calc(100vw - %s)' % $padding-width
      height 100%
      .scroll-content
        height 100%
        box-sizing border-box
        .prev
          position absolute
          left 20px
          top 20px
        .next
          position absolute
          right 20px
          top 20px
        .box
          position relative
          left 'calc(100vw - %s)' % $padding-width
          width 'calc(100vw - %s * 2)' % $padding-width
          height 100%
          .content
            height 100%
            font-size 16px
            line-height 2em
            column-width 'calc(100vw - %s * 2)' % $padding-width
            column-gap $padding-width
            color #535353
            text-align justify
            white-space pre-line
            .content-title
              font-size 1.2em
              color #404040
              margin 18px 0 28px
  .top-bar
    position absolute
    top 0
    width 100%
    height 40px
    background-color #fff
    color #535353
    .back
      width 50px
      height 40px
      line-height 40px
      text-align center
      font-size 24px
    .share
      position absolute
      right 0
      top 0
      width 50px
      height 40px
      line-height 40px
      text-align center
      font-size 20px
  .bottom-bar
    position absolute
    display flex
    bottom 0
    width 100%
    height 50px
    background-color #fff
    .item
      flex 1
      display flex
      flex-direction column
      justify-content flex-end
      align-items center
      color #535353
      .icon
        font-size 20px
      .text
        padding 5px 0 10px
        font-size 10px
  .contents-wrapper
    position fixed
    z-index 100
    top 0
    left 0
    width 100%
    height 100%
    background #fff
    .bar
      position absolute
      top 0
      height 44px
      width 100%
      background #30b10d
      .back
        width 50px
        height 44px
        line-height 44px
        text-align center
        font-size 24px
        color #fff
    .inner
      position absolute
      top 44px
      left 0
      right 0
      bottom 0
  .config-wrapper
    position absolute
    bottom 0
    width 100%
    height 100px
    box-sizing border-box
    padding 15px 15px 0
    background #fff
    .font
      display flex
      justify-content space-between
      align-items center
      .text
        color #888888
        font-size 14px
      .button
        width 110px
        height 30px
        border 1px solid #ebe9df
        border-radius 8px
        text-align center
        line-height 30px
        color #c85726
        font-size 14px
    .color
      margin-top 15px
      font-size 0
      .item
        display inline-block
        width 25px
        height 25px
        border-radius 50%
        box-sizing border-box
        margin-left 20px
        border 1px solid
        &.default
          background #ebeae0
          border-color #d7dad7
        &.white
          background #e1ede1
          border-color #d7dad7
        &.dark
          vertical-align top
          border 1px solid #464542
          font-size 24px
          color #464542
          background-color #8b8b89
          .icon-mode
            height 25px
            width 25px
        &.active
          border-color #e85a61
</style>