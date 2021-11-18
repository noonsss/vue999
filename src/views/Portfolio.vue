<template>
  <div class="light">
    <Header />
    <section id="portCont">
      <div class="container">
        <div class="wrap__title">
          <h2><strong>portfolio</strong><em>Site</em></h2>
        </div>
        <div class="port__cont">
          <div class="port">
            <a href="#">
              <div class="pImg">
                <img src="../assets/img/port01.jpg" alt="포트폴리오1" />
              </div>
              <div class="pText">
                <h3>PORTFOLIO HWANG</h3>
                <p>PORTFOLIO</p>
              </div>
            </a>
          </div>
          <div class="port">
            <a href="#">
              <div class="pImg">
                <img src="../assets/img/port01.jpg" alt="포트폴리오1" />
              </div>
              <div class="pText">
                <h3>PORTFOLIO HWANG</h3>
                <p>PORTFOLIO</p>
              </div>
            </a>
          </div>
          <div class="port">
            <a href="#">
              <div class="pImg">
                <img src="../assets/img/port01.jpg" alt="포트폴리오1" />
              </div>
              <div class="pText">
                <h3>PORTFOLIO HWANG</h3>
                <p>PORTFOLIO</p>
              </div>
            </a>
          </div>
          <div class="port">
            <a href="#">
              <div class="pImg">
                <img src="../assets/img/port01.jpg" alt="포트폴리오1" />
              </div>
              <div class="pText">
                <h3>PORTFOLIO HWANG</h3>
                <p>PORTFOLIO</p>
              </div>
            </a>
          </div>
          <div class="port">
            <a href="#">
              <div class="pImg">
                <img src="../assets/img/port01.jpg" alt="포트폴리오1" />
              </div>
              <div class="pText">
                <h3>PORTFOLIO HWANG</h3>
                <p>PORTFOLIO</p>
              </div>
            </a>
          </div>
          <div class="port">
            <a href="#">
              <div class="pImg">
                <img src="../assets/img/port01.jpg" alt="포트폴리오1" />
              </div>
              <div class="pText">
                <h3>PORTFOLIO HWANG</h3>
                <p>PORTFOLIO</p>
              </div>
            </a>
          </div>
          <div class="port">
            <a href="#">
              <div class="pImg">
                <img src="../assets/img/port01.jpg" alt="포트폴리오1" />
              </div>
              <div class="pText">
                <h3>PORTFOLIO HWANG</h3>
                <p>PORTFOLIO</p>
              </div>
            </a>
          </div>
          <div class="port">
            <a href="#">
              <div class="pImg">
                <img src="../assets/img/port01.jpg" alt="포트폴리오1" />
              </div>
              <div class="pText">
                <h3>PORTFOLIO HWANG</h3>
                <p>PORTFOLIO</p>
              </div>
            </a>
          </div>
          <div class="port">
            <a href="#">
              <div class="pImg">
                <img src="../assets/img/port01.jpg" alt="포트폴리오1" />
              </div>
              <div class="pText">
                <h3>PORTFOLIO HWANG</h3>
                <p>PORTFOLIO</p>
              </div>
            </a>
          </div>
          <div class="port">
            <a href="#">
              <div class="pImg">
                <img src="../assets/img/port01.jpg" alt="포트폴리오1" />
              </div>
              <div class="pText">
                <h3>PORTFOLIO HWANG</h3>
                <p>PORTFOLIO</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    <ContInfo />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ContInfo from "@/components/ContInfo.vue";

export default {
  components: {
    Header,
    Footer,
    ContInfo,
  },
};
</script>

<style lang="scss">
#portCont {
  background-color: #000;
  color: #fff;
}
.port__cont {
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 300px;

  .port {
    width: 32%;
    margin-bottom: 2%;

    .pImg {
    }
    .pText {
      padding: 35px;
      background: #151517;

      h3 {
        font-family: "saol";
        font-size: 50px;
        line-height: 47px;
      }
      p {
        font-size: 12px;
        color: #b0aead;
      }
    }
  }
}
.light #portCont {
  background-color: #f0eeeb;
  color: #000;
}
</style>
