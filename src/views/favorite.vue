<template>

  <Header />
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="left-sidebar">
            <h2>الأقسام</h2>
            <div class="panel-group category-products" id="accordian">
              <!--category-productsr-->

              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="accessories.html">اكسسوريز</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="attention.html">عنايه</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="makeup.html">مكياج</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="bags.html">شنط</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="perfumes.html">عطور</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="devices.html">اجهزه</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a href="women.html">ملابس نساء</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="men.html">رجال</a></h4>
                </div>
              </div>
            </div>
            <!--/category-products-->
          </div>
        </div>
        <div class="col-sm-3">

        </div>
        <div class="col-sm-9 padding-right">
          <div class="features_items">
            <!--features_items-->
            <h2 class="title text-center">المنتجات المفضلة</h2>

            <div class="col-sm-4" v-for="(item, index) in filteredList()" :key="index">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img :src="item.imgSrc" alt="" />
                    <h2>{{ $filters.currencyUSD(item.price) }}</h2>
                    <p>{{ item.name }}</p>
                    <router-link @click="delItem(index)" to="#" class="btn btn-default add-to-cart"><i
                        class="fa fa-shopping-cart"></i>ازالة إلى
                      السلة</router-link>
                  </div>
                  <div class="product-overlay">
                    <div class="overlay-content">
                      <h2>{{ $filters.currencyUSD(item.price) }}</h2>
                      <p>اسم المنتج</p>
                      <router-link @click="delItem(index)" to="#" class="btn btn-default add-to-cart"><i
                          class="fa fa-shopping-cart"></i>ازالة إلى
                        السلة</router-link>
                    </div>
                  </div>
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <router @click="delItem(index)" to="#"><i class="fa fa-plus-square"></i>ازالة إلى
                        المفضلة</router>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!--features_items-->
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import router from "@/router";

export default {
  name: "HomeView",
  data() {
    return {
      
    };
  },
  methods: {
    delItem(index) {
      this.$store.state.products.splice(index, 1);
    },
    // filteredList() {
    //   return this.$store.state.products.filter((item) => {
    //     return item.name.toLowerCase(),item.price.includes(this.search.toLowerCase())!==-1;
    //   });
    // },
    filteredList() {
      var app=this;
      return this.$store.state.products.filter(function(item) {
        return item.name.toLowerCase().indexOf(app.$store.state.search.toLowerCase()) !== -1,
        item.price.toString().includes(app.$store.state.search)
      });
    },
  },


  components: {
    Header,
    Footer,
    router,
  },
};
</script>
