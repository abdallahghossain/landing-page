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

        <div class="col-sm-9 padding-right">
          <div class="product-details">
            <!--product-details-->
            <div class="col-sm-5">
              <div class="view-product">
                <img src="images/products/8.jpeg" alt="" />
                <!--<h3>ZOOM</h3>-->
              </div>
              <div
                id="similar-product"
                class="carousel slide"
                data-ride="carousel"
              >
                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                  <div class="item active">
                    <a href=""
                      ><img src="images/product-details/similar1.jpg" alt=""
                    /></a>
                    <a href=""
                      ><img src="images/product-details/similar2.jpg" alt=""
                    /></a>
                    <a href=""
                      ><img src="images/product-details/similar3.jpg" alt=""
                    /></a>
                  </div>
                  <div class="item">
                    <a href=""
                      ><img src="images/product-details/similar1.jpg" alt=""
                    /></a>
                    <a href=""
                      ><img src="images/product-details/similar2.jpg" alt=""
                    /></a>
                    <a href=""
                      ><img src="images/product-details/similar3.jpg" alt=""
                    /></a>
                  </div>
                  <div class="item">
                    <a href=""
                      ><img src="images/product-details/similar1.jpg" alt=""
                    /></a>
                    <a href=""
                      ><img src="images/product-details/similar2.jpg" alt=""
                    /></a>
                    <a href=""
                      ><img src="images/product-details/similar3.jpg" alt=""
                    /></a>
                  </div>
                </div>

                <!-- Controls -->
                <a
                  class="left item-control"
                  href="#similar-product"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-right"></i>
                </a>
                <a
                  class="right item-control"
                  href="#similar-product"
                  data-slide="next"
                >
                  <i class="fa fa-angle-left"></i>
                </a>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="product-information" >
                <!--/product-information-->
                <img
                  :src="imgSrc"
                  class="newarrival"
                  alt=""
                />
                <h2>{{ this.$store.state.products[this.$store.state.detailItem].name }} </h2>
                <img src="images/product-details/rating.png" alt="" />
                <span>
                  <span> ${{this.$store.state.products[this.$store.state.detailItem].price}}</span>
                  <label>عدد القطع:</label>
                  <input type="text" value="3" />
                  <button type="button" class="btn btn-fefault cart">
                    <i class="fa fa-shopping-cart"></i>
                    أضف الى العربة
                  </button>
                </span>
                <p><b>التوفر:</b> في المتجر</p>
                <p><b>الماركة:</b> أديداس</p>
                <p><b>الصنف:</b> اكسسوريز</p>
              </div>
              <!--/product-information-->
            </div>
          </div>
          <!--/product-details-->

          <div class="category-tab shop-details-tab">
            <!--category-tab-->
            <div class="col-sm-12">
              <ul class="nav nav-tabs">
                <li><a data-toggle="tab">تفاصيل أخرى</a></li>
                <li class="active">
                  <a   data-toggle="tab">الآراء (5)</a>
                </li>
              </ul>
            </div>
            <div class="tab-content">
              <div class="tab-pane fade" id="details">
                <div class="col-sm-12">
                  <p style="margin-right: 25px">
                    وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف
                    المنتج وصف المنتج
                  </p>
                </div>
              </div>

              <div class="tab-pane fade active in" id="reviews">
                <div class="col-sm-12" >
                  <ul>
                    {{ this.$store.state.products[this.$store.state.detailItem].date }}
                  </ul>
                  <p><b>أكتب رأيك</b></p>

                  <form action="#">
                    <span>
                      <input type="text" placeholder="الاسم" />
                      <input
                        type="email"
                        placeholder="عنوان البريد الالكتروني"
                      />
                    </span>
                    <textarea name=""></textarea>
                    <b>التقييم: </b>
                    <img src="images/product-details/rating.png" alt="" />
                    <button type="button" class="btn btn-default pull-right">
                      ارسال
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!--/category-tab-->
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
  import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
  export default {
    methods: {
  
    },
    components: {
		Header,
		Footer
	  }
  };
</script>
