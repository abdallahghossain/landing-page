<template>
	<Header />
	<section id="cart_items">
		<div class="container">
			<div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li><a href="#">الرئيسية</a></li>
				  <li class="active">الملف الشخصي</li>
				</ol>
            </div>
            
            <h4 style="margin-bottom: 3rem;">طلبياتي</h4>

			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<thead>
						<tr class="cart_menu">
							<td class="image">#</td>
							<td class="description"></td>
							<td class="description">تاريخ الطلبية</td>
                            <td class="description">المبلغ الاجمالي للطلبية</td>
                            <td class="description">حالة الطلبية</td>
						</tr>
					</thead>
					<tbody>

						<tr>
							<td class="cart_product">1</td>
							<td class="cart_description">
								<p>طلبية 1</p>
							</td>
							<td class="cart_price">
								<p>25-12-2020 10:30 am</p>
							</td>
							<td class="cart_quantity">
                                <p>$159</p>
                            </td>
							<td class="cart_total">
								<p class="cart_total_price" style="font-size: 18px;">تم التسليم</p>
							</td>
						</tr>

						<tr>
							<td class="cart_product">2</td>
							<td class="cart_description">
								<p>طلبية 2</p>
							</td>
							<td class="cart_price">
								<p>25-12-2020 10:30 am</p>
							</td>
							<td class="cart_quantity">
                                <p>$159</p>
                            </td>
							<td class="cart_total">
								<p class="cart_total_price" style="font-size: 18px;">تم التسليم</p>
							</td>
                        </tr>
                        
                        <tr>
							<td class="cart_product">3</td>
							<td class="cart_description">
								<p>طلبية 3</p>
							</td>
							<td class="cart_price">
								<p>25-12-2020 10:30 am</p>
							</td>
							<td class="cart_quantity">
                                <p>$159</p>
                            </td>
							<td class="cart_total">
								<p class="cart_total_price" style="font-size: 18px;">تم التسليم</p>
							</td>
                        </tr>
                        
					</tbody>
				</table>
			</div>
		</div>
    </section> <!--/#cart_items-->
    

    <section id="cart_items">
		<div class="container">

            <div class="row">

                <div class="col-md-9">

                    <h4 style="margin-bottom: 3rem;">المحادثات مع المتجر</h4>

                    <div class="table-responsive cart_info">
                        <table class="table table-condensed">
                            <thead>
                                <tr class="cart_menu">
                                    <td class="image">#</td>
                                    <td class="price">عنوان الرسالة</td>
                                    <td class="total">نص الرسالة</td>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td class="cart_price">
                                        <h4>1</h4>
                                    </td>
                                    <td class="cart_price">
                                        <p>عنوان الرسالة</p>
                                    </td>
                                    <td class="cart_price">
                                        <p>نص الرسالة نص الرسالة  نص الرسالة نص الرسالة نص الرسالة </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="cart_price">
                                        <h4>2</h4>
                                    </td>
                                    <td class="cart_price">
                                        <p>عنوان الرسالة</p>
                                    </td>
                                    <td class="cart_price">
                                        <p>نص الرسالة نص الرسالة  نص الرسالة نص الرسالة نص الرسالة </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="cart_price">
                                        <h4>3</h4>
                                    </td>
                                    <td class="cart_price">
                                        <p>عنوان الرسالة</p>
                                    </td>
                                    <td class="cart_price">
                                        <p>نص الرسالة نص الرسالة  نص الرسالة نص الرسالة نص الرسالة </p>
                                    </td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                    </div>

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
	  name: 'HomeView',
	  components: {
		Header,
		Footer
	  }
	}
	</script>
