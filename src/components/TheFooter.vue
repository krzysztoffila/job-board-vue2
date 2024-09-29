<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="logo">Jobtopia</div>
      <div class="copyright">
        &copy; {{ currentYear }} by Krzysztof Fila. All rights reserved.
      </div>
    </div>
    <div class="footer-border"></div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: inherit;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: relative;
  width: 100%;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.copyright {
  font-size: 14px;
}

.footer-border {
  height: 4px;
  background-color: #00ccff;
  width: 100%;
  position: absolute;
  top: 0;
}
</style>
