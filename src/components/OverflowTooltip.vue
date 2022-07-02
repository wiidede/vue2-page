<template>
  <el-tooltip
    ref="tooltip"
    :disabled="disabled"
    effect="dark"
    :content="tooltipContent || content"
    :placement="placement"
    :enterable="autoEnter === null ? enterable : autoEnter"
    :popper-class="popperClass"
    :visible-arrow="false"
  >
    <span ref="overflowTooltipContent"
         :class="className" class="overflow-content" @mouseover="isOverflow">
      {{ content }}
    </span>
  </el-tooltip>
</template>

<script>
export default {
  name: 'OverflowTooltip',
  props: {
    className: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    tooltipContent: {
      type: String,
      default: ''
    },
    enterable: {
      type: Boolean,
      default: false
    },
    autoEnterable: {
      type: Boolean,
      default: false
    },
    popperClass: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'top'
    }
  },
  data() {
    return {
      disabled: true,
      autoEnter: null
    };
  },
  methods: {
    isOverflow() {
      const el = this.$refs.overflowTooltipContent;
      if (el) {
        const parent = el.parentNode;
        this.disabled = parent.offsetWidth >= el.offsetWidth;
      }
      if (this.autoEnterable) {
        setTimeout(() => {
          const popper = this.$refs.tooltip.$refs.popper;
          if (popper) {
            this.autoEnter = popper.offsetHeight < popper.scrollHeight;
          }
        }, 100);
      }
    }
  }
};
</script>

<style scoped>
.overflow-content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
