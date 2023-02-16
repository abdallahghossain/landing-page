<template>
  <Header />
  <section id="cart_items">
    <div class="container">
      <div class="breadcrumbs">
        <ol class="breadcrumb">
          <li><a href="#">الرئيسية</a></li>
          <li class="active">الدفع</li>
        </ol>
      </div>
      <!--/breadcrums-->

      <div class="shopper-informations">
        <div class="row">
          <div class="col-sm-4">
            <div class="shopper-info">
              <p>معلومات المتسوق</p>
              <form>
                <!--<input type="text" placeholder="اس">-->
                <input type="text" placeholder="اسم المستخدم" />
                <input type="password" placeholder="كلمة المرور" />
                <input type="password" placeholder="تأكيد كلمة المرور" />
              </form>
              <!--a class="btn btn-primary" href="">Get Quotes</a>-->
              <a class="btn btn-primary" href="">تأكيد</a>
            </div>
          </div>
          <div class="col-sm-8 clearfix">
            <div class="bill-to">
              <p>فاتورة الى</p>
              <div class="form-one">
                <form>
                  <input type="text" placeholder="اسم الشركة" />
                  <input type="text" placeholder="الايميل*" />
                  <input type="text" placeholder="اللقب" />
                  <input type="text" placeholder="الاسم الأول *" />
                  <input type="text" placeholder="الاسم الوسط" />
                  <input type="text" placeholder="الاسم الاخير *" />
                  <input type="text" placeholder="العنوان 1 *" />
                  <input type="text" placeholder="العنوان 2" />
                </form>
              </div>
              <div class="form-two">
                <form>
                  <input type="text" placeholder="الرمز البريدي *" />
                  <select>
                    <option>-- الدولة --</option>
                    <option>الولايات المتجدة</option>
                    <option>بريطانيا</option>
                    <option>الهند</option>
                    <option>باكستان</option>
                    <option>أوكرانيا</option>
                    <option>كندا</option>
                    <option>دبي</option>
                  </select>
                  <select>
                    <option>-- الدولة / المقاطعة / المنطقة --</option>
                    <option>الولايات المتجدة</option>
                    <option>بريطانيا</option>
                    <option>الهند</option>
                    <option>باكستان</option>
                    <option>أوكرانيا</option>
                    <option>كندا</option>
                    <option>دبي</option>
                  </select>
                  <input type="password" placeholder="تأكيد كلمة المرور" />
                  <input type="text" placeholder="الهاتف *" />
                  <input type="text" placeholder="فاكس" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="review-payment">
        <h2>المراجعة والدفع</h2>
      </div>

      <div class="table-responsive cart_info">
        <table class="table table-condensed">
          <thead>
            <tr class="cart_menu">
              <td class="image">المنتج</td>
              <td class="description"></td>
              <td class="price">السعر</td>
              <td class="quantity">الكمية</td>
              <td class="total">المجموع</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="cart_product">
                <a href=""><img src="images/cart/one.png" alt="" /></a>
              </td>
              <td class="cart_description">
                <h4><a href="">منتج 1</a></h4>
              </td>
              <td class="cart_price">
                <p>$59</p>
              </td>
              <td class="cart_quantity">
                <div class="cart_quantity_button">
                  <input
                    class="cart_quantity_input"
                    type="text"
                    name="quantity"
                    value="1"
                    autocomplete="off"
                    size="2"
                  />
                </div>
              </td>
              <td class="cart_total">
                <p class="cart_total_price">$59</p>
              </td>
              <td class="cart_delete">
                <a class="cart_quantity_delete" href=""
                  ><i class="fa fa-times"></i
                ></a>
              </td>
            </tr>

            <tr>
              <td class="cart_product">
                <a href=""><img src="images/cart/two.png" alt="" /></a>
              </td>
              <td class="cart_description">
                <h4><a href="">منتج 2</a></h4>
              </td>
              <td class="cart_price">
                <p>$59</p>
              </td>
              <td class="cart_quantity">
                <div class="cart_quantity_button">
                  <input
                    class="cart_quantity_input"
                    type="text"
                    name="quantity"
                    value="1"
                    autocomplete="off"
                    size="2"
                  />
                </div>
              </td>
              <td class="cart_total">
                <p class="cart_total_price">$59</p>
              </td>
              <td class="cart_delete">
                <a class="cart_quantity_delete" href=""
                  ><i class="fa fa-times"></i
                ></a>
              </td>
            </tr>
            <tr>
              <td class="cart_product">
                <a href=""><img src="images/cart/three.png" alt="" /></a>
              </td>
              <td class="cart_description">
                <h4><a href="">منتج 3</a></h4>
              </td>
              <td class="cart_price">
                <p>$59</p>
              </td>
              <td class="cart_quantity">
                <div class="cart_quantity_button">
                  <input
                    class="cart_quantity_input"
                    type="text"
                    name="quantity"
                    value="1"
                    autocomplete="off"
                    size="2"
                  />
                </div>
              </td>
              <td class="cart_total">
                <p class="cart_total_price">$59</p>
              </td>
              <td class="cart_delete">
                <a class="cart_quantity_delete" href=""
                  ><i class="fa fa-times"></i
                ></a>
              </td>
            </tr>
            <tr>
              <td colspan="4">&nbsp;</td>
              <td colspan="2">
                <table class="table table-condensed total-result">
                  <tr>
                    <td>مجموع عربة التسوق</td>
                    <td>$59</td>
                  </tr>
                  <tr>
                    <td>الضريبة</td>
                    <td>$2</td>
                  </tr>
                  <tr class="shipping-cost">
                    <td>تكاليف الشحن</td>
                    <td>مجانا</td>
                  </tr>
                  <tr>
                    <td>الاجمالي</td>
                    <td><span>$61</span></td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="payment-options">
        <span>
          <label><input type="checkbox" /> تحويل مصرفي مباشر</label>
        </span>
        <span>
          <label><input type="checkbox" /> باي بال</label>
        </span>
      </div>
    </div>
  </section>
  <!--/#cart_items-->
  <Footer />
</template>

<script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "HomeView",
    components: {
      Header,
      Footer,
    },
  };
</script>
