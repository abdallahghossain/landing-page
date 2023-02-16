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
                    <a href="#" @click="change('اكسسوريز')">اكسسوريز</a>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" @click="change('عنايه')" >عنايه</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" @click="change('مكياج')" >مكياج</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" @click="change('شنط')">شنط</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" @click="change('عطور')" >عطور</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" @click="change('اجهزه')" >اجهزه</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a to=""  @click="change('ملابس نساء')" >ملابس نساء</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" @click="change('رجال')"  >رجال</router-link>
                  </h4>
                </div>
              </div>
            </div>
            <!--/category-products-->
          </div>
        </div>
        <div class="col-sm-3"></div>
        <div class="col-sm-9 padding-right">
          <div class="features_items">
            <!--features_items-->
            <h2 class="title text-center">{{prod}}</h2>
            <!-- <div
              class="col-sm-4"
              v-for="(item, index) in filteredList()"
              :key="item"
            > -->
            <div
              class="col-sm-4"
              v-for="item in filteredList()"
              :key="item"
            >
              <div class="product-image-wrapper" v-if="prod=='المنتجات'||prod===item.options">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img :src="item.imgSrc" alt="" />
                    <h2>{{ $filters.currencyUSD(item.price) }}</h2>
                    <p>{{ item.name }}</p>
                    <a href="#" class="btn btn-default add-to-cart"
                      ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                    >
                  </div>
                  <div class="product-overlay">
                    <div class="overlay-content">
                      <h2>{{$filters.currencyUSD(item.price)}}</h2>
                      <p> {{item.name}}</p>
                      <a href="#" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</a
                      >
                    </div>
                  </div>
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <!-- <router-link
                        @click="$filters.addTofavorite(index)"
                        to="/favorite"
                        ><i class="fa fa-plus-square"></i>أضف إلى
                        المفضلة</router-link
                      > -->
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

export default {
  name: "HomeView",
  data() {
    return {
      prod:"المنتجات",
    };
  },
  // created() {
  //   if (localStorage.products) {
  //   }
  // },

  methods: {
    change(val){
      this.prod=val;
    },
    filteredList() {
      var app=this;
      return this.$store.state.products.filter(function(item) {
        return (
          item.name.toLowerCase().indexOf(app.$store.state.search.toLowerCase()) !== -1||
          item.price.toString().includes(app.$store.state.search)

        );
      });
    },
  },

  components: {
    Header,
    Footer,
  },
};
</script>
