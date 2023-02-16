<template>
	<header id="header"><!--header-->

		<div class="header-middle"><!--header-middle-->
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<div class="logo pull-left">
							<router-link to="/"><img src="images/home/logo-2.png" alt="" /></router-link>
						</div>
					</div>
					<div class="col-sm-8">
						<div class="shop-menu pull-right">
							<ul class="nav navbar-nav">
								<li><router-link to="account" @click="factive(1)" :class="{'active':isActive==1?true:false}"><i class="fa fa-user"></i>الحساب</router-link></li>
								<li><router-link to="favorite" @click="factive(2)" :class="{'active':isActive==2?true:false}"><i class="fa fa-star"></i> المفضلة</router-link></li>
								<li><router-link to="checkout" @click="factive(3)" :class="{'active':isActive==3?true:false}"><i class="fa fa-crosshairs"></i> الدفع</router-link></li>
								<li><router-link to="cart" @click="factive(4)" :class="{'active':isActive==4?true:false}"><i class="fa fa-shopping-cart"></i> عربة التسوق</router-link>
								</li>
								<li><router-link to="login" @click="factive(5)" :class="{'active':isActive==5?true:false}"><i class="fa fa-lock"></i> تسجيل الدخول</router-link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div><!--/header-middle-->

		<div class="header-bottom"><!--header-bottom-->
			<div class="container">
				<div class="row">
					<div class="col-sm-9">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse"
								data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						<div class="mainmenu pull-left">
							<ul class="nav navbar-nav collapse navbar-collapse">
								<li><router-link to="/" :class="{'active':isActive==6?true:false}" @click="factive(6)" >الرئيسية</router-link></li>
								<li><router-link to="/shop" @click="factive(7)" :class="{'active':isActive==7?true:false}">المنتجات</router-link></li>
								<li><router-link to="/contactUs" @click="factive(8)" :class="{'active':isActive==8?true:false}">تواصل معنا</router-link></li>
								<li><router-link to="/controlPanel" @click="factive(9)" :class="{'active':isActive==9?true:false}">لوحة التحكم</router-link></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="search_box pull-right">
							<input type="text" v-model="this.$store.state.search" placeholder="بحث" />
						</div>
					</div>
				</div>
			</div>
		</div><!--/header-bottom-->
	</header><!--/header-->

</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			isActive: 1
		}
	},
	
	methods: {
		factive(val) {
			 this.isActive = val;
		},
	
	}

};
</script>
